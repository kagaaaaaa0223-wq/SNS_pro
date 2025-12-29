import Image from "next/image";

export default function Why() {
  return (
    <div className="flex flex-col bg-gradient-to-r text-white from-[#0282de] to-[#8bcfff] w-full overflow-x-hidden">

      {/* セクションディバイダー：下向き三角形（白） */}
      <div className="w-full flex justify-center bg-gradient-to-r from-[#0282de] to-[#8bcfff]" style={{ marginTop: '-1px' }}>
        <div 
          className="w-[15%] h-[30px] md:h-[60px] bg-white"
          style={{ 
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
          }}
        />
      </div>

      {/* 見出し */}
      {/* responsive added: text-2xl追加、mt調整、余白拡大 */}
      <h1 className="text-center text-3xl md:text-5xl font-black mt-16 md:mt-32 px-6 leading-tight tracking-wide">
        市場の変化<br /><span className="text-2xl md:text-5xl">なぜ今SNSを活用するのか？</span>
      </h1>

      {/* セクション1：テキスト + 画像 */}
      {/* responsive added: mt, gap追加、px統一、余白拡大 */}
      <div className="flex flex-col md:flex-row items-center md:items-start text-black mt-12 md:mt-24 px-6 md:px-50 gap-8 md:gap-12">
        {/* responsive added: ボックス追加、レスポンシブ対応、PCではボックス非表示 */}
        <div className="bg-sky-100 bg-opacity-10 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-2xl md:rounded-none m-6 md:m-0 p-8 md:p-0 border border-white md:border-none border-opacity-20 w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-4">

          {/* テキスト側 */}
          <div className="flex-1 md:flex-[2] w-full space-y-6 md:space-y-6">
            {/* responsive added: text-xl追加、ボーダー表示修正、余白拡大 */}
            <h2 className="flex items-center text-xl text-black md:text-white md:text-4xl font-black mb-6 md:mb-30 tracking-wide">
              <span className="inline-block border-l-8 md:border-l-12 border-yellow-300 mr-4 h-8 md:h-12"></span>
              情報収集手段の変化
            </h2>

            {/* responsive added: text-base追加、行間拡大 */}
            <p className="text-base md:text-2xl md:font-bold leading-relaxed md:leading-relaxed text-black md:text-white">
              ここ1～2年で訪日観光客の情報収集は、従来のGoogle検索などから視覚的に「体験」を探せるTikTokへと急速に移行しています。
            </p>
          </div>

          {/* 画像側 */}
          {/* responsive added: mt調整、w-48追加 */}
          <div className="flex-1 md:flex-[1] flex justify-center md:justify-end w-full">
            <Image
              src="/images/graph_round.png"
              alt="画像"
              width={500}
              height={500}
              className="object-contain w-56 md:w-80 max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* セクション2：グラフ */}
      {/* responsive added: mt調整、px統一、余白拡大 */}
      <div className="flex flex-col md:flex-row items-center md:items-start text-black mt-12 md:mt-40 px-6 md:px-50 gap-8 md:gap-12">
        {/* responsive added: ボックス追加、レスポンシブ対応、PCではボックス非表示 */}
        <div className="bg-sky-100 bg-opacity-10 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-2xl md:rounded-none m-6 md:m-0 p-8 md:p-0 border border-white md:border-none border-opacity-20 w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-4">

          {/* テキスト側 */}
          <div className="flex-1 md:flex-[2] w-full space-y-6 md:space-y-6">
            {/* responsive added: text-xl追加、ボーダー表示修正、余白拡大 */}
            <h2 className="flex items-center text-xl md:text-4xl text-black md:text-white font-black mb-6 md:mb-30 tracking-wide">
              <span className="inline-block border-l-8 md:border-l-12 border-yellow-300 mr-4 h-8 md:h-12"></span>
              成長市場での圧倒的使用率
            </h2>

            {/* responsive added: text-base追加、行間拡大 */}
            <p className="text-base md:text-2xl md:font-bold text-black md:text-white leading-relaxed md:leading-relaxed">
              TikTokの利用率は72%とSNSの中で最も高く、YouTubeの65%を上回っています。
              特に若年層の間では動画コンテンツの消費が中心となり短尺動画の人気が顕著です。
            </p>
          </div>

          {/* 画像側 */}
          {/* responsive added: mt調整、w-48追加 */}
          <div className="flex-1 md:flex-[2] flex justify-center md:justify-end w-full">
            <Image
              src="/images/graph_vertical.png"
              alt="画像"
              width={1000}
              height={500}
              className="object-contain w-full md:w-140 max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* 最後の強調文 */}
      {/* responsive added: text-xl追加、mt/mb調整、余白拡大 */}
      <div className="w-full mt-30 leading-relaxed">
      <h1 className="text-center text-2xl md:text-4xl text-white font-black md:mt-28 mb-16 md:mb-28 px-6 underline decoration-yellow-300 decoration-4 md:decoration-8 leading-relaxed tracking-wide">
        "インバウンド集客において"<br />
        SNSを活用した発信は、
        今や不可欠です。
      </h1>
      </div>

      {/* セクションディバイダー：下向き三角形（背景継承） */}
      <div className="relative w-full h-[30px] md:h-[60px]">
        {/* 左側の白 */}
        <div className="absolute left-0 top-0 h-full bg-white" style={{ width: '42.6%' }}/>
        {/* 右側の白 */}
        <div className="absolute right-0 top-0 h-full bg-white" style={{ width: '42.6%' }}/>
        {/* 三角形の左側の白い部分 */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[15%] h-full bg-white"
          style={{ 
            clipPath: 'polygon(-1% -1%, -1% 101%, 51% 101%)'
          }}
        />
        {/* 三角形の右側の白い部分 */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[15%] h-full bg-white"
          style={{ 
            clipPath: 'polygon(101% -1%, 101% 101%, 49% 101%)'
          }}
        />
      </div>

    </div>
  );
}