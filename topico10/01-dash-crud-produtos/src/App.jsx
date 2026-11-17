import { AppRoutes } from "./routes/AppRoutes.jsx";
import { AuthProvider } from "./contexts/AuthProvider.jsx";
import ProdutosProvider from "./contexts/ProdutosProvider.jsx";


function App() {
  return (
    <AuthProvider>
        <ProdutosProvider>
          <AppRoutes/>
        </ProdutosProvider>
    </AuthProvider>
  );
}

export default App;
