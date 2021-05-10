import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        }
    }

    state = {
        // 수정 버튼을 눌렀을 때 editing 값을 true로 설정해줌
        // true일 때, 기존의 텍스트 형태로 보여주던 값들을 input 형태로 보여 준다.
        editing: false,
        // input 값을 담기위해서 각 필드를 위한 값도 설정함.
        name: '',
        phone: ''
    }

    handleRemove = () => {
        // 삭제 버튼이 클릭되면 onRemove에 id 넣어서 호출
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    // editing 값을 반전 시키는 함수 (false -> true)
    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing });
    }

    // input에서 onChange이벤트가 발생될 때 호출 되는 함수
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    // 컴포넌트가 변경 되면 
    componentDidUpdate(prevProps, prevState) {
        // editing 값이 바뀔 때 처리 할 로직이 작성되어있다.
        //  수정을 눌렀을땐, 기존의 값이 input에 나타남.
        //  수정을 적용할땐, input의 값들을 부모한테 전달.
        const { info, onUpdate } = this.props;
        if(!prevState.editing && this.state.editing) {
            // editing 값이 false -> true로 전환될때, 편집화면으로 전환(react.js에서는 state가 변경되면 다시 rendering이))
            // info의 값을 state에 넣어준다.
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }
        // editing이 true에서 false로 바뀔때, 적용버튼이 바뀐다.
        if(prevState.editing && !this.state.editing){
            // editing 값이 true -> false로 전환 될 때
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }

    render(){
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const { editing } = this.state;

        if (editing) { // 수정 모드
            return (
                <div>
                    <div>
                        <input 
                            value={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input 
                            value={this.state.phone}
                            name="phone"
                            placeholder="전화번호"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            )
        }

        // 일반 모드
        const {
            name, phone, id
        } = this.props.info; // 구조 분해 할당

        return (
            <div style = {style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>    
        );
    }
}

export default PhoneInfo;