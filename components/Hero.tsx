import React from 'react'
import Image from 'next/image'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  return (
    <div className='pb-20 pt-30'>
      {/*spotlight */}
      <div>
      <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#9432ff"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="white"
        />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/*Big introduce */}
      <section className="lg:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-12">
        
          <div className="col-span-7 place-self-left text-center sm:text-left">
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-tight font-extrabold">
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purpleDark to-purpleLight'>Hi!你好我是{""}
              </span>
              <TextGenerateEffect
               words='任柏恩'/>
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              簡單描述自己的特色
            </p>
            <div>
            {/*按鈕*/}
            <MagicButton
            title='Get Started'
            icon={<FaLocationArrow />}
            position='right' 
            />
            <MagicButton
            title='Get Started'
            icon={<FaLocationArrow />}
            position='right' 
            otherClasses='rounded-lg bg-white-100 text-black-200'
            />
            </div>

          </div>
        {/*<motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >*/}
        
        {/*個人照*/}
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden mx-auto lg:mx-0">
          <Image
            src="/images/me.png"
            alt="hero image"
            className="absolute w-full h-full object-cover"
            layout="fill"
          />
        </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
