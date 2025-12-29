"use client";
import Image from "next/image";
import { useState } from "react";
import EntryForm from "../sections/08_entryform";

const boxes = [
  { id: 1, title: "認知度", description: "海外のお客様にもっとお店を知ってもらいたい", imgSrc: "/images/material (1).png" },
  { id: 2, title: "発信ノウハウ", description: "ターゲット国に合わせた魅力の伝え方が分からない", imgSrc: "/images/material (1).png" },
  { id: 3, title: "SNSを活用した集客", description: "SNSを運用しているが来店につながらない", imgSrc: "/images/material (1).png" }
];

export default function Issue() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className="bg-white w-full pt-10 md:pt-25 overflow-x-hidden">
      {/* responsive added: flex-col md:flex-row、gap調整、mt/mb調整、余白拡大 */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-16 md:mt-28 mb-20 md:mb-32 gap-6 md:gap-12 px-6">
      {/* responsive added: w-full md:w-auto、text-base追加、px調整、影とホバー追加 */}
      <a href="https://lin.ee/b33L3Xy"
                className="w-full md:w-auto bg-[#00B16B] hover:bg-[#26896D] text-white text-lg md:text-2xl py-5 px-20 md:py-7 px-10 md:px-20 font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                    LINEから無料相談　»
      </a>
      {/* responsive added: w-full md:w-auto、text-base追加、px調整、影とホバー追加 */}
      <button
      onClick={() => setIsOpen(true)}
      className="w-full md:w-auto bg-[#0066cc] hover:bg-[#0052a3] text-white text-lg md:text-2xl py-5 md:py-7 px-10 md:px-14 font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
      >
      フォームから無料相談　»
      </button>
      </div>

      {/* ▼ YouTube Shorts セクション */}
      {/* responsive added: スマホは2x2、PCは1x4、余白と隙間を完全削除 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 w-full h-[600px] md:h-[700px] overflow-hidden bg-black">
        {[
          "https://www.youtube.com/embed/fJdd4RFkuuU",
          "https://www.youtube.com/embed/KuNfR0OZvwk",
          "https://www.youtube.com/embed/7hlGYjKyKps",
          "https://www.youtube.com/embed/Mdepxnw8FjI"
        ].map((videoUrl, i) => (
          <div key={i} className="relative w-full h-full overflow-hidden bg-black">
            <iframe
              src={`${videoUrl}?autoplay=1&loop=1&playlist=${videoUrl.split('/').pop()}&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1&enablejsapi=1`}
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-auto"
              style={{ 
                width: '100%',
                height: '177.78%', // 16:9の逆比率で縦長動画を横幅いっぱいに
                minHeight: '100%',
                minWidth: '100%',
                margin: 0,
                padding: 0,
                display: 'block'
              }}
            ></iframe>
          </div>
        ))}
      </div>

      {/* ▼ 見出し */}
      {/* responsive added: mt, px, py調整、余白拡大 */}
      <div className="flex justify-center items-center text-center mt-12 md:mt-20 px-6 md:px-12">
        <p className="text-xl sm:text-2xl md:text-4xl text-gray-900 font-black underline decoration-yellow-300 decoration-8 leading-relaxed py-4 md:py-6 px-4">
          インバウンド集客・SNS運用で、<br className="hidden sm:block" />
          こんなお悩みを抱えていませんか？
        </p>
      </div>

      {/* ▼ 悩みのボックス */}
      {/* responsive added: gap, mt, mb, px調整、余白拡大 */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mt-12 md:mt-20 mb-16 md:mb-28 px-6 md:px-8">

        {boxes.map((box) => (
          <div
            key={box.id}
            /* responsive added: w-full max-w-sm追加でスマホで幅調整、影と角丸強化 */
            className="flex flex-col w-full max-w-sm md:w-100 md:max-w-none h-auto bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-3xl border-4 border-blue-200 p-8 items-center justify-center"
          >
            {/* responsive added: my調整、画像サイズ拡大 */}
            <div className="relative w-full aspect-square my-6 md:my-8">
              <Image
                src={box.imgSrc}
                alt={box.title}
                fill
                className="object-contain"
              />
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-[#0066cc] font-extrabold mb-5 text-center tracking-wide">
              {box.title}
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium text-center leading-relaxed px-2">
              {box.description}
            </p>
          </div>
        ))}

      </div>

    </div>
    {isOpen && (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* 黒透過背景 */}
        <div
        className="absolute inset-0 bg-black/60"
        onClick={() => setIsOpen(false)}
        />

        {/* 中央コンテンツ */}
        <div className="relative bg-white rounded-xl shadow-xl max-w-2xl max-h-[90vh] flex flex-col w-full mx-6 z-10">
        <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
            ×
        </button>

        <div className="overflow-y-auto p-6 pt-12">
          <EntryForm />
        </div>
        </div>
    </div>
    )}
    </>
  );
}