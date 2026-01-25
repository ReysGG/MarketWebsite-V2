import { Providers } from "@/components/SessionProvider";
import { SidebarProvider } from "@/components/admin/context/SidebarContext";
import { ThemeProvider } from "@/components/admin/context/ThemeContext";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeProvider>
            <SidebarProvider>
              {children} {/* Ini akan diisi layout child */}
            </SidebarProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
