import styles from "./Kickstarter.module.scss"

export default function Kickstarter() {
  return (
    <section>
      <div className="flex">
        <div className={styles["book-container"]}>
          {/* book-container */}
          <div className={styles.book}>
            {/* book */}
            <div />
          </div>
        </div>
        <article>
          <h2>Yes on Kickstarter</h2>
        </article>
      </div>
    </section>
  )
}
