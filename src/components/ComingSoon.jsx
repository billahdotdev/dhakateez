"use client"

import { useState, useEffect } from "react"
import styles from "./ComingSoon.module.css"

// Add these icon components
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const ComingSoon = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className={styles.container}>
      {/* Dynamic background with mouse interaction */}
      <div
        className={styles.dynamicBg}
        style={{
          "--mouse-x": `${mousePosition.x}%`,
          "--mouse-y": `${mousePosition.y}%`,
        }}
      ></div>

      {/* Geometric patterns */}
      <div className={styles.geometricPatterns}>
        <div className={styles.hexagon1}></div>
        <div className={styles.hexagon2}></div>
        <div className={styles.triangle1}></div>
        <div className={styles.triangle2}></div>
        <div className={styles.diamond}></div>
      </div>

      {/* Global network visualization */}
      <div className={styles.networkLines}>
        <svg className={styles.networkSvg} viewBox="0 0 100 100">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(241,196,15,0.6)" />
              <stop offset="50%" stopColor="rgba(46,204,113,0.6)" />
              <stop offset="100%" stopColor="rgba(241,196,15,0.6)" />
            </linearGradient>
          </defs>
          <path className={styles.networkPath1} d="M10,20 Q50,5 90,30" stroke="url(#lineGradient)" />
          <path className={styles.networkPath2} d="M5,50 Q30,25 60,45 Q80,65 95,40" stroke="url(#lineGradient)" />
          <path className={styles.networkPath3} d="M15,80 Q45,60 75,85" stroke="url(#lineGradient)" />
          <circle className={styles.networkNode} cx="10" cy="20" r="2" />
          <circle className={styles.networkNode} cx="50" cy="30" r="2" />
          <circle className={styles.networkNode} cx="90" cy="30" r="2" />
          <circle className={styles.networkNode} cx="30" cy="45" r="2" />
          <circle className={styles.networkNode} cx="75" cy="85" r="2" />
        </svg>
      </div>

      <div className={`${styles.content} ${isLoaded ? styles.loaded : ""}`}>
        {/* Brand section with creative typography */}
        <div className={styles.brandSection}>
          <div className={styles.brandContainer}>
            <h1 className={styles.brandName}>
              <span className={styles.brandPart1}>Dhaka</span>
              <span className={styles.brandPart2}>Teez</span>
            </h1>
            <div className={styles.brandAccent}></div>
          </div>

          <div className={styles.sloganContainer}>
            <div className={styles.sloganWrapper}>
              <span className={styles.sloganGlobal}>Globally</span>
              <span className={styles.sloganLocal}>Local</span>
            </div>
            <div className={styles.sloganSubtext}>টি-শার্ট বিজনেসের জন্য এক্সপার্ট সল্যূশন।</div>
          </div>
        </div>

        {/* Coming soon with creative effects */}
        <div className={styles.messageSection}>
          <div className={styles.comingSoonWrapper}>
            <h2 className={styles.comingSoon}>
              <span>C</span>
              <span>o</span>
              <span>m</span>
              <span>i</span>
              <span>n</span>
              <span>g</span>
              <span className={styles.space}></span>
              <span>S</span>
              <span>o</span>
              <span>o</span>
              <span>n</span>
            </h2>
          </div>

          <p className={styles.description}>
            একটা নতুন গল্প শুরু হতে যাচ্ছে— আপনার ব্র্যান্ড অথবা ব্যবসার সাথে ঢাকাটিজের পার্টনারশিপের গল্প। ১২ বছরের রপ্তানির অভিজ্ঞতা, আপাতত
            ট্রেন্ডি টি-শার্ট দিয়ে শুরু। আপনার ভালোবাসা পেলে শার্ট, প্যান্ট এবং অন্যান্য আইটেম নিয়েও কাজ করার ইচ্ছা আছে। লেট'স গ্রো টুগেদার।
          </p>

          {/* Progress indicator */}
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div className={styles.progressFill}></div>
            </div>
            <span className={styles.progressText}>85% complete, preparing for launch</span>
          </div>
        </div>

        {/* Interactive elements */}
        <div className={styles.interactiveSection}>
          <div className={styles.orbitContainer}>
            <div className={styles.centerDot}></div>
            <div className={styles.orbitRing1}>
              <div className={styles.orbitDot}></div>
            </div>
            <div className={styles.orbitRing2}>
              <div className={styles.orbitDot}></div>
            </div>
            <div className={styles.orbitRing3}>
              <div className={styles.orbitDot}></div>
            </div>
          </div>
        </div>

        {/* Contact and Social Media Section */}
        <div className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <div className={styles.phoneContainer}>
              <span className={styles.phoneLabel}>Get in touch</span>
              <a href="tel:+8801711992558" className={styles.phoneNumber}>
                +8801711992558
              </a>
            </div>
          </div>

          <div className={styles.socialMedia}>
            <span className={styles.socialLabel}>Follow our journey</span>
            <div className={styles.socialIcons}>
              <a
                href="https://facebook.com/dhakateez"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialIcon} ${styles.facebook}`}
                aria-label="Follow us on Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com/dhakateez"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialIcon} ${styles.instagram}`}
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://tiktok.com/@dhakateez"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialIcon} ${styles.tiktok}`}
                aria-label="Follow us on TikTok"
              >
                <TikTokIcon />
              </a>
              <a
                href="https://x.com/dhakateez"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialIcon} ${styles.x}`}
                aria-label="Follow us on X"
              >
                <XIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className={styles.particles}>
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`${styles.particle} ${styles[`particle${i + 1}`]}`}></div>
        ))}
      </div>
    </div>
  )
}

export default ComingSoon
