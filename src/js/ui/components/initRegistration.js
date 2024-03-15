import registrationData from "../../mockData/registrationData.js";
import { registrationTemplate } from "../templates/registrationTemplate.js";

const initRegistration = () => {
    const registrationNode = document.querySelector(".registration");
    registrationNode.insertAdjacentHTML("beforeend", registrationTemplate(registrationData));
};

export default initRegistration;