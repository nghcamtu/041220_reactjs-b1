import React, { Component } from 'react'

export default class EventBingding extends Component {
    
    handleClick = (title) => {
        //code xử lý
        alert("hello " + title);
    }

    render() {
        return (
            <div>
                <button onClick={() => { //chỗ này hay dùng arrow function để tránh nhầm lẫn
                    //gọi phương thức xử lý
                    this.handleClick("aaa");
                    
                }}>CLICK ME</button>
            </div>
        )
    }
}
