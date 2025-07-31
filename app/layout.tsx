// app/layout.ts (Doğru kod)

// 1. Fontu fonts.ts dosyasından içe aktarın
import { lusitana } from '@/app/ui/fonts'; // <-- Bu satır gerekli

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 2. `<body>` etiketine className olarak fontu ekleyin */}
      <body className={`${lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}