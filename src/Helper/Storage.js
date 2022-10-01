import { hasLoggedIn } from "./Constant";

export const Storage = {
    init: () => {
        // Below logic for create a key for login in local storage
        let isLoggedIn = localStorage.getItem(hasLoggedIn);
        if(isLoggedIn === null) {
            localStorage.setItem(hasLoggedIn, JSON.stringify(false));
        }

        
    },
};
