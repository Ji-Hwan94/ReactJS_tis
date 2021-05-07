import React, { Component } from 'react';
import Student from './component/Student';

class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }
  render(){
    return (
      <div>
        <Student
          onCreate = {this.handleCreate}
        />
      </div>
    )
  }
}

export default App;
