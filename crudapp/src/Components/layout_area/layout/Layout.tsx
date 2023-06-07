import { BrowserRouter } from "react-router-dom";
// import Aside from "../aside/Aside";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "../main/Main";
import "./Layout.css";
function Layout(): JSX.Element {
  return (
    <div className="Layout container">
      <BrowserRouter>
      <header>
        <Header />
      </header>
      {/* <aside>
        <Aside />
      </aside> */}
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
      </BrowserRouter>
    </div>
  );
}

export default Layout;
