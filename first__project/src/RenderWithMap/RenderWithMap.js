import React, { Component } from 'react'

const mangSinhVien= [
    {ma: 1, ten: 'A', hinhAnh: 'https://pixabay.com/illustrations/roses-collage-vintage-antique-1770165/'},
    {ma: 2, ten: 'B', hinhAnh: 'https://pixabay.com/illustrations/roses-collage-vintage-antique-1770165/'},
    {ma: 3, ten: 'C', hinhAnh: 'https://pixabay.com/illustrations/roses-collage-vintage-antique-1770165/'},
];
export default class RenderWithMap extends Component {
    renderTable=()=>{
        //C1:
        // const mangTrSinhVien= []; //[<tr>123</tr>, <tr>232</tr>]
        // for(let index=0; index<mangSinhVien.length; index++){
        //     //mỗi lần duyệt lấy ra 1 đối tượng sinh viên
        //     let sinhVien= mangSinhVien[index];            
        //     //tạo ra thẻ jsx tr sinh viên
        //     let jsxTr= <tr key={index}>
        //         <td>{sinhVien.ma}</td>
        //         <td>{sinhVien.ten}</td>
        //         <td><img src={sinhVien.hinhAnh} /></td>
        //     </tr>;
        //     //push đối tượng vào mảng mangTr
        //     mangTrSinhVien.push(jsxTr);
        // }
        //C2: dùng map()
        const mangTrSinhVien= mangSinhVien.map((sinhVien, index)=>{
            return <tr key={index}>
                    <td>{sinhVien.ma}</td>
                    <td>{sinhVien.ten}</td>
                    <td><img src={sinhVien.hinhAnh} /></td>
                </tr>;
        })
        return mangTrSinhVien;
    };
    
    render() {
        return (
            <div className="container">
                <table>
                    <thead>
                        <tr>Mã</tr>
                        <tr>Tên</tr>
                    </thead>
                    <tbody>
                    {this.renderTable()}
                    </tbody>
                </table>
            
            
            </div>
            
            // [<div key={1}>wqewqe</div>, <div key={2}>ccc</div>]
        )
    }
}
