export default function Configuration() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">TypeScript Configuration</h1>

      <div className="prose dark:prose-invert">
        <p className="text-lg mb-4">
          Configure TypeScript for your project using tsconfig.json
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Basic Configuration
        </h2>
        <div className="bg-muted p-4 rounded-lg">
          <pre className="bg-background p-3 rounded overflow-x-auto">
            {`{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}`}
          </pre>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Common Options</h2>
        <ul className="space-y-2">
          <li>
            <code>target</code> - ECMAScript target version
          </li>
          <li>
            <code>module</code> - Module system
          </li>
          <li>
            <code>strict</code> - Enable all strict type checking options
          </li>
          <li>
            <code>outDir</code> - Output directory for compiled files
          </li>
        </ul>
      </div>
    </div>
  );
}
