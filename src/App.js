import React from 'react';
import './App.css';

class App extends React.Component {
  toPigLatin = (english) => {
    let arrayOfWords = english.split(" ");
    // let firstLetter = arrayOfWords.map((word) => {
      // return word.charAt(0)
    // })
    // let lastHalf = arrayOfWords.map((word) => {
    //   return word.substring(1);
    // })
    const pigLat = [];
    arrayOfWords.forEach(word => {
      let changedWord = word.substring(1) + word.charAt(0)+"ay";
      pigLat.push(changedWord);
    });
    return pigLat.join(" ");
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const english = event.target[0].value;
    const result = this.toPigLatin(english)
    this.setState({toPigLatin: result}) 
  }

  render() {
    const toPigLatin = this.state?.toPigLatin
    return (
      <div className="container">
        <h1>Pig Latin Converter 🐷</h1>
        <form onSubmit={this.handleSubmit}>
          <p>Enter your message here to be translated into PigLatin:</p>
          <textarea></textarea>
          <input type="submit" value="Translate"/>
        </form>
      <div className="output">
        <h3>{toPigLatin}</h3>
      </div>

<p> Have fun!! :) </p>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

export default App;
