const movies = [
  { title: 'Inception', rating: 8.8, year: 2010, review:'Good' },
  { title: 'Tenet', rating: 7.4, year: 2020, review:'' }
];
function sortYear()
{
    let year=movies.map(function(m){
        return m.year;
    })
    console.log(year.sort());
}
function filterMovieRating(movies)
{
    let rating=movies.filter(function(m){
    return m.rating>8;
    });
    console.log("Filtered based on 8+ rating",rating);
    return rating;
}
filterMovieRating(movies);
movies[1].review='Bad';
console.log(movies[1].review);