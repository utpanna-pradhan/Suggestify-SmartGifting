import React from "react";
import "../Stylesheet/Home.css";
import { Link } from "react-router-dom";
import Formsec from "./Formsec";
import GetGift from "./GetGift";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { Suspense } from "react";
import giftModel from "../assets/gift.glb";

function Model(props) {
  const { scene } = useGLTF(giftModel);
  return <primitive object={scene} {...props} />;
}
function Home() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="-mt-20">
        <path
          fill="#C62828"
          fillOpacity="1"
          d="M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,138.7C672,128,768,128,864,138.7C960,149,1056,171,1152,197.3C1248,224,1344,256,1392,272L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="mt-0">
        <div className="flex flex-col md:flex-row mb-4  mt-0 home_main_content flex-wrap">
          <div className="flex flex-col px-4 md:px-8 md:pl-0 gap-0 justify-center md:w-2/3">
           
            <h1 className="text-4xl md:text-6xl font-bold text-center md:text-start mainHeadColor  headfont heading">
              Suggestify Pro
            </h1>

           
            <h2 className="text-lg md:text-2xl subHeadColor font-normal popinsfont text-center md:text-start pt-6 md:pt-12">
              “Find the perfect gift—personalized by AI in seconds.”
            </h2>
            <h3 className="  smallHeadColor font-normal popinsfont text-center md:text-start pt-2 md:pt-4">
              AI-Powered Gifting. Thoughtful. Personal. Effortless.
            </h3>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="max-w-[200px] mx-auto md:mx-0 w-full mt-8 popinsfont inline-block px-6 py-2 rounded-md text-xl font-medium transition try_now_Btn"
            >
              <Link to="/form">Try Now</Link>
            </motion.button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/3 flex justify-center items-center ">
            <div className="h-[300px] md:h-[450px] w-[90%] mx-auto relative mt-16 md:mt-20">
              <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
                <ambientLight intensity={1} />
                <directionalLight
                  position={[10, 10, 5]}
                  intensity={1.5}
                  castShadow
                />
                <PresentationControls
                  speed={1.5}
                  global
                  zoom={0.5}
                  polar={[Math.PI / 3, Math.PI / 2]}
                >
                  <Suspense fallback={null}>
                    <Model scale={0.01} />
                  </Suspense>
                </PresentationControls>
              </Canvas>
            </div>
          </div>
        </div>
      </div>
      <Formsec />
      <GetGift />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#b30000"
          fillOpacity="1"
          d="M0,128L60,154.7C120,181,240,235,360,261.3C480,288,600,288,720,266.7C840,245,960,203,1080,186.7C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Home;
