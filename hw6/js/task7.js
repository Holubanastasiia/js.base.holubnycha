// 7. Массив watchList содержит объекты с информацией о нескольких фильмах.Используйте filter и map для возврата нового массива объектов только с title и rating, но где imdbRating больше или равен 8.0.

var filteredList = watchList.filter((item) => (item.imdbRating >= 8.0)).map((item) => ({ title: item.Title, rating: item.imdbRating }))
console.log(filteredList); 
