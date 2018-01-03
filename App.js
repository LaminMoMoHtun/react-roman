import React from 'react';

class App extends React.Component {
	constructor(props){
    super(props);
    this.state = {inputValue: ''};
 
  this.handleChange = this.handleChange.bind(this)
}

   handleChange(e){
    this.setState({inputValue: e.target.value});
  }
  
  
   Roman(decimal)  {
    var letter = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    var num = [1000, 500, 100, 50, 10, 5, 1];
    var i='';
    var roman = '';
    for(i=0; i<num.length; i++){
      while(num[i]<=decimal){
        roman += letter[i];
        decimal -= num[i];
      }
    }
    return(roman);
  }
 
  render(){
    return(
      <div>
        <input type='text' onChange={this.handleChange} value={this.state.inputValue} placeholder='Enter decimal value' />
        <p>Roman Vlaue: {this.Roman(this.state.inputValue)}</p>          
      </div>
    );
  }
}

export default App;