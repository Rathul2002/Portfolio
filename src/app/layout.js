import './globals.css';

export const metadata = {
  title: 'Rathul Chowdhury — Software Developer',
  description: 'Full-Stack Software Developer with expertise in Java, Spring Boot, React, Next.js, and cloud technologies. Building scalable, production-grade applications.',
  keywords: 'Software Developer, Full Stack, Java, Spring Boot, React, Next.js, Portfolio',
  openGraph: {
    title: 'Rathul Chowdhury — Software Developer',
    description: 'Full-Stack Software Developer Portfolio',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
