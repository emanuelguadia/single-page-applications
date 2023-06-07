import { BrowserRouter } from "react-router-dom";
import Routing from "../route_area/routing/Routing";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
            <Routing/>
        </div>
    );
}

export default Main;
