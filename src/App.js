import React from 'react';
// import Button3 from './components/Button'
import './App.css';
// import Counter from "./components/Counter"
import WrappedForm from './components/SimpleForm'
import 'antd/dist/antd.css'

class App extends React.Component {
  state = {
    fields: {
      username: 'liutao',    
      age: 20,
      sex: 'female'      
    },
  }

  onChange(changedFields){
    console.log("----------------")
    console.log(changedFields )
    this.setState(
      (fields) => ({fields: {...fields, ...changedFields}})
      )
  }

  render(){
    return (
      <div className="App">
          <WrappedForm   {...this.state.fields} onChange={this.onChange.bind(this)}/>
      </div>
    )
  }

}

export default App;
