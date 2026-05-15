// src/app/layout.js
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
