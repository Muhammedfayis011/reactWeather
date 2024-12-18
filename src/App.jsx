
import { useEffect, useState } from 'react';
import './App.css'
import Icons from './Icons'

function App() {
const [search,setSearch] = useState("");
const [weather,setWeather] =useState({});
const [date, setDate] = useState("");


  const searchPressed =  () => {
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=839be0a0c813c2e1b0d1d055a4687895&units=metric`)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result);
      setDate(new Date().toLocaleDateString());
      
    })
    
  };
        



  return (
    <>
         <h2 id='hi'>Weather Checking</h2>
        <div id="main" className='container fliud border rounded border-danger  mt-3  boder border-solid '  style={{height:'450px' ,width:'500px'}}>
          

          <div className='d-flex justify-content-between mt-2'>
            <input onChange={(e) => setSearch(e.target.value)}  type="text" placeholder='Enter Location' style={{width:'400px'}} />
            <button class="bt" onClick={searchPressed} className='btn border rounded border-dark bg-danger ' style={{color:"white"}}>Check</button>
          </div>

          <div>
            <div className='d-flex justify-content-between mt-2'><h6>Date:{date }</h6>
            <h6 className='me-4'>Latitude: {weather.coord ? weather.coord.lat : ""}</h6>
            </div>

            <div class="aa">
              <h3 className='mt-4'>{weather.name }</h3>
              <h5></h5>
              
             </div>

             <div class="bb">
             <h5 class="h">{weather.main ? weather.main.temp :"00"}°C</h5>
             
             </div>
             <div id="im" className="weather-icon ">
            {weather.weather ? (
              <img class="imggg"
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="weather icon"
                style={{ width: '80px', height: '70px' }}
              />
            ) : (
              <p> icon...</p>
            )}
          </div>
             <h4 class="c">{weather.weather ? weather.weather[0].description : "Weather"}</h4>

             <h5 id="f" className='mt-3'>Feels Like:{weather.main ? weather.main.feels_like : ""}°C</h5>

             
        <div className='d-flex justify-content-between mt-5 '>
            <h6 className='ms-3 fw-bold'>Pressure: {weather.main ? weather.main.pressure : ""} hPa</h6>
           <h6 className='fw-bold'>Humidity: {weather.main ? weather.main.humidity : ""}%</h6>
               
          <h6 className='me-4 fw-bold'>Wind:{weather.wind ? weather.wind.speed : ""} m/s</h6>
        </div>
            
          </div>

  
        </div>
      
    </>



  );
}

export default App





// import { useEffect, useState } from 'react';
// import './App.css';
// import Icons from './Icons';

// function App() {
//   const [search, setSearch] = useState("");
//   const [weather, setWeather] = useState({});
//   const [date, setDate] = useState("");

//   // Function to handle search and fetch weather data
//   const searchPressed = () => {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=839be0a0c813c2e1b0d1d055a4687895&units=metric`)
//       .then((res) => res.json())
//       .then((result) => {
//         setWeather(result);
//         setDate(new Date().toLocaleDateString()); // Get today's date in the format MM/DD/YYYY
//       })
//       .catch((error) => console.log("Error fetching weather data:", error));
//   };

//   return (
//     <>
//       <div className='container fluid border rounded border-danger mt-5' style={{ height: '400px', width: '400px' }}>
//         <div className='d-flex justify-content-between mt-2'>
//           <input
//             onChange={(e) => setSearch(e.target.value)}
//             type="text"
//             placeholder='Enter Location'
//             style={{ width: '300px' }}
//           />
//           <button
//             onClick={searchPressed}
//             className='btn border rounded border-dark bg-danger'
//             style={{ color: "white" }}
//           >
//             Check
//           </button>
//         </div>

//         <div className="weather-info mt-3">
//           {/* Display date */}
//           <div className="d-flex justify-content-between mt-2">
//             <h6>Date: {date}</h6>
//             <h6>Latitude: {weather.coord ? weather.coord.lat : "N/A"}</h6>
//           </div>

//           {/* Weather Name and Description */}
//           <div className="weather-location">
//             <h4>{weather.name}</h4>
//             <h5>{weather.weather ? weather.weather[0].description : "Loading..."}</h5>
//           </div>

//           {/* Temperature */}
//           <div className="weather-temperature">
//             <h4>{weather.main ? weather.main.temp : "Loading..."}°C</h4>
//           </div>

//           {/* Feels Like */}
//           <h5 className="mt-3">Feels Like: {weather.main ? weather.main.feels_like : "Loading..."}°C</h5>

//           {/* Icons */}
//           <Icons weather={weather} />
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
