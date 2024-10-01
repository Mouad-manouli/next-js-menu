
import Link from "next/link";

export async function generateMetadata({ params }) {
    const { Prod } = params;
    return {
      title: `${Prod} `, // Titre personnalisé en fonction du produit
      description: `Details about the product ${Prod}`, // Description personnalisée
    };
  }
  
  export default function Product({ params: { Prod } }) {
    return (
      <>
        <p>Product: {Prod}</p>
        <Link href="/Products">
            Back 
        </Link>
      </>
    );
  }
  