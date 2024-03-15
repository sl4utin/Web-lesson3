export const createHeaderBlogTemplate = ({header}) => {
    const template = `
    <div class="header_blog">
        <h1>${header}</h1>
    </div>
    `;

    return template
};

export const createBlogLeftArtTemplate = ({isBig, img: {src, alt}, post:{date, header, link: {href, label}}}) => {
    
    return ` ${isBig ? `
    
    <img src="${src}" alt="${alt}">
    <div class="description_art_main">
      <div class="description__art_up">
        <p class="date">${date}</p>
        <p class="head_main_art">${header}</p>
      </div>
      <a href="${href}" class="read_art_main">${label}</a>
    </div>` : ""}
    `;
};

export const createBlogRightArtTemplate = ({isBig, img: {src, alt}, post:{date, header, link: {href, label}}}) => {
    return ` ${!isBig ? `
    
    <div class="one_minor_art">
        <img src="${src}" alt="${alt}">
        <div class="description_art">
            <p class="date">${date}</p>
            <p class="head_minor_art">${header}</p>
            <a href="${href}" class="read_art_main">${label}</a>
        </div>
    </div>` : ""}
    `;
};

export const createMainBlogTemplate = (blogPostData) => {
    const template = blogPostData.map((item) => createBlogLeftArtTemplate(item)).join("");
    return template;
};

export const createSmallBlogTemplate = (blogPostData) => {
    const template = blogPostData.map((item) => createBlogRightArtTemplate(item)).join("");
    return template;
};


export const blogTemplate = ({blogHeaderData, blogPostData}) => {
    const headerBlogTemplate = createHeaderBlogTemplate(blogHeaderData);
    const mainBlogTemplate = createMainBlogTemplate(blogPostData);
    const smallBlogTemplate = createSmallBlogTemplate(blogPostData);


    const resultTemplate = `
        ${headerBlogTemplate}
        <div class="all_art">
            <div class="left_art">
                ${mainBlogTemplate}
            </div>
            <div class="right_art">.
                ${smallBlogTemplate}
            </div>
        </div>
    `;

    return resultTemplate;
};

