import './App.css';
import Navigation from './components/Navigation';
import Experience from './components/Experience';


function App() {
  return (
    <div className='html-layout'> 

      <Navigation />

      <div className="title">
        <div className="title-text">
          <h1 className="title-name">Hi, I'm Maya.</h1>
          <p className="title-sub">Aspiring Software Engineer & Computer Science Student</p>
        </div>
        
        <div className="port-img">
          <img 
            src="/maya-oum.jpg" alt="Maya Oum" className="title-photo"
          />
        </div>
        
      </div>

      <div className='about-me'>
        <p>
          I’m Maya Oum, a Computer Science student at the University of Central Florida with a passion for building software and creating video games. I’ve participated in hackathons, volunteered as a frontend developer for a nonprofit, and served as Secretary for Valencia College’s "Source Code" IT & Programming Club. Outside of coding, I’m a big gamer and love designing projects inspired by the games I enjoy.
        </p>
      </div>

      <Experience />
    </div>
  );
}

export default App;
