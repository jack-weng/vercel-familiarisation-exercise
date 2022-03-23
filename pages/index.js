import QuestionList from '../components/QuestionList'
import { questions } from '../questions'

export default function Home({ questions }) {
  return (
    <div>
      <QuestionList questions={questions} />
    </div>
  )
}

export const getStaticProps = async () => {

  return {
    props: {
      questions,
    },
  }
}
