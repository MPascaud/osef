import React, { Component, Fragment } from 'react';
import './App.css';
import banniere from './img/banniere1.jpg'
import Bienvenue from './components/Bienvenue'
import Graine from './components/Graine'
import Test from './components/Test'
import PerfectScrollbar from 'perfect-scrollbar';
import Presentation from './components/Presentation'
import InfiniteScroll from 'react-infinite-scroll-component';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import MediaCard from './components/MediaCard'
import Header from './components/Header'

const db_graines = {
  graine1: {
    id: '1',
    categorie: 'cat1',
    variete: 'nom1',
    photo:'',
    type_de_troc:'echange',//(echange / don)
    stock : 1,
    infos_conseil:'vhiiihosovnsv',
    germination:'10%',
    type:'vivace', //(vivace/ caduc)
    exposition:'ensoleille', //(ensoleillé/ mi-ombre/ombre)
    type_de_terre: 'acide', //(acide/ calcaire/ drainant/ humide/humifere/riche/ sec)
    rustique:'false',
    semis:'printemps',//saison
    arrosage:'abondant',//abondant semi-abondant rare
    origine:'France',
    popularité: 80,//sur 100
    rarete: 'rare'//rare commune atypique
  },
  graine2: {
    id: '2',
    categorie: 'cat2',
    variete: 'nom2',
    photo:'',
    type_de_troc:'don',//(echange / don)
    stock : 11,
    infos_conseil:'azzzzzzzzzzzsssssssssss',
    germination:'40%',
    type:'caduc', //(vivace/ caduc)
    exposition:'mi-ombre', //(ensoleillé/ mi-ombre/ombre)
    type_de_terre: 'calcaire', //(acide/ calcaire/ drainant/ humide/humifere/riche/ sec)
    rustique: true,
    semis:'ete',//saison
    arrosage:'rare',//abondant semi-abondant rare
    origine:'Ailleurs',
    popularité: 33,//sur 100
    rarete: 'commune'//rare commune atypique
  },
  graine3: {
    id: '1',
    categorie: 'cat1',
    variete: 'nom1',
    photo:'',
    type_de_troc:'echange',//(echange / don)
    stock : 1,
    infos_conseil:'vhiiihosovnsv',
    germination:'10%',
    type:'vivace', //(vivace/ caduc)
    exposition:'ensoleille', //(ensoleillé/ mi-ombre/ombre)
    type_de_terre: 'acide', //(acide/ calcaire/ drainant/ humide/humifere/riche/ sec)
    rustique:'false',
    semis:'printemps',//saison
    arrosage:'abondant',//abondant semi-abondant rare
    origine:'France',
    popularité: 80,//sur 100
    rarete: 'rare'//rare commune atypique
  },
  graine4: {
    id: '2',
    categorie: 'cat2',
    variete: 'nom2',
    photo:'',
    type_de_troc:'don',//(echange / don)
    stock : 11,
    infos_conseil:'azzzzzzzzzzzsssssssssss',
    germination:'40%',
    type:'caduc', //(vivace/ caduc)
    exposition:'mi-ombre', //(ensoleillé/ mi-ombre/ombre)
    type_de_terre: 'calcaire', //(acide/ calcaire/ drainant/ humide/humifere/riche/ sec)
    rustique: true,
    semis:'ete',//saison
    arrosage:'rare',//abondant semi-abondant rare
    origine:'Ailleurs',
    popularité: 33,//sur 100
    rarete: 'commune'//rare commune atypique
  },
  graine5: {
    id: '1',
    categorie: 'cat1',
    variete: 'nom1',
    photo:'',
    type_de_troc:'echange',//(echange / don)
    stock : 1,
    infos_conseil:'vhiiihosovnsv',
    germination:'10%',
    type:'vivace', //(vivace/ caduc)
    exposition:'ensoleille', //(ensoleillé/ mi-ombre/ombre)
    type_de_terre: 'acide', //(acide/ calcaire/ drainant/ humide/humifere/riche/ sec)
    rustique:'false',
    semis:'printemps',//saison
    arrosage:'abondant',//abondant semi-abondant rare
    origine:'France',
    popularité: 80,//sur 100
    rarete: 'rare'//rare commune atypique
  },
  graine6: {
    id: '2',
    categorie: 'cat2',
    variete: 'nom2',
    photo:'',
    type_de_troc:'don',//(echange / don)
    stock : 11,
    infos_conseil:'azzzzzzzzzzzsssssssssss',
    germination:'40%',
    type:'caduc', //(vivace/ caduc)
    exposition:'mi-ombre', //(ensoleillé/ mi-ombre/ombre)
    type_de_terre: 'calcaire', //(acide/ calcaire/ drainant/ humide/humifere/riche/ sec)
    rustique: true,
    semis:'ete',//saison
    arrosage:'rare',//abondant semi-abondant rare
    origine:'Ailleurs',
    popularité: 33,//sur 100
    rarete: 'commune'//rare commune atypique
  },
  graine7: {
    id: '1',
    categorie: 'cat1',
    variete: 'nom1',
    photo:'',
    type_de_troc:'echange',//(echange / don)
    stock : 1,
    infos_conseil:'vhiiihosovnsv',
    germination:'10%',
    type:'vivace', //(vivace/ caduc)
    exposition:'ensoleille', //(ensoleillé/ mi-ombre/ombre)
    type_de_terre: 'acide', //(acide/ calcaire/ drainant/ humide/humifere/riche/ sec)
    rustique:'false',
    semis:'printemps',//saison
    arrosage:'abondant',//abondant semi-abondant rare
    origine:'France',
    popularité: 80,//sur 100
    rarete: 'rare'//rare commune atypique
  },
  graine8: {
    id: '2',
    categorie: 'cat2',
    variete: 'nom2',
    photo:'',
    type_de_troc:'don',//(echange / don)
    stock : 11,
    infos_conseil:'azzzzzzzzzzzsssssssssss',
    germination:'40%',
    type:'caduc', //(vivace/ caduc)
    exposition:'mi-ombre', //(ensoleillé/ mi-ombre/ombre)
    type_de_terre: 'calcaire', //(acide/ calcaire/ drainant/ humide/humifere/riche/ sec)
    rustique: true,
    semis:'ete',//saison
    arrosage:'rare',//abondant semi-abondant rare
    origine:'Ailleurs',
    popularité: 33,//sur 100
    rarete: 'commune'//rare commune atypique
  },
  graine9: {
    id: '1',
    categorie: 'cat1',
    variete: 'nom1',
    photo:'',
    type_de_troc:'echange',//(echange / don)
    stock : 1,
    infos_conseil:'vhiiihosovnsv',
    germination:'10%',
    type:'vivace', //(vivace/ caduc)
    exposition:'ensoleille', //(ensoleillé/ mi-ombre/ombre)
    type_de_terre: 'acide', //(acide/ calcaire/ drainant/ humide/humifere/riche/ sec)
    rustique:'false',
    semis:'printemps',//saison
    arrosage:'abondant',//abondant semi-abondant rare
    origine:'France',
    popularité: 80,//sur 100
    rarete: 'rare'//rare commune atypique
  },
  graine10: {
    id: '2',
    categorie: 'cat2',
    variete: 'nom2',
    photo:'',
    type_de_troc:'don',//(echange / don)
    stock : 11,
    infos_conseil:'azzzzzzzzzzzsssssssssss',
    germination:'40%',
    type:'caduc', //(vivace/ caduc)
    exposition:'mi-ombre', //(ensoleillé/ mi-ombre/ombre)
    type_de_terre: 'calcaire', //(acide/ calcaire/ drainant/ humide/humifere/riche/ sec)
    rustique: true,
    semis:'ete',//saison
    arrosage:'rare',//abondant semi-abondant rare
    origine:'Ailleurs',
    popularité: 33,//sur 100
    rarete: 'commune'//rare commune atypique
  },
  graine11: {
    id: '1',
    categorie: 'cat1',
    variete: 'nom1',
    photo:'',
    type_de_troc:'echange',//(echange / don)
    stock : 1,
    infos_conseil:'vhiiihosovnsv',
    germination:'10%',
    type:'vivace', //(vivace/ caduc)
    exposition:'ensoleille', //(ensoleillé/ mi-ombre/ombre)
    type_de_terre: 'acide', //(acide/ calcaire/ drainant/ humide/humifere/riche/ sec)
    rustique:'false',
    semis:'printemps',//saison
    arrosage:'abondant',//abondant semi-abondant rare
    origine:'France',
    popularité: 80,//sur 100
    rarete: 'rare'//rare commune atypique
  },
  graine12: {
    id: '2',
    categorie: 'cat2',
    variete: 'nom2',
    photo:'',
    type_de_troc:'don',//(echange / don)
    stock : 11,
    infos_conseil:'azzzzzzzzzzzsssssssssss',
    germination:'40%',
    type:'caduc', //(vivace/ caduc)
    exposition:'mi-ombre', //(ensoleillé/ mi-ombre/ombre)
    type_de_terre: 'calcaire', //(acide/ calcaire/ drainant/ humide/humifere/riche/ sec)
    rustique: true,
    semis:'ete',//saison
    arrosage:'rare',//abondant semi-abondant rare
    origine:'Ailleurs',
    popularité: 33,//sur 100
    rarete: 'commune'//rare commune atypique
  },
  graine13: {
    id: '1',
    categorie: 'cat1',
    variete: 'nom1',
    photo:'',
    type_de_troc:'echange',//(echange / don)
    stock : 1,
    infos_conseil:'vhiiihosovnsv',
    germination:'10%',
    type:'vivace', //(vivace/ caduc)
    exposition:'ensoleille', //(ensoleillé/ mi-ombre/ombre)
    type_de_terre: 'acide', //(acide/ calcaire/ drainant/ humide/humifere/riche/ sec)
    rustique:'false',
    semis:'printemps',//saison
    arrosage:'abondant',//abondant semi-abondant rare
    origine:'France',
    popularité: 80,//sur 100
    rarete: 'rare'//rare commune atypique
  },
  graine14: {
    id: '2',
    categorie: 'cat2',
    variete: 'nom2',
    photo:'',
    type_de_troc:'don',//(echange / don)
    stock : 11,
    infos_conseil:'azzzzzzzzzzzsssssssssss',
    germination:'40%',
    type:'caduc', //(vivace/ caduc)
    exposition:'mi-ombre', //(ensoleillé/ mi-ombre/ombre)
    type_de_terre: 'calcaire', //(acide/ calcaire/ drainant/ humide/humifere/riche/ sec)
    rustique: true,
    semis:'ete',//saison
    arrosage:'rare',//abondant semi-abondant rare
    origine:'Ailleurs',
    popularité: 33,//sur 100
    rarete: 'commune'//rare commune atypique
  }
}


