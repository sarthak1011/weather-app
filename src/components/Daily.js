import React ,{useEffect,useState} from 'react'
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import axios from 'axios'




const Daily = (props) => {
    const [state, setstate] = useState([])

    const WeatherWrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  height: calc(100vh - 64px);
  width: 100%;
  position: relative;`;


  const data = {
    labels: [
        "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM",
        "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"
    ],    datasets: [
      {
        label: 'Temperature',
        data: state.map((item)=>{
            let a = item.temp - 273
            return a
        }),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        
        },
      ],
    },
  }



  const prevData = async() =>  {

    console.log(props.match.params.city);
    let city = props.match.params.city
    
    let {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${'f691339192d89524396727932d2b0b43'}&units=metric`)

    console.log(data);
    let lat = data.coord.lat
    let lon = data.coord.lon
    let val= await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,daily&appid=${'f691339192d89524396727932d2b0b43'}`)
    console.log(val.data.hourly.slice(0,23));
    setstate(val.data.hourly.slice(0,24))

    
  }


  useEffect(() => {
    
    prevData()
  
  },[])


  return (
    <>
    <WeatherWrapper>
    <div className='header'>
      <h1 className='title'>Hourly Graph</h1>
    </div>
    <Bar data={data} options={options} />

    
      </WeatherWrapper>
    </>
  )
}

export default Daily
