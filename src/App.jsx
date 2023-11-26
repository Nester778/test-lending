import { useState, useEffect } from 'react'
import logo from "./assets/logo.svg"
import './App.css'

function App() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const offsetX = 0.5 - mouseX / windowWidth;
      const offsetY = 0.5 - mouseY / windowHeight;

      document.querySelector('.background').style.transform = `translate(${offsetX * 50}px, ${offsetY * 70}px)`;
      document.querySelector('.sparkles').style.transform = `translate(${offsetX * 30}px, ${offsetY * 30}px)`;
      document.querySelector('.additional-sparkles').style.transform = `translate(${offsetX * 10}px, ${offsetY * 10}px)`;
    };

    // Добавляем слушатель события движения мыши
    document.addEventListener('mousemove', handleMouseMove);

    // Очищаем слушатель события при размонтировании компонента
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleCopyClick = () => {
    navigator.clipboard.writeText('WITCHER').then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    });
  };

  return (
    <>
      <div class="background"></div>
      <div class="sparkles"></div>
      <div class="character"></div>
      <div class="additional-sparkles"></div>
      <div class="centered-container">
        <div class="text-block">
          <h1>300%</h1>
          <p class="welcome">WELCOME BONUS</p>

          <div class="input-container">
            <p class="code-witcher">WITCHER</p>
            <span class="v-border"></span>
            <button class="copy-btn p-0" onClick={handleCopyClick}>COPY CODE</button>
          </div>
          <p class={copied ? 'copied' : 'non-copied'}>code copied!</p>
          <button class="play-btn">PLAY NOW</button>
        </div>
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="terms">
          *Terms and Conditions Apply
        </div>
      </div>
    </>
  )
}

export default App
