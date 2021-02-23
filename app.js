const left = document.querySelector('.left-arrow');
const right = document.querySelector('.right-arrow');
const show = document.getElementById('img-show');
const image = ["image1","image2","image3","image4"];

let counter = 0;

left.addEventListener('click',function (){
   
    counter--;

    if(counter < 0){
        counter = image.length -1 
       
    }

    show.src = 'images/' + image[counter] + '.jpg';
});

right.addEventListener('click',function (){

    counter++;

    if( counter > image.length -1 ){
        
      counter = 0; 
    }

    show.src = 'images/' + image[counter] + '.jpg';
    
    });