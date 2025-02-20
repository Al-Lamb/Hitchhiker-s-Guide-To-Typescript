export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Interfaces In Typescript</h1>

      <div className="prose dark:prose-invert">
        <p className="text-lg mb-4">
          Interfaces in TypeScript provide a way to define the structure of an
          object. They allow for strong typing by specifying the properties and
          their types that an object must have. Interfaces are a powerful tool
          for defining contracts within your codebase.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Defining Interfaces
        </h2>
        <ul className="space-y-2 list-disc pl-6">
          <li>
            Interfaces are defined using the <code>interface</code> keyword.
            Examples:
            <code className="block bg-background p-3 rounded">
              interface User &#123; <br />
              &nbsp;&nbsp;name: string; <br />
              &nbsp;&nbsp;age: number; <br />
              &nbsp;&nbsp;isAdmin: boolean; <br />
              &#125;
            </code>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Using Interfaces</h2>
        <ul className="space-y-2 list-disc pl-6">
          <li>
            Interfaces can be implemented by classes or used to type-check
            objects. Examples:
            <code className="block bg-background p-3 rounded">
              class Admin implements User &#123; <br />
              &nbsp;&nbsp;name: string; <br />
              &nbsp;&nbsp;age: number; <br />
              &nbsp;&nbsp;isAdmin: boolean; <br />
              <br />
              &nbsp;&nbsp;constructor(name: string, age: number, isAdmin:
              boolean) &#123; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.name = name; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.age = age; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.isAdmin = isAdmin; <br />
              &nbsp;&nbsp;&#125; <br />
              &#125;
            </code>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Extending Interfaces
        </h2>
        <ul className="space-y-2 list-disc pl-6">
          <li>
            Interfaces can be extended to create new interfaces. Examples:
            <code className="block bg-background p-3 rounded">
              interface Employee extends User &#123; <br />
              &nbsp;&nbsp;department: string; <br />
              &#125;
            </code>
          </li>
        </ul>
      </div>
    </div>
  );
}
