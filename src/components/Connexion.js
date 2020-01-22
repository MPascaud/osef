import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


const db = {
	membre1: {
		nom: 'fake',
		mdp: 'motdepasse1'
	},
	membre2: {
		nom: 'fake2',
		mdp: 'motdepasse2'
	},
	membre3: {
		nom: 'fake3',
		mdp: 'motdepasse3'
	},
	membre4: {
		nom: 'fake4',
		mdp: 'motdepasse4'
	},
	membre5: {
		nom: 'fake5',
		mdp: 'motdepasse5'
	}
}

console.log()

class Connexion extends Component {
  state = {
  	pseudo: '',
  	mdp: '',
  	jmeco: false,
  	verif_mdp: 'Mot de passe'
  }

  handleChange = event => {
  	const pseudo = event.target.value
  	this.setState({ pseudo })
  }

  handleChange2 = event => {
  	const mdp = event.target.value
  	this.setState({ mdp })
  }

  handleSubmit = event => {
  	event.preventDefault()
  	if (1) {
  	  this.setState({ jmeco: true })	  

    }
    else {
      this.setState({verif_mdp: 'Mauvais mot de passe !'})
      this.setState({mdp: ''})
    }
  }


  render () {
    console.log(this.state.mauvais)
  	if(this.state.jmeco) {
  		return <Redirect push to={`/pseudo/${this.state.pseudo}`}></Redirect>
  	}
  	const value = ''
    return (
      <div
        className='connexionBox'
        onSubmit={this.handleSubmit}
        ><form
          className='connexion'
          ><input
            id='yo'
          	value={this.state.pseudo}
          	onChange={this.handleChange}
            placeholder='Pseudo'
            pattern='[A-Za-z]{1,}'
            type='text'
            required></input
          ><input
            value={this.state.mdp}
            onChange={this.handleChange2}
            placeholder={this.state.verif_mdp}
            type='text'
            required></input>
          <button
            type='submit'
            >Youpi</button></form></div>
	)
  }
}

export default Connexion