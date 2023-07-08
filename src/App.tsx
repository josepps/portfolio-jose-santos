import { AiFillLinkedin, AiFillCode, AiOutlineHtml5 } from 'react-icons/ai';
import { BsGithub, BsGit } from 'react-icons/bs';
import { DiCss3 } from 'react-icons/di';
import { FaJava, FaNodeJs, FaReact, FaVuejs } from 'react-icons/fa';
import { GrDocker } from 'react-icons/gr';
import { SiJavascript, SiKotlin, SiMysql, SiSpring, SiTypescript } from 'react-icons/si';

import { Section1, Section2 } from "./App.style"

function App() {

  return (
    <>
      <Section1>
        <header>
          <div>
            <h2>José Santos</h2>
          </div>
          <div className="containerNav">
            <nav>
              <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Conhecimentos</a></li>
                <li><a href="#">Projetos</a></li>
                <li><a href="#">Contatos</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          <div className="containerMain">
            <h1>Desenvolvedor <br /> Fullstack</h1>
            <p className="descricao">No mundo da programação desde Junho de 2022!</p>
            <a href="">Contatos</a>
          </div>
          <div className="containerMain">
            <div className="container">
              <div className="box">
                <div className="card" id="front"><AiFillCode /></div>
                <div className="card" id="back"><AiFillLinkedin /></div>
                <div className="card" id="left">Front-End</div>
                <div className="card" id="right">Back-End</div>
                <div className="card" id="top">Full-Stack</div>
                <div className="card" id="bottom"><BsGithub /></div>
              </div>
            </div>
          </div>
        </main>
      </Section1>
      <Section2>
          <h2>Conhecimentos</h2>

        <div className='containerTecnologias'>
          <div className="Tecnologias"><span><AiOutlineHtml5 /></span><p>HTML 5</p></div>
          <div className="Tecnologias"><span><DiCss3 /></span><p>CSS 3</p></div>
          <div className="Tecnologias"><span><SiJavascript /></span><p>JavaScript</p></div>
          <div className="Tecnologias"><span><SiTypescript /></span><p>TypeScript</p></div>
          <div className="Tecnologias"><span><FaReact/></span><p>React</p></div>
          <div className="Tecnologias"><span><FaVuejs /></span><p>VUE</p></div>
          <div className="Tecnologias"><span><GrDocker /></span><p>Docker</p></div>
          <div className="Tecnologias"><span><FaJava /></span><p>Java</p></div>
          <div className="Tecnologias"><span><SiKotlin /></span><p>Kotlin</p></div>
          <div className="Tecnologias"><span><BsGit /></span><p>Git</p></div>
          <div className="Tecnologias"><span><SiMysql /></span><p>MySQL</p></div>
          <div className="Tecnologias"><span><FaNodeJs /></span><p>Node.js</p></div>
          <div className="Tecnologias"><span><SiSpring /></span><p>Spring</p></div> 
        </div>
      </Section2>
    </>
  )
}

export default App
