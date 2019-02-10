import React from 'react'


export default function MoveToTop(props) {
    const toTop = (() => {
        window.scrollTo(0,0)
    })()
    return (
        <div style={{
            margin: '20px 10px'
        }}>
            {props.children}
        </div>
    )
}
