import React from 'react'

const Mainbody = () => {
  return (
    <div className="w-[99%] h-[85vh] flex flex-col justify-start items-center gap-4">
      <section className="w-full h-[80vh] sm:h-[50vh] flex flex-col-reverse sm:flex-row bg-indigo-200 p-1.5">
        <div className="w-[99%] h-full flex flex-col justify-center items-center gap-3">
          <p className={`text-3xl font-bold w-[70%]`}>The New Game website in Market</p>
          <p className="w-[70%] flex justify-center items-center">The new gaming platform for all your entertainment needs.</p>
        </div>
        <div className="w-[99%] h-full flex justify-center items-center relative">
          <img src="/vector.jpg" alt="URL Shortener" fill={true} className="mix-blend-darken" />
        </div>
      </section>
    </div>
  )
}

export default Mainbody