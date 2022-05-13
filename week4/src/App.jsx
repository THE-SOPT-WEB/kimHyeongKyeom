import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { flushSync } from "react-dom";
import styled from "styled-components";

function App() {
  const [storeList, setStoreList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [myLocation, setMyLocation] = useState({});

  useEffect(() => {
    위치가져오기();
  }, []);

  const handleCheckBox = ({ target }) => {
    setIsChecked(target.isChecked);
  };

  const getLocation = (errHandler) => {
    if ("geolocation" in navigator) {
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const {
              coords: { latitude: y, longitude: x },
            } = position;
            resolve({ x, y });
          },
          (e) => {
            alert("HTTPS 연결을 확인해주세요.");
            errHandler && errHandler();
          }
        );
      });
    }

    return { x: 126.8350976, y: 37.617664 };
  };

  async function 위치가져오기() {
    const result = await getLocation();
    setMyLocation(result);
  }

  async function getStoreNearByMe() {
    const result = await axios.get(
      "https://dapi.kakao.com/v2/local/search/keyword",
      {
        headers: {
          Authorization: `KakaoAK ${import.meta.env.VITE_APP_KAKAO_AK}`,
        },
        params: {
          x: myLocation.x,
          y: myLocation.y,
          radius: 1000,
          query: "맥주",
        },
      }
    );
    setStoreList(getInfoList(docuemnts));
    setIsLoading(false);
  }

  async function getStoreParticular(location) {
    const result = await axios.get(
      "https://dapi.kakao.com/v2/local/search/keyword",
      {
        headers: {
          Authorization: `KakaoAK ${아까발급받은REST - API - KEY}`,
        },
        params: {
          query: `${location} 맥주`,
        },
      }
    );

    setStoreList(getInfoList(docuemnts));
    setIsLoading(false);
  }

  const getInfoList = (documents) => {
    const infoList = documents.map((shop) => ({
      id: shop.id,
      shopName: shop.place_name,
      shopPhoneNumber: shop.phone,
      shopUrl: shop.place_url,
      shopDistance: shop.distance,
      shopAddress: shop.adress_name,
    }));
    return infoList;
  };

  const handleClickButon = () => {
    if (isChecked) {
      setIsLoading(true);
      getStoreNearByMe();
    } else {
      if (!text) alert("지역명을 입력해주세요");
      else {
        setIsLoading(true);
        getStoreParticular(text);
      }
    }
  };

  const handleChangeInput = (e) => {
    StyleSheetContext(e.target.value);
  };

  const handleResultClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <MainTemplate>
        <HeaderBlock>
          <Title>이동네 맥주대장이 누구냐?</Title>
          <SearchParticular>
            지역기반으로 검색하기
            <CheckBox type="checkBox" id="check" />
            </SearchParticular>
          <div>👇🏻 원하는 지역을 검색하세요 👇🏻</div>
          <Input
            placeholder="검색"
            disabled={isChecked}
            // onChange={(e) => handleChangeInput}
            // value={text}
          />
          <Button>검색하기</Button>
        </HeaderBlock>
      </MainTemplate>
    </>
  );
}

export default App;

const MainTemplate = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 512px;
  height: 100%;
  min-height: 85vh;

  position: relative;
  background: white;
  background-color: #495057;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgb(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const HeaderBlock = styled.header`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid white;
`
  const Title = styled.h1`
    font-size: 36px;
    color: #20c997;
  `
  const SearchParticular = styled.h2` 
    color: #38d9a9;
  `

  const CheckBox = styled.input `
    width: 30px;
    height: 17px;
    margin: 0;
  `

  const Input = styled.input `
    border: none;
    background: none;
    margin: 10px;
    padding: 5px;
    border-bottom: 1px solid white;
    text-align: center;
    &::placeholder {
      color: #ffffff61;
    }`
  
  const Button = styled.button`
    width: 150px;
    height: 30px;
    margin-bottom: 15px;
    cursor: pointer;
    border: 1px solid white;
    border-radius: 5px;

    background: none;
    color: white;
    &:hover {
      background-color: #38d9a989;
    }
    &:active {
      background-color: #38d9a9e4;
    }
  
`

// const SearchResult = styeld.div`
  
// `