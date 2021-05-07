import React, { Component } from 'react';

class Student extends Component {
    state = {
        id: '',
        name: '',
        address: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            id: '',
            name: '',
            address: ''
        })
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    placeholder = "id"
                    value = {this.state.id}
                    onChange = {this.handleChange}
                    name = "id"
                />
                <input 
                    placeholder = "name"
                    value = {this.state.name}
                    onChange = {this.handleChange}
                    name = "name"
                />
                <input 
                    placeholder = "address"
                    value = {this.state.address}
                    onChange = {this.handleChange}
                    name = "address"
                />
                <button type="submit">등록</button>
            </form>
        )
    }
}

export default Student;