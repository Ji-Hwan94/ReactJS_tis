import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
            // input 태그에서 발생한 이벤트의 위치와 값을 나타낸다.
            [e.target.name]: e.target.value
        })
        console.log([e.target.name])
    }
    handleSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();
        // 상태값을 onCreate를 통하여 부모(app.js)에게 전달
        // onCreate는 App.js에 있으며, parameter를 제공한다.
        this.props.onCreate(this.state); // onCreate는 props임. handleCreate(this.state) 호출

        // 상태 초기화
        this.setState({
            name: '',
            phone: ''
        });
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    placeholder="이름"
                    value = {this.state.name}
                    
                    // 값이 변화면 handleChange 함수를 불러옴
                    onChange = {this.handleChange}
                    name = "name"
                />
                <input 
                    placeholder="전화번호"
                    value = {this.state.phone}
                    onChange = {this.handleChange}
                    name = "phone"
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;