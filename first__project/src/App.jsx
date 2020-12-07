import logo from "./logo.svg";
import "./App.css";
import FunctionComponent from "./component/FunctionComponent";
import TagSanPham from "./component/TagSanPham";
import ClassComponent from "./component/ClassComponent";
import BaiTapLayOut from "./component/BaiTapLayout/BaiTapLayOut";
import BTHeader from "./component/BaiTapLayout/BTHeader";
import DemoStyle from "./component/DemoStyle";

function App() {
    return (
        <div className="App">
            <BaiTapLayOut />
            {/* <DemoStyle/> */}
            {/* <p className="pTextRed">Thẻ p trogn app</p> */}
        </div>
    );
}

export default App;
