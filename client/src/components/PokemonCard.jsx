import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

// /(?<=\/)\d+(?=\/)/
// /(?<=\/)\d+/
const PokemonCard = ({ name, url }) => {
  const pokeID = url.match(/\/\d+(?=\/)/)[0];

  return (
    <Card className="pokemon-card">
      <Card.Img
        variant="top"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon${pokeID}.png`}
      />
      <Card.Body>
        <Card.Title>{name.toUpperCase()}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {pokeID.replace('/', '#')}
        </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
