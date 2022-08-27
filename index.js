let Film = document.getElementById("film");

fetch("https://api.themoviedb.org/3/discover/movie?api_key=256c6d47178622fe2215758dc2eb92fa&sort_by=popularity.desc&page=1")
  .then((response) => response.json())
  .then((data) =>
    data.results.forEach((movie) => {
      Film.innerHTML += `
        <div class="col-lg-2 col-md-3 col-sm-6 mb-3">
            <div class="card">
            <img class="img-fluid" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}" />
                <div class="card-body">
                <div class="judul_film">${movie.title}</div>
                <div class="rating">Rate ${movie.vote_average}</div>
                <div class="tanggal">${movie.release_date}</div>
                </div>
            </div>
        </div>
        `;
    })
  );