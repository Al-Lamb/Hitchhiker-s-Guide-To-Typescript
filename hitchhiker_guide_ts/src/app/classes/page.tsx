export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Classes in TypeScript</h1>

      <div className="prose dark:prose-invert">
        <p className="text-lg mb-4">
          Classes in TypeScript provide a way to define objects with properties
          and methods. They support features like access modifiers, inheritance,
          and constructors to create structured and reusable code.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Defining a Class</h2>
        <ul className="space-y-2 list-disc pl-6">
          <li>
            A simple class with properties and a constructor:
            <code className="block bg-background p-3 rounded">
              class Person &#123; <br />
              &nbsp;&nbsp;name: string; <br />
              &nbsp;&nbsp;age: number; <br />
              <br />
              &nbsp;&nbsp;constructor(name: string, age: number) &#123; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.name = name; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.age = age; <br />
              &nbsp;&nbsp;&#125; <br />
              &#125;
            </code>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Class Inheritance</h2>
        <ul className="space-y-2 list-disc pl-6">
          <li>
            Classes can extend other classes to inherit properties and methods:
            <code className="block bg-background p-3 rounded">
              class Employee extends Person &#123; <br />
              &nbsp;&nbsp;position: string; <br />
              <br />
              &nbsp;&nbsp;constructor(name: string, age: number, position:
              string) &#123; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;super(name, age); <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.position = position; <br />
              &nbsp;&nbsp;&#125; <br />
              &#125;
            </code>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Access Modifiers</h2>
        <ul className="space-y-2 list-disc pl-6">
          <li>
            TypeScript provides public, private, and protected access modifiers:
            <code className="block bg-background p-3 rounded">
              class Car &#123; <br />
              &nbsp;&nbsp;public brand: string; <br />
              &nbsp;&nbsp;private speed: number; <br />
              <br />
              &nbsp;&nbsp;constructor(brand: string, speed: number) &#123;{" "}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.brand = brand; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.speed = speed; <br />
              &nbsp;&nbsp;&#125; <br />
              &#125;
            </code>
          </li>
        </ul>
      </div>
    </div>
  );
}
