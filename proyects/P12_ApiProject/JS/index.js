const marvel={
    render:()=>{
        const urlApi='https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=8e88e79e258b144a93a7ea6fc4f62117&hash=7bd129c86c7456f3f5062e004e993294';
        const container = document.querySelector('#marvel-row');
        let contentHTMl='';
        fetch(urlApi)
        .then(res=>res.json())
        .then((json)=>{
            for(const hero of json.data.results){
                let urlHero = hero.urls[0].url;
                contentHTMl+=`
                    <div class="col-md-4">
                        <a href="${urlHero}" target="_blank">
                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                        </a>
                        <h3 class="title">${hero.name}</h3>
                        <p>${hero.description}</p>
                    </div>
                `;
            }
            container.innerHTML = contentHTMl
        })
    }
}
marvel.render();