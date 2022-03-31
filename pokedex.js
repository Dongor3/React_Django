
let pokemon;
if(pokemon==undefined){
    pokemon = "pikachu";
    api(pokemon);
} else {
    api(pokemon);
}


async function api(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(res=> res.json())
    .then((data)=> {
        let pic = document.querySelector("#pokeimg");
        pic.src=  `https://img.pokemondb.net/artwork/${pokemon}.jpg` 
        document.getElementById("name").textContent = data.name;
        let type = document.querySelector("#type");
        type.textContent = `${data.types[0].type.name} `;
        let pic2 = document.querySelector("#poketype");
        pic2.src = `https://raw.githubusercontent.com/gomezgleonardob/Pokedex_Devf/master/asset/types/${data.types[0].type.name}.webp`
        let height = document.querySelector("#height");
        height.textContent = `Altura: ${(data.height/10)+ " m"}`;
        let weight = document.querySelector("#weight");
        weight.textContent = `Peso: ${(data.weight/10)+ " Kg"}`;
        let form = document.querySelector("form");
        form.addEventListener("submit", search)
        function search(e){
            e.preventDefault();
            let pokeName = document.querySelector("input").value.toLowerCase();
            api(pokeName);
        };
    console.log(data);
    });
}

