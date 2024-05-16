import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";


const name = () => {

  let heroData=[
    { text1: "Dive into ",text2:"what you love"},
    { text1: "Indulge ",text2:"Your Passions"},
    { text1: "Give in to",text2:"your passions"},
  ]

  const[heroCount,setHeroCount]=useState(1);
  const[playStatus,setPlayStatus]=useState(false);

   useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{
          return count===2?0:count+1
      })
    }, 3000);
  },[])

  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus} />
      <Navbar/>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}

      />
    </div>
  )
};

export default name;
