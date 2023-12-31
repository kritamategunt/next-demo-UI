"use client"
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css"

const navbarLink = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>DEMO NEXT.JS</Link>
      <div className={styles.links}>
        {navbarLink.map((link) => (
          <Link  className={styles.link} key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout} onClick={()=>{
            console.log("Logout")
        }}>
            Logout
          </button>
      </div>
    </div>
  );
};

export default Navbar;
