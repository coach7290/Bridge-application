import React from 'react'
import cont from '../assets/continue.png';
import { Link } from 'react-router-dom';
import { ReactComponent as Check } from '../assets/check.svg';

const Quotation = ({ questions, setSum, sum, setQuestions }) => {
    const handleNumberClick = (number) => {
        setSum(nums => nums.includes(number) ? nums.filter(n => n !== number) : [number, ...nums])
        const editActiveItem = questions?.map(q => {
            if (q.estimate === number) {
                return { ...q, clicked: !q.clicked };
            }
            return q
        })
        setQuestions(editActiveItem)
    }
    const sumSelectedValues = () => {
        if (sum.length) {
            const sums = sum.reduce((x, y) => x + y);
            console.log(sums);
            return sums
        }
        return ''

    }

    return (
        <div className="quotation-container">
            {questions.map((question, index) => {
                return (
                    <div onClick={() => handleNumberClick(question.estimate)} key={index} className={`question ${question.clicked ? 'isActive' : ''}`}>
                        <div className='check-logo-container'><Check className={`${question.clicked ? 'isActive' : ''}`} /></div><p>{question.question}</p><span className={`estimation-row`}><p>Estimate</p><p className={`${question.clicked ? 'isActive' : ''}`}>{`£${question.estimate}`}</p></span>
                    </div>
                )
            })}
            <div></div>
            <div className='total'><p>Total</p><p className='totalValue'>{`£ ${sumSelectedValues()}`}</p></div>
            <div className='continue'><Link to='/questions'><p>Continue</p></Link><div className='continue-logo'><img src={cont}></img></div></div>
        </div>
    )
}

export default Quotation
