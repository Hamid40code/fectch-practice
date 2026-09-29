const pokemanInput = document.getElementById("input");
const imageOfPokeman = document.getElementById("pokemanSprite");
const pokemanName = document.getElementById("nameOfPokeman");
const pokemanWeight = document.getElementById("weightOfPokeman");

async function fetchData() {

    const pokemon = pokemanInput.value.toLowerCase();
    if (pokemon === "") {
        return;
    }
    try {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        if (!response.ok) {
            throw new Error("Pokemon does not exist!");
        }
        const data = await response.json();
        const IMGsRc=data.sprites.front_default;
        imageOfPokeman.src = IMGsRc;
        imageOfPokeman.style.display="block";
        pokemanName.textContent = data.name;
        pokemanWeight.textContent = data.weight + "g";


    }
    catch (error) {
        console.error(error);
        pokemanName.textContent = "Pokemon not found!";
        pokemanHP.textContent = "";
        pokemanWeight.textContent = "";
        imageOfPokeman.src = "";
    }

}
