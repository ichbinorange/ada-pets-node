// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  const axios = require('axios');

  axios.get(BASE_URL)
    .then((response) => {
      setResult(response.data)
    })
    .catch((error) => {
      setError(error.message)
    });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    const axios = require('axios');

    axios.get(BASE_URL+`${selectedPetId}`)
      .then((response) => {
        setResult(response.data)
      })
      .catch((error) => {
        setError('failed, 404')
        setError(error.message)
      });
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    const axios = require('axios');

    axios.delete(BASE_URL+`${selectedPetId}`)
      .then((response) => {
        setResult('remove the selected pet')
        setResult(response.data)
      })
      .catch((error) => {
        setError('failed to remove')
        setError(error.message)
      });
  }
};

const addPet = (petInfo) => {
  const axios = require('axios');

  let reStructureInfo = {
    name: petInfo.name,
    ...petInfo.options
  };

  axios.post(BASE_URL, reStructureInfo)
    .then((response) => {
      setResult(response.data)
    })
    .catch((error) => {
      setError('failed to add a new pet')
      setError(error.message)
    });
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
