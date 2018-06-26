import HomePage from './pages/HomePage'
import BlogsPage from './pages/BlogsPage'
import CommentaryPage from './pages/CommentaryPage'
import UsersPage from './pages/UsersPage'
import UserPage from './pages/UserPage'

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
    },
    {
        path: '/commentary',
        exact: true,
        component: CommentaryPage,
    },
    {
        path: '/users',
        exact: true,
        component: UsersPage,
    },
    {
        path:'/users/:id',
        historyApiFallback: true,
        exact: true,
        component: UserPage,
    }
]