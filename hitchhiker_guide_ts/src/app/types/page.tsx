export default function BasicTypes() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Types In TypeScript</h1>

      <div className="prose dark:prose-invert">
        <p className="text-lg mb-4">
          TypeScript provides static typing to JavaScript, allowing developers
          to specify the types of variables, function parameters, and return
          values. This helps catch errors early in the development process and
          improves code quality.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Basic Types</h2>
        <ul className="space-y-2 list-disc pl-6">
          <li>
            <strong>number</strong> - Represents numerical values. Examples:{" "}
            <code>let age: number = 30;</code>
          </li>
          <li>
            <strong>string</strong> - Represents text. Examples:{" "}
            <code>let name: string = "John";</code>
          </li>
          <li>
            <strong>boolean</strong> - Represents true/false values. Examples:{" "}
            <code>let isActive: boolean = true;</code>
          </li>
          <li>
            <strong>array</strong> - Represents a collection of values.
            Examples: <code>let scores: number[] = [90, 85, 80];</code>
          </li>
          <li>
            <strong>tuple</strong> - Represents an array with fixed number and
            types of elements. Examples:{" "}
            <code>let user: [string, number] = ["John", 25];</code>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Advanced Types</h2>
        <ul className="space-y-2 list-disc pl-6">
          <li>
            <strong>enum</strong> - Defines a set of named constants. Examples:{" "}
            <code>enum Color </code>
          </li>
          <li>
            <strong>any</strong> - Represents any type, allowing for dynamic
            values. Examples: <code>let randomValue: any = 10;</code>
          </li>
          <li>
            <strong>void</strong> - Represents the absence of a type, usually
            used for function return types.
          </li>
          <li>
            <strong>unknown</strong> - Represents an unknown value, type-safe
            counterpart of <code>any</code>. Examples:{" "}
            <code>let randomValue: unknown = 10;</code>
          </li>
          <li>
            <strong>never</strong> - Represents the type of values that never
            occur.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
        <p className="mb-4">
          Types in TypeScript help catch errors early, improve code readability,
          and enable powerful tooling. Start exploring the various types to take
          full advantage of TypeScript's capabilities.
        </p>
      </div>
    </div>
  );
}
