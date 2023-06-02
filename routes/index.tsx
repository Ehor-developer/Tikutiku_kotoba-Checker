import { Head } from "$fresh/runtime.ts";
import Words from "../islands/words.tsx";
import word from "../data/Words.json" assert { type: "json" };

export default function Home() {
  return (
    <>
      <Head>
        <title>ちくちく言葉検知</title>
        <meta property="og:type" content="website" />
        <meta property="og:description"
          content="ちくちく言葉を検知します。" />
      </Head>
      <div class="container mx-auto px-4 py-8">
      <div class="flex m-4">
        <div class="relative w-full">
          <div class="container mx-auto py-8">
            <div class="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8">
              <div class="bg-blue-100 px-20 py-4 text-center m-3 rounded-lg">
                <h1 class="text-2xl font-bold mb-4">みんなでなくそう!!</h1>
                <h1 class="text-5xl font-bold mb-4">ちくちく言葉</h1>
              </div>
              </div>
              <Words word={word} />
              </div>
              </div>
              </div>
      </div>
    
    </>
  );
}
