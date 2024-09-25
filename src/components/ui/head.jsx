import React from 'react'

export const Head = ({ children, title }) => {
    document.title = title || ''
    return null
}
