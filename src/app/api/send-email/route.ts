
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactFormEmail from '@/emails/contact-form-email';

const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail = process.env.RESEND_FROM_EMAIL;
const resendToEmail = process.env.RESEND_TO_EMAIL;

if (!resendApiKey) {
  console.warn("RESEND_API_KEY is not set. Email sending will not work.");
}
if (!resendFromEmail) {
  console.warn("RESEND_FROM_EMAIL is not set. Email sending will not work.");
}
if (!resendToEmail) {
  console.warn("RESEND_TO_EMAIL is not set. Contact form submissions will not be delivered.");
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
  if (!resend || !resendFromEmail || !resendToEmail) {
    return NextResponse.json(
      { error: 'Email service is not configured correctly on the server.' },
      { status: 500 }
    );
  }

  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields: name, email, or message.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: resendFromEmail, // e.g., 'Kailas Portfolio <onboarding@resend.dev>' or 'Your Name <noreply@yourdomain.com>'
      to: [resendToEmail], // Your email address
      subject: `New Contact Form Message from ${name}`,
      reply_to: email,
      react: ContactFormEmail({ name, email, message }),
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: 'Failed to send message.', details: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully!', data });
  } catch (error) {
    console.error('Error processing request:', error);
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
