import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppContainer } from "./AppContainer";
import { BrowserRouter } from "react-router-dom";

const queryClint = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClint}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
