import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
export default function Message() {

    const [message] = useState([
        { id: '001', title: 'message1', content: 'you' },
        { id: '002', title: 'message2', content: 'are' },
        { id: '003', title: 'message3', content: 'very' },
        { id: '004', title: 'message4', content: 'welcome' },
    ])
    // 使用useNavigate钩子，实现编程式路由导航
    const navigate = useNavigate()

    function showDetail(m) {
        navigate(
            "detail",
            {
                replace: false,
                state: {
                    id: m.id,
                    title: m.title,
                    content: m.content
                }
            })
    }
    return (
        <div>
            <ul>
                {
                    message.map(m => <li key={m.id}>
                        {/* 注册路由 */}
                        {/* 给子组件传递参数，方法3：使用state */}
                        {/* 传递一个state对象 */}
                        <Link
                            to='detail'
                            state={{
                                id: m.id,
                                title: m.title,
                                content: m.content
                            }}
                        >{m.title}</Link>&nbsp;&nbsp;
                        <button onClick={() => showDetail(m)}>点击查看详情</button>
                    </li>
                    )
                }

            </ul>
            <hr />
            {/*指定路由展示的位置 */}
            <Outlet />
        </div>

    )
}
