import React from 'react'
import './About.scss';

const About = () => {
  return (
    <div className='about'>
      <div className='container'>
        <div className='container__title'>
          <h1>Norbey Vásquez Torres</h1>
        </div>
        <div className='container__text'>
          <p>
            Full Stack Js Developer, React, Node, Express, MongoDB, Mongoose, MySQL, MongoDB Atlas, Heroku, Git, Github,
            técnico en análisis y diseño de bases de datos, estudiante de ingeniería de sistemas(séptimo semestre).
          </p>
        </div>
        <div className='container__image'>
          <img className='container__image--prf' src='https://media-exp1.licdn.com/dms/image/C4D03AQGhcjxs9369iQ/profile-displayphoto-shrink_200_200/0/1624562037719?e=1652918400&v=beta&t=7nUMCY-zsWpb_VWeGVPBx1Yx8SHh8yBg9RROKCSgWMw' alt='Norbey' />
        </div>
        <div className='container__text'>
          <h3>Aprendizajes importantes con Make it Real</h3>
          <ul>
            <li>Fortalecer las habilidades de programación con JavaScript</li>
            <li>Utilizar React y las interacciones con las otras librerías, contenido supremamente actualizado</li>
            <li> Entender el funcionamiento específico de las API, su construcción y contenido</li>
          </ul>
        </div>
        <h3>Contacto</h3>
        <div className='container__contact'>
          <a href="https://www.linkedin.com/in/nvasquezt" target="_blank" rel="noreferrer"><img className='container__contact--logo' src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" /></a>
          <a href="https://github.com/nvasquezt" target="_blank" rel="noreferrer"><img className='container__contact--logo' src="https://as1.ftcdn.net/v2/jpg/04/52/18/48/1000_F_452184858_iZXfI1h2BdKB5i9cDwpu9Ue1il8Mxxfq.jpg" alt="github" /></a>
        </div>
      </div>
  </div>
        )
}

export default About
