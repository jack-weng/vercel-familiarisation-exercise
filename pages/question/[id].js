import { server } from '../../config'
import Link from 'next/link'
import Meta from '../../components/Meta'
import questionStyles from '../../styles/Question.module.css'
import ReactStars from "react-rating-stars-component";
import React from "react";


const question = ({ question }) => {
  const ratingChanged = (newRating) => {
    let data = { 'questionID': question.id,'rating': newRating }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    };
    fetch(`${server}/api/rate`, requestOptions)
  };

  return (
    <div className={questionStyles.pagegrid}>
      <Meta title={`Question ${question.id}`} />

      {/* QUESTION SECTION */}
      <h2>Question {question.id}</h2>
      <h3>{question.title}</h3>
      <Link href={`${question.src}`}>
          <a className={questionStyles.link} target="_blank" rel="noopener noreferrer">{question.link}</a>
      </Link>

      {/* ANSWER SECTION */}
      <h2>Answer:</h2>
      {question.answer.split("<br />").map((para) => (
        para.search("<Code>") !== -1 ?
          <><code className={questionStyles.code}>{para.replace("<Code>","")}</code><br /></> :
        para.search("<cite>") !== -1 ?
          <><cite className={questionStyles.cite}>{para.replace("<cite>","")}</cite><br /></> :
          <p>{para.replace("<Link />","")}&nbsp;
            {para.search("<Link />") !== -1 
              ? <span>
                  <Link href={`${question.answerSrc}`}>
                    <a 
                      className={questionStyles.link} 
                      target="_blank" 
                      rel="noopener noreferrer">{question.answerLink}</a>
                  </Link>
                </span>
              : <></>
            }
          </p>)
      )}
      <br />
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />

      <Link href={`/`}>
        <a className={questionStyles.button}>
          &larr; Go Back
        </a>
      </Link>
    </div>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/questions/${context.params.id}`)

  const question = await res.json()

  return {
    props: {
      question,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/questions`)

  const questions = await res.json()

  const ids = questions.map((question) => question.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}


export default question