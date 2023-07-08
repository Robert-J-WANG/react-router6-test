import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Message() {

    const [message] = useState([
        { id: '001', title: 'message1', content: 'you' },
        { id: '002', title: 'message2', content: 'are' },
        { id: '003', title: 'message3', content: 'very' },
        { id: '004', title: 'message4', content: 'welcome' },
    ])
    return (
        <div>
            <ul>
                {
                    message.map(m => <li key={m.id}>
                        {/* 注册路由 */}
                        {/* 给子组件传递参数，方法2：使用search */}
                        {/* 使用模版字符串拼接路由路径 */}
                        <Link to={`detail?id=${m.id}&title=${m.title}&content=${m.content}`}>{m.title}</Link>&nbsp;&nbsp;
                    </li>)
                }
            </ul>
            <hr />
            {/*指定路由展示的位置 */}
            <Outlet />
        </div>

    )
}
