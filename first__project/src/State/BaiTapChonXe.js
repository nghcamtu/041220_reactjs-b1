import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
//state chứa giá trị thay đổi trên giao diện khi người dùng thao tác
state= {
    imgSrc: './img/imgCar-20201207/imgBlackCar.jpg'
}

//C2: viết thành function cho dễ quản lý
changeColor= (color)=>{
    this.setState({
        imgSrc: `./img/imgCar-20201207/img${color}Car.jpg`
    })
};


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {/* <img src="./../../public/img/imgCar-20201207/imgRedCar.jpg" /> */}
                        {/* root đi từ public */}
                        <img className="img-fluid" src={this.state.imgSrc} />
                    </div>
                    
                    <div className="col-md-6">
                        <button className="btn btn-danger" onClick={()=>{
                            //C1:
                            // this.setState({
                            //     imgSrc: './img/imgCar-20201207/imgRedCar.jpg'
                            // })
                            //C2 gọi tới function thôi:
                            this.changeColor('Red');
                        }}>Red Color</button>
                        <button className="btn btn-light" onClick={()=>{
                            //C1:
                            // this.setState({
                            //     imgSrc: './img/imgCar-20201207/imgSilverCar.jpg'
                            // })
                            //C2:
                            this.changeColor('Silver');
                        
                        }}>Silver Color</button>
                        <button className="btn btn-dark" onClick={()=>{
                            // C1:
                            // this.setState({
                            //     imgSrc: './img/imgCar-20201207/imgBlackCar.jpg'
                            // })
                            //C2:
                            this.changeColor('Black');
                        }}>Black Color</button>
                    </div>
                    
                    {/* <div className="col-md-6">
                        <div className="row">
                                 <div className="col-4">
                                <button className="btn btn-warning">Red Color</button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-light">Silver Color</button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-dark">Black Color</button>
                            </div>
                        </div>
                    </div> */}
                    
                </div>
            </div>
        )
    }
}
