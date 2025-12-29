import Image from "next/image";

export default function Firstview() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* responsive added: スマホはpy-10、PCはpy-28を維持 */}
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#0282de] to-[#8bcfff] w-full font-sans py-10 md:py-28">

        {/* 見出し */}
        {/* responsive added: スマホはtext-xl、PCはtext-4xlを維持 */}
        <h1 className="text-base md:text-4xl text-white font-black text-center px-4 md:px-6 leading-tight md:leading-tight tracking-wide">
          訪日観光客が
          <span className="text-yellow-300 text-2xl sm:text-3xl md:text-5xl">『訪れる店』</span>
          をSNSで創る。
        </h1>

        {/* サブ見出し */}
        {/* responsive added: スマホはtext-sm、PCはtext-3xlを維持 */}
        <p className="text-sm sm:text-base md:text-3xl text-white text-center font-bold px-4 md:px-6 mt-4 md:mt-4 leading-relaxed tracking-wide">
          認知から来店まで、成果を設計する集客戦略
        </p>

        {/* 画像（横いっぱいでレスポンシブ） */}
        {/* responsive added: スマホはh-auto、PCはh-190を維持 */}
        <div className="relative w-full mt-6 md:mt-0 hidden md:block">
          <Image
            src="/images/No.1.png"
            alt="line"
            width={1920}
            height={1080}
            className="object-cover w-full h-auto md:h-190"
            priority
          />
        </div>
        <div className="block md:hidden mt-6 w-full">
                <Image
                    src="/images/firstview_sm.png"
                    alt="画像"
                    width={600}
                    height={500}
                    className="object-contain w-full h-auto"
                />
          </div>
      </div>
    </div>
  );
}