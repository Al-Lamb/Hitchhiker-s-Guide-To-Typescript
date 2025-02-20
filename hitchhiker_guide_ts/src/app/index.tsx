// pages/index.tsx
import { DocsLayout } from "@/components/TypeScripDocs"; // Adjust path if needed

export default function HomePage() {
  // This is the default export (a page component)
  return (
    <DocsLayout>
      {/* Content for your home page */}
      <h1>Welcome to the TypeScript Documentation</h1>
      <p>This is the main page.</p>

      {/* You can add any other React elements here */}
    </DocsLayout>
  );
}
