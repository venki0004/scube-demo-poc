import { Provider } from 'react-redux'

import './index.scss'
import { store } from './store'
import { Layout } from './layout/Layout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ErrorBoundary } from './components/ErrorBoundry'

const OurFallbackComponent = ({ error, componentStack, resetErrorBoundary }: any) => (
  <div>
    <h1>
      An error occurred:
      {error.message}
      
    </h1>
    <h1>
      An error occurred:
      {componentStack}
    </h1>
    <button type='button' onClick={resetErrorBoundary}>
      Try again
    </button>
  </div>
)
const App = () => (
  <Provider store={store}>
    <ErrorBoundary FallbackComponent={OurFallbackComponent}>
      <Layout />
      <ToastContainer />
    </ErrorBoundary>
  </Provider>
)

export default App
