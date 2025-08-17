import "./App.css";

import MainLayout from "./layouts/MainLayout";
import { Home } from "@pages/Home";
import { ThemeProvider } from "@components/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainLayout>
        <Home />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
