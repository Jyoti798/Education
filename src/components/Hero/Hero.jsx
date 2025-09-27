// import React, {useState} from 'react'


// export default function Hero(){
// const [open, setOpen] = useState(false)
// const VIDEO_ID = 'dQw4w9WgXcQ' // replace with your YouTube video id


// return (
// <div className="row align-items-center">
// <div className="col-12 text-center mb-4">
// <h1 className="hero-heading">Get The Best Online<br/>Learning Service</h1>
// <p className="hero-sub mx-auto">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
// <button className="btn btn-primary mt-3" onClick={()=>setOpen(true)}>Start a course</button>
// </div>


// <div className="col-12 text-center mt-4">
// <div style={{display:'inline-block', position:'relative', borderRadius:12, overflow:'hidden'}}>
// <img src="/images/Home.jpeg" alt="hero" style={{width:760, maxWidth:'92%', display:'block'}} />
// <div onClick={()=>setOpen(true)} style={{position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)', width:80, height:80, background:'rgba(106, 90, 205,0.9)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer'}}>
// <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M8 5v14l11-7L8 5z" fill="#fff"/>
// </svg>
// </div>
// </div>
// </div>


// {/* Modal */}
// {open && (
// <div style={{position:'fixed', left:0, top:0, right:0, bottom:0, background:'rgba(0,0,0,0.6)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:1050}} onClick={()=>setOpen(false)}>
// <div style={{width:'90%', maxWidth:900, background:'#fff', borderRadius:8, overflow:'hidden'}} onClick={e=>e.stopPropagation()}>
// <div style={{position:'relative', paddingTop:'56.25%'}}>
// <iframe src={`https://www.youtube.com/embed/${VIDEO_ID}`} title="YouTube video" frameBorder="0" allowFullScreen style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}}></iframe>
// </div>
// <div className="p-3 text-end"><button className="btn btn-outline-secondary btn-sm" onClick={()=>setOpen(false)}>Close</button></div>
// </div>
// </div>
// )}
// </div>
// )
// }


// import React from 'react'

// export default function Hero(){
//   return (
//     <div className="row align-items-center">
//       <div className="col-12 text-center mb-4">
//         <h1 className="hero-heading">Get The Best Online<br/>Learning Service</h1>
//         <p className="hero-sub mx-auto">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
//         <button className="btn btn-primary mt-3">Start a course</button>
//       </div>

//       <div className="col-12 text-center mt-4">
//         <div style={{display:'inline-block', borderRadius:12, overflow:'hidden'}}>
//           <img src="/images/Home.jpeg" alt="hero" style={{width:760, maxWidth:'92%', display:'block'}} />
//         </div>
//       </div>
//     </div>
//   )

// }

import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          
          {/* Hero Content */}
          <div className="col-12 text-center mb-4">
            <h1 className="hero-heading">
              Get The Best Online<br/>
              Learning Service
            </h1>
            <p className="hero-sub mx-auto">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.
            </p>
            <button className="btn hero-btn mt-3">
              Start a course
            </button>
          </div>

          {/* Hero Image */}
          <div className="col-12 text-center mt-4">
            <div className="hero-image-container">
              <img 
                src="/images/Home.jpeg" 
                alt="Online Learning Platform" 
                className="hero-image"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;