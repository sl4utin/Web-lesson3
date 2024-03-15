export const createFooterUpperTemplate = ({header, button: {href, label}}) => {
    
    const template = `
    <div class="footer__header">
        <h1 class="top__header">${header}</h1>
    </div>
    <div class="footer__middle">
        <a href="${href}">
            <button class="early_access_btn">${label}</button>
        </a>
    </div>
    `
    return template;
};

export const createFooterLogoTemplate = ({logo: {src, alt}, address}) => {
    
    const template = `
    <div class="logo">
        <img class="GPT-3_logo" src=${src} alt=${alt}>
        <p class="address">${address}</p>
    </div>
    `
    return template;
};

export const createFooterLinksTemplate = ({type, href, label}) => {
    switch (type) {
        case "header":
            return `
            <div class="footer__links">
                <p class="bottom__links_header">${label}</p>
                <div class="footer__info_links">`;
        case "link":
            return `<a class="footer__link" href="${href}">${label}</a>`;
        default: 
            return ``;
    }
};

export const createFooterBottomLinksTemplate = (footerLinksData) => {
    const template = footerLinksData.map((item) => createFooterLinksTemplate(item)).join("");
    console.log(template);
    return template;
    
};

export const createFooterBottomCompanyTemplate = (footerCompanyData) => {
    const template = footerCompanyData.map((item) => createFooterLinksTemplate(item)).join("");
    return template;
};

export const createFooterBottomContactTemplate = (footerContactData) => {
    const template = footerContactData.map((item) => createFooterLinksTemplate(item)).join("");
    return template;
};

export const footerTemplate = ({footerUpperData, footerBottomData, footerLinksData, footerCompanyData, footerContactData}) => {
    const footerUpperTemplate = createFooterUpperTemplate(footerUpperData);
    const footerLogoTemplate = createFooterLogoTemplate(footerBottomData);
    const footerLinksTemplate = createFooterBottomLinksTemplate(footerLinksData);
    const footerCompanyTemplate = createFooterBottomCompanyTemplate(footerCompanyData);
    const footerContactTemplate = createFooterBottomContactTemplate(footerContactData);

    const resultTemplate = `
        ${footerUpperTemplate}
        <div class="footer__bottom">
            ${footerLogoTemplate}
            <div class="footer__bottom_right">
                ${footerLinksTemplate}
                </div>
                </div>
                ${footerCompanyTemplate}
                </div>
                </div>
                ${footerContactTemplate}
                </div>
                </div>
            </div>
        </div>
        <div class="footer__copyright">
            <p class="copyright__info"> © 2023 GPT-3. Все права защищены.</p>
        </div>
    `
    return resultTemplate;
    
}