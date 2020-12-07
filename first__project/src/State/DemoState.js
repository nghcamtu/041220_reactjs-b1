import React, { Component } from 'react'

// Reactjs cung cấp render và re-render 
// STATE:
    //+ là thuộc tính chứa các giá trị thay đổi khi người dùng thao tác event.
    //+ là thuộc tính có sẵn của React Class Component

export default class DemoState extends Component {
    

    // isLogin = false; //true là đã đăng nhập, false là chưa
    username="cybersoft";
    state= {
        isLogin: false
    }
    
    // C2: dùng function 
    renderLogin=()=>{
        if(this.state.isLogin){
            return <a className="nav-link">Hello {this.username}</a>;
        }
        return <button className="nav-link bg-dark text-white" onClick={()=> 
            this.handleLogin()
        }> Đăng nhập</button>
    };
        
    handleLogin= ()=>{
        //Không được set giá trị trực tiếp cho state
        // this.state.isLogin= true; 
        
        
        let newState= {
            isLogin: true}
        //setState là phương thức bất đồng bộ
        this.setState(newState, ()=> {
            console.log("giá trị của isLogin: ", this.state.isLogin);
        });
        
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item" >
                                    {/* C1 */}
                                    {this.state.isLogin ? <a className="nav-link">Hello {this.username}</a>:
                                        <button className="nav-link bg-dark text-white"> Đăng nhập</button>
                                    }
                                    {/* C2, gọi function */}
                                    
                                    

                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
   
            </div>
        )
    }
}
