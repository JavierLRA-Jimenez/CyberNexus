import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook, FaDiscord, FaTrophy } from 'react-icons/fa';
import robotImage from "./../assets/robot.png"
import logoImage from './../assets/logo.png'
const Head = () => {
  const [chileTime, setChileTime] = useState('');
  const [europeTime, setEuropeTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [downloadCount, setDownloadCount] = useState(1); // Estado para el contador de descargas
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // Agregado el estado inicial de mousePosition
  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };


  useEffect(() => {
    const interval = setInterval(() => {
      const chile = moment().tz('America/Santiago').format('HH:mm');
      const europe = moment().tz('Europe/Paris').format('HH:mm');
      const currentDateFormatted = moment().format('YYYY-MM-DD');
      setChileTime(chile);
      setEuropeTime(europe);
      setCurrentDate(currentDateFormatted);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Efecto para la animación del contador de descargas
  useEffect(() => {
    const interval = setInterval(() => {
      if (downloadCount < 10000) {
        setDownloadCount(prevCount => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 6); // Intervalo de tiempo en milisegundos para la animación del contador

    return () => clearInterval(interval);
  }, [downloadCount]);

  useEffect(() => {
    document.addEventListener('mousemove', updateMousePosition);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const mainSectionStyles = {
    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
    // Resto de tus estilos...
  };

  return (
    <section  >
      {/* PRINCIPAL*/}
      <div className='fixed top-3 left-6 h-[42rem] md:w-[67rem] bg-purple-600 shadow-lg rounded-2xl flex items-center justify-center' >
        <img src={robotImage} alt='Robot' className='max-w-full h-full'  style={mainSectionStyles} />
        <div className='fixed left-3 bottom-3 bg-black opa rounded-xl md:h-[23rem] md:w-[27rem] p-4'>
          <div className=' bg-gray-500'>				
					  <img src={logoImage} alt='logo' className='md:h-[14rem] md:w-[27rem] p-0 m-0 ' />
          </div>

					<br></br>
					<br></br>

					<div className='font-bold font-mono justify-center text-center  rounded-md bg-black'>
  <p className='text-white'>The first souls-like set in a world of robots and space abominations</p>
	<div className='flex justify-center space-x-4'>
    <FaInstagram className='text-white text-2xl' />
    <FaTwitter className='text-white text-2xl' />
    <FaYoutube className='text-white text-2xl' />
    <FaFacebook className='text-white text-2xl' />
  </div>
</div>
        </div>    

				<button className='fixed right-[34rem] bottom-20 bg-gradient-to-r from-yellow-600 to-purple-500 rounded-full md:h-[6rem] md:w-[25rem] p-4 flex items-center justify-center text-white font-bold text-xl md:text-2xl border-4 border-transparent hover:border-white hover:shadow-xl transform transition duration-300 hover:scale-105'>
          <span className="text-center">DOWNLOAD NOW!</span>

        </button>


        <div className='fixed left-[3rem] top-8 bg-purple-500 rounded-full md:h-[4rem] md:w-[25rem] p-2 border-4  border-black'>
					<div className=' text-center justify-center items-center '>
          <button className="text-white font-bold bg-purple-500 px-4 rounded-3xl mr-4">Trailer</button>
           <button className="text-white font-bold bg-purple-500 px-4 rounded-3xl mr-4">Register</button>
           <button className="text-white font-bold bg-purple-500 px-4 rounded-3xl">Log In</button>
					 </div>
        </div> 

      </div> 

      {/* SIDEBAR*/}
      <div className="fixed top-3 right-3 h-[35rem] w-1/4 bg-purple-800 shadow-lg rounded-xl">
				
			<div className="bg-black rounded-xl h-[15rem] flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 pt-6">Hora Actual</h1>
            <div className="flex justify-center items-center md:h-[8rem]">
              <div className="bg-black text-white rounded-full p-6 m-4">
                <p className="text-4xl">{chileTime}</p>
                <p className="text-lg opacity-75">Chile</p>
              </div>
              <div className="bg-black text-white rounded-full p-6 m-4">
                <p className="text-4xl">{europeTime}</p>
                <p className="text-lg opacity-75">Europa</p>
              </div>
            </div>
            <div className=" font-serif text-lg text-white  mt-4 bg-purple-600 rounded-3xl">{currentDate}</div>
          </div>
        </div>

        <div className='pt-3'>
          <div className="bg-purple-500 rounded-3xl h-[8.5rem] m-2">
					<div className='font-bold text-7xl text-center justify-center pt-6'>{downloadCount}+ <div className='text-sm'>DOWNLOADS</div></div>
          </div>

					<div className="flex items-center justify-center bg-purple-500 rounded-3xl h-[4rem] m-3 text-white">
  <FaDiscord className="text-4xl mr-2" />
  <span className='font-bold text-xl'>Join Us</span>
</div>

<div className="flex items-center justify-center bg-purple-500 rounded-3xl h-[4rem] m-4 text-white">
  <FaTrophy className="text-4xl mr-2" />
  <span className='font-bold text-xl'>FAQ</span>
</div>

        </div>
      </div>
    </section>
  );
};

export default Head;
