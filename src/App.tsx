import { AiFillLinkedin, AiFillCode, AiOutlineHtml5 } from 'react-icons/ai';
import { BsGithub, BsGit, BsWhatsapp } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { DiCss3 } from 'react-icons/di';
import { FaJava, FaNodeJs, FaReact, FaVuejs } from 'react-icons/fa';
import { GrDocker } from 'react-icons/gr';
import { SiJavascript, SiKotlin, SiMysql, SiSpring, SiStyledcomponents, SiTypescript, SiRedux } from 'react-icons/si';
import imgPokedex1 from '/img/pokemon1.png';
import imgPokedex2 from '/img/pokemon2.png';
import imgPokedex3 from '/img/pokemon3.png';
import imgVueBurguer1 from '/img/vueBurguer1.png';
import imgVueBurguer2 from '/img/vueBurguer2.png';
import imgVueBurguer3 from '/img/vueBurguer3.png';
import imgSiteCurso1 from '/img/siteCursos1.png';
import imgSiteCurso2 from '/img/siteCursos2.png';
import imgSiteCurso3 from '/img/siteCursos3.png';

import { Section1, Section2, Section3, Section4 } from "./App.style"
import { useEffect, useState } from 'react';

function App() {

const imgsPokedex = [imgPokedex1, imgPokedex2, imgPokedex3];
const imgsVueBurguer = [imgVueBurguer1, imgVueBurguer2, imgVueBurguer3];
const imgsSiteCursp = [imgSiteCurso1, imgSiteCurso2, imgSiteCurso3]

const [contador, setContador] = useState(0);

function iniciarContador() {
  setContador(contador+1)

    if (contador >= 2) {
      setContador(0)
  }
} 

useEffect(() => {
  setTimeout(iniciarContador, 1500);
},[contador])

  return (
    <>
      <Section1 id='section1'>
        <header>
          <div>
            <h2>José Santos</h2>
          </div>
          <div className="containerNav">
            <nav>
              <ul>
                <li><a href="#section1">Início</a></li>
                <li><a href="#section2">Conhecimentos</a></li>
                <li><a href="#section3">Projetos</a></li>
                <li><a href="#section4">Contatos</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          <div className="containerMain">
            <h1>Desenvolvedor <br /> Fullstack</h1>
            <p className="descricao">No mundo da programação desde Junho de 2022!</p>
            <a href="#section4">Contatos</a>
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
      <Section2 id='section2'>
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
      <Section3 id='section3'>
        <h2>Projetos</h2>

          <div id='containerProjetos'>
            <div className='projetos'>
              <img src={imgPokedex1} alt="Capa do site pokedex" />
              <img src={imgsPokedex[contador]} alt="Imagens do site" />
              <div className='infoProjeto'>
                <h2>Pokedex</h2>
                <ul>
                  <li><FaReact /></li>
                  <li><SiTypescript /></li>
                  <li><SiStyledcomponents /></li>
                  <li><SiRedux /></li>
                </ul>
              </div>
              <div className='descricaoProjeto'>
                <p >Projeto feito com React, nele tem uma lista de 151 pokémons,que é pega de uma API. O ptojeto tambem inclui página de detalhes sobre o pokémon e uma página de favoritos onde você pode salvar seus pokémons favoritos.</p>
              </div>
              <div className='containerLink'>
                  <a href="https://pokedex-kwrvqhbh6-josepps.vercel.app/" target='_blank'>Site</a>
                  <a href="https://github.com/josepps/pokedex" target='_blank'>Repositório</a>
              </div>
            </div>

            <div className='projetos'>
              <img src={imgVueBurguer1} alt="Capa do site pokedex" />
              <img src={imgsVueBurguer[contador]} alt="Imagens do site" />
              <div className='infoProjeto'>
                <h2>VueBurguer</h2>
                <ul>
                  <li><FaVuejs /></li>
                  <li><GrDocker /></li>
                </ul>
              </div>
              <div className='descricaoProjeto'>
                <p >O vue-hamburguer é um projeto onde tem a parte do cliente, que pede os hamburguers, e a parte da hamburgueria, que recebe esse pedido e vai avançando ele, de recebido até pronto.</p>
              </div>
              <div className='containerLink'>
                  <a href="https://github.com/josepps/vue-hamburguer" target='_blank'>Repositório</a>
              </div>
            </div>

            <div className='projetos'>
              <img src={imgSiteCurso1} alt="Capa do site pokedex" />
              <img src={imgsSiteCursp[contador]} alt="Imagens do site" />
              <div className='infoProjeto'>
                <h2>site de cursos</h2>
                <ul>
                  <li><AiOutlineHtml5 /></li>
                  <li><DiCss3 /></li>
                </ul>
              </div>
              <div className='descricaoProjeto'>
                <p >Esse foi o primeiro site que eu fiz, foi o primeiro HandsOn do xp44.
                    Um site para uma empresa fictícia de cursos de financias.
                    Recebi o figma do projeto que e tive que fazer todo o HTML e CSS.
                    Site responsivo para, tablets e celulares (não engloba todos os dispositivos)
                </p>
              </div>
              <div className='containerLink'>
                <a href="https://josepps.github.io/site-de-cursos/" target='_blank'>Site</a>
                <a href="https://github.com/josepps/site-de-cursos" target='_blank'>Repositório</a>
              </div>
            </div>
          </div>
          
      </Section3>
      <Section4 id='section4'>
        <h2>Contado</h2>
        <div className='containerContatos'>
            <a href='https://api.whatsapp.com/send?phone=5581996694886&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio!' target='_blank'>
              <span><BsWhatsapp /></span>
              <h3>whatsapp</h3>
              <p>(81) 99669-4886</p>
            </a>
            <a href='https://www.linkedin.com/in/jos%C3%A9-santos-dev/' target='_blank'>
              <span><AiFillLinkedin /></span>
              <h3>Linkedin</h3>
              <p>@josé-santos-dev</p>
            </a>
            <a href='https://github.com/josepps' target='_blank'>
              <span><BsGithub /></span>
              <h3>GitHub</h3>
              <p>@josepps</p>
            </a>
            <a href='mailto:joseppsantanafs@gmail.com' target='_blank'>
              <span><CgMail /></span>
              <h3>E-email</h3>
              <p>joseppsantanafs@gmail.com</p>
            </a>
        </div>
        
      </Section4>
    </>
  )
}

export default App
