import Link from "next/link"
import styles from "./Kickstarter.module.scss"

export default function Kickstarter() {
  return (
    <section>
      <div className="flex max-w-screen-xl mx-auto py-2 px-10 gap-7 items-center">
        <div className={styles["book-container"]}>
          {/* book-container */}
          <div className={styles.book}>
            {/* book */}
            <div />
          </div>
        </div>
        <article className="select-none flex flex-col font-mouse-memoirs">
          <h1 className="text-5xl">Yes on Kickstarter</h1>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            repellendus tempora eum hic perferendis odit porro delectus culpa
            molestias eveniet numquam vel commodi consequuntur, facilis
            obcaecati eligendi voluptatum illum pariatur?
          </p>
          <div className="translate-y-3">
            <Link href="#">
              <a className="button-link text-xl">Buy on Kofi</a>
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}
