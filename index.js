

fetch('https://my-json-server.typicode.com/anithakrish26/check/posts') 
.then(data => data.json()).then(function(data) {

    let date = new Date();
    let today = date.getDay();
    let splMenu = data.menu;

     splMenu.filter( (elem) => {
      if(elem.day === today) {
        document.querySelector('#spl-menu p').innerHTML = elem.dish;
        document.querySelector('#spl-menu span').innerHTML = elem.price;
        
      } 
     })
    
})
.catch(function(error) {
    console.log(error);
});