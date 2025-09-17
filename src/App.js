import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className='html-layout'> 

      <Navigation />

      <div className="title">
        <div className="title-text">
          <h1 className="title-name">Hey, I'm Maya.</h1>
          <p className="title-sub">Aspiring Software Engineer & Computer Science Student</p>
        </div>
        
        <div className="port-img">
          <img 
            src="/maya-oum.jpg" alt="Maya Oum" className="title-photo"
          />
        </div>
        
      </div>

      <h2 className='about-me'>About Me</h2>
      <p></p>


      
    </div>
  );
}

export default App;
