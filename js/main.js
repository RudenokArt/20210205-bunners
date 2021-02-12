// ===== CLOBALS =====
bunner={
  timer:5000,
  slogan:['slogan1','slogan2','slogan3']
};
anime={n:0,timer:5000};
// ====== ACTIONS =====
colorPicker ();
bunnerSize();
bunnerAnime();
controlsDecor();
imageScale();
$('#bunner-size').change(bunnerSize);
$('input[type="text"]').bind('input',sloganText);
$('input[class="color"]').change(colorPicker);
$('input[type="file"]').change(imageLoad);
$('input[class="horizontal"').bind('input',imageScale);
$('input[class="vertical"').bind('input',imageScale);
$('input[class="scale"').bind('input',imageScale);
$('#interval-anime').change(setAnimeTime);
$('input[name="range-input"]').bind('input',controlsDecor);

// ===== FUNCTIONS =====
function controlsDecor () {
  let rangeArr=$('input[name="range-input"]');
  let trackArr=$('.range-track');
  for (var i = 0; i < trackArr.length; i++) {
    let offset=(rangeArr[i].value-rangeArr[i].min)/(rangeArr[i].max-rangeArr[i].min)*100;
    trackArr[i].style.width=offset+'%';
  }

}
function setAnimeTime () {
  bunner.timer=Number(this.value)*1000;
}
function bunnerAnime () {
  let imageArr=$('.banner-image_active');
  let sloganArr=$('.slogan_active');
   imageArr.css({'display':'none'});
   sloganArr.css({'display':'none'});
   imageArr[anime.n].style.display='block';
   sloganArr[anime.n].style.display='block';
   anime.n=anime.n+1;
   if (anime.n<imageArr.length){setTimeout(bunnerAnime,bunner.timer);}
   else if (anime.n>=imageArr.length) {
    anime.n=0;
    setTimeout(bunnerAnime,bunner.timer);
   }
}
function imageScale () {
  let horizontal=$('input[class="horizontal"');
  let vertical=$('input[class="vertical"');
  let scale=$('input[class="scale"');
  let image=$('.bunner-image');
  for (var i = 0; i < horizontal.length; i++) {
    image[i].style.left=horizontal[i].value+'%';
    image[i].style.top=vertical[i].value+'%';
    image[i].style.width=scale[i].value+'%';
    image[i+3].style.left=horizontal[i].value+'%';
    image[i+3].style.top=vertical[i].value+'%';
    image[i+3].style.width=scale[i].value+'%';
  }
}
function imageLoad () {
  let node=this.parentNode;
  node.submit();
}
function colorPicker () {
  let radioArr=$('input[class="color"]');
  let labelArr=$('label[class="color"]');
  for (var i = 0; i < radioArr.length; i++) {
    labelArr[i].style.borderColor=radioArr[i].value;
    labelArr[i].style.backgroundColor = 'transparent';
    if (radioArr[i].checked) {
      labelArr[i].style.backgroundColor = radioArr[i].value;
    }
  }
  setTextColor();
}
function setTextColor () {
  let arr=$('input[class="color"]');
  let checkedArr=[];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].checked) {checkedArr.push(arr[i]);}
  }
  let divArr=$('div[class="slogan"]');
  let bunnerArr=$('.slogan_active');
  for (var i = 0; i < divArr.length; i++) {
    divArr[i].style.color=checkedArr[i].value;
    bunnerArr[i].style.color=checkedArr[i].value;
  }
}
function sloganText () {
  let inputArr=$('input[class="slogan"]');
  let divArr=$('div[class="slogan"]');
  let bunnerArr=$('.slogan_active');
  for (var i = 0; i < divArr.length; i++) {
    divArr[i].innerHTML='<div>'+inputArr[i].value+'</div>';
    divArr[i].style.color=bunner.textColor;
    bunnerArr[i].innerHTML='<div>'+inputArr[i].value+'</div>';
    bunnerArr[i].style.color=bunner.textColor;
  }
}
function bunnerSize () {
  let size=$('#bunner-size')[0].value;
  size=size.split('x');
  $('.image-wrapper').css({
    'width':size[0],
    'height':size[1],
  });
}