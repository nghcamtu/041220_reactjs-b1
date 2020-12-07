import React, { Component } from 'react'

export default class Databinding extends Component {
    render() {
        const title= "cybersoft"
        const renderTitle= ()=>{
            //Xử lý
            //Nội dung trả về có thể là chuỗi hooặc số hoặc thẻ html (phải được bao phủ bởi 1 thẻ)
            return "Hello Cybersoft";
        }
        return (
            <div>
                <p id="title">{title}</p>
                <h1>{renderTitle()}</h1>
            </div>
        )
    }
}
