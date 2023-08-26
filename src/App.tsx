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
import IconeTecnologia from './Components/Iconetecnologia/Index';
import Projeto from './Components/Projetos';
import Contato from './Components/Contato';

import { Section1, Section2, Section3, Section4 } from "./App.style"
import { useEffect, useState } from 'react';

function App() {

const imgsPokedex = [imgPokedex1, imgPokedex2, imgPokedex3];
const imgsVueBurguer = [imgVueBurguer1, imgVueBurguer2, imgVueBurguer3];
const imgsSiteCursp = [imgSiteCurso1, imgSiteCurso2, imgSiteCurso3]

const [contador, setContador] = useState(0);

  function contar() {
    setContador(prevContador => (prevContador + 1) % 3);
  }

  useEffect(() => {
    setTimeout(contar, 1500);
  }, [contador]);

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
          <IconeTecnologia icone={<AiOutlineHtml5 />} descricao="HTML 5" />
          <IconeTecnologia icone={<DiCss3 />} descricao="CSS 3" />
          <IconeTecnologia icone={<SiJavascript />} descricao="JavaScript" />
          <IconeTecnologia icone={<SiTypescript />} descricao="TypeScript" />
          <IconeTecnologia icone={<FaReact/>} descricao="React" />
          <IconeTecnologia icone={<FaVuejs />} descricao="VUE" />
          <IconeTecnologia icone={<GrDocker />} descricao="Docker" />
          <IconeTecnologia icone={<FaJava />} descricao="Java" />
          <IconeTecnologia icone={<SiKotlin />} descricao="Kotlin" />
          <IconeTecnologia icone={<BsGit />} descricao="Git" />
          <IconeTecnologia icone={<SiMysql />} descricao="MySQL" />
          <IconeTecnologia icone={<FaNodeJs />} descricao="NodeJS" />
          <IconeTecnologia icone={<SiSpring />} descricao="Spring" />
        </div>
      </Section2>
      <Section3 id='section3'>
        <h2>Projetos</h2>

          <div id='containerProjetos'>
            <Projeto 
              Src= {imgPokedex1}
              Alt= "Capa do site pokedex"
              SrcColecao= {imgsPokedex[contador]}
              AltColecao= "Imagens do site"
              Titulo= "Pokedex"
              Tecnologias= {[<FaReact />, <SiTypescript />, <SiStyledcomponents />, <SiRedux />]}
              Descricao= "Projeto feito com React, nele tem uma lista de 151 pokémons,que é pega de uma API. O ptojeto tambem inclui página de detalhes sobre o pokémon e uma página de favoritos onde você pode salvar seus pokémons favoritos."
              HrefSite= "https://pokedex-kwrvqhbh6-josepps.vercel.app/"
              HrefRepo= "https://github.com/josepps/pokedex" 
            />
            <Projeto 
              Src= {imgVueBurguer1}
              Alt= "Capa do site VueBurguer"
              SrcColecao= {imgsVueBurguer[contador]}
              AltColecao= "Imagens do site"
              Titulo= "VueBurguer"
              Tecnologias= {[<FaVuejs />, <GrDocker />]}
              Descricao= "O vue-hamburguer é um projeto onde tem a parte do cliente, que pede os hamburguers, e a parte da hamburgueria, que recebe esse pedido e vai avançando ele, de recebido até pronto."
              HrefRepo= "https://github.com/josepps/vue-hamburguer" 
            />
            <Projeto 
              Src= {imgSiteCurso1}
              Alt= "Capa do site de Cursos"
              SrcColecao= {imgsSiteCursp[contador]}
              AltColecao= "Imagens do site"
              Titulo= "site de cursos"
              Tecnologias= {[<AiOutlineHtml5 />, <DiCss3 />]}
              Descricao= "Esse foi o primeiro site que eu fiz, foi o primeiro HandsOn do xp44. Um site para uma empresa fictícia de cursos de financias. Recebi o figma do projeto que e tive que fazer todo o HTML e CSS. Site responsivo para, tablets e celulares (não engloba todos os dispositivos)."
              HrefSite= "https://josepps.github.io/site-de-cursos/"
              HrefRepo= "https://github.com/josepps/site-de-cursos" 
            />
          </div>
          
      </Section3>
      <Section4 id='section4'>
        <h2>Contatos</h2>
        <div className='containerContatos'>
            <Contato
              href= "https://api.whatsapp.com/send?phone=5581996694886&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio!"
              icone= {<AiOutlineHtml5 />}
              titulo= "whatsapp"
              descricao= "(81) 99669-4886"
            />
            <Contato
              href= "https://www.linkedin.com/in/jos%C3%A9-santos-dev/"
              icone= {<AiFillLinkedin />}
              titulo= "Linkedin"
              descricao= "@josé-santos-dev"
            />
            <Contato
              href= "https://github.com/josepps"
              icone= {<BsGithub />}
              titulo= "GitHub"
              descricao= "@josepps"
            />
            <Contato
              href= "mailto:joseppsantanafs@gmail.com"
              icone= {<CgMail />}
              titulo= "E-email"
              descricao= "joseppsantanafs@gmail.com"
            />
        </div>
        
      </Section4>
    </>
  )
}

export default App
