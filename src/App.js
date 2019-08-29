import React from 'react'
import $ from 'jquery'

export default class App extends React.Component {
  componentDidMount() {
    $('<h1 />')
      .text('Hello world from JQuery')
      .css({
        textAlign: 'center',
        color: '#2020c1'
      })
      .appendTo($('header'))
  }

  render() {
    return (
      <React.Fragment>
        <header></header>

        <hr />

        <div className="box">
          <h2 className="box-title">Box title</h2>

          <p className="box-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quibusdam repellat incidunt quas facilis obcaecati sunt doloribus perferendis voluptas quis!</p>
        </div>
        <div className="flex-autoprefixer">flex</div>
        {/* <img src="C:\Work\Github\Webpack\src\img\Acute-Dog-Diarrhea-47066074.jpg"></img> */}
         {/* <p>this text created in React</p> */}
      </React.Fragment>
    )
  }
}