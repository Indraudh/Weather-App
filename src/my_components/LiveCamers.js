import React , {useState , useEffect} from 'react'
import Zoom from 'react-reveal/Zoom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imgCard9 from "../img/img-card (9).jpg";
function Carousell(props) {
    const [arr, setarr] = useState([]);
    useEffect(() => {
        async function func(){
          const temp =[];
          const obj = {
            urls : {
              small : imgCard9
            }
          }
          for (let index = 0; index < 5; index++) {
            temp.push(obj);
          }
          setarr(temp);
            const resp3 = await fetch(`https://api.unsplash.com/search/photos?query=${props.entry}&client_id=${process.env.REACT_APP_API_KEY}`);
        const images = await resp3.json();
        if(images.results.length !== 0){
          props.setistoast(false);
          setarr(images.results);
        }
        else if(images.results.length === 0){
            props.setistoast(true);
            if(props.entry !== "")
            props.notify();
        } 
        }
        func();
    }, [props.entry])
    
      return (
        <>
        <div className="container-fluid" id="cameras" style={{backgroundColor: "#f9fafb" , height : "655px" , zIndex : "2" , boxShadow: "0 10px 20px rgb(0 0 0 / 10%)"}}>
              <div className="text-center pt-5 text-light">
                  <h1 className='heading'>LIVE CAMERAS</h1>
              </div>
        <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 830
      },
      items: 3,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
> 
{arr.map((e) => {
                      return (
                        <>
                            <Zoom>
                                <div className='bg-image hover-zoom' style={{width: "320px"}}>
                         <img src={e.urls.small} className='imgheight' />
                         </div>
                            </Zoom>
                      <div className="text-lg-start ms-3 mt-3 text-light lines" >
                          <h5 className='linesh5' style={{textTransform: "uppercase"}}>{(props.entry === "" )?"NEW YORK": props.entry}</h5>
                      </div>
                        </>
                      );
                
                  })}
</Carousel>
</div>
</>
      );
}

export default Carousell