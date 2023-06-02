# ちくちく言葉チェッカー

ちくちく言葉チェッカーは、入力された文から「ちくちく言葉」と呼ばれる悪口を検知し、文中に含まれていた場合に検知した言葉を表示するWebアプリです。

## 使用技術

- TypeScript
- Preact
- Tailwind CSS
- ランタイム環境: Deno

## デプロイ

このアプリはDeno Deployを使用してデプロイされています。アプリの公開URLは [こちら](https://tikutiku.deno.dev/) です。

## 使用方法

1. ちくちく言葉チェッカーの公開URLにアクセスします。
2. テキスト入力フィールドに文を入力します。
3. 入力された文中に「ちくちく言葉」が含まれている場合、検知した言葉が表示されます。

## 開発

### ローカル環境での実行

1. リポジトリをクローンします。
2. ターミナルでリポジトリのディレクトリに移動します。
3. 以下のコマンドを実行して、アプリを起動します:

   ```bash
   deno task start

