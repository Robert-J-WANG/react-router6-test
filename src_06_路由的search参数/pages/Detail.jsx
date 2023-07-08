import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Detail() {
    // 使用useSearchParams钩子获取search参数和重新设置获得的参数
    const [search, setSearch] = useSearchParams()
    const id = search.get('id')
    const title = search.get('title')
    const content = search.get('content')

    return (
        <ul>
            <li>ID: {id}</li>
            <li>title: {title}</li>
            <li>content: {content}</li>
            <button onClick={() => setSearch('id=008&title=m8&content=kdsajfk')}>重置</button>
        </ul>
    )
}
