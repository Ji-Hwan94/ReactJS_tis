import React, { Component } from 'react';

class Search extends Component {
    state = {
        name: ''
    }
    inputData = (e) => {
        this.setState({
           // input 태그에서 발생한 이벤트의 위치와 값을 나타낸다.
            name: e.target.value
        })
    } 
    searchData = () => {
        // 상태값을 onCreate를 통하여 app.js에 전달한다.
        // onCreate는 app.js에 있다.
        this.props.onCreate(this.state);
    }

    render(){

        return (
            <div>
                <input
                    placeholder="검색어를 입력하세요"
                    value={this.state.name}
                    // input 태그의 참조값
                    onChange={this.inputData}
                />
                <div> {this.state.name}</div>
                <button onClick={this.searchData} >검색</button>
            </div>
        )
    }
}

export default Search;