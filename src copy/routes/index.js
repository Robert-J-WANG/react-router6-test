import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
import { Navigate } from 'react-router-dom'

export default [
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/home',
        element: <Home />,
        children: [
            { path: 'news', element: <News /> },
            {
                path: 'message',
                element: <Message />,
                children: [
                    // 传递state参数时，不需要使用占位符占位
                    { path: 'detail', element: <Detail /> },
                ]
            },
        ]
    },
    {
        path: '/',
        element: <Navigate to='/about' />
    },
]
