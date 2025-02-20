export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Functions in TypeScript</h1>

      <div className="prose dark:prose-invert">
        <p className="text-lg mb-4">
          Functions in TypeScript allow you to define reusable blocks of code
          with strong typing. You can specify parameter types, return types, and
          use features like optional parameters, default parameters, and
          function overloading.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Defining Functions</h2>
        <ul className="space-y-2 list-disc pl-6">
          <li>
            Functions can be defined with explicit types for parameters and
            return values:
            <code className="block bg-background p-3 rounded">
              function add(a: number, b: number): number &#123; <br />
              &nbsp;&nbsp;return a + b; <br />
              &#125;
            </code>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Optional and Default Parameters
        </h2>
        <ul className="space-y-2 list-disc pl-6">
          <li>
            Parameters can be optional or have default values:
            <code className="block bg-background p-3 rounded">
              function greet(name: string, greeting: string = "Hello"): string
              &#123; <br />
              &nbsp;&nbsp;return `&#36;&#123;greeting&#125;,
              &#36;&#123;name&#125;!`; <br />
              &#125;
            </code>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Function Overloading
        </h2>
        <ul className="space-y-2 list-disc pl-6">
          <li>
            TypeScript allows function overloading to define multiple call
            signatures:
            <code className="block bg-background p-3 rounded">
              function display(value: string): void; <br />
              function display(value: number): void; <br />
              function display(value: string | number) &#123; <br />
              &nbsp;&nbsp;console.log(value); <br />
              &#125;
            </code>
          </li>
        </ul>
      </div>
    </div>
  );
}
