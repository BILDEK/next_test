// app/layout.tsx
import '@/app/ui/global.css';
import {  Lusitana } from 'next/font/google';
 
//export const inter = Inter({ subsets: ['latin'] });
 
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lusitana.className}>
      <body>{children}</body>
    </html>
  )
} 