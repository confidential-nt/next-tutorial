import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../../components/layout";

export default function nana() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>hihihi1</h1>
      <h2>
        <Link href="/">Back To Home</Link>
      </h2>
    </Layout>
  );
}

// Image, Script component => 기존 html 태그의 확장. 성능 최적화, 용량 minimize, 로드 타이밍 설정, responsive 등의 유용한 기능 제공
