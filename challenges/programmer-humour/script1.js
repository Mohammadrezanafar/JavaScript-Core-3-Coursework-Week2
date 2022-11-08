let buttonElement = document.getElementById("button1");

const url = "https://xkcd.now.sh/?comic=latest";
 function fetchApi() {
    fetch(url).then(function (response){
        console.log (response);
       return response.json();
    
      
    })
    .then((data) => {
        console.log(data);
      const divElement = document.querySelector("#list1");
      const imageElement = document.createElement("img");
      divElement.appendChild(imageElement);
      imageElement.src = data.img;
    })
    
    .catch((error) => console.log(error));
}
buttonElement.addEventListener("click",fetchApi);