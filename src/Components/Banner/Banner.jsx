import React from 'react'
import './Banner.css'
import { useState,useEffect } from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../Constants/Constants'

const Banner = () => {
  let [movie,setMovie]=useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      let randomvalues =Math.floor(Math.random()*response.data.results.length)
      setMovie(response.data.results[randomvalues])
    })
  },[])
  return (
    <div style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:''})`}} className='banner'>

        <div className='content'>
            <h1 className='title'>{movie ?movie.title:''}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>

            </div>
            <h1 className='description'>{movie?movie.overview:""}</h1>
            <div className="fade_bottom">

            </div>
        </div>
    </div>
  )
}

export default Banner