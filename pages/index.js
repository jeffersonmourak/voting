import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { isMobile } from "react-device-detect";

export default function Home() {
  const isVotingOpen = process.env.NEXT_PUBLIC_VOTING == "true";
  const votingOption = process.env.NEXT_PUBLIC_OPTION;
  const toPhoneNumber = process.env.NEXT_PUBLIC_PHONE;

  const votingHref = `sms:+1${toPhoneNumber}&body=${votingOption}`;

  return (
    <div className={styles.container}>
      <Head>
        <title>Caregiver App</title>
        <meta name="description" content="Caregiver App" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Caregiver App</h1>

        {isVotingOpen && (
          <a href={votingHref} className={styles.button}>
            Vote Now
          </a>
        )}
        {!isVotingOpen && <h3>The voting will begin soon!</h3>}

        {!isMobile && (
          <Image
            src="/phone.png"
            width="1200"
            height="300"
            objectFit="contain"
          />
        )}
        {isMobile && (
          <div style={{ marginTop: "10rem" }}>
            <Image
              src="/mobile.png"
              width="500"
              height="600"
              objectFit="contain"
              
            />
          </div>
        )}
      </main>
    </div>
  );
}
