import React from "react"
import Head from "./head"
import './globals.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head />
      <body>{children}</body>
    </html>
  );
}