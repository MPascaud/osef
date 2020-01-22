import React, { Component, Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';


/*
['@media (max-width:630px)']: {
        width:620,
    }
*/


const useStyles_classes = makeStyles({
  card: {
    // maxWidth: 500,
    // display:'flex'
  },
  media: {
    // height: 140,
  },
  root: {
    ['@media (max-width:630px)']: {
        width:'100vw',

    }
  },
  label: {
  },
});


const useStyles_cardactionarea = makeStyles({
  card: {
    // maxWidth: 500,
    // display:'flex'
  },
  media: {
    // height: 140,
  },
  root: {
    ['@media (max-width:11111111630px)']: {
      display :'flex',
      width:620,
        
    },
    ['@media (max-width:630px)']: {
        width:'100vw',
    }
    
    
  },
  label: {
  },
});

const useStyles_cardmedia = makeStyles({
  card: {
    // maxWidth: 500,
    // display:'flex'
  },
  media: {
    // height: 140,
  },
  root: {
    background: '',
    borderRadius: 10,
    border: 0,
    color: 'white',
    height: 100,
    width:100,
    padding: '0px 0px 0px 0px',
    margin: '10px 0px 0px 0px',
    position:'relative',
    left:'10px',
    top:'0px',
    boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
    ['@media (max-width:630px)']: {
      left:'0px',
    }
  },
  label: {
  },
});

const useStyles_cardcontent = makeStyles({
  card: {
    // maxWidth: 500,
    // display:'flex'
  },
  media: {
    // height: 140,
  },
  root: {
  },
  label: {
  },
});


const useStyles_cardnom = makeStyles({
  card: {
      // maxWidth: 500,
      // display:'flex'
    },
    media: {
      // height: 140,
    },
    root: {

    },
    label: {
    },
});


const useStyles_cardpresentation = makeStyles({
  card: {
    // maxWidth: 500,
    // display:'flex'
  },
  media: {
    // height: 140,
  },
  root: {
    ['@media (max-width:11111111630px)']: {
      display :'flex',
      width:490,
        
    },
    ['@media (max-width:630px)']: {
        width:'100vw',
    }
    

  },
  label: {
  },
});





const useStyles_cardactions = makeStyles({
  
  card: {
    // maxWidth: 500,
    // display:'flex'

  },
  media: {
    // height: 140,
  },
  root: {
    ['@media (max-width:11111111630px)']: {
        display:'flex',
    },

    

    padding: '20px 0px 10px 335px',
    ['@media (max-width:630px)']: {
        display:'none',
    }



  },
  label: {
  },
});

const useStyles_favoris_bouton = makeStyles({
  
  card: {
    // maxWidth: 500,
    // display:'flex'

  },
  media: {
    // height: 140,
  },
  root: {

  },
  label: {
  },
});


const useStyles_contacter_bouton = makeStyles({
  
  card: {
    // maxWidth: 500,
    // display:'flex'

  },
  media: {
    // height: 140,
  },
  root: {

  },
  label: {
  },
});


const useStyles_menu = makeStyles({
  card: {
    // maxWidth: 500,
    // display:'flex'

  },
  media: {
    // height: 140,
  },
  root: {
    ['@media (min-width:631px)']: {
      display:'none',
    },
    ['@media (max-width:630px)']: {
      position:'absolute',
      top:'0vh',
      left:'88vw',
    },
  },
  label: {
  },
});


const options = [
  'Ajouter aux favoris',
  'Contacter',
  
];

const ITEM_HEIGHT = 48;



export default function MediaCard({ caracs }) {
  const classes = useStyles_classes();
  const cardactionarea_classes = useStyles_cardactionarea();
  const cardmedia_classes = useStyles_cardmedia();
  const cardcontent_classes = useStyles_cardcontent();
  const cardnom_classes = useStyles_cardnom();
  const cardpresentation_classes = useStyles_cardpresentation();

  const cardactions_classes = useStyles_cardactions();
  const favoris_bouton_classes = useStyles_favoris_bouton();
  const contacter_bouton_classes = useStyles_contacter_bouton();

  const menu_classes = useStyles_menu();

  // const avatar = require('../img/presentation/poussin.png')
  // console.log(avatar)
  // console.log(typeof(avatar))



  const matches2 = useMediaQuery('(max-width:600px)');
  console.log('coucou', cardnom_classes.card)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  return (

    <Card
      className="CI"
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        label: classes.label, // class name, e.g. `classes-nesting-label-x`
      }}>


      

      <CardActionArea
        className="cardactionarea_CI"
        classes={{
            root: cardactionarea_classes.root, // class name, e.g. `classes-nesting-root-x`
            label: cardactionarea_classes.label, // class name, e.g. `classes-nesting-label-x`
        }}>
        <CardMedia
          className="cardmedia_CI"
          classes={{
            root: cardmedia_classes.root, // class name, e.g. `classes-nesting-root-x`
            label: cardmedia_classes.label, // class name, e.g. `classes-nesting-label-x`
          }}
          component="img"
          alt="Photo d'avatar"
          // height="140"
          // src={require('../img/presentation/poussin.png')}
          // src={avatar}
          src={caracs.avatar}
          title="Ma photo"
        />

        

        <CardContent
          className="cardcontent_CI"
          classes={{
              root: cardcontent_classes.root, // class name, e.g. `classes-nesting-root-x`
              label: cardcontent_classes.label, // class name, e.g. `classes-nesting-label-x`
          }}>
          <Typography
            className="cardnom_CI"
            classes={{
                root: cardnom_classes.root, // class name, e.g. `classes-nesting-root-x`
                label: cardnom_classes.label, // class name, e.g. `classes-nesting-label-x`
            }}
            gutterBottom
            variant="h5"
            component="h2">
            {caracs.nom}
          </Typography>

          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
            classes={{
                root: menu_classes.root, // class name, e.g. `classes-nesting-root-x`
                label: menu_classes.label, // class name, e.g. `classes-nesting-label-x`
            }}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
          >
            {options.map(option => (
              <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>

          <Typography
            className="cardpresentation_CI"
            classes={{
                root: cardpresentation_classes.root, // class name, e.g. `classes-nesting-root-x`
                label: cardpresentation_classes.label, // class name, e.g. `classes-nesting-label-x`
            }}
            variant="body2" color="textSecondary" component="p">
              "{caracs.presentation}"
          </Typography>
        </CardContent>

      </CardActionArea>

      <CardActions
        className="cardactions_CI"
        classes={{
          root: cardactions_classes.root, // class name, e.g. `classes-nesting-root-x`
          label: cardactions_classes.label, // class name, e.g. `classes-nesting-label-x`
        }}>
        <Button
          className="favoris_CI"
          size="small" color="primary">
          Ajouter aux favoris
        </Button>
        <Button
          className="contacter_CI"
          size="small" color="primary">
          Contacter
        </Button>
      </CardActions>
    </Card>
  );
}



// <CardMedia
//           className={classes.media}
//           image="./img/presentation/poussin.png"
//           title="Contemplative Reptile"
//         />