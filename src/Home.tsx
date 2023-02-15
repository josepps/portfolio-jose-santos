import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { Header, Section1 } from "./Home.style"

function Home() {

  return (
    <>
      <Header>
        <nav>
          <ul>
            <li><a href="">Sobre</a></li>
            <li><a href="">Habilidades</a></li>
            <li><a href="">Projetos</a></li>
            <li><a href="">Contato</a></li>
          </ul>
        </nav>
      </Header>
      <main>
        <Section1>
          <div className="ContainerApresentacao">
            <div className="ContainerTitulos">
              <h3>Olá, eu sou</h3>
              <h1>José Santos</h1>
              <h2>Desenvolvedor <span>Front-End</span></h2>
            </div>
            <div className="ContainerBtn">
              <button>Download CV</button>
              <button>Entrar em contato</button>
            </div>
          </div>
          <div className="ContainerSobreMim">
            <div className='ContainerImgBanner'>
              <h1>Comits caindo</h1>
            </div>
            <div className='ContainerInfo'>
              <h2>Sobre mim</h2>
              <p>
                Desenvolvedor Front-end formado no curso full stack da gama Academy, com especialização em front-end. Trabalhos como freelancer desde dezembro de 2022 e com isso tive experiência de pegar projetos do zero e projetos já startados. 
              </p>
              <div className='ContainerContatos'>
                <a href=""><AiFillLinkedin />Linkedin</a>
                <a href=""><IoLogoWhatsapp /> WhatsApp</a>
                <a href=""><AiOutlineGithub />GitHub</a>
              </div>
            </div>
          </div>
        </Section1>
      </main>
    </>
  )
}

export default Home
