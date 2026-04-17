    import React, {useState, useEffect} from "react";
    import {motion, useAnimation} from "framer-motion";
    import avatar from "./assets/SILHOUTTE.png";
    import ava_mobile from "./assets/Sil_mobile.png";
    import ava_glow_mob from "./assets/GLOW_MOBILE.png";
    import ava_glow from "./assets/SIL_GLOW.png";
    import moon from "./assets/MOON.png";
    import codeBox from "./assets/CODE_BOX.png";
    import Figma from "./assets/FIGMA.png";
    import python from "./assets/PYTHON_LOGO.png";
    import Lr from "./assets/LIGHTROOM.png";
    import t1 from "./assets/Triangle 1.png";
    import t2 from "./assets/Triangle 2.png";
    import t3 from "./assets/Triangle 3.png";
    import t4 from "./assets/Triangle 4.png";
    import t5 from "./assets/Triangle 5.png";
    import t6 from "./assets/Triangle 6.png";
    import t7 from "./assets/Triangle 7.png";
    import t8 from "./assets/Triangle 8.png";
    import t9 from "./assets/Triangle 9.png";
    import t10 from "./assets/Triangle 10.png";
    import t11 from "./assets/Triangle 11.png";
    import r1 from "./assets/Rectangle 1.png";
    import r2 from "./assets/Rectangle 2.png";
    import r3 from "./assets/Rectangle 3.png";
    import r4 from "./assets/Rectangle 4.png";
    import l1 from "./assets/Line 1.png";
    import l2 from "./assets/Line 2.png";
    import l3 from "./assets/Line 3.png";
    import l4 from "./assets/Line 4.png";
    import e1 from "./assets/Ellipse 1.png";
    import e2 from "./assets/Ellipse 2.png";
    import e3 from "./assets/Ellipse 3.png";
    import ss from "./assets/ss.png";

    function HeroSection() {
    
    



const moonControls = useAnimation();
useEffect(() => {
  async function animateMoon() {
    // Step 1: Animate moon entrance (once)
    await moonControls.start({
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    });

    // Step 2: Start soft pulse loop (forever)
    moonControls.start({
      scale: [1, 1.1, 1],
      filter: ["brightness(100%)", "brightness(130%)", "brightness(100%)"],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    });
  }

  animateMoon();
}, [moonControls]);



        
    return (
        
        
        <section
        id="home"
        className="relative min-h-screen text-white overflow-hidden px-5 py-16 pb-20"
        style={{
            background: `
            radial-gradient(circle at 65% 30%, #6a66ff 0%, #151244 50%, #060713 80%),
            radial-gradient(circle at 0% 0%, rgba(0, 0, 0, 0.65), transparent 60%),
            radial-gradient(circle at 0% 100%, rgba(0, 0, 0, 0.65), transparent 60%),
            radial-gradient(circle at 100% 100%, rgba(0, 0, 0, 0.5), transparent 55%)
            `,

        }}
        >
        {/* Background elements */}
        <motion.div 
        
    
        
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            <img src={t11} alt="Triangle11" style={{ position: 'absolute', top: '700px', left: '1200px', width: 30 }} />
            <img src={t11} alt="Triangle12" style={{ position: 'absolute', top: '100px', left: '20px', width: 30 }} />
            <img src={t7} alt="Triangle7" style={{ position: 'absolute', top: '40px', left: '220px', width: 32 }} />
            <img src={t3} alt="Triangle3" style={{ position: 'absolute', top: '60px', left: '440px', width: 32 }} />
            <img src={t4} alt="Triangle4" style={{ position: 'absolute', top: '580px', left: '80px', width: 32 }} />
            <img src={t2} alt="Triangle2" style={{ position: 'absolute', top: '640px', left: '340px', width: 32 }} />
            <img src={t6} alt="Triangle6" style={{ position: 'absolute', top: '520px', left: '580px', width: 32 }} />
            <img src={t7} alt="Triangle7" style={{ position: 'absolute', top: '700px', left: '720px', width: 32 }} />
            <img src={t8} alt="Triangle8" style={{ position: 'absolute', top: '120px', right: '80px', width: 28 }} />
            <img src={t9} alt="Triangle9" style={{ position: 'absolute', bottom: '30px', right: '40px', width: 24 }} />
            <img src={l1} alt="Line1" className="absolute" style={{ top: "410px", left: "500px" }} />
            <img src={l2} alt="Line2" className="absolute hidden md:top-[860px] left-[350px]"/>
            <img src={l3} alt="Line3" className="absolute" style={{ top: "690px", left: "300px" }} />
            <img src={l4} alt="Line4" className="absolute" style={{ top: "600px", left: "1700px" }} />
            <img src={e1} alt="Ellipse1" className="absolute" style={{ top: "510px", left: "440px" }} />
            <img src={e2} alt="Ellipse2" className="absolute" style={{ top: "680px", left: "460px" }} />
            <img src={e3} alt="Ellipse3" className="absolute" style={{ top: "1150px", left: "850px" }} />
            <img src={r1} alt="Rectangle1" className="absolute w-[20px] h-[20px] opacity-60" style={{ top: "1020px", left: "70px" }} />
            <img src={r2} alt="Rectangle2" className="absolute w-[60px] h-[60px] opacity-60" style={{ top: "250px", left: "1480px" }} />
            <img src={r3} alt="Rectangle3" className="absolute w-[25px] h-[25px] opacity-50" style={{ top: "380px", left: "390px" }} />
            <img src={r4} alt="Rectangle4" className="absolute w-[25px] h-[25px] opacity-50" style={{ top: "700px", left: "100px" }} />
        </motion.div>

        {/* Foreground content */}
        
        <div className="relative z-30 min-h-screen flex items-start justify-start pt-[30px] ml-28 pr-8 pt-[170px] sm:pt-[1px] md:pt-[170px] md:ml-28 ml-5">
            <div style={{ width: "600px", height: "260px" }}>
            <motion.h1 
            initial={{opacity:0, y:50}}
            animate={{opacity:1, y:0 }}
            transition={{duration:1}}
            className="font-poppins text-4xl sm:text-5xl md:text-7xl font-semibold text-white leading-tight" style={{ textShadow: '0 0 18px rgba(255,255,255,0.7)' }}>
                Hi I'm <br />
                Jagpreet Singh
            </motion.h1>

            <motion.p
            initial={{opacity:0.2, x:30}}
            animate={{opacity:1, x:0}}
            transition={{duration:1, delay:0.1}}
             className="font-poppins text-base sm:text-lg md:text-2xl font-light mt-4">
                Creative Developer & UI/UX<br />
                Designer    
            </motion.p>

            {/* Gradient button */}
<motion.div
initial={{opacity:0, scale:0.95}}
animate={{opacity:1, scale:1}}
transition={{duration:1, delay:0.3}}
    className="relative z-50 group mt-10 mx-auto md:mx-0 w-full max-w-[220px] h-[65px] sm:h-[80px]  mt-[310px] ml-[48px] md:mt-10"

                
            > 
                <div
                className="absolute inset-0 rounded-[35px] p-[3px] transition-all duration-300 group-hover:scale-105"
                style={{
                    background: "linear-gradient(135deg, #00f0ff 30%, #a100ff 100%)",
                }}
                >
                <div
                    className="w-full h-full bg-[#1b1a58] rounded-[32px] flex items-center justify-center"
                    style={{ boxShadow: "inset 0 0 1px rgba(255,255,255,0.8)" }}
                >
                    <button className="text-white font-semibold text-xl sm:text-2xl md:text-3xl font-poppins pointer-events-auto">
                    Explore
                    </button>
                </div>
                </div>
            </motion.div>
            </div>
        </div>

        {/* Glow around silhouette */}
        <div
            className="absolute rounded-full border-[2px] border-[#2919c6] z-15 
            blur-[60px] opacity-80 
            left-[50%] top-[20px] w-[240px] h-[360px] 
            transform -translate-x-1/2 
            md:left-[975px] md:top-[108px] md:w-[426px] md:h-[719px] md:transform-none"


            
        ></div>

<motion.img
  initial={{ opacity: 0, x: 80, scale: 1 }}
  animate={moonControls}
  src={moon}
  alt="Moon"
  className="absolute z-10 pointer-events-none 
    top-[320px] left-[120px] w-[1000px] h-auto transform -translate-x-1/2 
    md:top-[80px] md:left-[600px] md:w-[1280px] md:h-[680px]"
/>


        {/* Silhouette on top */}
        {/* Desktop Silhouette (hidden on mobile) */}
<motion.img
initial={{opacity:0.7, x:80}}
animate={{opacity:1, x:0}}
transition={{duration:1.1, delay:0.1, ease:"easeOut"}}
  src={avatar}
  alt="Silhouette for Desktop"
  className="hidden md:block absolute z-20 top-[150px] left-[800px] w-[550px] h-[690px] drop-shadow-[0_0_1px_#00f0ff]"
/>
<motion.img
initial={{opacity:0.7, x:80}}
animate={{opacity:1, x:0}}
transition={{duration:1.1, delay:0.1, ease:"easeOut"}}
  src={ava_mobile}
  alt="Silhouette for Mobile"
  className="block md:hidden absolute z-10 w-[360px] h-auto top-[320px] left-[75px] transform -translate-x-1/2"
/>


        {/* Silhouette on top */}
        <img
            src={ava_glow}
            alt="Silhouette"
            className="hidden md: absolute z-0 
            top-[290px] left-2/3 w-[260px] h-auto transform -translate-x-1/2
            md:top-[130px] md:left-[800px] md:w-[550px] md:h-[690px] md:transform-none"
/>
<div className="hidden md:block absolute z-25 left-[790px] top-[610px] w-[590px] h-[170px] bg-gradient-to-b from-transparent via-[#131542]/70 to-[#131542] blur-[12px]" />

        {/* Code box */}
        <motion.img
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.9   , ease: "easeOut" }}
            src={codeBox}
            alt="Code_box"
            className="absolute z-40 w-[110px] h-auto top-[450px] left-[290px] md:top-[500px] md:left-[1150px] md:w-[300px] md:h-[153px]"
        />
{/* Figma Logo */}
<motion.img
  src={Figma}
  alt="Figma_logo"
  animate={{
    y: [0, -20, 0],
    rotate: [0, 1, 0]
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }}
  className="absolute z-0  w-[12px]  h-auto top-[350px] left-[40px] md:w-[25px] md:h-auto md:top-[710px] md:left-[750px] opacity-90 scale-[0.7] drop-shadow-[0_0_12px_rgba(0,255,255,0.4)]"
