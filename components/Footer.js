import Image from 'next/image'
import footerStyles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
        <a
          href="https://www.linkedin.com/in/jack-jiawei-weng/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by<span>&nbsp;Jack Weng</span>
        </a>
      </footer>
  )
}

export default Footer