// ===== CLOBALS =====
bunner={
  timer:5000,
  slogan:['slogan1','slogan2','slogan3'],
  quantity:0,
};
anime={n:0,timer:5000};
// ====== ACTIONS =====
colorPicker ();
bunnerSize();
bunnerAnime();
controlsDecor();
imageScale();
sloganText();
setTextColor();
setTextStyle();
$('#bunner-size').change(bunnerSize);
$('input[type="text"]').bind('input',sloganText);
$('input[class="color"]').change(colorPicker);
$('input[type="file"]').change(imageLoad);
$('input[class="horizontal"').bind('input',imageScale);
$('input[class="vertical"').bind('input',imageScale);
$('input[class="scale"').bind('input',imageScale);
$('#interval-anime').change(setAnimeTime);
$('input[name="range-input"]').bind('input',controlsDecor);
$('.font-style,.font-size,.font-family').change(setTextStyle);

// ===== FUNCTIONS =====
function setTextStyle () {
 let size=$('.font-size');
 let style=$('.font-style');
 let family=$('.font-family');
 let slogan=$('div[class="slogan"]').children('div');
 let sloganActive=$('div[class="slogan_active"]').children('div');
 for (var i = 0; i < slogan.length; i++) {
   slogan[i].style.fontSize = size[i].value+'px';
   slogan[i].style.fontStyle = style[i].value;
   slogan[i].style.fontWeight = style[i].value;
   slogan[i].style.fontFamily = family[i].value;
   sloganActive[i].style.fontSize = size[i].value+'px';
   sloganActive[i].style.fontStyle = style[i].value;
   sloganActive[i].style.fontWeight = style[i].value;
   sloganActive[i].style.fontFamily = family[i].value;
 }

}
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
  imageArr[bunner.quantity].style.display='block';
  sloganArr[bunner.quantity].style.display='flex';
  bunner.quantity=bunner.quantity+1;
  if (bunner.quantity<imageArr.length){setTimeout(bunnerAnime,bunner.timer);}
  else if (bunner.quantity>=imageArr.length) {
    bunner.quantity=0;
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
 var formData = new FormData();
 formData.append(this.name,this.files[0]);
 var request = new XMLHttpRequest();
 request.open("POST", "php/loader.php");
 request.send(formData);
 request.onreadystatechange=function (){
  if (request.readyState==4 && request.status==200){
    setImage();
  }
}
}
function setImage () {
  let imageArr=$('.bunner-image');
  let bunnerArr=$('.banner-image_active');
  for (var i = 0; i < 3; i++) {
    imageArr[i].setAttribute('src', 'galery/file'+[i+1]+'.jpg?'+Math.random());
    bunnerArr[i].setAttribute('src', 'galery/file'+[i+1]+'.jpg?'+Math.random());
  }
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
  let divArr=$('div[class="slogan"]').children('div');
  let bunnerArr=$('.slogan_active').children('div');
  for (var i = 0; i < divArr.length; i++) {
    divArr[i].innerHTML=inputArr[i].value;
    divArr[i].style.color=bunner.textColor;
    bunnerArr[i].innerHTML=inputArr[i].value;
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