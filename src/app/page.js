import Image from 'next/image'
import React from 'react'
import News from './components/news.jsx'
import TierTop from './components/tierTop.jsx'

export default function Home() {
  return (
    <main className="pt-[60px] container sm:flex sm:flex-col sm:max-w-none sm:pt-[30px]">
      <div className='main-content '>
        <figure>
          <img className='sm:hidden'
           src='https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ba5a15180302895.6508a290d86dd.jpg'></img>
          <img className='lg:hidden xl:hidden md:hidden'
           src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7b0982180302895.6508a290d6ff3.jpg'></img>
        </figure>
        <div className='grid grid-cols-2 mt-8 sm:flex sm:flex-col'>
          <h1 className='leading-[3.5rem] font-extrabold text-[4rem] sm:text-[2.5rem] sm:leading-[2.5rem] '>The Bright Future of Web 3.0?</h1>
          <div className='pl-4 pr-4 sm:p-0 '>
            <p className='mb-[3rem] sm:mt-[1rem] sm:mb-[1.5rem] sm:text-[0.95rem]'>We dive into the next evolution of the web that claims yo put the power of the platforms back into the hands of the people. But is it really fulfilling its promise? </p>
            <button className='hover:bg-[var(--Very-dark-blue)] bg-[var(--Soft-red)] py-3 px-[50px] text-[var(--Off-white)] text-[0.8rem] font-bold sm:px-[42px]'><span className='mr-2'>R E A D</span> M O R E</button>
          </div>

        </div>
      </div>

      <News />

      <TierTop />
    </main>
  )
}
