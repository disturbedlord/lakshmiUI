import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-jewellery.jpg";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const HeroSection = () => {
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);

  useLayoutEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  return (
    <section>
      <div className={`relative w-full`}>
        {/* Background image */}
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />

        {/* Grid overlay */}
        <div
          className="
 
    absolute inset-0
      grid grid-cols-2
  "
        >
          <div className=" flex flex-col justify-center items-start pl-8 sm:pl-20 pt-0 md:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="font-sans text-[clamp(0.5rem,1.5vw,1rem)] tracking-[0.4em] uppercase text-primary  block">
                Est. 1985 • Polur
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[clamp(1.5rem,5vw,4.5rem)] font-display font-bold leading-tight "
            >
              Timeless
              <span className="gold-text-gradient block">Elegance</span>
              in Every Piece
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[clamp(0.6rem,1vw,4.5rem)] font-body text-ivory-muted mb-8 max-w-lg"
            >
              Your one-stop shop for luxury jewellery. Handcrafted with passion,
              worn with pride — from our family to yours.
            </motion.p>
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/shop"
                  className="gold-gradient px-8 py-3 font-sans text-sm font-semibold tracking-wider uppercase text-primary-foreground rounded gold-glow-hover transition-all duration-300 hover:scale-105"
                >
                  Explore Collection
                </Link>
                <Link
                  to="/appointment"
                  className="border border-primary px-8 py-3 font-sans text-sm font-semibold tracking-wider uppercase text-primary rounded hover:bg-primary/10 transition-all duration-300"
                >
                  Book Appointment
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div className="block lg:hidden">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col gap-4"
              >
                <Link
                  to="/shop"
                  className="flex justify-center items-center gold-gradient px-2 w-32 py-3 font-sans text-xs font-semibold tracking-wider uppercase text-primary-foreground rounded gold-glow-hover transition-all duration-300 hover:scale-105"
                >
                  <p className="">Collections</p>
                </Link>
                <Link
                  to="/appointment"
                  className="flex justify-center items-center border border-primary px-2 py-3 w-32 font-sans text-xs font-semibold tracking-wider uppercase text-primary rounded hover:bg-primary/10 transition-all duration-300"
                >
                  Appointments
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  // return (
  //   <section>
  //     <div className="relative   overflow-hidden">
  //       <div className="">
  //         <img
  //           src={heroImage}
  //           className="absolute w-full h-full object-contain"
  //         />
  //       </div>
  //       <div className="w-full h-full absolute lg:top-3/4   grid grid-cols-2">
  //         <div></div>
  //         <div
  //           className="
  //           lg:col-span-2
  //           lg:left-36
  //   relative
  //   px-[clamp(14px,3vw,32px)]
  //   py-[clamp(8px,2vw,16px)]
  //   text-[clamp(12px,2.5vw,16px)]
  //   translate-y-[clamp(0px,3vw,24px)]
  //   transition-all duration-300
  // "
  //         >
  //           <div className="flex flex-col gap-4">
  //             <motion.div
  //               initial={{ opacity: 0, y: 30 }}
  //               animate={{ opacity: 1, y: 0 }}
  //               transition={{ duration: 0.8, delay: 0.4 }}
  //               className="flex flex-wrap gap-4"
  //             >
  //               <Link
  //                 to="/shop"
  //                 className="gold-gradient px-8 py-3 font-sans text-sm font-semibold tracking-wider uppercase text-primary-foreground rounded gold-glow-hover transition-all duration-300 hover:scale-105"
  //               >
  //                 Explore Collection
  //               </Link>
  //               <Link
  //                 to="/appointment"
  //                 className="border border-primary px-8 py-3 font-sans text-sm font-semibold tracking-wider uppercase text-primary rounded hover:bg-primary/10 transition-all duration-300"
  //               >
  //                 Book Appointment
  //               </Link>
  //             </motion.div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default HeroSection;
