import Head from "next/head";
import LoginForm from "../components/LoginForm";
import styles from "../styles/Home.module.css";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Guest Book</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.leftSection}>
          <h1 className={styles.title}>
            Welcome to <span style={{ color: "#0070f3" }}>Guest Book!</span>
          </h1>
        </div>
        <div className={styles.rightSection}>
          <LoginForm />
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/board">Board</a>
        <a href="/message">meassge</a>
      </footer>
    </div>
  );
}
