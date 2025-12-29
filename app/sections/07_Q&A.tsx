"use client";
import { useState } from "react";
import EntryForm from "../sections/08_entryform";
import Image from "next/image";

const qaList = [
  { id: 1, q: "SNSの知識がないのですが大丈夫でしょうか？", a: "はい、全く問題ございません。アカウントの開設から日々の投稿、運用まで専門スタッフが全面的にサポートいたします。" },
  { id: 2, q: "どのくらいでスタートできますか？", a: "ご契約から最短2週間〜1ヶ月程度で投稿を開始できます。" },
  { id: 3, q: "飲食店以外（小売店、宿泊施設など）でも対応可能ですか？", a: "はい、対応可能です。小売店、宿泊施設、美容サロン、観光施設など、業種を問わず「集客」が必要なビジネスであれば実績がございます。その業種に最適な運用プランをご提案します。" },
  { id: 4, q: "個人でも契約可能でしょうか？", a: "はい、可能です。個人事業主様や、小規模店舗のオーナー様からも多数ご依頼をいただいております。規模に合わせたプランもご用意しておりますので、まずはお気軽にご相談ください。" },
  { id: 5, q: "料金プランを教えてください。", a: "お店の客単価やご予算に合わせて、柔軟なプランをご用意しております。画一的な料金ではなく、店舗様の費用感に合わせた最適なプランをご提案させていただきますので、まずはご相談ください。" },
  { id: 6, q: "撮影や編集もすべてお任せできますか？", a: "はい、すべてお任せいただけます。プロによる写真・動画撮影から、投稿用の画像加工、文章作成、ハッシュタグ選定までワンストップで対応するプランがございます。" },
  { id: 7, q: "特定の食文化（ハラール等）に対応できますか？", a: "はい、全てお任せください。弊社ではハラール対応の飲食店様の運用実績が多数ございます。特有のルールや配慮すべきポイントも熟知しておりますので、安心してお任せいただけます。" },
  { id: 8, q: "若い方が利用するイメージがありますが、お店に合いますか？", a: "はい、どのお店にも合わせられます。現在は若年層だけでなく、幅広い年代がSNSでお店を探す時代です。お店の雰囲気やターゲット層（客層）に合わせたトーン＆マナーで発信を行うため、お店のブランドイメージを損なうことはありません。" },
  { id: 9, q: "映える商品がないとインスタの意味がなさそうですが、大丈夫ですか？", a: "はい、大丈夫です。「映え」だけが全てではありません。今は「見た目」だけでなく、「役立つ情報」や「お店のストーリー・人柄」が重視される傾向にあります。日常の風景やこだわりポイントなど、プロの視点で貴店の魅力を引き出し、ファンを作る発信を行います。" },
];

export default function QA() {
　const [isOpen,setIsOpen]= useState(false)
  const [openId, setOpenId] = useState<number | null>(null);
  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <>
    <div className="w-full bg-white py-12 md:py-20">
      <div className="max-w-4xl mx-auto space-y-6 px-4 md:px-6">
      <div className="text-center mb-10 md:mb-14">
        <div className="text-3xl md:text-5xl text-[#0066cc] font-extrabold mb-3">FAQ</div>
        <div className="text-xl md:text-3xl text-gray-800 font-bold">よくあるご質問</div>
      </div>
      
      <div className="space-y-4 md:space-y-5">
        {qaList.map((item) => (
          <div key={item.id} className="border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden bg-white">
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center gap-3 md:gap-4 text-left text-base md:text-xl font-semibold hover:bg-blue-50 transition-colors duration-200 text-gray-800"
            >
              <div className="bg-[#0066cc] text-white min-w-[50px] md:min-w-[60px] flex items-center justify-center text-lg md:text-xl font-bold self-stretch py-4 md:py-5">
                Q
              </div>
              <span className="flex-1 flex items-center py-1">{item.q}</span>
              <span className="text-2xl md:text-3xl flex items-center px-4 md:px-5 text-[#0066cc] font-bold">{openId === item.id ? "−" : "+"}</span>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                openId === item.id ? "max-h-[400px] opacity-100 py-5 md:py-6" : "max-h-0 opacity-0 py-0"
              } px-6 md:px-8 bg-gray-50`}
            >
              <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
                {item.a.startsWith("はい") ? (
                  <>
                    <span className="font-bold">{item.a.match(/^はい[^。]*。/)?.[0]}</span>
                    <br />
                    {item.a.replace(/^はい[^。]*。/, "")}
                  </>
                ) : (
                  item.a
                )}
              </p>
            </div>

            
          </div>
        ))}
      </div>
      </div>

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
