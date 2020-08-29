import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFound/NotFound'
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductsActionsPage from './pages/ProductActionPage/ProductsActionsPage';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/products-list',
        exact: false,
        main: () => <ProductsPage />
    },
    {
        path: '/products/add',
        exact: false,
        main: () => <ProductsActionsPage />
    },
    {
        path: '/products/:id/update',
        exact: false,
        main: (match) => <ProductsActionsPage match={match} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    },
]

export default routes;