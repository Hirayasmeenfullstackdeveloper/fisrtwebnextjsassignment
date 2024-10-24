import styles from "./page.module.css"
import Link from "next/link"
export default function Home(){
  return(
    <div className={styles.container} >
     
    <nav>
       <ul  className={styles.navbar}>
        <li> <Link  href="/" >Home </Link></li>
        <li> <Link  href="/about">About</Link></li>
        <li> <Link  href="/contact">Contact </Link></li>
         <li> <Link  href="/service">Service </Link></li>
    </ul>
   </nav>
   <h1 className={styles.title}>This is My Home Page</h1>
  </div>
  )
};
