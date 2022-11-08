let buttonElement = document.getElementById("button1");

const url = `https://dog.ceo/api/breeds/image/random`;
 function fetchApi() {
    fetch(url).then(function (response){
        console.log (response);
       return response.json();
    
      
    })
    .then((data) => {
      const ulElement = document.querySelector("#list1");
      const liElement = document.createElement("li");
      ulElement.appendChild(liElement);
      const imageElement = document.createElement("img");
      liElement.appendChild(imageElement);
      imageElement.src = data.message;
    })
    
    .catch((error) => console.log(error));
}
buttonElement.addEventListener("click",fetchApi);

 