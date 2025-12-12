export default function About() {
  return (
    <div className="w-full">

      {/* ===== 標題區 ===== */}
      <section className="py-16 bg-gradient-to-b from-orange-50 via-yellow-50 to-[#fdf6ec]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-orange-900 mb-4">
            關於早晨時光
          </h1>
          <p className="text-orange-800 text-lg">
            一間從早起開始的早餐店
          </p>
        </div>
      </section>

      {/* ===== 創業故事 ===== */}
      <section className="py-16 bg-paper">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-orange-900 leading-relaxed">

          <p className="text-lg">
            <span className="font-semibold text-orange-900">
              早晨時光，
            </span>
            來自一個不太一樣的選擇。
          </p>

          <p className="text-orange-800">
            一名普通的大學生，在求學過程中發現自己並不特別擅長考試，
            卻很擅長規劃時間、觀察需求，以及把一件事情做到最好。
          </p>

          <p className="text-orange-800">
            在一次深思熟慮後，他選擇休學，走進早餐店與餐飲現場打工，
            從最基礎的煎台、備料、開店流程學起。
          </p>

          <p className="text-orange-800">
            每一份薪水、每一次早起，
            都是為了累積人生的
            <span className="font-semibold text-orange-600">
              第一桶金
            </span>
            ，
            也是為了學會如何把一間店真正經營好。
          </p>

          <p className="text-orange-800">
            最後，這份努力變成了現在的
            <span className="font-semibold text-orange-900">
              《早晨時光》
            </span>
            。
          </p>

        </div>
      </section>

      {/* ===== 理念區 ===== */}
      <section className="py-16 bg-[#fdf6ec]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="card bg-white shadow-sm rounded-2xl">
            <div className="card-body">
              <h3 className="card-title text-orange-900">
                用心製作
              </h3>
              <p className="text-orange-800">
                每一份早餐都現點現做，  
                只為了讓你吃到最剛好的溫度。
              </p>
            </div>
          </div>

          <div className="card bg-white shadow-sm rounded-2xl">
            <div className="card-body">
              <h3 className="card-title text-orange-900">
                踏實經營
              </h3>
              <p className="text-orange-800">
                從打工到創業，  
                每一步都來自真實的現場經驗。
              </p>
            </div>
          </div>

          <div className="card bg-white shadow-sm rounded-2xl">
            <div className="card-body">
              <h3 className="card-title text-orange-900">
                陪伴早晨
              </h3>
              <p className="text-orange-800">
                早餐不只是餐點，  
                而是一天最重要的開始。
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
