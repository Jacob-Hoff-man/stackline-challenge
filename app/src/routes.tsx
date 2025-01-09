import { RouteData } from './types/route'
import MainView from './views/MainView'

const routes: RouteData[] = [
    {
        name: 'Home',
        path: '/',
        element: <MainView />,
    },
]

export default routes