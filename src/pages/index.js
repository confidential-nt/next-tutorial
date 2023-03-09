import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Date from "../../components/date";
import Layout from "../../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../../lib/posts";

const inter = Inter({ subsets: ["latin"] });
const siteTitle = "nothing";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <nav>
        <Link href="/posts/first-post">test1</Link>
        <Link href="/posts/second-post">test2</Link>
      </nav>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  // only run on the server-side
  // won’t even be included in the JS bundle for the browser
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
