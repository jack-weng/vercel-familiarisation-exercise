import QuestionItem from './QuestionItem'
import questionStyles from '../styles/Question.module.css'

const QuestionList = ({ questions }) => {
  return (
    <div className={questionStyles.grid}>
      {questions.map((question) => (
        <QuestionItem question={question} key={question.id}/>
      ))}
    </div>
  )
}

export default QuestionList