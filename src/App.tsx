import { AiFillLinkedin, AiFillCode } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';

import { Section1 } from "./App.style"

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
    </>
  )
}

export default App
