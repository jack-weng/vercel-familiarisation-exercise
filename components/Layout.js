import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import layoutStyles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div>
      <Meta />
      <Nav />
      <div className={layoutStyles.container}>
        <main className={layoutStyles.main}>
          <Header />
          {children}
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default Layout