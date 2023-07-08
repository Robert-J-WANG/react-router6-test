import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { NavLink, Routes, Route, Navigate } from 'react-router-dom'



export default function App() {
     // 自定义NavLink样式高亮的函数
    function computeClassName({ isActive }) {
        return isActive ? "list-group-item atguigu" : "list-group-item"

    }

    return (
        <div>
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header"><h2>React Router Demo</h2></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/* 链接路由 */}
                        {/* 使用自定义样式高亮 */}
                        <NavLink className={computeClassName} to="/about">About</NavLink>
                        {/* 使用bootstrap默认的高亮样式 */}
                        <NavLink className="list-group-item" to="/home">Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 注册路由 */}
                            <Routes>
                                <Route path='/about' element={<About />} />
                                <Route path='/home' element={<Home />} />
                                {/* 使用Navigate设置重定向 */}
                                <Route path='/' element={<Navigate to='/about' />} />
                            </Routes >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
