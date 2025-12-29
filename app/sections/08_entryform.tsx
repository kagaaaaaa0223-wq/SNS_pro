"use client";

import { useState } from "react";

const consultationOptions = [
  "ムスリム観光客の集客を強化したい",
  "SNS運用（TikTok / Instagram）について知りたい",
  "実際の事例や成果を知りたい",
  "料金やプランについて聞きたい",
  "まずは話を聞いてみたい",
];

export default function EntryForm() {
  const [formData, setFormData] = useState({
    company:"",
    name: "",
    email: "",
    consultations: [] as string[],
    message: "",

  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { value, checked } = e.target;

  setFormData((prev) => ({
    ...prev,
    consultations: checked
      ? [...prev.consultations, value]
      : prev.consultations.filter((v) => v !== value),
  }));
};

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("送信に失敗しました");
      }
      setSuccess(true);

      setFormData({
        company:"",
        name: "",
        email: "",
        message: "",
        consultations: [] as string[],
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "エラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        お問い合わせ
      </h2>
      {success ? (
      /* ===== 送信完了画面 ===== */
      <div className="text-center space-y-6 bg-white p-10 rounded-xl">
        <h3 className="text-2xl font-bold text-gray-900">
          送信が完了しました
        </h3>

        <p className="text-gray-600 leading-relaxed">
          お問い合わせありがとうございます。<br />
          内容を確認のうえ、順次ご連絡いたします。
        </p>

        <a
          href="https://lin.ee/b33L3Xy"
          target="_blank"
          className="inline-block bg-green-500 text-white font-bold px-8 py-4 rounded-full hover:bg-green-600 transition"
        >
          LINEで連絡を受け取る
        </a>
      </div>
    ) : (
      /* ===== フォーム ===== */
      <form onSubmit={handleSubmit} className="space-y-6">
          <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            店舗名（会社名）
          </label>
          <input
            type="text"
            id="name"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder="小林商事（株）"
          />
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            ご担当者名
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder="山田 太郎"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder="example@email.com"
          />
        </div>

        <div>
          <p className="block text-sm font-medium text-gray-700 mt-8 mb-6">
            ご相談内容（複数選択可）
          </p>

          <div className="space-y-2">
            {consultationOptions.map((option) => (
              <label key={option} className="flex items-center gap-3 text-gray-700">
                <input
                  type="checkbox"
                  value={option}
                  checked={formData.consultations.includes(option)}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            現在のお悩みや状況があればご記入ください<br/>例：外国人は来るがムスリムが少ない、SNSを始めたが伸びない 等
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
            placeholder="お問い合わせ内容をご入力ください"
          />
        </div>

        {error && (
          <div className="text-red-600 text-sm font-medium">{error}</div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#0066cc] hover:bg-[#0052a3] disabled:bg-gray-400 disabled:cursor-not-allowed text-white text-lg font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {loading ? "送信中..." : "送信する"}
        </button>
      </form>
    )}
    </>
  );
}



