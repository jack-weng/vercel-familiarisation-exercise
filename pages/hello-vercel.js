import Meta from '../components/Meta'
import helloVercelStyles from '../styles/HelloVercel.module.css'

const helloVercel = () => {
  return (
    <div className={helloVercelStyles.container}>
      <Meta title='Hello Vercel' />
      <main className={helloVercelStyles.main}>
        <h2>
          Hello Vercel
        </h2>
        <p>
          Redirecting /hello-vercel to https://vercel.com ...
        </p>
      </main>
    </div>
  )
}

export default helloVercel