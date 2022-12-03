import Head from "next/head";
import LandingSection from "../src/components/landingsection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Veriface</title>
        <meta name="description" content="A crypto blacklisting app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LandingSection/>
      </main>
    </div>
  );
}


