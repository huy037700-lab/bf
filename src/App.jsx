import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Outlet } from "react-router-dom";
import { useCart } from "./context/useCart";

/* ================= 購物車按鈕 ================= */
function CartButton() {
  const { cart } = useCart();
  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <button
      className="fixed bottom-6 left-6 btn btn-primary btn-circle shadow-lg z-50"
      onClick={() => document.getElementById("cart_modal").showModal()}
    >
      🛒
      {totalQty > 0 && (
        <span className="badge badge-error badge-sm absolute -top-1 -right-1">
          {totalQty}
        </span>
      )}
    </button>
  );
}

/* ================= 購物車 Modal ================= */
function CartModal() {
  const { cart, increase, decrease, removeItem, clearCart } = useCart();

  const total = cart.reduce(
    (sum, i) => sum + i.price * i.qty,
    0
  );

  const submitOrder = () => {
    alert("訂單已送出！");
    clearCart();
    document.getElementById("cart_modal").close();
  };

  return (
    <dialog id="cart_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">購物車</h3>

        {cart.length === 0 ? (
          <p className="text-gray-500">尚未加入商品</p>
        ) : (
          <div className="space-y-3">
            {cart.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center"
              >
                <div>
                  <p>{item.name}</p>
                  <p className="text-sm text-gray-500">
                    ${item.price} × {item.qty}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    className="btn btn-xs"
                    onClick={() => decrease(item.name)}
                  >
                    −
                  </button>
                  <button
                    className="btn btn-xs"
                    onClick={() => increase(item.name)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-xs btn-error"
                    onClick={() => removeItem(item.name)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}

            <div className="divider" />
            <div className="text-right font-bold">
              總金額：${total}
            </div>
          </div>
        )}

        <div className="modal-action flex justify-between">
          <form method="dialog">
            <button className="btn">關閉</button>
          </form>

          {cart.length > 0 && (
            <button className="btn btn-primary" onClick={submitOrder}>
              送出訂單
            </button>
          )}
        </div>
      </div>
    </dialog>
  );
}

/* ================= App 本體 ================= */
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdf6ec]">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-10">
  <div className="bg-paper rounded-2xl shadow-sm p-6 md:p-10">
    <Outlet />
  </div>
</main>


      <Footer />

      {/* ✅ 全站共用購物車 */}
      <CartButton />
      <CartModal />
    </div>
  );
}
