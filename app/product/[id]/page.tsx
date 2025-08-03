import { products } from '@/data/products';
import { notFound } from 'next/navigation';

type Props = {
  params: { id: string };
};

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);
  if (!product) return notFound();

  return (
    <div className="container">
      <div className="card mx-auto mt-4" style={{ maxWidth: '600px' }}>
        <img src={product.image} className="card-img-top" />
        <div className="card-body">
          <h3>{product.title}</h3>
          <p className="text-success fw-bold">
            {product.price.toLocaleString('fa-IR')} تومان
          </p>
          <p>{product.description}</p>
<button on click={()=>{addtocart(product)}}>addtocart</button>
        </div>
      </div>
    </div>
  );
}