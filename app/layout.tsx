// app/layout.ts
import '@/app/ui/global.css'; // Global CSS dosyasını içe aktarma

// app/ui/fonts dosyasından lusitana fontunu içe aktarma
import { lusitana } from '@/app/ui/fonts';

// Next.js'in beklediği tek dışa aktarma (export default) budur.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Lusitana fontunu `className` olarak `body` etiketine uyguluyoruz.
        'antialiased' sınıfı, fontların daha pürüzsüz görünmesini sağlar.
      */}
      <body className={`${lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}