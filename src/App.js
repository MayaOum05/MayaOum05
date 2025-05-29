import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className='html-layout'> 
      <div className="code-tag">&lt;body&gt;</div>

      <Navigation />

      <div className='title'>
        <h1 className='title-name'>Maya Oum</h1>

        <p className='title-sub'>Software Engineer</p>
      </div>

      <div className='education'>

        <p>Valencia College <br/> Associate of Arts <br/> 2023 - 2025 <br/></p>

        <p>University of Central Florida <br/> Bechelor's of Science in Computer Science <br/> 2025 - Present <br/></p>
      </div>

      <div className="code-tag">&lt;div&gt;</div>
      
      <h2>About Me</h2>
      <p>I am a software engineer based in Orlando, Florida attending the University of Central Florida for my B.S. in Computer Science and minor in Statistics. My passion for programming and the software industry comes from my childhood love of Minecraft, a game where you are free to build to with no limitations. I enjoyed the freedom of creation and sought a career path where I could take that love of unlimited building and apply it to real-world situations.<br/>
      I learned to program so that I could create Minecraft mods but instead I found that programming was something I enjoyed in general. </p>

      <div className="code-tag">&lt;/div&gt;</div>

      <div className="code-tag">&lt;div&gt;</div>
      
      <h2>Experience</h2>
      <p>Web Development Intern @ TechElevate | Jan 2025 - Present </p>
      <p>Languages, Frameworks, & Tools: Typescript, React.js, Firebase Auth, Github</p>
      <p>Role Description: Built and optimized secure user authentication with Firebase, led debugging efforts, and improved frontend performance using React, TypeScript, and Material UI—enhancing platform accessibility for 100+ users. </p>

      <div className="code-tag">&lt;/div&gt;</div>

      <div className="code-tag">&lt;h1&gt;</div>
      <h2>Featured Projects</h2>
      <div className="code-tag">&lt;h1&gt;</div>


      <div className="code-tag">&lt;/body&gt;</div>

      
    </div>
  );
}

export default App;
