import "./globals.css";

export const metadata = {
  title: "Backend Blueprint",
  description: "Building Backend Excellence, Step-by-Step.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
