import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Detail =() => {
    const {id} = useParams ();
    const [character, setCharacter] = useState ({});

useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
        if (data.name) {
            setCharacter(data);
        } else {
            window.alert('No hay personajes con ese ID');
        }
    });
    return setCharacter({});
    }, [id]);


    return (
        <div>
            <img src= {character.image && character.image } alt="" />
            <h1>Name: {character.name && character.name}</h1>
            <h4>Status: {character.status && character.status}</h4>
            <h4>Species: {character.species && character.species}</h4>
            <h4>Gender: {character.gender && character.gender}</h4>
            <h4>Origin: {character.origin?.name && character.origin?.name}</h4>

        <Link to="/home">
        <button>Home</button>
        </Link>
        
        </div>
    )
};

export default Detail;