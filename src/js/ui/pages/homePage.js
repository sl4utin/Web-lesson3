import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";
import initBeyondExpect from "./../components/initBeyondExpect.js";
import initRegistration from "../components/initRegistration.js";
import initBlog from "../components/initBlog.js";
import initFooter from "../components/initFooter.js";

const initHomePage = (element) => {
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section beyond_expect"></section>
    <section class="section registration"></section>
    <section class="section blog"></section>
    <section class="section footer"></section>
  `;

  element.insertAdjacentHTML("beforeend", template);
};

const rootNode = document.querySelector("#root");

// const rootNode2 = document.querySelector("#root2");

const homePage = () => {
  // инициализация элементов Главной страницы
  initHomePage(rootNode);
  // initHomePage(rootNode2);

  // инициализация шапки страницы с мок датой
  initHeader(rootNode);
  // initHeader(rootNode2);

  // инициализация хиро раздела
  initHero(rootNode);
  // initHero(rootNode2);

  // инициализация хиро раздела
  initBrands();

  // инициализация хиро раздела
  initWhatIsGpt();

  // инициализация раздела "Будущее наступило" с мок датой
  initFutureHere();

  //инициализация раздера "Превосходя все ожидания"
  initBeyondExpect();
  
  //инициализация раздера "Регистрация"
  initRegistration();

  //инициализация раздела "Блог"
  initBlog();

  //инициализация раздела "Блог"
  initFooter();

  // инициализация бургера для адаптивного меню
  initBurger();
};

export default homePage;
