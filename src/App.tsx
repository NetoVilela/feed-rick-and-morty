import "@progress/kendo-theme-default/dist/all.css";
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./routes";
import { Layout } from "./layouts";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <MainRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
