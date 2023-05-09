import { Home } from "./Home";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
