export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Welcome to TypeScript Documentation
      </h1>

      <div className="prose dark:prose-invert">
        <p className="text-lg mb-4">
          TypeScript is a strongly typed programming language that builds on
          JavaScript, giving you better tooling at any scale.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why TypeScript?</h2>
        <ul className="space-y-2 list-disc pl-6">
          <li>
            JavaScript and More - TypeScript adds additional syntax to
            JavaScript to support a tighter integration with your editor.
          </li>
          <li>
            A Result You Can Trust - TypeScript code converts to JavaScript,
            which runs anywhere JavaScript runs.
          </li>
          <li>
            Safety at Scale - TypeScript understands JavaScript and uses type
            inference to give you great tooling.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started</h2>
        <p className="mb-4">
          Select a topic from the sidebar to begin learning TypeScript. We
          recommend starting with the Introduction if you're new to TypeScript.
        </p>

        <div className="bg-muted p-4 rounded-lg mt-6">
          <h3 className="text-xl font-semibold mb-2">Quick Start</h3>
          <code className="block bg-background p-3 rounded">
            npm install -g typescript
            <br />
            tsc --init
          </code>
        </div>
      </div>
    </div>
  );
}
