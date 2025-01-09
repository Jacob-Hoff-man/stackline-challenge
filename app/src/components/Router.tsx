import { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouteData } from '../types/route'


type RouterProps = {
    routes?: RouteData[]
}

const defaultRoutes: RouteData[] = []

const Router = ({ routes = defaultRoutes }: RouterProps): ReactElement => {
    return (
        <Routes>
            <Route path="/">
                {
                    routes.map((route) => (
                        <Route key={route.name} path={route.path} element={route.element} />
                    ))
                }
            </Route>
        </Routes>
    )
}

export default Router