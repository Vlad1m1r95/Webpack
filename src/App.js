import React from 'react'
import $ from 'jquery'
import { render } from 'react-dom';


let result = ''
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      value: '*'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;


    this.setState({
      [name]: value
    });
  }
  handleSelectChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();
    switch(this.state.value){
      case  '+' :
      result = Number(this.state.num1)   + Number(this.state.num2)
      render(<Result />, document.getElementById('app')) 
      break
      case '-' :
      result = Number(this.state.num1)   - Number(this.state.num2)
      render(<Result />, document.getElementById('app')) 
      break
      case '/' :
      result = Number(this.state.num1)   / Number(this.state.num2)
      render(<Result />, document.getElementById('app')) 
      break
      case '*' :
      result = Number(this.state.num1)   * Number(this.state.num2)
      render(<Result />, document.getElementById('app')) 
      break
    }
    
   
   
    
  }
 
  render() {
    return (
     
        <div className="container">
          <div className="row">
            
            <div className="col-md-12">
            <form onSubmit={this.handleSubmit}  className="block">
          <h1>React Калькулятор</h1>
            {/* <div className="container">
              <div className="row"></div>
            </div> */}
             <div className="form-element col-md-6 offset-md-3">
               <label>Число 1</label>
               <input type="number" name="num1"  value={this.state.num1} required onChange={this.handleInputChange} />
               <label>Выберите дейсвие</label>
               <select value={this.state.value} onChange={this.handleSelectChange} >
                 <option value="*">Умножить</option>
                 <option value="/">Разделить</option>
                 <option value="+">Сложить</option>
                 <option value="-">Вычесть</option>
               </select>
               <label>Число 2</label>
               <input type="number"  name="num2" value={this.state.num2} required onChange={this.handleInputChange}/>
               <button  type="submit">Рассчитать</button>
             </div>
         
            </form>
          </div>
        </div>
        </div>
     
    )
  } 
}

 class Result extends App  {
   render(){
     return(
       
      <div className="container h-100">
      <div className="row align-items-center h-100">
          <div className="col-12 mx-auto">
              <div className="jumbotron text-center  block-result">
                  <h1 className="display-4">Ваш результат:</h1>
                  <h1 className="display-6">{result}</h1>
                  <p className="lead">
                      <a onClick={returnHome.bind(this)}  className="btn btn-primary btn-color btn-lg" role="button">Вернуться</a>
                  </p>
              </div>
          </div>
      </div>
  </div>
    
     )
   }
  
}
const returnHome = () => {
  event.preventDefault()
  render(<App />, document.getElementById('app'))
}




