export const getImageURL = (path) => {
    return new URL(`./assets/${path}`, import.meta.url).href;
};

export const rating =
    [
        {
            stars: 5,
            relation: "friends",
            optname: "Peter Parker",
            profession: "Photographer",
            comments: "Great site! Keep up the good work. Looking forward to working with you in Secret Wars."
        }
        
    ];


    
