import beyondExpectData from "../../mockData/beyondExpectData.js";
import { beyondExpectTemplate } from "../templates/beyondExpectTemplate.js";

const initBeyondExpect = () => {
    const beyondExpectNode = document.querySelector(".beyond_expect");

    beyondExpectNode.insertAdjacentHTML("beforeend", beyondExpectTemplate(beyondExpectData));
    
};

export default initBeyondExpect;