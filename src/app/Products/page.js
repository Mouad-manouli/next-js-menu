
import Link from "next/link";

export const metadata = {
    title: {
        absolute : 'List products '
    },
    description: "Product list description",
};

export default function Products() {
  const products = ['iphon', 'oppo', 'redmi']; // Utilisation d'un tableau simple

  return (
    <>
      <h1>List Products</h1>
      {products.map((prod, index) => (
        <>
            <Link href={`Products/${prod}`} key={index}>
            {prod}
            </Link><br/>
        </>
      ))}
    </>
  );
}

