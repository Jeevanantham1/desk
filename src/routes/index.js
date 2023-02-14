
import SignIn from '../components/pages/SignIn'
import signup from '../components/pages/SignIn/signup'
import forget from '../components/pages/SignIn/forget'
const routes = [
    {
        path: "/",
        component: SignIn,
        protectedRoute: false,
    },
    {
        path: "/signup",
        component: signup,
        protectedRoute: false,
    },
    {
        path: "/forget",
        component: forget,
        protectedRoute: false,
    }
]
    


export default routes;