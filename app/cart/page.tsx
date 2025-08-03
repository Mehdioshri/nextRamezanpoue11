'use client';
import { useCart } from '../../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart } = useContext();

  return (
    <div>
      <h2>🛒 سبد خرید</h2>
      {cart.length === 0 ? (
        <p>سبد خرید شما خالی است.</p>
      ) : (
        <ul className="list-group">
          {cart.map((p) => (
            <li key={p.id} className="list-group-item d-flex justify-content-between">
              <span>{p.title} - {p.price.toLocaleString('fa-IR')} تومان</span>
              <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(p.id)}>حذف</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}