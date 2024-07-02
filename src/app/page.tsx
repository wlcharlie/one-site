import Image from "next/image"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>

      <div className={styles.center}>
        <Image className={styles.logo} src="/icon.jpg" alt="Next.js Logo" width={200} height={200} priority />
        <p style={{ fontSize: "24px" }}>One - See One, Do One, & Done</p>
        <ol>
          <li>Set your the very one goal</li>
          <li>Do the very one goal</li>
          <li>Done</li>
        </ol>
        <br />
        <p>If you have any questions or problems, please send a email to the author of the app</p>
        <a style={{ fontSize: "20px" }} href="mailto:wl00606352@gmail.com">
          wl00606352@gmail.com
        </a>
      </div>
      <div className={styles.grid}></div>
    </main>
  )
}
