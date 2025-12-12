export default function Home() {
  return (
    <div className="w-full">

      {/* ===== Hero 區塊 ===== */}
      <section className="hero min-h-[60vh] bg-gradient-to-b from-orange-50 via-yellow-50 to-[#fdf6ec]">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold mb-4 text-orange-900">
              早晨時光
            </h1>
            <p className="text-lg mb-6 text-orange-800">
              每一天，都從一份溫暖的早餐開始 ☀️
            </p>
            <div className="flex justify-center gap-4">
              <a href="/menu" className="btn btn-primary">
                查看菜單
              </a>
              <a href="/contact" className="btn btn-outline border-orange-300 text-orange-800 hover:bg-orange-50">
                聯絡我們
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 今日特價 / 活動資訊 ===== */}
      <section className="py-12 bg-[#fdf6ec]">
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-900">
          今日活動
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">

          {/* 特價 1 */}
          <div className="card bg-white shadow-sm rounded-2xl border-l-4 border-yellow-400">
            <div className="card-body">
              <span className="badge badge-warning w-fit mb-2">限時特價</span>
              <h3 className="card-title text-orange-900">
                奶茶買一送一
              </h3>
              <p className="text-sm text-orange-800">
                早上 7:00～9:00
              </p>
            </div>
          </div>

          {/* 特價 2 */}
          <div className="card bg-white shadow-sm rounded-2xl border-l-4 border-red-400">
            <div className="card-body">
              <span className="badge badge-error w-fit mb-2">人氣組合</span>
              <h3 className="card-title text-orange-900">
                漢堡＋紅茶 $69
              </h3>
              <p className="text-sm text-orange-800">
                每日限量供應
              </p>
            </div>
          </div>

          {/* 活動資訊 */}
          <div className="card bg-white shadow-sm rounded-2xl border-l-4 border-blue-400">
            <div className="card-body">
              <span className="badge badge-info w-fit mb-2">活動公告</span>
              <h3 className="card-title text-orange-900">
                學生出示學生證折 5 元
              </h3>
              <p className="text-sm text-orange-800">
                活動期間：即日起
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ===== 熱賣餐點 ===== */}
      <section className="py-16 bg-paper">
        <h2 className="text-3xl font-bold text-center mb-10 text-orange-900">
          熱賣推薦
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">

          <div className="card bg-white shadow-sm rounded-2xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349"
                alt="漢堡"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-orange-900">
                招牌漢堡
              </h3>
              <p className="text-orange-800">
                厚實肉排＋新鮮生菜
              </p>
            </div>
          </div>

          <div className="card bg-white shadow-sm rounded-2xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1525351484163-7529414344d8"
                alt="吐司"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-orange-900">
                經典吐司
              </h3>
              <p className="text-orange-800">
                外酥內軟，早晨首選
              </p>
            </div>
          </div>

          <div className="card bg-white shadow-sm rounded-2xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
                alt="咖啡"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-orange-900">
                現煮咖啡
              </h3>
              <p className="text-orange-800">
                喚醒你的每一個早晨
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
