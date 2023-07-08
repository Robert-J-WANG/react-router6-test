import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import routes from './routes'
import Header from './components/Header'

export default function App() {
    // 使用useRoutes生成路由表，路由路径和注册路由信息抽离为单独的文件routes
    const element = useRoutes(routes)
    return (
        <div>
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/* 链接路由 */}
                        <NavLink className="list-group-item" to="/about">About</NavLink>
                        <NavLink className="list-group-item" to="/home" end >Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 注册路由 */}
                            {element}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
