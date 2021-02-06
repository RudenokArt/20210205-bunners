// ===== CLOBALS =====
bunner={};

// ====== ACTIONS =====
colorPicker ();
bunnerSize();
$('#bunner-size').change(bunnerSize);
$('input[type="text"]').bind('input',sloganText);
$('input[name="color"]').change(colorPicker);


// ===== FUNCTIONS =====
function colorPicker () {
  let radioArr=$('input[name="color"]');
  let labelArr=$('.color');
  for (var i = 0; i < radioArr.length; i++) {
    labelArr[i].style.borderColor=radioArr[i].id;
    labelArr[i].style.backgroundColor = 'transparent';
    if (radioArr[i].checked) {
      labelArr[i].style.backgroundColor = radioArr[i].id;
      bunner.textColor=radioArr[i].id;
    }
  }
}
function sloganText () {
  let inputArr=$('input[class="slogan"]');
  let divArr=$('div[class="slogan"]');
  for (var i = 0; i < divArr.length; i++) {
    divArr[i].innerHTML='<div>'+inputArr[i].value+'</div>';
    divArr[i].style.color=bunner.textColor;
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