import HomePage from './pages/HomePage'
import BlogsPage from './pages/BlogsPage'
export default  [
    {
        path: '/',
        exact: true,
        component: HomePage,
    },
    {
        path: '/blogs',
        exact: true,
        component: BlogsPage,
    }
]