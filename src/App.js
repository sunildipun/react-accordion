import { useState } from 'react';
import './App.css';
import data from './data';

import {Accordion} from './components/accordion/accordion.component'

function App() {
  // const [questions, setQuestions] = useState(data);
  return (
    <section className="container">
      <div className="info">
        <h3 className="title">
          Coronavirus - Facts, advice and measure 🛸 
        </h3>
        <div className="accordion-lists">
        {
          data.map(({id, ...otherValue})=> (
            <Accordion key={id} {...otherValue} />
          ))
        }
        </div>
      </div>
    </section>
  );
}

export default App;
