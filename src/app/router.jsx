import React from 'react'
import { Layout } from './layout.jsx'
import { Main } from '../pages/main/main.jsx'
import { NotFound } from '../pages/not-found/not-found.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <NotFound />,
    },
])

export const Router = () => {
    return <RouterProvider router={router} />
}
