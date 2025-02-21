export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 id="generics" className="text-4xl font-bold mb-6">Generics in TypeScript</h1>

      <div className="prose dark:prose-invert">
        <p className="text-lg mb-4">
          Generics allow creating 'type variables' which can be used to create
          classes, functions & type aliases that don't need to explicitly define
          the types that they use. Generics makes it easier to write reusable
          code.
        </p>

        <h2 id="advantages" className="text-2xl font-semibold mt-8 mb-4">
          Advantages of Using Generics
        </h2>
        <ul className="space-y-2 list-disc pl-6">
          <li>
            By using generics we may safely store a single type of object
            without storing the other types too.
          </li>
          <li>
            By using generics we need not implement the typecasting of any
            variable or function at the time of calling.
          </li>
          <li>
            Generics are usually checked at the compile time so no issue exists
            in runtime.
          </li>
        </ul>
      </div>
    </div>
  );
}
