import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Maintemplate from "./components/MainTemplate";
import Header from "./components/Header";
import StoreList from "./components/StoreList";
import { flushSync } from "react-dom";

function App() {
  const [storeList, setStoreList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef("");


  // const getLocation = (errHandler) => {
  //   if ("geolocation" in navigator) {
  //       return new Promise((resolve) => {
  //       navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           const {
  //             coords: { latitude: y, longitude: x },
  //           } = position;
  //           resolve({ x, y });
  //         },
  //         (e) => {
  //           alert("HTTPS 연결을 확인해주세요.");
  //           errHandler && errHandler();
  //         }
  //       );
  //     });
  //   }
  
  //   return { x: 126.8350976, y: 37.617664 };
  // };
  
  // // 1 (using async-await)
  // async function 위치가져오기() {
  //   const result = await getLocation();
  // }
  

  return (
    <>
      <Maintemplate>
        <Header />
        <StoreList />
      </Maintemplate>
    </>
  );
}

export default App;
