'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef } from 'react';
import { Heart, Plus, X, Upload, Image as ImageIcon, Loader2 } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

interface Post {
  id: string;
  imageUrl: string;
  author: string;
  message: string;
  likes: number;
}

export default function GalleryPage() {
  const t = useTranslations();
  
  // State initialization
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [newImageFile, setNewImageFile] = useState<File | null>(null);
  const [newImagePreview, setNewImagePreview] = useState<string>('');
  const [newMessage, setNewMessage] = useState('');
  const [newName, setNewName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fetch posts from database on mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/posts?t=${new Date().getTime()}`, { 
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        });
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        }
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPosts();
  }, []);

  const handleLike = async (id: string) => {
    // Optimistic UI update
    setPosts(prevPosts => 
      prevPosts.map(p => {
        if (p.id === id) {
          return { ...p, likes: p.likes + 1 };
        }
        return p;
      })
    );

    // Update database
    try {
      await fetch(`/api/posts/${id}/like`, {
        method: 'POST',
      });
    } catch (error) {
      console.error('Failed to update like in DB:', error);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewImageFile(file);
      // Create a local object URL for the preview
      const imageUrl = URL.createObjectURL(file);
      setNewImagePreview(imageUrl);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImageFile || !newMessage || !newName) return;

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('image', newImageFile);
      formData.append('author', newName);
      formData.append('message', newMessage);

      const response = await fetch('/api/posts', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const newPost = await response.json();
        setPosts([newPost, ...posts]);
        
        // Reset form
        setIsModalOpen(false);
        setNewImageFile(null);
        setNewImagePreview('');
        setNewMessage('');
        setNewName('');
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        alert('发布失败，请重试');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('发布失败，请检查网络');
    } finally {
      setIsSubmitting(false);
    }
  };

  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const pageReveal: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.12 }
    }
  };

  const itemReveal: Variants = {
    hidden: { opacity: 0, y: 26, scale: 0.985, filter: 'blur(8px)' },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease }
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 font-sans pt-32 pb-20">
      {/* Header */}
      <div className="w-full px-6 lg:px-12 mb-20 text-center">
        <motion.div
          variants={pageReveal}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={itemReveal}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500"
          >
            {t('gallery.title')}
          </motion.h1>
          <motion.p
            variants={itemReveal}
            className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            {t('gallery.subtitle')}
          </motion.p>
          <motion.div variants={itemReveal}>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="mt-10 inline-flex items-center gap-2 px-10 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]"
            >
              <Plus className="w-5 h-5" />
              {t('gallery.post_btn')}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Masonry Grid */}
      <div className="w-full px-6 lg:px-12 max-w-[1920px] mx-auto min-h-[400px]">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-64 space-y-4 text-gray-400">
            <Loader2 className="w-10 h-10 animate-spin" />
            <p>加载灵感中...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 space-y-4 text-gray-400">
            <ImageIcon className="w-16 h-16 opacity-20" />
            <p>还没有人发布灵感，快来抢沙发吧！</p>
          </div>
        ) : (
          <motion.div
            variants={pageReveal}
            initial="hidden"
            animate="show"
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8"
          >
            {posts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemReveal}
                className="break-inside-avoid relative group rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-700 border border-gray-100 mb-8 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={post.imageUrl} 
                    alt={post.message} 
                    className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <p className="text-white text-xl font-medium leading-relaxed mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 line-clamp-4">
                      "{post.message}"
                    </p>
                    <div className="flex justify-between items-center text-white/90 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      <span className="font-bold tracking-wide">— {post.author}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="px-8 py-5 flex justify-between items-center bg-white border-t border-gray-50 relative z-10 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-xs font-bold text-gray-600 shadow-inner">
                      {post.author.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-bold text-gray-900 truncate max-w-[120px]">{post.author}</span>
                  </div>
                  <button 
                    onClick={() => handleLike(post.id)}
                    className="flex items-center gap-2 group/btn hover:bg-gray-50 px-3 py-1.5 rounded-full transition-colors"
                  >
                    <Heart className="w-5 h-5 text-gray-400 group-hover/btn:text-red-500 group-hover/btn:scale-110 transition-all duration-300" />
                    <span className="text-sm font-bold text-gray-500">
                      {post.likes}
                    </span>
                  </button>
               </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Upload Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white rounded-[2rem] w-full max-w-xl p-10 shadow-2xl animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-8 right-8 text-gray-400 hover:text-black transition-colors bg-gray-50 hover:bg-gray-100 p-2 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h2 className="text-3xl font-black mb-8 text-gray-900">{t('gallery.modal.title')}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-700 ml-1">上传图片</label>
                
                {/* Hidden File Input */}
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleImageUpload}
                  ref={fileInputRef}
                  className="hidden" 
                />

                {!newImagePreview ? (
                  <div 
                    onClick={triggerFileInput}
                    className="w-full h-48 bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 hover:border-gray-300 transition-all group"
                  >
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                      <ImageIcon className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" />
                    </div>
                    <p className="text-sm font-bold text-gray-600">点击选择本地图片</p>
                    <p className="text-xs text-gray-400 mt-1">支持 JPG, PNG, WEBP</p>
                  </div>
                ) : (
                  <div className="mt-4 rounded-2xl overflow-hidden h-48 bg-gray-100 relative shadow-inner group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={newImagePreview} alt="Preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button 
                        type="button"
                        onClick={() => {
                          setNewImagePreview('');
                          setNewImageFile(null);
                          if (fileInputRef.current) fileInputRef.current.value = '';
                        }}
                        className="px-4 py-2 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-transform"
                      >
                        重新选择
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-700 ml-1">{t('gallery.modal.message')}</label>
                <textarea 
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  rows={4} 
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-black transition-all outline-none resize-none font-medium leading-relaxed" 
                  placeholder="..." 
                  required
                ></textarea>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-700 ml-1">{t('gallery.modal.name')}</label>
                <input 
                  type="text" 
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-black transition-all outline-none font-medium" 
                  placeholder="..." 
                  required 
                />
              </div>

              <div className="pt-6 flex gap-4">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  disabled={isSubmitting}
                  className="flex-1 py-4 bg-gray-50 text-gray-600 rounded-2xl font-bold hover:bg-gray-100 hover:text-gray-900 transition-colors disabled:opacity-50"
                >
                  {t('gallery.modal.cancel')}
                </button>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-[2] py-4 bg-black text-white rounded-2xl font-bold hover:bg-gray-800 transition-all hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" />}
                  {isSubmitting ? '发布中...' : t('gallery.modal.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
