import pic1 from "./assets/윈터.jpg";
import pic2 from "./assets/조유리.jpg";
import pic3 from "./assets/태연.webp";
import pic4 from "./assets/장원영.jpg";
import pic5 from "./assets/은하.jpg";

const $ = (selector) => document.querySelector(selector);

let currentStep;

const quizList = [
  {
    src: pic1,
    answer: "윈터",
  },
  {
    src: pic2,
    answer: "조유리",
  },
  {
    src: pic3,
    answer: "태연",
  },
  {
    src: pic4,
    answer: "장원영",
  },
  {
    src: pic5,
    answer: "은하",
  },
];

function gameManager(gameInfo) {
  initGame(gameInfo);
  attachEvent(gameInfo);
}

window.onload = () => {
  gameManager({
    score: $('.scoreBoard__score'),
    answer: $('ul.answer__list'),
    image: $('.imageBoard > img'),
  });
}

function initGame({ score, image }) {
  currentStep = 0;
  score.innerText = 0;

  image.src = quizList[currentStep].src;
}

function showModal(modalContent, keepOpen) {
  const modal = $('.modal');
  const modalBody = $('p.modal__body');
  modalBody.innerHTML = modalContent;

  modal.classList.remove('hide');

  if(keepOpen) return;

  setTimeout(() => {
    modal.classList.add('hide');
  }, 500);
}

function goNextStep(score, image) {
  /*
  점수 올리기
  이미지 바꿔주기
  */
  currentStep++;
  score.innerText = +score.innerText + 1;
  
  if (currentStep === quizList.length) {
    //게임이 끝난 상태.
    showModal(`<a href="/">메인화면으로</a>`, true);
    return;
  }
  showModal('정답입니다!!👍🏻');
  image.src = quizList[currentStep].src;
}

function attachEvent({ score, answer, image }) {
  answer.addEventListener('click', (e) => {
    if (e.target instanceof HTMLLIElement) {
      const currentAnswer = e.target.innerText;
      const realAnswer = quizList[currentStep].answer;
      if (currentAnswer === realAnswer) {
        //정답
        goNextStep(score, image);
      } else {
        //오답
        showModal(`${currentAnswer}(이)가 아니에요😢`);
      }
    }
  });
}
