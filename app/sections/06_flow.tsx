"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const boxes = [
  { id: 1, nbr: "STEP01", ttl: "課題発見・方向設計", bold: "現状分析と課題ヒアリングを徹底し、ターゲット国の市場リサーチに基づきKPIと戦略マップを作成。</br>店舗の「強み」をどう伝えるか、ブランド方針を決定します。</br>", imgSrc: "/images/parts_flow_1.png", title: "SNSを活用した集客" },
  { id: 2, nbr: "STEP02", ttl: "コンテンツ制作・発信", bold: '戦略に基づきコンテンツの企画・撮影・編集 から投稿代行まで一括で実施。</br>ターゲット文化を理解した「伝わる発信」で店舗の魅力を世界へ届けます。</br>', imgSrc: "/images/parts_flow_2.png", title: "SNSを活用した集客" },
  { id: 3, nbr: "STEP03", ttl: "分析・改善・成長支援", bold: '数値レポートや顧客反応を分析。KPIの進捗確認と改善提案を繰り返し、</br>成果が出るまで一丸となって取り組み続けます。</br>', imgSrc: "/images/parts_flow_3.png", title: "SNSを活用した集客" },
];

export default function Flow() {
  const [isPC, setIsPC] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsPC(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#f0f8ff] to-[#e6f3ff] w-full flex flex-col justify-center items-center px-5 md:px-0 py-16 md:py-24 overflow-x-hidden">
      <div className="text-center font-black mb-12 md:mb-16">
        <div className="text-4xl md:text-6xl lg:text-7xl text-[#0066cc] mb-4">FLOW</div>
        <div className="text-2xl md:text-3xl text-gray-800 mb-6">導入の流れ</div>
        <div className="text-base md:text-2xl text-gray-700 mt-4 px-4 leading-relaxed">
          インバウンド集客<span className="text-yellow-500 text-lg md:text-3xl font-extrabold leading-loose">成功</span>までの3ステップ
        </div>
      </div>

      <div className="relative flex flex-col items-center w-full space-y-8 md:space-y-12">
        {boxes.map((box, idx) => (
          <div
            key={box.id}
            className="flex flex-col md:flex-row items-center bg-white rounded-2xl mx-4 md:mx-10 px-6 md:px-10 py-6 md:py-10 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-[900px] text-gray-800 border border-gray-100"
            style={{
              transform: isPC ? `translateX(${(idx - 1) * 80}px)` : "translateX(0px)",
            }}
          >
            <div className="flex flex-col flex-1 w-full space-y-3 md:space-y-4">
              <p className="text-[#0066cc] font-extrabold text-xl md:text-3xl tracking-wide">{box.nbr}</p>
              <p className="text-gray-900 font-bold text-lg md:text-2xl leading-snug">{box.ttl}</p>
              <p className="text-sm md:text-lg text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: box.bold }} />
            </div>
            <div className="flex items-center justify-center md:ml-8 mt-6 md:mt-0 w-32 h-40 md:w-40 md:h-48 flex-shrink-0">
              <Image
                src={box.imgSrc}
                alt={box.title}
                width={300}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
