'use server';

export async function submitContactForm(prevState: any, formData: FormData) {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Simple validation
  if (!name || !email || !message) {
    return {
      success: false,
      message: '请填写所有必填项',
    };
  }

  // TODO: Integrate with an email service like Resend, SendGrid, or Nodemailer
  // Example:
  // await resend.emails.send({
  //   from: 'onboarding@resend.dev',
  //   to: 'contact@guicai.com',
  //   subject: `New Contact Form Submission from ${name}`,
  //   html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
  // });

  console.log('Form submitted:', { name, email, message });

  return {
    success: true,
    message: '留言发送成功！我们会尽快联系您。',
  };
}
