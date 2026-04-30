import CoffeeDetails from "../pages/CoffeeDetails"
import CoffeeList from "../pages/CoffeeList"
import Cart from "../pages/Cart"
import OurStory from "../pages/OurStory"

const AppRoutes = [
    {
        path:"/coffeeList",
        element:<CoffeeList/>
    },
   { 
    path: "/coffee/:slug", 
    element: <CoffeeDetails /> },
    {
        path:"/cart",
        element:<Cart/>
    },
    {
        path:"/ourStory",
        element:<OurStory/>
    },
]

export default AppRoutes