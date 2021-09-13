
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import background from './assets/background.png';
import questionsData from './utils/Data';
import Quotation from './components/Quotation';
import Questions from './components/Questions';
import Results from './components/Results';
import results from './utils/ResultsData';






function App() {
  const [questions, setQuestions] = useState(questionsData)
  const [sum, setSum] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [questionIndex, setQuestionsIndex] = useState(0)
  const [q1Value, setQ1Value] = useState(undefined)
  const [q2Value, setQ2Value] = useState(undefined)
  const [q3Value, setQ3Value] = useState(undefined)
  const [resultsData, setResultsData] = useState(results)


  return (
    <div style={{ backgroundImage: `url(${background})` }} className="outer-container">
      <div className='inner-container'>
        <h1 className='title'>{`CALCULATING YOUR TOTAL COST`}</h1>
        <Switch>
          <Route exact path='/' render={(props) => (
            <Quotation sum={sum} questions={questions} setQuestions={setQuestions} setSum={setSum} {...props} />
          )} />
          <Route exact path='/questions' render={(props) => (
            <Questions q1Value={q1Value} q2Value={q2Value} q3Value={q3Value} questions={questions} results={resultsData} setResultsData={setResultsData} setQuestionsIndex={setQuestionsIndex} setQ1Value={setQ1Value} setQ2Value={setQ2Value} setQ3Value={setQ3Value} questionIndex={questionIndex} {...props} />
          )} />
          <Route exact path='/results' render={(props) => (
            <Results results={resultsData} q1Value={q1Value} q2Value={q2Value} q3Value={q3Value} questions={questions} {...props} />
          )} />
        </Switch>
      </div>



    </div>
  );
}

export default App;
