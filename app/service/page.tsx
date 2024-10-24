import styles from "../service/service.module.css"
import Link from "next/link"
export default function service(){
    return(
      <div  className={styles.container} >
      <nav >
      <ul className= {styles.navbar}>
      <li> <Link  href="/" >Home </Link></li>
      <li> <Link  href="/about">About </Link></li>
      <li> <Link  href="/contact">Contact</Link></li>
    </ul>
    </nav>
    <h1 className={styles.title}>This is Service Page</h1>
    </div>
      )
      };