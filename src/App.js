// import {Clock} from './Component/Clock'
import './App.css';
import LigneListe from './Component/LigneListe';
import Presentation from './Component/Presentation';
import eliot from './images/eliot.JPG'


const Presentations = {
  nom: 'Bemanantsoa',
  prenom: 'Mahery Eliot',
  tel: '+261 32 38 091 91',
  mail: 'eliot21.aps1agmail.com'
}

const Diploma = [
  'Certificat Annee Preparatoire Programme SESAME',
  'Baccalaureat Serie C'
]

const Experience = [
  'Developpeur Laravel Chez LCom',
  'Stage Decouverte 3jours chez Bocasay'
]

const Competence = [
  'Langage PHP, JS, HTML, CSS, Mysql',
  'Framework Laravel',
  'Librairie React Js'
]




function App() {
  return (

      <div className="row">
        <hr className='mb-5'/>
        <div  className="row">
          
          <div  className="col-md-4">
            <img style={{height: "250px"}}className="img-fluid" src={eliot} />
          </div> 
          <div className="col-md-4"></div>
            <Presentation data={Presentations}/>
        </div>
        <hr className='mt-5'/>
        <LigneListe titre="Diplome" donnees={Diploma}/>
        <LigneListe titre="Experience" donnees={Experience}/>
        <LigneListe titre="Competence" donnees={Competence}/>
      </div>

  );
}

export default App;
