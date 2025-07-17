export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="ja">
      <body>
        <div className="bg-gray-100 h-screen">
          {children}
        </div>
      </body>
    // </html>
  );
}
