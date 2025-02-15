import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router'

import './App.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

function App() {
  const apiUrl = import.meta.env.VITE_API_URL

  console.log(apiUrl)
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <h1>Test</h1>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