const db_utilisateurs = {
  pseudo1: {
    nom: 'dfbdvf',
    presentation: "dlkvnd",
    note_utilisateurs: 2,
    avatar: 'youpi/evedfv/evfv',
    osef:'fvdflmsv'
  },
  pseudo2: {
    nom: 'Calimeroxx',
    presentation: "Blabla jsuis trop un fou j'en peux plus de ma vie tellement jsuis fort.",
    note_utilisateurs: 4,
    avatar:'/img/poussin.png',
    osef:'efter'
  }

}

//pour les cartes
const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});




class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    graines: db_graines,
    presentation: db_utilisateurs.pseudo2.presentation,
    avatar: db_utilisateurs.pseudo2.avatar,
    utilisateur: db_utilisateurs.pseudo2,
    test: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  }
  componentDidMount(){

      const ps = new PerfectScrollbar('#ilveut', {
    wheelSpeed: 2,
    maxScrollbarLength: 100,
  });

      const ps2 = new PerfectScrollbar('#ila', {
    wheelSpeed: 2,
    maxScrollbarLength: 100,
  });
 

  console.log(this.state.graines)
  }
  




    // {graine.semis}
    // {graine.id}
    // {graine.categorie}
    // {graine.variete}
    // {graine.photo}
    // {graine.type_de_troc}
    // {graine.stock}
    // {graine.infos_conseil}
    // {graine.germination}
    // {graine.type}
    // {graine.exposition}
    // {graine.type_de_terre}
    // {graine.rustique}
    // {graine.semis}
    // {graine.arrosage}
    // {graine.origine}
    // {graine.popularité}
    // {graine.rarete}




  render () {
    const graines = Object.keys(this.state.graines)
      .map(key => <Graine caracs={this.state.graines[key]}/>)
    console.log(graines)

    // const graines = Object.keys(this.state.graines)
    //   .map(key => <SimpleCard caracs={this.state.graines[key]} />)


    return (

      <Fragment>
        <div className="page">
          <Header />

          <div className="bann_cont">
            <div className="banniere">
              <img className="banniere_image" src={banniere} alt="je suis une banniere huhu"/>
            </div>
          </div>

          <div className="collection" id="collection">
            {/*<Bienvenue pseudo={this.state.pseudo}></Bienvenue>
            <Presentation presentation={this.state.presentation} avatar={this.state.avatar}/>
                        
            <div className="note">
              note
            </div>*/}
            <MediaCard
              className="mediacard"
              caracs={this.state.utilisateur}/>
            <div className="boutons">
              <div className="ila_bouton">
                ila_bouton
              </div>
              <div className="ilveut_bouton">
                ilveut_bouton
              </div>
            </div>
            <div className="listes" id="listes">
              <div className="ila" id="ila">
                <InfiniteScroll
                  dataLength={graines.length}
                  hasMore={true}
                  endMessage={
                    <p style={{textAlign: 'center'}}>
                    <b>Yay! You have seen it all</b>
                    </p>
                  }
                  >
                  {graines}
                  
                </InfiniteScroll>
                </div>



              <div className="ilveut" id="ilveut">
               
                  {graines}
                  {graines}
                  {graines}
                  {graines}
                  {graines}
                  {graines}
                  {graines}
                  {graines}
                  {graines}
                </div>



            </div>
          </div>




          <div className="pied">
            pied
          </div>

          

          <div className="contacter">
            contacter
          </div>
        </div>
      </Fragment>

    )

  }

}
export default App;
