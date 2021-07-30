import HomePage from './pages/home'
import DetailsPage from './pages/details'

const routes = [
    {
        path: '/',
        name: 'TV Show',
        component: HomePage,
        exact: true
    },
    {
        path: '/details/:id',
        name: 'Details',
        component: DetailsPage,
        exact: true
    }
];

export default routes;