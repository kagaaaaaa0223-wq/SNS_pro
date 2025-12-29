import Image from "next/image";

const items=[
    {id:1, alt:"画像", img:"/images/02_phone.png",pbl:"課題：",mur:"施策：",ach:"成果：",name:"肉亭ふたご様（焼き肉）",bold:"立地が分かりにくく、SNSが強みを伝えきれていなかった 。",bold1:"「特別な体験ができるプライベート焼肉」を軸に、シェフのこだわりや料理工程を通して“物語性”を演出",bold3:"導入6ヶ月でSNS経由の来店20組を突破。SNS経由の問い合わせ・予約導線を確立"},
    {id:2, alt:"画像", img:"/images/01_phone.png",pbl:"課題：",mur:"施策：",ach:"成果：",name:"Wagyu Stall様（渋谷/ストリートフード）",bold:"好立地だがターゲット層に届かずSNS活用法も不明だった。",bold1:"「渋谷」「バーガー」「ストリートフード」を軸に、ムスリム観光客の興味を引く動画戦略を設計。",bold3:"導入3ヶ月で過去最高売上を達成。TikTokとInstagramで拡散され、コミュニティ内で一気に話題化 。最高再生数 320,000回 、ブックマーク 13,000件"},
    {id:3, alt:"画像", img:"/images/03_phone.png",pbl:"課題：",mur:"施策：",ach:"成果：",name:"新宿亭様（ラーメン）",bold:"自社からの発信力を強化してターゲット層へ届けたいと考えていた。",bold1:"「ラーメン」「和牛」「ハラール」の3要素をブランド軸とし、一人のシェフにフォーカスしたキャラクターを構築 ",bold3:"最高再生数 566,800回、いいね 38,000件を達成。 フォロワー 8,302人 を獲得"}
]

export default function Achivements(){
    return(
        /* responsive added: py追加、pb追加でセクション下部余白確保、px統一、余白拡大 */
        <div className="bg-gradient-to-r from-[#0282de] to-[#8bcfff] w-full overflow-x-hidden px-6 md:px-50 py-16 md:py-28 pb-16 md:pb-32">
            {/* responsive added: pt調整、余白拡大 */}
            <div className="pt-12 md:pt-20">
                {/* responsive added: text-2xl追加、mb調整、余白拡大 */}
                <div className="text-white text-3xl md:text-5xl font-black items-center text-center justify-center flex mb-12 md:mb-24 tracking-wide">
                    実績紹介
                </div>

                {/* responsive added: gap調整、pt調整、余白拡大 */}
                <div className="flex flex-col items-center gap-16 md:gap-28 pt-12 md:pt-5">
                    {items.map(item => (
                        /* responsive added: gap調整、mb調整、余白拡大 */
                        <div key={item.id} className="flex flex-col md:flex-row md:items-start items-center px-0 md:px-0 gap-6 md:gap-10 mb-8 md:mb-12 w-full">
                            {/* responsive added: w-full追加 */}
                            <div className="flex flex-col md:flex-row items-start relative w-full">

                                {/* 画像 */}
                                {/* responsive added: h-auto追加、mr調整、固定高さ削除でスクロールバー解消、余白拡大 */}
                                <div className="flex flex-col md:flex-row w-full max-w-[320px] md:max-w-[500px] items-center justify-center md:justify-end h-auto mx-auto md:mx-0">
                                    <Image src={item.img} alt={item.alt} width={300} height={580} className="object-contain w-full h-auto" />
                                </div>

                                {/* 右側のテキストと線のグループ */}
                                {/* responsive added: gap調整、mt調整、w-full追加、余白拡大、ml追加で画像との間隔確保 */}
                                <div className="flex flex-col gap-6 md:gap-8 lg:gap-2 mt-8 md:mt-35 max-w-full md:max-w-lg relative w-full md:ml-[180px]">

                                {/* BOX① */}
                                {/* responsive added: p調整、mb調整、text-black追加、余白拡大 */}
                                <div className="bg-white p-6 md:p-8 rounded-2xl w-full md:max-w-[500px] text-left mb-6 md:mb-15 relative text-gray-900 shadow-lg">
                                    {/* 横線（BOX①）- スマホ画像の右端から起点 */}
                                    <div className="hidden md:block absolute right-[100%] top-[50%] w-[180px] h-[3px] bg-black -translate-y-1/2"></div>
                                    {/* responsive added: text-sm追加、余白拡大 */}
                                    <h1 className="font-black underline pb-4 md:pb-6 text-base md:text-2xl tracking-wide">{item.name}</h1>
                                      {/* responsive added: text-xs追加、行間拡大 */}
                                      <p className="text-sm md:text-lg leading-relaxed">
                                        <span className="font-black md:text-lg">{item.pbl}</span>
                                        {item.bold}
                                        <br />
                                        <br />
                                        <span className="font-black md:text-lg">{item.mur}</span>
                                        {item.bold1}
                                      </p>
                                </div>

                                {/* BOX② */}
                                {/* responsive added: p調整、mb調整、text-black追加、余白拡大 */}
                                <div className="bg-white p-6 md:p-10 mb-12 md:mb-0 mt-0 md:mt-20 rounded-2xl shadow-lg w-full md:max-w-[500px] text-left relative text-gray-900">
                                    {/* 横線（BOX②）- スマホ画像の右端から起点 */}
                                    <div className="hidden md:block absolute right-[100%] top-1/2 w-[180px] h-[3px] bg-black -translate-y-1/2"></div>
                                    {/* responsive added: text-xs追加、行間拡大 */}
                                    <p className="text-sm md:text-lg leading-relaxed">
                                        <span className="font-black">{item.ach}</span>{item.bold3}
                                    </p>
                                </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}