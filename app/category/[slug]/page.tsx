import Link from 'next/link';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export default function CategoryPage({ params }: Props) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) return notFound();

  const filtered = products.filter((p) => p.category === params.slug);

  return (
    <div className="container">
      <h2 className="mb-4">{category.name}</h2>
      <div className="row g-4">
        {filtered.map((product) => (
          <div key={product.id} className="col-sm-6 col-md-4">
            <div className="card h-100">
              <img src={product.image} className="card-img-top" />
              <div className="card-body">
                <h5>{product.title}</h5>
                <p className="text-success fw-bold">
                  {product.price.toLocaleString('fa-IR')} تومان
                </p>
                <Link href={`/product/${product.id}`} className="btn btn-primary btn-sm">
                  مشاهده
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
