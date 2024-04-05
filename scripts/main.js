let newsSection = document.querySelector('.news-section');

let movies = [];
const url = "https://newsdata.io/api/1/news?apikey=pub_414910143c0b17d32a7dc663d7f464301b9a5&q=pizza";
fetch(url) 
    .then(res => res.json())
    .then(resJson => resJson.results)
    .then(results => {
        showMovies(results)
    })


function showMovies(movies) {
    for (let movie of movies) {
        let divElement = document.createElement('div');
        divElement.setAttribute('class', 'news-item');
    
        let imgElement = document.createElement('img');
        imgElement.setAttribute('src', movie.image_url ? movie.image_url : 'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg');
        imgElement.setAttribute('alt', 'Random Image');
    
        let h3 = document.createElement('h3');
        h3.innerHTML = movie.title.slice(0, 20);
    
        let p = document.createElement('p');
        let movieDescription = '';
        
        let i = 0;
        while (i <= 100) {
            movieDescription += movie.description.charAt(i);
            i++;
        }
    
        p.innerHTML = movieDescription ? movieDescription : "The description of this news is not available at the moment.";
    
    
        let a = document.createElement('a');
        a.setAttribute('class', 'news-btn');
        a.setAttribute('href', movie.link);
        a.setAttribute('target', '_blank');
        a.innerHTML = "Read More";
    
        let listOfElements = [imgElement, h3, p, a];
        for (let element of listOfElements) {
            divElement.appendChild(element);
        }
    
        newsSection.appendChild(divElement);
    }
}