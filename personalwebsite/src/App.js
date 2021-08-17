import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';

function App() {
  return (
    <ReactFullPage
      scrollingSpeed={1000}
      render={({state, fullpageApi}) => {
        return (
          <ReactFullpage.Wrapper>
          <div className="section">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
        )
      }}
      />
  );
}

export default App;
