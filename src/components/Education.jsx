import React from 'react'

const Education = () => {
  return (
    <section
      id="education"
      className="h-screen flex justify-center items-center border-b bg-heroBg"
    >
      <div className="h-full mt-52 md:mt-0  w-full flex">
        <div className="basis-1/2"></div>
        <div className="basis-1/2 flex justify-center items-center">
          <div>
            <img
              src="/myPortfolio/assets/images/graduation-hat.png"
              className="h-60 mx-auto"
              
            />
            <h1 className="text-4xl font-bold text-center font-kalam ">
              Education{" "}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education