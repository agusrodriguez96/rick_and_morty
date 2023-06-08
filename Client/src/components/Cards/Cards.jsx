import Card from '../Card/Card';

const Cards = ({characters, onClose}) => {
   return (
      <div style= {{display:"flex", justifyContent: "space-between"}}>
         {
            characters.map(({id, name, status, species, gender, origin, image}) =>{
               return (
                  <Card
                  key= {id}
                  id= {id}
                  name= {name}
                  status= {status}
                  species= {species}
                  gender= {gender}
                  origin= {origin.name}
                  image= {image}
                  onClose={ onClose}
                  />
               )
            })
         }
      </div>
   )
};

export default Cards;