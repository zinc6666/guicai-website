'use server';

import nodemailer from 'nodemailer';

export async function submitContactForm(prevState: any, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // Simple validation
  if (!name || !email || !message) {
    return {
      success: false,
      message: '请填写所有必填项',
    };
  }

  // Check if SMTP environment variables are set
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('SMTP configuration missing. Email not sent.');
    console.log('Form Data (Simulation):', { name, email, message });
    return {
      success: true,
      message: '留言已提交（演示模式：请配置 SMTP 服务以发送真实邮件）',
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name} (官网留言)" <${process.env.SMTP_USER}>`, // Sender address (must be authenticated user)
      to: process.env.SMTP_TO || process.env.SMTP_USER, // List of receivers (Company Email)
      replyTo: email, // User's email for reply
      subject: `【官网留言】来自 ${name} 的咨询`, // Subject line
      text: `姓名: ${name}\n邮箱: ${email}\n\n留言内容:\n${message}`, // plain text body
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #333;">收到新的官网留言</h2>
          <p><strong>姓名:</strong> ${name}</p>
          <p><strong>邮箱:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 0; color: #555;"><strong>留言内容:</strong></p>
            <p style="white-space: pre-wrap; margin-top: 10px; color: #333;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #999; margin-top: 30px;">此邮件由 Guicai 官网自动发送</p>
        </div>
      `, // html body
    });

    return {
      success: true,
      message: '留言发送成功！我们会尽快联系您。',
    };
  } catch (error) {
    console.error('Email send error:', error);
    return {
      success: false,
      message: '发送失败，请稍后重试或直接通过电话联系我们。',
    };
  }
}
