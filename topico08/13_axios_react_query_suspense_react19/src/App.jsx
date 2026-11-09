import './styles/Main.css'
import { AppRoutes } from './routes/AppRoutes'

import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      experimental_prefetchInRender: true,
    },
  },
});

function App() {

  return <QueryClientProvider client={queryClient}>
    <AppRoutes />
  </QueryClientProvider>
}

export default App
