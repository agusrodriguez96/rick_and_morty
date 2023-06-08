import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

const Card = ({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) => {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav({ id, name, status, species, gender, origin, image, onClose })
      setIsFav(!isFav)
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.container}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <div className={styles.buttonContainer}>
            <button onClick={() => { onClose(id) }}>X</button>
         </div>

         <div className={styles.dataContainer}>
            <Link to={`/detail/${id}`}>
               <h2 className="card-name">{name}</h2>
            </Link>
            <h4>{status}</h4>
            <h4>{species}</h4>
            <h4>{gender}</h4>
            <h4>{origin}</h4>
         </div>

         <img className={styles.image} src={image} alt="" />
      </div>
   );
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
};


const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
};


export default connect(mapStateToProps, mapDispatchToProps)(Card)
