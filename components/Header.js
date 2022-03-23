import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Jack&lsquo;s</span> Vercel Exercise
      </h1>
      <p className={headerStyles.description}>
        A short familiarisation exercise to Vercel and NextJS!
      </p>
    </div>
  )
}

export default Header