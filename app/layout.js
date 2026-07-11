import { display, heading, body } from "./fonts";
import Header from "@/components/Header";
import GrainOverlay from "@/components/GrainOverlay";
import "./globals.css";

export const metadata = {
  title: "El Hormiguero",
  description:
    "El Hormiguero — cultivo de cannabis medicinal en Argentina, exclusivo para pacientes REPROCANN.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${heading.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GrainOverlay />
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
}
