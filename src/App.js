import React, { useState, useEffect } from "react";
import Cards from "./my_components/mCards";
import Navbar from "./my_components/mNavbar";
import LiveCamers from "./my_components/LiveCamers";
import "./newApp.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutplace from "./my_components/Aboutplace";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Frontpage from "./my_components/Frontpage";
import Map from "./my_components/myMap";
import Tourist from "./my_components/Package";
import Tour from "./my_components/Tour";


function App() {
  const [istoast, setistoast] = useState(false);
  const [cityinvalid, setcityinvalid] = useState(false);
  const [entry, setEntry] = useState("");
  const [isloading, setisLoading] = useState(true);
  // const [input, setInput] = useState("NEW YORK");
  const [data, setData] = useState("");
  const [icon, setIcon] = useState("sun");
  const [info, setinfo] = useState(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam, fugit ut et libero atque culpa, sit, officia consequuntur sed molestiae consectetur cupiditate. Nulla molestias optio aliquam reprehenderit distinctio sed, omnis inventore tempore fugit facilis aliquid eligendi mollitia, enim veritatis reiciendis cum atque provident. Quasi fugiat modi nulla dolores suscipit dolorem sunt nostrum minus. Porro, inventore nulla temporibus accusantium velit quisquam similique, quas culpa, cupiditate repudiandae in totam! Dolor minima assumenda eaque deserunt! Id nesciunt atque, at itaque consequatur neque sint, doloribus, iusto excepturi quae consequuntur dicta libero qui officiis eius dolores impedit cum adipisci aliquam culpa! Et, asperiores numquam?");
  const notify = () => toast(`🦄 Sorry ${entry.toUpperCase()} images are not available `, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  useEffect(() => {
      setTimeout(() => {
          setisLoading(false);
      }, 2500);
  })
  const citynotfound = () => toast(`🦄 Sorry ${entry.toUpperCase()} is not currently available in weather API `, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  useEffect(() => {
      setTimeout(() => {
          setisLoading(false);
      }, 2500);
  })
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/weather-app"
            element={
              <>
                <Frontpage isloading={isloading} setisLoading={setisLoading} />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Cards
                  cityinvalid={cityinvalid}
                  setcityinvalid={setcityinvalid}
                  citynotfound={citynotfound}
                  isloading={isloading}
                  data={data}
                  icon={icon}
                  entry={entry}
                  setEntry={setEntry}
                  setinfo={setinfo}
                  info={info}
                >
                  {/* <Navbar /> */}
                </Cards>
               
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(50,39,19,1), rgba(50,39,19,0.4))",
                    overflowX: "hidden",
                  }}
                >
                  <LiveCamers entry={entry} istoast={istoast} setistoast = {setistoast} notify={notify}/>
                </div>
                <div>
                  <Aboutplace info={info} />
                </div>
                <ToastContainer position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover/>
                  <Tourist />
              </>
            }
          />
          <Route path="/maps" element={
            <>
            <Navbar back = "black"/>
            <Map style={{overflowX: "hidden" , innerWidth: "80vw"}}/>
            </>
          } />
          <Route path="tour" element={
              <>
              <Navbar back="rgb(102,102,102)" />
              <Tour/>
              </>
              
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
