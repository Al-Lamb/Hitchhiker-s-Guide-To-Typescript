export default function Installation() {
  return (
    <div id="install" className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Installing TypeScript</h1>

      <div className="prose dark:prose-invert">
        <p className="text-lg mb-4">
          There are multiple ways to add TypeScript to your project. Here are
          the most common approaches:
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Global Installation
        </h2>
        <pre className="bg-muted p-4 rounded-lg">npm install -g typescript</pre>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Project Installation
        </h2>
        <pre className="bg-muted p-4 rounded-lg">
          npm install --save-dev typescript
        </pre>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Create a TypeScript Project
        </h2>
        <div className="bg-muted p-4 rounded-lg space-y-2">
          <p>Initialize a new TypeScript project:</p>
          <pre className="bg-background p-3 rounded">tsc --init</pre>
        </div>
      </div>
    </div>
  );
}
