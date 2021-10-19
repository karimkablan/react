import react from "react";
import './ChuckNorris.css';


/*
let myLink = 'https://api.chucknorris.io/jokes/random';

let joke =await (await fetch(myLink)).json();
    let norris = joke.value
*/

class ChuckNorris extends react.Component {
    constructor(props) {
      super(props);
      this.fetchJokes = this.fetchJokes.bind(this);
      this.state = {
        jokes: ''
      }
    }
    fetchJokes(){
      fetch('https://api.chucknorris.io/jokes/random').then(response => response.json())
      .then(data => {
          this.setState({jokes: data});
      });
    }
    render(){
      const joke = this.state.jokes
      return(
        <div>
          <input type="button" value="Click to be entertained!" onClick={this.fetchJokes} />
           <div> {joke.value} </div>
        </div>
      );
    }
  }
  
  export default ChuckNorris ;