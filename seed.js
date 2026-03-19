const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const mockPosts = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800&auto=format&fit=crop',
      author: 'Chen L.',
      message: '色彩的碰撞，如同宇宙星云的诞生。',
      likes: 124
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop',
      author: 'ArtStudio',
      message: '新购入的龟彩调色机，精度令人惊叹，完美的还原了这抹克莱因蓝。',
      likes: 89
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
      author: 'W. Designer',
      message: '流动的盛宴。',
      likes: 256
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=800&auto=format&fit=crop',
      author: 'Studio M',
      message: '丙烯肌理实验，每一条纹路都在诉说故事。',
      likes: 42
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=800&auto=format&fit=crop',
      author: 'Z.Q.',
      message: '几何与色彩。',
      likes: 18
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=800&auto=format&fit=crop',
      author: 'Colorist_Wang',
      message: '极简的黑白灰，才是永恒的经典。',
      likes: 315
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?q=80&w=800&auto=format&fit=crop',
      author: 'Neo Art',
      message: '尝试了新的高分子颜料配方，光泽度拉满！',
      likes: 77
    }
  ];

  for (const post of mockPosts) {
    await prisma.post.create({ data: post });
  }
  console.log('Mock data inserted successfully!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());