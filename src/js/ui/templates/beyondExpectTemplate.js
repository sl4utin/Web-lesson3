export const createBeyondExpectImgTemplate = ({src, alt}) => {
    const template = `
    <div class="beyond_expect__left">
        <img class="feature_Image" src="${src}" alt="${alt}"/>
    </div>
    `;
    
    return template;  
};

export const createBeyondExpectRightContainerTemplate = ({header, title, description, link: {href, linkTitle}}) => {
    const template = `
    <div class="beyond_expect__right">
        <p class="right__small_header">${header}</p>
        <h2 class="right__header">${title}</h2>
        <p class="container__content">${description}</p>
        <a href="${href}" class="right_cta">${linkTitle}</a>
    </div>
    `;
    
    return template;  
};

export const beyondExpectTemplate = ({beyondExpectImgData, beyondExpectRightContainerData}) => {
    const beyondExpectImgTemplate = createBeyondExpectImgTemplate(beyondExpectImgData);
    const beyondExpectRightContainerTemplate = createBeyondExpectRightContainerTemplate(beyondExpectRightContainerData);
    const resultTemplate = `
        ${beyondExpectImgTemplate}
        ${beyondExpectRightContainerTemplate}
    `;
    return resultTemplate;
    
}