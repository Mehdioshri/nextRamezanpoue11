import Link from 'next/link';
import { categories } from '@/data/categories';


export default function HomePage() {
  return (
    <div className="container">
      <h1 className="mb-4">دسته‌بندی‌ها همه محصولات</h1>
      <div className="list-group">
         
        
       
        {categories.map((cat) => (

 <div className="card h-100">
  <img src={cat.image}  Style = "width: 200px; height: 150px; border: 1px solid black;margin: 10px"/>
          <Link key={cat.slug} href={`/category/${cat.slug}`} className="list-group-item list-group-item-action">
            {cat.name}
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
