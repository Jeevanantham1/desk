
import login from '../components/pages/SignIn'
import signup from '../components/pages/signup'
import forget from '../components/pages/forget'
import home from '../components/pages/home'
import about from '../components/pages/about'
import contact from '../components/pages/contact'
const routes = [
    {
        
            path: "/",
            component:login,
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
    },
    {
        path: "/home",
        component:home, 
        protectedRoute: false,
    },
    
    {
        path: "/about",
        component:about, 
        protectedRoute: false,
    },
     
    {
        path: "/contact",
        component:contact, 
        protectedRoute: false,
    }
    
    

  
]
    


export default routes;