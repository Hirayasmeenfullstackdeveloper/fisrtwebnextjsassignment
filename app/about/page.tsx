import styles from "../about/about.module.css";

import Link from "next/link"

export default function about(){
    return(
      <div className={styles.container} >
      
      <nav>
      <ul className={styles.navbar}>
      <li> <Link  href="/" >Home </Link></li>
      <li> <Link  href="/contact">Contact </Link></li>
      <li> <Link href="/contact-us"></Link>Contact Us</li>
      <li> <Link  href="/service">Service </Link></li>
    </ul>
    </nav>
    
    <h1 className={styles.title}>This is About Page</h1>
    
    </div>
      )
      };