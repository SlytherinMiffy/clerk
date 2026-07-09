import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="brand">認証プロトタイプ</div>
        <div>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="btn">サインイン</button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>

      <main className="main-content">
        <div className="hero-card">
          <SignedIn>
            <h1 className="hero-title">ようこそ！</h1>
            <p className="hero-description">
              認証に成功しました。
            </p>
          </SignedIn>
          <SignedOut>
            <h1 className="hero-title">認証システム</h1>
            <p className="hero-description">
              Clerkを活用した認証プロトタイプ。右上のボタンまたは下のボタンからサインインして体験してください。
            </p>
            <div className="auth-buttons">
              <SignInButton mode="modal">
                <button className="btn">使ってみる</button>
              </SignInButton>
            </div>
          </SignedOut>
        </div>
      </main>
    </>
  );
}
