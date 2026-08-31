import "./globals.css";

export const metadata = {
  title: "AUTONEX // ZERO TO CIRCUIT — Robotics & Autonomous Systems Guild",
  description: "Experience the scrollytelling journey of AUTONEX — SIET Panchkula's 1st Ever Robotics & Automation Guild.",
  keywords: ["AUTONEX", "SIET Panchkula", "Robotics Club", "Autonomous Systems", "Industrial Automation", "Embedded Systems"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#09021A] text-slate-100 selection:bg-[#FF5A1F] selection:text-white">
        {children}
      </body>
    </html>
  );
}
