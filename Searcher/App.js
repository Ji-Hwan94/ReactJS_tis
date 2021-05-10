import React, { Component } from 'react';
import Search from './Component/Search';

class App extends Component {
  searching = (data) => {
    const information = data.name;
    document.location.href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query="+information;
  }
  render (){
    return (
      <div>
        <Search
        // onCreate라는 props에 searching 참조값을 전달한다.
        onCreate={this.searching}
        />
      </div>
    );
  }
}

export default App;
