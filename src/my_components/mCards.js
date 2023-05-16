import React, { useState, useEffect } from "react";
import Zoom from 'react-reveal/Zoom';
import HeadShake from 'react-reveal/HeadShake';
import Navbar from "./mNavbar";
function WHome(props) {
  const api = process.env.REACT_APP_API;
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, {enableHighAccuracy: true});
  } , [props.isloading])
  const success = async (pos) => {
        let crd = pos.coords;
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${await crd.latitude}&lon=${await crd.longitude}&units=metric&appid=${api}`;
        // console.log(url);
        if(props.entry === ""){
          // alert("hey")
          const start_weather = await fetch(url);
          const start_js = await start_weather.json();
          props.setEntry(start_js.name);
        }
  }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  const d = new Date();
    let day = d.getDay();
  // const d1 
  const [weath, setWeath] = useState("23");
  const [mon, setmon] = useState(["18" , "10d"]);
    const [tues, settues] = useState(["18" , "10d"]);
    const [wed, setwed] = useState(["18" , "10d"]);
    const [thurs, setthurs] = useState(["18" , "10d"]);
    const [fri, setfri] = useState(["18" , "10d"]);
    const [sat, setsat] = useState(["18" , "10d"]);
    const [sun , setsun] = useState(["18" , "10d"]);
    const [icons, seticons] = useState("10d");
    useEffect(() => {
      if(props.cityinvalid){
        props.citynotfound();
      }
    }, [props.cityinvalid])
    useEffect(() => {
        async function func(){
          if(props.entry !== ""){
            const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.entry}&units=metric&appid=${api}`);
            const current = await resp.json();
            if(current.cod === 200){
              props.setcityinvalid(false);
              const resp2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${await current.coord.lat}&lon=${await current.coord.lon}&units=metric&appid=${api}`)
              const forecast = await resp2.json();
              seticons(await current.weather[0].icon);
              if(day === 0){
                setmon([await forecast.daily[1].temp.day , await forecast.daily[1].weather[0].icon])
                settues([await forecast.daily[2].temp.day , await forecast.daily[2].weather[0].icon]);
              setwed([await forecast.daily[3].temp.day , await forecast.daily[3].weather[0].icon]);
              setthurs([await forecast.daily[4].temp.day , await forecast.daily[4].weather[0].icon]);
              setfri([await forecast.daily[5].temp.day , await forecast.daily[5].weather[0].icon]);
              setsat([await forecast.daily[6].temp.day , await forecast.daily[6].weather[0].icon]);
              }
              if(day === 1){
                settues([await forecast.daily[1].temp.day , await forecast.daily[1].weather[0].icon]);
              setwed([await forecast.daily[2].temp.day , await forecast.daily[2].weather[0].icon]);
              setthurs([await forecast.daily[3].temp.day , await forecast.daily[3].weather[0].icon]);
              setfri([await forecast.daily[4].temp.day , await forecast.daily[4].weather[0].icon]);
              setsat([await forecast.daily[5].temp.day , await forecast.daily[5].weather[0].icon]);
              setsun([await forecast.daily[6].temp.day , await forecast.daily[6].weather[0].icon]);
              }
              if(day === 2){
              setwed([await forecast.daily[1].temp.day , await forecast.daily[1].weather[0].icon]);
              setthurs([await forecast.daily[2].temp.day , await forecast.daily[2].weather[0].icon]);
              setfri([await forecast.daily[3].temp.day , await forecast.daily[3].weather[0].icon]);
              setsat([await forecast.daily[4].temp.day , await forecast.daily[4].weather[0].icon]);
              setsun([await forecast.daily[5].temp.day , await forecast.daily[5].weather[0].icon]);
              setmon([ await forecast.daily[6].temp.day , await forecast.daily[6].weather[0].icon]);
              }
              if(day ===3){
                setmon([await forecast.daily[5].temp.day , await forecast.daily[5].weather[0].icon])
                settues([await forecast.daily[6].temp.day , await forecast.daily[6].weather[0].icon]);
              setthurs([ await forecast.daily[1].temp.day , await forecast.daily[1].weather[0].icon]);
              setfri([await forecast.daily[2].temp.day , await forecast.daily[2].weather[0].icon]);
              setsat([await forecast.daily[3].temp.day , await forecast.daily[3].weather[0].icon]);
              setsun([await forecast.daily[4].temp.day , await forecast.daily[4].weather[0].icon]);
              }
              if(day === 4){
                setmon([await forecast.daily[4].temp.day , await forecast.daily[4].weather[0].icon])
                settues([await forecast.daily[5].temp.day , await forecast.daily[5].weather[0].icon]);
              setwed([await forecast.daily[6].temp.day , await forecast.daily[6].weather[0].icon]);
              setfri([await forecast.daily[1].temp.day , await forecast.daily[1].weather[0].icon]);
              setsat([await forecast.daily[2].temp.day , await forecast.daily[2].weather[0].icon]);
              setsun([await forecast.daily[3].temp.day , await forecast.daily[3].weather[0].icon]);
              }
              if(day === 5){
                setmon([await forecast.daily[3].temp.day , await forecast.daily[3].weather[0].icon])
                settues([await forecast.daily[4].temp.day , await forecast.daily[4].weather[0].icon]);
              setwed([await forecast.daily[5].temp.day , await forecast.daily[5].weather[0].icon]);
              setthurs([await forecast.daily[6].temp.day , await forecast.daily[6].weather[0].icon]);
              setsat([await forecast.daily[1].temp.day , await forecast.daily[1].weather[0].icon]);
              setsun([await forecast.daily[2].temp.day , await forecast.daily[2].weather[0].icon]);
              }
              if(day === 6){
                setmon([await forecast.daily[2].temp.day , await forecast.daily[2].weather[0].icon]);
                settues([await forecast.daily[3].temp.day , await forecast.daily[3].weather[0].icon]);
              setwed([await forecast.daily[4].temp.day , await forecast.daily[4].weather[0].icon]);
              setthurs([await forecast.daily[5].temp.day , await forecast.daily[5].weather[0].icon]);
              setfri([await forecast.daily[6].temp.day , await forecast.daily[6].weather[0].icon]);
              setsun([await forecast.daily[1].temp.day , await forecast.daily[1].weather[0].icon]);
              }
              setWeath(current.main.temp);
            }
            if(current.cod !== 200){
              props.setcityinvalid(true);
            }
            const resp4 = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${props.entry}`)
            const wikiresp = await resp4.json();
            props.setinfo(wikiresp.extract);
            
          }
        }
        func();
    }, [props.entry])
  const fetchweather = async () => {
      
      
  }
  const search =  (e) => {
    e.preventDefault();
    props.setEntry(e.target[0].value);
    setTimeout(() => {   }, 1000);  
    fetchweather();
    
  }
  const cards = [
    {
      id: "1",
      dayw: mon,
      bgcolor: "#323544",
      day: "MONDAY",
      bgcol: "rgb(45,48,61)",
    },
    {
      id: "2",
      dayw: tues,
      day: "TUESDAY",
      bgcolor: "#262936",
      bgcol: "#222530",
    },
    {
      id: "3",
      dayw: wed,
      day: "WEDNESDAY",
      bgcolor: "#323544",
      bgcol: "rgb(45,48,61)",
    },
    {
      id: "4",
      dayw: thurs,
      day: "THURSDAY",
      bgcolor: "#262936",
      bgcol: "#222530",
    },
    {
      id: "5",
      dayw: fri,
      day: "FRIDAY",
      bgcolor: "#323544",
      bgcol: "rgb(45,48,61)",
    },
    {
      id: "6",
      dayw: sat,
      day: "SATURDAY",
      bgcolor: "#262936",
      bgcol: "#222530",
    },
    {
      id: "0",
      dayw: sun,
      day: "SUNDAY",
      bgcolor: "#323544",
      bgcol: "rgb(45,48,61)",
    },
  ];
  const [wday, setwDay] = useState(0);
  const [wdate, setwDate] = useState("1 JAN");
  const dict = [
    { 0: "SUNDAY" },
    { 1: "MONDAY" },
    { 2: "TUESDAY" },
    { 3: "WEDNESDAY" },
    { 4: "THURSDAY" },
    { 5: "FRIDAY" },
    { 6: "SATURDAY" },
  ];

  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPT",
    "OCT",
    "NOV",
    "DEC",
  ];
  
  const todaysDay = () => {
    
    let date = d.getDate().toString();
    let month = monthNames[d.getMonth()];
    let newdate = date + " " + month;
    let wordday = dict[day][day];
    setwDay(wordday);
    setwDate(newdate);
    // console.log(day)
    document.getElementById(day).classList.replace("secondary", "main");
    document.getElementById(day).classList.replace("col-1", "col-4");
    document.getElementById(day).innerHTML = `
      <div class="row">
        <div class="col date" style="background-color : rgb(45,48,61)">
          <span>${wday}</span>
          <span>${wdate}</span>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="place text-lg-start fs-4 mt-3 ms-2" style="color: white;opacity: 55% ;text-transform: uppercase">
            ${(props.entry === "")?"NEW YORK":props.entry}
          </div>
          <div class="d-flex align-items-center justify-content-between wea-main">
            <span class='temp mt-1 ms-2' style="color: white ; font-size : 5.75rem""  >${Math.ceil(
              weath
            )} &#176;C</span>
            <Zoom>
            <img src="http://openweathermap.org/img/wn/${icons}@2x.png" class='weather-icon' alt="" >
              </Zoom>
            </div>
        </div>
      </div>
    </div>`;
    document.getElementById(day).classList.replace("secondary", "main");
  };
  useEffect(() => {
    todaysDay();
  });
  return (
    <>
    <div className="container-fluid back">
    <Navbar back = "transparent"/>
      <div className="container" style={{ padding: "120px 0" }}>
        <Zoom left>

        <form className="d-flex pos needs-validation" onSubmit={search}>
          <input
            className="form-control me-2 "
            type="search"
            placeholder="Search"
            aria-label="Search"
            // value={entry}
            required
            />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
            </Zoom>
      </div>

      <div className="container">
        <HeadShake>
        <div className="row mx-auto w-100" id="weather">
          {cards.map((e) => {
            return (
              <div
                className="col-1 secondary"
                id={e.id}
                style={{ backgroundColor: `${e.bgcolor}` }}
              >
                <div className="row text-center">
                  <div
                    className="col day"
                    style={{ backgroundColor: `${e.bgcol}` }}
                  >
                    <span className="w-100">{e.day}</span>
                  </div>
                  <div className="col" style={{ color: "white" , display : "flex" , justifyContent : "center" }}>
                  <img src={`http://openweathermap.org/img/wn/${e.dayw[1]}@2x.png`} id="we" className='weather-icon' alt="" />
                  </div>
                  <div style={{ marginTop: "16px" }}>
                    <span className="fs-3" style={{ color: "white" }}>
                     {e.dayw[0]} &#176;C
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </HeadShake>
      </div>
    </div>
    </>
  );
}

export default WHome;
