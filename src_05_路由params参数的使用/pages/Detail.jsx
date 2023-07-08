import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
    // 使用useParams()钩子来接收父组件传递的params参数
    const { id, title, content } = useParams();
    return (
        <ul>
            <li>{id}</li>
            <li>{title}</li>
            <li>{content}</li>
        </ul>
    )
}
