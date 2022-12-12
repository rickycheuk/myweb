import "../styles/globals.css";
import Header from "./Header";
import { AnalyticsWrapper } from './analytics';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <Header />
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
