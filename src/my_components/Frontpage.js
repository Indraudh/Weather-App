import React , {useEffect} from "react";
import { Link} from "react-router-dom";
import Typewriter from "typewriter-effect";
import { Triangle} from  'react-loader-spinner'
import Rotate from 'react-reveal/Rotate';
import Flip from 'react-reveal/Flip';
function Frontpage(props) {
  useEffect(() => {
    setTimeout(() => {
      props.setisLoading(false);
    }, 2000);
  })
  return (
    <>
      <div
        className="main_page container-liquid"
      >
        {props.isloading===true?<><Triangle
                 heigth="100"
                 width="100"
                 color='white'
                 arialLabel='loading'
                />  </>:
                <div>
        <Rotate top left>
          <h1 className="main-h1">WELCOME</h1>
          </Rotate>
          <Flip left>
          <h3 className="main-h3">TO MY &nbsp;
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                .pauseFor(1000)
                .typeString("  WEATHER-APP")
                .pauseFor(1000)
                .deleteAll()
                .typeString(" PHOTOS-APP")
                .start()
                .pauseFor(1000)
                .deleteAll()
                .typeString(" EXPLORE-APP")
                .start();
              }}
              />
            
          </h3>
              </Flip>
          <Link to="/home" style={{textDecoration : "none"}}>
            <button type="button" class="btn btn-success btn-md main-btn" style={{border : "none" , background : "#b52654"}}>
            To Website
            </button>
          </Link>
        </div>}
        
      </div>
    </>
  );
}

export default Frontpage;
