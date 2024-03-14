import React from 'react'
import './Rowpost.css'
import Youtube from 'react-youtube'
import { useEffect,useState } from 'react'
import { API_KEY, imageUrl} from '../../Constants/Constants'
import axios  from '../../axios'
function Rowpost(props) {
  let [movie,setMovie]=useState([])
  let [urlid,setUrlId]=useState('')

  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data.results);
      setMovie(response.data.results)
    })
  },[])

  const opts ={
    height:'390',
    width:'100%',
    playerVars:{

      autoplay:1
    }
  }
  const handleMovietrailer = (id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then((response)=>{

      if(response.data.results.length!==0){
  
        setUrlId(response.data.results[0])
      }else{
        console.log("Array empty");
      }
    })
  }

  return (
    <div className='row1'>
        <h2>{props.title}</h2>
        <div className="row2">
          {
            movie.map((data)=>{
              return(
                <>
            <img onClick={()=>handleMovietrailer(data.id)} className={props.image2?'image2':'image1'} src={`${imageUrl+data.backdrop_path}`} alt="" />
                </>
              )
          })
          }
           
        </div>
        {
          urlid && <Youtube opts={opts} videoId={urlid.key}/>
          }
    </div>
  )
}

export default Rowpost