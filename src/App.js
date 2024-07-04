import "./App.css";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Welcome from "./components/Welcome";
import TodoFeature from "./features/Todo/pages/index";
import ColorBox from "./components/ColorBox";
import Counter from "./components/Counter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Shop from "./components/Shop";

// function Hello(name) {
//   return "Hello " + name;
// }
// function sayHi() {
//   alert("HI React JS Props");
// }

function App() {
  // var tuoi = 27;
  // var name = "Lê Vũ Nhật Anh";
  // var t = 7,
  //   l = 9;
  // var product = {
  //   id: 1,
  //   name: "IPhone 15 Pro Max 1TB",
  //   price: 40000000,
  //   status: true,
  // };
  // let name = "Phong dep trai";
  return (
    <div
      className="App"
      style={{ borderWidth: 0, borderColor: "red", borderStyle: "solid" }}
    >
      <h1 className="text-red-500 text-7xl mb-5">Shop điện thoại</h1>
      <button
        className="text-red-800"
        onClick={() => {
          console.log("Click me");
        }}
      >
        {/* Click me {name} */}
      </button>
      {/* <Display name="Trần Văn Trụi" cssStyle="red" />
      <Display name="Nguyễn Thị Bưởi" cssStyle="green" />
      <LoginForm hi={sayHi} />
      <Welcome user={{ id: 1, name: "Admin" }} /> */}
      {/* <p style={{ color: "green", fontSize: 20 }}>
        {Hello("Trần Văn ReactJS")}
      </p> */}
      <Header />
      <div className="container-fluid">
        <div className="row"></div>
      </div>
      {/* <hr className="mt-10"></hr>
      <div className="text-4xl">Name: {name} </div>
      <div className="text-3xl">Tuổi: {tuoi}</div>
      <div className="text-3xl">Điểm Trung Bình: {(t + l) / 2}</div>
      <hr className="mt-10"></hr>
      <div className="text-4xl">ID: {product.id}</div>
      <div className="text-3xl">Tên sản phẩm: {product.name} </div>
      <div className="text-3xl">Giá: {product.price}đ</div>
      <div className="text-3xl">
        Tình trạng: {product.status ? "Active" : "Đang xử lý"}
      </div>
      <hr className="mt-10"></hr>
      <div className="">
        <i class="fa-solid fa-cat"></i>Powered by Shop điện thoại. 2024
      </div> */}

      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/colorbox" element={<ColorBox />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
  // function Display(props) {
  //   let style =
  //     props.cssStyle == "red"
  //       ? { color: "red", fontsize: 20 }
  //       : { color: "green", fontsize: 20 };
  //   return (
  //     <div>
  //       <p>{props.name}</p>
  //       <p style={style}>{Hello("Trần Văn ReactJS")}</p>
  //       <hr></hr>
  //     </div>
  //   );
  // }
}

export default App;
