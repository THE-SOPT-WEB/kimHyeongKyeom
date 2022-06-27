import styled from "styled-components";
import { useState, useRef } from "react";
import axios from "axios";
import { PubInfo } from "../types/PubInfo";
import {
  MainWrapper,
  ContentsWrapper,
  HeaderWrapper,
  Title,
  SelectMode,
  Input,
  Button,
  SearchWrapper,
  ResultCard,
} from "../style/StyledMainPage";

function ContentsCard() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [pubList, setPubLIst] = useState<PubInfo[]>([]);
  const userInputLocation = useRef<string[]>([]);

  const getLocation = () => {
    if ("geolocation" in navigator) {
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((position) => {
          const {
            coords: { latitude: y, longitude: x },
          } = position;
          resolve({ x, y });
        });
      });
    }
  };

  async function 위치가져오기() {
    const result = await getLocation();
    return result;
  }

  async function 내근처맥주집가져오기() {
    
    interface Coordinate {
      x: number;
      y: number;
    }
    const { x, y } : Coordinate = await 위치가져오기();

    const result = await axios.get(
      "https://dapi.kakao.com/v2/local/search/keyword",
      {
        headers: {
          Authorization: `KakaoAK ${import.meta.env.VITE_APP_KAKAO_AK}`,
        },
        params: {
          x: x,
          y: y,
          radius: 1000,
          query: "맥주",
        },
      }
    );

    setPubLIst(result.data.documents);
  }

  async function 특정지역맥주집가져오기(location: string) {
    const result = await axios.get(
      "https://dapi.kakao.com/v2/local/search/keyword",
      {
        headers: {
          Authorization: `KakaoAK ${import.meta.env.VITE_APP_KAKAO_AK}`,
        },
        params: {
          query: location + " " + "맥주",
        },
      }
    );
    setPubLIst(result.data.documents);
  }

  function SearchHandler() {
    isClicked
      ? 내근처맥주집가져오기()
      : 특정지역맥주집가져오기(userInputLocation.current.value);
  }

  return (
    <MainWrapper>
      <ContentsWrapper>
        <HeaderWrapper>
          <Title>맥주집 찾기 TypeScript</Title>
          <SelectMode>
            <h2>위치기반으로 검색하기</h2>
            <input type="checkbox" onClick={() => setIsClicked(!isClicked)} />
          </SelectMode>
          <Input disabled={isClicked} />
          <Button onClick={SearchHandler}>검색하기</Button>
        </HeaderWrapper>
        <SearchWrapper>
          {pubList &&
            pubList.map(
              (
                { place_name, place_url, phone, distance, adress_name },
                idx
              ) => {
                return (
                  <ResultCard key={idx}>
                    <a href={place_url}>{place_name}</a>
                    <span>{phone || "번호 없음"}</span>
                    <span>{distance} km</span>
                    <span>{adress_name}</span>
                  </ResultCard>
                );
              }
            )}
        </SearchWrapper>
      </ContentsWrapper>
    </MainWrapper>
  );
}

export default ContentsCard;
