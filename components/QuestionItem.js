import Link from 'next/link'
import questionStyles from '../styles/Question.module.css'

const QuestionItem = ({ question }) => {
  return (
    <Link href={`/question/${question.id}`}>
      <a className={questionStyles.card}>
        <h2>Question {question.id} &rarr; { question.answer !== '' ? <span>&#9745;</span> : <span>&#9744;</span>}</h2>
        <p>{question.title}</p>
      </a>
    </Link>
  )
}

export default QuestionItem