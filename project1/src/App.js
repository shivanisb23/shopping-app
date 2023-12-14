import { HashRouter, Routes, Route,Link } from "react-router-dom";

import Myproduct from "./basic/product";
import Myuser from "./basic/user";
import Booklist from "./basic/book";
import Mycustomer from "./basic/customer";
import Mygallery from "./basic/gallery";
import Myitem from "./basic/item";
import Myhook1 from "./hooks/state1";
import Myhook2 from "./hooks/state2";
import Myhook3 from "./hooks/state3"; 
import Myhook4 from "./hooks/state4";
import Myhook5 from "./hooks/state5";
import Myhook6 from "./hooks/state6";
import Myhook7 from "./hooks/state7";
import Myhook8 from "./hooks/state8";
import Myhook9 from "./api/state9";
import Newjob from "./api/newjob";



function App() {
  return (
     <HashRouter>
        <nav>
          <Link to="/userlist" className="mylink"> Users </Link>
          <Link to="/productlist" className="mylink"> Products </Link>
          <Link to="/booklist" className="mylink"> Books </Link>
          <Link to="/customer" className="mylink"> Customer </Link>
          <Link to="/gallery" className="mylink"> Gallery </Link>
          <Link to="/item" className="mylink"> Props </Link>
          <Link to="/state1" className="mylink"> state1 </Link>
          <Link to="/state2" className="mylink"> state2 </Link>
          <Link to="/state3" className="mylink"> state3 </Link>
          <Link to="/state4" className="mylink"> state4 </Link>
          <Link to="/state5" className="mylink"> state5 </Link>
          <Link to="/state6" className="mylink"> state6 </Link>
          <Link to="/state7" className="mylink"> state7 </Link>
          <Link to="/state8" className="mylink"> state8 </Link>
          <Link to="/api1" className="mylink"> Api-1 </Link>





        </nav>

         <Routes>
         <Route exact path="/api2" element={ <Newjob/> } />
         <Route exact path="/api1" element={ <Myhook9/> } />
         <Route exact path="/state8" element={ <Myhook8/> } />
         <Route exact path="/state7" element={ <Myhook7/> } />
         <Route exact path="/state6" element={ <Myhook6/> } />
         <Route exact path="/state5" element={ <Myhook5/> } />
         <Route exact path="/state4" element={ <Myhook4/> } />
         <Route exact path="/state3" element={ <Myhook3/> } />
         <Route exact path="/state2" element={ <Myhook2/> } />
          <Route exact path="/state1" element={ <Myhook1/> } />
         <Route exact path="/item" element={ <Myitem/> } />
         <Route exact path="/gallery" element={ <Mygallery/> } />
         <Route exact path="/customer" element={ <Mycustomer/> } />
          <Route exact path="/userlist" element={ <Myuser/> } />
          <Route exact path="/productlist" element={ <Myproduct/> } />
          <Route exact path="/booklist" element={ <Booklist/> } />
         </Routes>

     </HashRouter>
  );
}

export default App;

//Myuser(); - in javascript
// <Myuser/> - in JSX
