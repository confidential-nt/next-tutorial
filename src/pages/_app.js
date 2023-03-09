// top-level React component that wraps all the pages in your application.
import "@/styles/globals.css"; // 글로벌 스타일은 여기에서만 import 가능. 파일의 이름, 위치는 아무거나..

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
