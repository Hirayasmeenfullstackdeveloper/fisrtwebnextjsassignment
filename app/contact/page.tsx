import styles from "../contact/contact.module.css"

import Link from "next/link"

export default function Contact(){
    return(
      <div  className={styles.container} >
     <nav >
      <ul  className={styles.navbar} >
      
      <li> <Link  href="/" >Home </Link></li>
      <li> <Link  href="/about">About </Link></li>
      <li> <Link  href="/service">Service</Link></li>
      <li> <Link  href="/contact/contact-us">Contact Us</Link></li>

      </ul>
      </nav>
      <h1 className={styles.title}>This is Contact Page</h1>
      </div>
      )
      };