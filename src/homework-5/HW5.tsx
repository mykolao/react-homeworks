import { HashRouter } from "react-router-dom";
import Header from "./Header";
import Routes from "./Routes";

function HW5() {
  return (
    <div>
      <HashRouter>
        <div className="homework">
          <h2 className="section_title">REACT HOMEWORKS</h2>

          <Header />
          <hr />
          <Routes />
        </div>
      </HashRouter>
    </div>
  );
}

export default HW5;
