const searchBook =() => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
//    console.log(searchText); 
    searchField.value = '';
    const url=`https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res =>res.json()) 
     .then(data => displaySearchResult(data.docs))
    //  console.log(searchResult);
}
const displaySearchResult = docs =>{
    // console.log(docs);    
    const searchResult = document.getElementById('search-result');
    docs.forEach(doc=> {
       console.log(doc);
       const div = document.createElement('div');
       div.classList.add('col');
       div.innerHTML=`
       <div class="card">
           <img src="${doc.seed.cover_i}" class="card-img-top" alt="...">
           <div class="card-body">
               <h5 class="card-title">${doc.title}</h5> 
               <h5 class="card-title">${doc.author_name}</h5> 
               <h5 class="card-title">${doc.first_publish_year}</h5> 
               <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
           </div>
       </div>
        `;
       searchResult.appendChild(div);
    }) 
} 