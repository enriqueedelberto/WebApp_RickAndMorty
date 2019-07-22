
const url = 'https://rickandmortyapi.com/api';

async function allCharacters () {
	const response = await fetch (url);
	
	const characters = await response.json();
	
	return characters;
	
}


export default service_http