/>

{/* Python Logo */}
<motion.img
animate={{
    x:[0, -20 ,0],
    rotate:[0,-2,0]
}}
transition={{
    duration: 3.2,
    repeat: Infinity,
    ease: "easeInOut"
  }}
  src={python}
  alt="Python_logo"
  className="absolute z-0 w-[18px]  h-auto top-[490px] left-[100px] md:w-[35px] h-auto md:top-[500px] md:left-[650px] opacity-90 scale-[0.6] drop-shadow-[0_0_12px_rgba(0,255,255,0.4)]"
/>
{/* Lightroom Logo */}
<motion.img
animate={{
    y: [0, -12, 0],
    rotate: [0, 1.5, 0]
  }}
  transition={{
    duration: 3.4,
    repeat: Infinity,
    ease: "easeInOut"
  }}
  src={Lr}
  alt="LightRoom_logo"
  className="absolute z-0 w-[26px]  h-auto top-[280px] left-[230px] md:w-[40px] h-auto md:top-[730px] md:left-[400px] opacity-90 scale-[0.6] drop-shadow-[0_0_12px_rgba(0,255,255,0.4)]"
/>

 

     {/*ham_icon*/}


      


     <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-[#151741]/70 blur-md z-40" />


            
            
       




   

        </section>
    )};
    

    

export default HeroSection;
