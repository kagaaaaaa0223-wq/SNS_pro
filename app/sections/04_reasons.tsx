"use client";
import { useState } from "react";
import EntryForm from "../sections/08_entryform";
import Image from "next/image";

const boxes = [
    {id:1, titles:"画像", imgSrc:"/images/01_phone.png"},
    {id:2, titles:"画像", imgSrc:"/images/02_phone.png"},
    {id:3, titles:"画像", imgSrc:"/images/03_phone.png"},
    {id:4, titles:"画像", imgSrc:"/images/04_phone.png"},
]



export default function Reasons(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <div className="text-center overflow-x-hidden md:px-0">
            {/* responsive added: text-2xl追加、余白拡大 */}
            <h1 className="text-3xl md:text-5xl font-black mt-12 md:mt-24 mb-20 md:mb-40 tracking-wide px-6 ">
                ソーシャルメディア職人<br/>が選ばれる理由
            </h1>


            {/* responsive added: text-xl追加、text-center md:text-left、pl調整、余白拡大 */}
            <h2 className="flex items-center text-xl md:text-3xl font-extrabold text-center md:text-left px-6 md:pl-50 pb-8 md:pb-12 underline decoration-yellow-300 decoration-4 md:decoration-8 leading-relaxed tracking-wide">
                <Image src="/images/pin_1.png" alt="pin" width={24} height={32} className="w-auto h-7 md:h-20 mr-3 md:mr-4 flex-shrink-0 object-contain" />
                インバウンドに最適化された『戦略』と『最新の知見』
            </h2>
            {/* responsive added: text-base追加、text-center md:text-left、px調整、行間拡大 */}
            <p className="text-base md:text-2xl text-left md:text-left justify-center px-6 md:px-50 leading-relaxed md:leading-relaxed">
                訪日観光客の集客・ブランディングに特化。一般的な国内向け運用とは異なる、<br className="hidden md:block"/>
                言語・文化・検索行動に基づく戦略設計が強みです。<br />
                日々変化するSNSアルゴリズムや海外ユーザーの反応をリアルタイムで分析し最新の知見を施策に反映します。
            </p>

            {/* スマホ用: 1枚だけ表示 */}
            <div className="block md:hidden px-2">
                <div className="relative w-full max-w-xs mx-auto h-60">
                    <Image
                        src="/images/mockup_sm.png"
                        alt="画像"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            {/* PC用: 4枚表示 */}
            <div className="hidden md:flex flex-row gap-10 items-center justify-center mt-24">
                {boxes.map((box)=>(
                    <div key={box.id} className="relative w-64 h-120 bg-white items-center justify-center rounded-2xl p-4">
                        <Image
                            src={box.imgSrc}
                            alt={box.titles}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
            
            {/* responsive added: mt調整、余白拡大 */}
            <div className="mt-16 md:mt-28">
                {/* responsive added: text-xl追加、text-center md:text-left、pl調整、余白拡大 */}
                <h2 className="flex items-center text-xl md:text-3xl font-extrabold text-center md:text-left px-6 md:pl-50 pb-8 md:pb-12 underline decoration-yellow-300 decoration-4 md:decoration-8 leading-relaxed tracking-wide">
                    <Image src="/images/pin_2.png" alt="pin" width={24} height={32} className="w-auto h-7 md:h-20 mr-3 md:mr-4 flex-shrink-0 object-contain" />
                    豊富な実績に基づいた『成果』への伴走サポート
                </h2>
                {/* responsive added: text-base追加、text-center md:text-left、px調整、行間拡大 */}
                <p className="text-base md:text-2xl text-left md:text-left justify-center px-6 md:px-50 leading-relaxed md:leading-relaxed">
                    飲食店を中心に、数多くのインバウンド支援実績があります。<br />
                    SNS・WEB・口コミを連動させ、来店までの導線構築に成功した事例を多数保有。<br />
                    私たちは「やって終わり」ではなく、毎月数値を追いながら分析・改善を繰り返し、お客様が求める「成果」に導くまで伴走します。
                </p>
                {/* responsive added: w-full max-w-full追加、mt/pl調整、スマホ時の間隔のみ調整、余白拡大 */}
                <div className="relative w-full max-w-full md:w-300 h-60 md:h-100 mt-8 md:mt-20 mb-30 md:mb-0 px-6 md:px-50">
                    <Image
                    src="/images/reason_graph.png"
                    alt="画像"
                    fill
                    className="object-contain object-left md:px-50"
                    />
                </div>

                {/* responsive added: flex-col md:flex-row、gap調整、mt/mb調整、余白拡大 */}
                <div className="flex flex-col md:flex-row justify-center items-center mt-16 md:mt-28 mb-20 md:mb-32 gap-6 md:gap-12 px-6">
                {/* responsive added: w-full md:w-auto、text-base追加、px調整、影とホバー追加 */}
                <a href="https://lin.ee/b33L3Xy"
                className="w-full md:w-auto bg-[#0066cc] hover:bg-[#0052a3] text-white text-lg md:text-2xl py-5 px-20 md:py-7 px-10 md:px-20 font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
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
    )
}