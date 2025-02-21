import { SidebarProvider } from "@/components/ui/sidebar";
import TypeScriptDocs from "./page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <TypeScriptDocs>{children}</TypeScriptDocs>
        </SidebarProvider>
      </body>
    </html>
  );
}
