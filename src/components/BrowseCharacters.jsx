import { useState, useEffect } from "react";
import axios from 'axios';
import './CharacterList.css';
import { Link } from "react-router-dom";

const BrowseCharacters = () => {
    const [characters, setCharacters] = useState ([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('https://akabab.github.io/superhero-api/api/all.json')
                setCharacters(response.data)
            } catch (error) {
                console.error("Error fetching products:", error)
            };
        };

        fetchCharacters()
    }, []);

    return (
        <div>
            <h1 className="header">CHARACTERS</h1>
        <div className="character-grid">
          {characters.slice(0, 20).map((character) => (
                <div key={character.id} className="character-card">
                <Link to={`/character-details/${character.id}`}>{character.name}</Link>
                <div className="character-thumbnail">
                    <img src={character.images.md} alt={character.name} />
                    <p>{character.name}</p>
                </div>
              )}
            </div>
          ))}
          </div>
        </div>
    );
};
export default BrowseCharacters;