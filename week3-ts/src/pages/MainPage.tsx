
import { useState, useEffect, useRef } from "react";
import Sirus from "../Sirus";
import { MainScreen, Header, GameSection, ResultSection } from "../style/StyledMainPage";

interface Siru {
  name: string;
  img: string;
}

function App() {

  const randomGameInfo: Siru[] = Sirus.sort(() => Math.random() - 0.5)
  const [round, setRound] = useState<string>("4강");
  const gameWinners = useRef<Siru[]>([]);
  const [siruList, setSiruList] = useState<Siru[]>(randomGameInfo);
  const [gameEnd, setGameEnd] = useState<boolean>(false);

  const getSelectWinner = (pos : number) => {
    gameWinners.current.push(siruList[pos]);
    setSiruList(siruList.slice(2));
  };

  useEffect(() => {
    console.log(siruList, gameWinners.current);
    if (siruList.length === 0 && gameWinners.current.length >= 2) {
      setSiruList(gameWinners.current);
      setRound("결승");
      gameWinners.current = [];
    } else if (siruList.length === 0 && gameWinners.current.length >= 1) {
      setGameEnd(true);
    }
  });

  if (!gameEnd) {
    return (
      <MainScreen>
        <Header>
          <h1>가장 마음에 드는 시루를 선택하세요 ({round})</h1>
        </Header>
        <GameSection>
          {siruList.map((siru, index) => {
            if (index < 2) {
              return (
                <article onClick={() => getSelectWinner(index)}>
                  <img src={siru.img} />
                  <div>{siru.name}</div>
                </article>
              );
            }
          })}
        </GameSection>
      </MainScreen>
    );
  } else {
    return (
      <MainScreen>
        <Header>
          <h1>당신이 선택한 시루는 {gameWinners.current[0].name} 입니다!</h1>
        </Header>
        <ResultSection>
          <article>
            <img src={gameWinners.current[0].img} />
            <div>{gameWinners.current[0].name}</div>
          </article>
        </ResultSection>
      </MainScreen>
    );
  }
}

export default App;
