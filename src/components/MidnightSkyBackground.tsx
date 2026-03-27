'use client'; 

export default function MidnightSkyBackground() { 
  return ( 
    <div className="absolute inset-0 -z-10 overflow-hidden"> 
      <div className="sky-canvas"> 
        <div className="stars stars-1"></div> 
        <div className="stars stars-2"></div> 
        <div className="stars stars-3"></div> 
        <div className="meteor m1"></div> 
        <div className="meteor m2"></div> 
        <div className="meteor m3"></div> 
        <div className="moon"></div>
      </div> 

      <style jsx>{` 
        .sky-canvas { 
          width: 100%; 
          height: 100%; 
          position: absolute; 
          inset: 0; 
          background: #0a0a0a; 
        } 

        .stars { 
          position: absolute; 
          inset: 0; 
          background-repeat: repeat; 
          pointer-events: none; 
        } 

        .stars-1 { 
          background-image: radial-gradient(1.5px 1.5px at 10% 10%, #fff, transparent), 
            radial-gradient(1.5px 1.5px at 30% 20%, #fff, transparent), 
            radial-gradient(1.5px 1.5px at 50% 50%, #fff, transparent), 
            radial-gradient(1.5px 1.5px at 70% 30%, #fff, transparent), 
            radial-gradient(1.5px 1.5px at 90% 10%, #fff, transparent); 
          background-size: 200px 200px; 
          animation: twinkle 3s ease-in-out infinite; 
        } 

        .stars-2 { 
          background-image: radial-gradient(2px 2px at 20% 40%, #fff, transparent), 
            radial-gradient(2px 2px at 60% 85%, #fff, transparent), 
            radial-gradient(2px 2px at 85% 65%, #fff, transparent); 
          background-size: 300px 300px; 
          animation: twinkle 5s ease-in-out infinite 1s; 
        } 

        .stars-3 { 
          background-image: radial-gradient(2.5px 2.5px at 40% 70%, #fff, transparent), 
            radial-gradient(2.5px 2.5px at 10% 80%, #fff, transparent), 
            radial-gradient(2.5px 2.5px at 80% 40%, #fff, transparent); 
          background-size: 400px 400px; 
          animation: twinkle 7s ease-in-out infinite 2s; 
        } 

        .meteor { 
          position: absolute; 
          width: 2px; 
          height: 2px; 
          background: #fff; 
          border-radius: 50%; 
          box-shadow: 0 0 12px 3px rgba(255,255,255,0.8); 
          opacity: 0; 
        } 

        .meteor::after { 
          content: ""; 
          position: absolute; 
          top: 50%; 
          transform: translateY(-50%); 
          width: 80px; 
          height: 1px; 
          background: linear-gradient(90deg, #fff, transparent); 
        } 

        .m1 { top: 15%; left: 110%; animation: shoot 8s linear infinite; } 
        .m2 { top: 35%; left: 110%; animation: shoot 12s linear infinite 3s; } 
        .m3 { top: 55%; left: 110%; animation: shoot 10s linear infinite 6s; } 

        .moon { 
          position: absolute; 
          top: 8%; 
          right: 8%; 
          width: 50px; 
          height: 50px; 
          border-radius: 50%; 
          background: #000; 
          box-shadow: 10px 10px 0 0px #f8f1d3; 
          z-index: 10; 
        } 

        @keyframes twinkle { 
          0%, 100% { opacity: 1; } 
          50% { opacity: 0.25; } 
        } 

        @keyframes shoot { 
          0% { transform: translateX(0) translateY(0) rotate(-35deg); opacity: 0; } 
          5% { opacity: 1; } 
          20% { transform: translateX(-1600px) translateY(900px) rotate(-35deg); opacity: 0; } 
          100% { transform: translateX(-1600px) translateY(900px) rotate(-35deg); opacity: 0; } 
        } 
      `}</style> 
    </div> 
  ); 
}