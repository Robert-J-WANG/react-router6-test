import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail() {
    // 使用useLocation钩子获取其身上的state对象的参数
    const { state } = useLocation()

    return (
        <ul>
            <li>ID: {state.id}</li>
            <li>title: {state.title}</li>
            <li>content: {state.content}</li>
        </ul>
    )
}
