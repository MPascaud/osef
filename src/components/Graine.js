import React from 'react'


// ensoleillé/ mi-ombre/ombre
// 	 <img src={test} style={{width:'20px', height:'20px'}}/>

// 	{console.log(`${db_icones.exposition.ombre}`)}





// const db_icones = {
// 	exposition: {
// 		ensoleillé:'/img/icones/icone_test.png',
// 		mi_ombre:'/img/icones/icone_test2.png',
// 		ombre:'/img/icones/icone_test3.png',
// 	}
// }


function exposition_ic( carac ) {
	switch (carac) {
		case 'ensoleille' :
			return ('/img/icones/icone_test.png');
		case 'mi-ombre' :
			return ('/img/icones/icone_test2.png');
		case 'ombre' :
			return ('/img/icones/icone_test3.png');
	}

}

function src_icone ( carac ) {


 // id: '1',
 //    categorie: 'cat1',
 //    variete: 'nom1',
 //    photo:'',
 //    type_de_troc:'echange',//(echange / don)
 //    stock : 1,
 //    infos_conseil:'vhiiihosovnsv',
 //    germination:'10%',
 //    type:'vivace', //(vivace/ caduc)
 //    exposition:'ensoleille', //(ensoleillé/ mi-ombre/ombre)
 //    type_de_terre: 'acide', //(acide/ calcaire/ drainant/ humide/humifere/riche/ sec)
 //    rustique:'false',
 //    semis:'printemps',//saison
 //    arrosage:'abondant',//abondant semi-abondant rare
 //    origine:'France',
 //    popularité: 80,//sur 100
 //    rarete: 'rare'//rare commune atypique


 	



	switch (carac) {
		case 'echange' :
			return ('/img/icones/icone_test3.png');
		case 'don' :
			return ('/img/icones/icone_test2.png');

	}


	switch (carac) {
		case 'vivace' :
			return ('/img/icones/icone_test.png');
		case 'caduc' :
			return ('/img/icones/icone_test3.png');

	}

	switch (carac) {
		case 'acide' :
			return ('/img/icones/icone_test2.png');
		case 'calcaire' :
			return ('/img/icones/icone_test.png');
		case 'drainant' :
			return ('/img/icones/icone_test2.png');
		case 'humide' :
			return ('/img/icones/icone_test.png');
		case 'humifere' :
			return ('/img/icones/icone_test2.png');
		case 'riche' :
			return ('/img/icones/icone_test.png');
		case 'sec' :
			return ('/img/icones/icone_test2.png');

	}

	switch (carac) {
		case 'rustique' :
			return ('/img/icones/icone_test3.png');
	}

	switch (carac) {
		case 'printemps' :
			return ('/img/icones/icone_test.png');
		case 'ete' :
			return ('/img/icones/icone_test2.png');
		case 'automne' :
			return ('/img/icones/icone_test.png');
		case 'hiver' :
			return ('/img/icones/icone_test3.png');
	}

	switch (carac) {
		case 'abondant' :
			return ('/img/icones/icone_test2.png');
		case 'semi-abondant' :
			return ('/img/icones/icone_test3.png');
		case 'rare' :
			return ('/img/icones/icone_test.png');
	}

	switch (carac) {
		case 'France' :
			return ('/img/icones/icone_test3.png');
	}


	switch (carac) {
		case 'rare' ://!!!!
			return ('/img/icones/icone_test3.png');
		case 'commune' :
			return ('/img/icones/icone_test3.png');
		case 'atypique' :
			return ('/img/icones/icone_test3.png');
	}


}



const Graine = ({ caracs, style }) => {

  const exposition = exposition_ic(caracs.exposition)
  const type_de_troc = src_icone(caracs.type_de_troc)
  const type = src_icone(caracs.type)
  const type_de_terre = src_icone(caracs.type_de_terre)
  const rusticite = src_icone(caracs.rustique)
  const semis = src_icone(caracs.semis)
  const arrosage = src_icone(caracs.arrosage)
  const origine = src_icone(caracs.origine)
  const rarete = src_icone(caracs.rarete)
  console.log('coucou', style)

  return (
	<div className={style}>
	 {caracs.exposition} {caracs.variete}
	 	{/*<img src={`${db_icones.exposition.ombre}`} style={{width:'20px', height:'20px'}}/>
	 	<img src={`${db_icones.exposition.mi_ombre}`} style={{width:'20px', height:'20px'}}/>*/}
	 	{exposition !== undefined ? <img src={exposition} style={{width:'20px', height:'20px'}}/> : undefined}
	 	{type_de_troc !== undefined ? <img src={type_de_troc} style={{width:'20px', height:'20px'}}/> : undefined}
	 	{type !== undefined ? <img src={type} style={{width:'20px', height:'20px'}}/> : undefined}
	 	{type_de_terre !== undefined ? <img src={type_de_terre} style={{width:'20px', height:'20px'}}/> : undefined}
	 	{rusticite !==undefined ? <img src={rusticite} style={{width:'20px', height:'20px'}}/> : undefined}
	 	{semis !==undefined ? <img src={semis} style={{width:'20px', height:'20px'}}/> : undefined}
	 	{arrosage !==undefined ? <img src={arrosage} style={{width:'20px', height:'20px'}}/> : undefined}
	 	{origine !==undefined ? <img src={origine} style={{width:'20px', height:'20px'}}/> : undefined}
	 	{rarete !==undefined ? <img src={rarete} style={{width:'20px', height:'20px'}}/> : undefined}
	 
	 	


	 	{/*<img src={`${test}`} style={{width:'20px', height:'20px'}}/>*/}

	 
	</div>
  )

}

export default Graine