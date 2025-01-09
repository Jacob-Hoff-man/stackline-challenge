import { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from './Layout'
import Router from './Router'
import routes from '../routes'

const queryClient = new QueryClient()

const App = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Router routes={routes} />
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
