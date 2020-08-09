import {SignInPage} from "./pages/sign-in";
import {SignUpPage} from "./pages/sign-up";

export const ROUTING = {
    SIGN_IN: {
        path: "/sign-in",
        component: SignInPage,
    },
    SIGN_UP: {
        path: "/sign-up",
        component: SignUpPage,
    },
    DASHBOARD: {
        path: "/dashboard",
        //ToDo: Update dashboard component when finish
        component: SignUpPage,
        redirect: "/sign-in"
    }
}