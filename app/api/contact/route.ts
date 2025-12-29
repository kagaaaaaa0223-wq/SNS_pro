import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { company, name, email, message, consultations } = body;

    if (!company || !name || !email || !message || !Array.isArray(consultations)) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    // 送信先メールアドレス
    const toEmail = process.env.CONTACT_EMAIL || "admin@homegrow.jp";
    
    // Resendの認証済みドメインを使用（未認証の場合はResendのテスト用アドレスを使用）
    // 本番環境では homegrow.jp のドメイン認証が必要です
    const fromEmail = process.env.RESEND_FROM_EMAIL || "contact@homegrow.jp";

    const { data, error } = await resend.emails.send({
      from: `お問い合わせフォーム <${fromEmail}>`,
      to: toEmail,
      replyTo: email, // 返信先をお問い合わせ者のメールアドレスに設定
      subject: `【お問い合わせ】${name}様より`,
      html: `
        <h2>お問い合わせがありました</h2>
        <p><strong>店舗名：</strong>${company}</p>
        <p><strong>お名前：</strong>${name}</p>
        <p><strong>メールアドレス：</strong>${email}</p>
        <p><strong>お問い合わせ内容：</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <p><strong>相談内容：</strong>
          ${Array.isArray(consultations) && consultations.length > 0
            ? consultations.join(" / ")
            : "未選択"}
        </p>
      `,
    });

    // Resend APIのエラーをチェック
    if (error) {
      console.error("Resend APIエラー:", error);
      return NextResponse.json(
        { error: `メール送信に失敗しました: ${error.message}` },
        { status: 500 }
      );
    }

    console.log("メール送信成功:", data);
    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("メール送信エラー:", error);
    return NextResponse.json(
      { error: "メールの送信に失敗しました" },
      { status: 500 }
    );
  }
}




