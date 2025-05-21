
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <Html>
    <Head />
    <Preview>New message from your portfolio contact form</Preview>
    <Tailwind>
      <Body className="bg-gray-100 text-black">
        <Container className="border border-solid border-gray-300 rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
          <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
            New Contact Form Submission
          </Heading>
          <Section>
            <Text className="text-black text-[14px] leading-[24px]">
              You received a new message from your portfolio website:
            </Text>
            <Hr className="border border-solid border-gray-300 my-[26px] mx-0 w-full" />
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>From:</strong> {name}
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>Email:</strong> <a href={`mailto:${email}`} className="text-blue-600 no-underline">{email}</a>
            </Text>
            <Hr className="border border-solid border-gray-300 my-[26px] mx-0 w-full" />
            <Text className="text-black text-[14px] leading-[24px] mb-2">
              <strong>Message:</strong>
            </Text>
            <Text className="text-black text-[14px] leading-[24px] whitespace-pre-wrap">
              {message}
            </Text>
          </Section>
          <Hr className="border border-solid border-gray-300 my-[26px] mx-0 w-full" />
          <Text className="text-gray-500 text-[12px] leading-[24px]">
            This email was sent from your portfolio contact form.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ContactFormEmail;
