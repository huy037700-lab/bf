export default function Contact() {
  return (
    <div className="w-full">

      {/* ===== 標題區 ===== */}
      <section className="hero min-h-[60vh] bg-gradient-to-b from-orange-50 via-yellow-50 to-[#fdf6ec]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-orange-900 mb-4">
            聯絡我們
          </h1>
          <p className="text-orange-800 text-lg">
            歡迎任何建議與交流
          </p>
        </div>
      </section>

      {/* ===== 聯絡資訊 ===== */}
      <section className="py-16 bg-paper">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* 地址 */}
          <div className="card bg-white shadow-sm rounded-2xl">
            <div className="card-body">
              <h3 className="card-title flex items-center gap-2 text-orange-900">
                📍 店址
              </h3>
              <p className="text-orange-800">
                苗栗市聯大路 1 號  
                <br />
                國立聯合大學
              </p>
            </div>
          </div>

          {/* 電話 */}
          <div className="card bg-white shadow-sm rounded-2xl">
            <div className="card-body">
              <h3 className="card-title flex items-center gap-2 text-orange-900">
                ☎ 聯絡電話
              </h3>
              <p className="text-orange-800">
                037-381000  
                <br />
                （警衛室）
              </p>
            </div>
          </div>

          {/* 營業時間 */}
          <div className="card bg-white shadow-sm rounded-2xl">
            <div className="card-body">
              <h3 className="card-title flex items-center gap-2 text-orange-900">
                ⏰ 營業時間
              </h3>
              <p className="text-orange-800">
                週一至週五  
                <br />
                06:30 – 11:00
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ===== 補充說明 ===== */}
      <section className="py-12 bg-[#fdf6ec]">
        <div className="max-w-3xl mx-auto px-6 text-center text-orange-900 leading-relaxed">
          <p>
            《早晨時光》是一間以校園精神為出發點的早餐店，
            希望用一份溫暖的早餐，陪伴每一個努力生活的早晨。
          </p>
          <p className="mt-4 text-orange-800">
            若有任何合作、建議或想法，歡迎透過電話與我們聯繫。
          </p>
        </div>
      </section>

    </div>
  );
}
