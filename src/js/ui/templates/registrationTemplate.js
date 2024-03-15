export const createRegistrationLeftTemplate = ({title, header}) => {
    const template = `
        <div class="left__registration">
            <p class="left__cta">${title}</p>
            <p class="container__content">${header}</p>
        </div>
    `;

    return template;  
};

export const createRegistrationRightTemplate = ({description}) => {
    const template = `
    <div class="right__registration">
        <button class="registration__btn"> ${description} </button>
    </div>
    `;

    return template;  
};

export const registrationTemplate = ({registrationLeftData, registrationRightData}) => {
    const registrationLeftTemplate = createRegistrationLeftTemplate(registrationLeftData);
    const registrationRightTemplate = createRegistrationRightTemplate(registrationRightData);

    const resultTemplate = `
        ${registrationLeftTemplate}
        ${registrationRightTemplate}
    `;
    return resultTemplate;
};