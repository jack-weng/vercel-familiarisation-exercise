import Meta from '../components/Meta'
import aboutStyles from '../styles/About.module.css'

const about = () => {
  return (
    <div className={aboutStyles.container}>
      <Meta title='About' />
      <main className={aboutStyles.main}>
        <h2>
          About
        </h2>
        <p>
          Get started with this pure template for NextJS project!
        </p>
      </main>
    </div>
  )
}

export default about