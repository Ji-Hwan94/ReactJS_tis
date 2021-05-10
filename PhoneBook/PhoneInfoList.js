import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined')
    } // 객체

    render() {
        const { data, onRemove, onUpdate } = this.props; // 구조 분해 할당
        const list = data.map(
            info => (
            <PhoneInfo 
                key={info.id} // key 값을 설정하면 배열의 index가 key값으로 자동으로 설정된다. key값은 유니크 한 값으로 설정한다.
                info={info} 
                onRemove={onRemove}
                onUpdate={onUpdate}
            />) // key와 info 모두 props
        );                                                    

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;