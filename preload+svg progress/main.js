/*jshint esversion: 6 */

(function(){


  let num = 0;
  let percentText = '';

  let box = document.getElementById('box');
  let imgBox = document.getElementById('imgBox');
  let round = document.getElementById('round');
  let percentage = document.getElementById('percent');

  imgBox.style.opacity = 0;

  const circumference = Math.PI * 2 * 150;
  round.style.strokeDasharray = circumference;
  round.style.strokeDashoffset = circumference;

  function getUrl(){
    let images = [];
    for(let i = 0; i < 20; i++){
      let url = "https://github.com/Weeken/Weeken_blog/blob/gh-pages/img/card/card_"+ i +".jpg?raw=true";
      images.push(url);
    }
    return images;
  }

  function createImg(img,arr){
    img.onload = function(){
      this.onload = null;
      num ++;
      percent = ((num/arr.length*100)>>0);
      percentText = percent +'%';
      round.style.strokeDashoffset = circumference - (percent / 100 * circumference);
      percentage.innerText = percentText;
      // console.log(percent);
      if(num === arr.length){
        setTimeout(()=>{
          imgBox.style.opacity = 0;
          box.style.display = 'none';
          imgBox.style.opacity = 1;
        },1500);
      }
    };
  }

  function loadImage() {
    let imgUrl = getUrl();

    for(let i in imgUrl){
      let img = new Image();
      img.src = imgUrl[i];
      createImg(img,imgUrl);
      imgBox.appendChild(img);
    }
  }

  loadImage();
})();
