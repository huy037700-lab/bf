import { useCart } from "../context/useCart";

export default function Menu() {
  return (
    <div className="w-full">

      {/* ================= 菜單標題 ================= */}
      <section className="py-12 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            菜單
          </h1>
          <p className="text-gray-600 mt-2">
            現點現做，早餐就是要熱熱吃
          </p>
        </div>
      </section>

      {/* ================= 菜單內容 ================= */}
      <section className="py-16 bg-paper">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          <MenuCategory
            title="蛋餅"
            items={[
              { name: "原味蛋餅", price: 30 },
              { name: "玉米蛋餅", price: 35 },
              { name: "起司蛋餅", price: 40 },
              { name: "培根蛋餅", price: 45 },
              { name: "鮪魚蛋餅", price: 45 },
            ]}
          />

          <MenuCategory
            title="吐司 / 漢堡"
            items={[
              { name: "奶油吐司", price: 25 },
              { name: "花生吐司", price: 30 },
              { name: "火腿蛋吐司", price: 45 },
              { name: "培根蛋漢堡", price: 55 },
              { name: "招牌豬排漢堡", price: 65 },
            ]}
          />

          <MenuCategory
            title="鐵板麵"
            items={[
              { name: "蘑菇鐵板麵", price: 60 },
              { name: "黑胡椒鐵板麵", price: 60 },
              { name: "加蛋", price: 10 },
              { name: "加肉", price: 20 },
            ]}
          />

          <MenuCategory
            title="飲料"
            items={[
              { name: "紅茶", price: 20 },
              { name: "奶茶", price: 30 },
              { name: "豆漿", price: 25 },
              { name: "鮮奶茶", price: 40 },
              { name: "美式咖啡", price: 40 },
            ]}
          />

        </div>
      </section>
    </div>
  );
}

/* ================= 單一分類元件（重點改在這） ================= */
function MenuCategory({ title, items }) {
  const { addToCart } = useCart();   // ⭐ 1. 接購物車

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-dashed border-gray-300 pb-2">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
  // ⭐ 點擊加入購物車
  <button
    key={index}
    onClick={() => addToCart(item)}
    className="flex justify-between items-center bg-white px-4 py-3 rounded shadow-sm
               hover:bg-orange-50 transition text-left"
  >
    <span className="text-gray-700">
      {item.name}
    </span>
    <span className="text-gray-900 font-medium">
      ${item.price}
    </span>
  </button>
    ))}

      </div>
    </div>
  );
}
