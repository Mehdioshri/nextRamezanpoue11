import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import { CartProvider } from '@/context/CartContext';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export const metadata = {
  title: ' دسته‌بندی‌شده محصولات',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <CartProvider>
        <header className="bg-light p-3 text-center fw-bold">🛍️ فروشگاه سلامتی </header>
        <main className="py-4">{children}</main>
        <footer className="bg-light text-center p-3 mt-4">© 2025</footer>

        </CartProvider>
        
      </body>
    </html>
  );
}



function Header() {
  return (
    <header className="bg-light p-3 d-flex justify-content-between align-items-center">
      <Link href="/" className="fw-bold fs-5 text-decoration-none">🛍️ فروشگاه</Link>
      <CartButton />
    </header>
  );
}

// 🔹 دکمه سبد خرید
function CartButton() {
  const { cart } = useCart();
  const count = cart.length;

  return (
    <Link href="/cart" className="btn btn-outline-primary position-relative">
      سبد خرید
      {count > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {count}
        </span>
      )}
    </Link>
  );
}
