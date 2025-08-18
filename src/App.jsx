import "./App.css";

import MainLayout from "./layouts/MainLayout";
import { Home } from "@pages/Home";
import { ThemeProvider } from "@components/ThemeProvider";
import { ScrollProgressBar } from "@components/ScrollProgressBar";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ScrollProgressBar />
      <MainLayout>
        <Home />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
