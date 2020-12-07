import React, { Component } from 'react'
// Cách 1 impport css ảnh hưởng toàn bộ ứng dụng
import './style.css';

//Cách 2 import module css thường hay sử dụng
import styleDemo from './DemoStyle.module.css'

export default class extends Component {
    render() {
        return (
            <div>
                <p className="pTextRed">CyberSoft</p>
                <p className={styleDemo.pTextGreen}>Minh Quý</p>
                <p className={styleDemo['pTextGreen']}>Minh Quý</p>
                <p className={`text-center ${styleDemo['pTextGreen']}`}>Minh Quý</p>

                {/*Cách 3 : Phạm vi ảnh hưởng của thẻ thường hay sử dụng  */}
                <p style={{backgroundColor:'#000',color:'green',padding:'15px'}}>
                    Cyber Shoft nè
                </p>
            </div>
        )
    }
}
