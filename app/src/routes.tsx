import { RouteData } from './types/route'
import ItemView from './views/ItemView'

const routes: RouteData[] = [
    {
        name: 'Home',
        path: '/',
        element: <ItemView />,
    },
]

export default routes