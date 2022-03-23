// import homeStyles from '../styles/Home.module.css'

// export default function Home() {
//   return (
//     <div className={homeStyles.container}>
//       <main className={homeStyles.main}>
//         <h1 className={homeStyles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={homeStyles.description}>
//           Get started by editing{' '}
//           <code className={homeStyles.code}>pages/index.js</code>
//         </p>

//         <div className={homeStyles.grid}>
//           <a href="https://nextjs.org/docs" className={homeStyles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={homeStyles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/canary/examples"
//             className={homeStyles.card}
//           >
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={homeStyles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//     </div>
//   )
// }

import { server } from '../config'
import QuestionList from '../components/QuestionList'

export default function Home({ questions }) {
  return (
    <div>
      <QuestionList questions={questions} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/questions`)
  const questions = await res.json()

  return {
    props: {
      questions,
    },
  }
}
