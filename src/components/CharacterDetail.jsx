import axios from 'axios';
import { useEffect, useState } from 'react';
import './CharacterDetail.css';

const CharacterDetail = ({ id, navigate }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios.get(`https://akabab.github.io/superhero-api/api/all.json`)
      .then(response => {
        const foundCharacter = response.data.find(char => char.id === parseInt(id));
        if (foundCharacter) {
          setCharacter(foundCharacter);
        } else {
          navigate('/browse-characters'); // Go back if character isn't found
        }
      })
      .catch(error => {
        console.error('Error fetching character data:', error);
        navigate('/browse-characters');
      });
  }, [id, navigate]);

  if (!character) return <p>Loading character...</p>;

  return (
    <div className="character-detail">
      <p><strong>Full Name:</strong> {character.biography.fullName}</p>
      <p><strong>Aliases:</strong> {character.biography.aliases.join(', ')}</p>
      <p><strong>Birth Place:</strong> {character.biography.placeOfBirth}</p>
      <p><strong>Power Stats:</strong></p>
      <ul>
        {Object.entries(character.powerstats).map(([key, value]) => (
          <li key={key}>{key}: {value}</li>
        ))}
      </ul>
    </div>
  );
};
export default CharacterDetail;