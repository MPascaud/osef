import React from 'react'


const Bienvenue = ({ pseudo }) => {
 const formatPseudo = /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`
 return (
	<div>Bienvenue sur la page de partage de graines {formatPseudo} !</div>
  )
}

export default Bienvenue