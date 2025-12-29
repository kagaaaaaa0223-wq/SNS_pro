import Firstview from "./sections/01_Firstview";
import Issue from "./sections/02_issue";
import Why from "./sections/03_why";
import Reasons from "./sections/04_reasons";
import Achivements from "./sections/05_Achivements";
import Flow from "./sections/06_flow";
import QA from "./sections/07_Q&A";
import EntryForm from "./sections/08_entryform";

export default function Home() {
  return (
    <>
    <Firstview />
    {/* Wave transition between Firstview and Issue */}
    <div className="w-full -mt-[3px] md:-mt-[1px]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none" className="w-full block h-[50px] md:h-[100px]" style={{ marginBottom: '-1px' }}>
        <defs>
          <linearGradient id="wave-gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1920" y2="0">
            <stop offset="0%" stopColor="#0282de"/>
            <stop offset="100%" stopColor="#8bcfff"/>
          </linearGradient>
          <linearGradient id="wave-gradient-bottom" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1920" y2="0">
            <stop offset="0%" stopColor="#0282de"/>
            <stop offset="100%" stopColor="#8bcfff"/>
          </linearGradient>
        </defs>
        {/* 波の下をFirstviewと同じグラデーションで塗りつぶし */}
        <path d="M 0 0 L 0 150 L 1920 150 L 1920 0 Z" fill="url(#wave-gradient-bottom)"/>
        {/* 波の上を白で塗りつぶし */}
        <path d="M 0 80 Q 240 150 480 80 Q 720 10 960 80 Q 1200 150 1440 80 Q 1680 10 1920 80 L 1920 150 L 0 150 Z" fill="white"/>
      </svg>
    </div>
    <Issue />
    <Why />
    <Reasons/>
    <Achivements/>
    <Flow />
    <QA />

    </>
  );
}
