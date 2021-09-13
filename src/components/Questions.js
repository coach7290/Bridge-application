import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import backRed from '../assets/back-red.png'
import forwardRed from '../assets/forward-red.png'


const Questions = ({ questionIndex, setQuestionsIndex, setQ1Value, setQ2Value, setQ3Value, results, questions, q1Value, q2Value, q3Value, setResultsData }) => {
    const activeQ = ['q1', 'q2', 'q3']


    const setInputQuestionValue = (e) => {
        if (activeQ[questionIndex] === 'q1') {
            setQ1Value(e.target.value)
        } else if (activeQ[questionIndex] === 'q2') {
            setQ2Value(e.target.value)
        } else {
            setQ3Value(e.target.value)
        }
    }
    const setIndexP2Next = () => {
        setQuestionsIndex(prev => prev + 1)

    }
    const setIndexP2Back = () => {
        setQuestionsIndex(prev => prev - 1)
    }
    const calculateResults = () => {
        const updateResults = results?.map(result => {
            const supplierCalculation = (questions[0].estimate + questions[1].estimate) * q2Value

            if (result.title === 'Supplier & product') {
                return { ...result, total: supplierCalculation };
            }
            return result
        })
        setResultsData(updateResults)
    }
    return (
        <div className='question-container'>
            <div className='question-left'>
                <div onClick={setIndexP2Back} className='nav-questions left'><img src={backRed}></img></div>
                <div className='p2-question-container'>
                    <p style={{ display: activeQ[questionIndex] === 'q1' ? 'block' : 'none' }} className='q1'>What is your approximate annual Spend on industrial items?</p>
                    <p style={{ display: activeQ[questionIndex] === 'q2' ? 'block' : 'none' }} className='q2'>Approximately how many unique purchase orders are raised per annum for these items?</p>
                    <p style={{ display: activeQ[questionIndex] === 'q3' ? 'block' : 'none' }} className='q3'>Approximately how many suppliers are you using for industrial supplies</p></div>
                {activeQ[questionIndex] === 'q3' ? <Link onClick={() => calculateResults} to='/results'><div onClick={calculateResults} className='nav-questions right'><img src={forwardRed}></img></div></Link> : <div onClick={setIndexP2Next} className='nav-questions right'><img src={forwardRed}></img></div>}
            </div>
            <div className='input-right'>
                <input onChange={setInputQuestionValue} type='number' />
            </div>
        </div>
    )
}

export default Questions
