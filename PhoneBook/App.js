import React, { Component } from 'react';
import PhoneForm from "./components/PhoneForm";

class App extends Component{
    handleCreate = (data) => {
        console.log(data);
    }
    render(){
        return(
          <div>
              <PhoneForm 
              // PhoneForm의 값을 받아서 handleCreate라는 메소드를 통해 다시 PhoneForm에게 전달한다.
                  onCreate = {this.handleCreate}
              />
          </div>
      );
    }
}
export default App;
