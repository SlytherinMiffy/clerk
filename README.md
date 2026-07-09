# 認証プロトタイプ (Clerk Auth Prototype)

[Clerk](https://clerk.com) を使用した Next.js 認証プロトタイプです。  
サインイン・サインアウト機能を備えたモダンな認証体験を提供します。

## 技術スタック

- **Next.js** 14.2
- **React** 18
- **TypeScript** 5
- **Clerk** (@clerk/nextjs v5)

## はじめに

### 1. 依存パッケージのインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.example` をコピーして `.env.local` を作成します。

```bash
cp .env.example .env.local
```

[Clerk Dashboard](https://dashboard.clerk.com) からAPIキーを取得し、`.env.local` に設定してください。

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx
```

> **⚠️ 注意**: `.env.local` には機密情報が含まれます。**絶対に Git にコミットしないでください。** `.gitignore` で除外設定済みです。

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くとアプリケーションが表示されます。

## プロジェクト構成

```
clerk/
├── src/
│   ├── app/
│   │   ├── globals.css      # グローバルスタイル
│   │   ├── layout.tsx        # ルートレイアウト (ClerkProvider)
│   │   └── page.tsx          # メインページ
│   └── middleware.ts         # Clerk 認証ミドルウェア
├── .env.example              # 環境変数のサンプル
├── .gitignore                # Git 除外設定
├── next.config.mjs           # Next.js 設定
├── package.json              # パッケージ設定
└── tsconfig.json             # TypeScript 設定
```

