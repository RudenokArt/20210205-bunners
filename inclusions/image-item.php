<?php include_once 'php/file-number.php' ?>
<div class="image-item">
  <div class="image-wrapper">
    <img src="galery/file<?php echo numberImage();?>.jpg?<?php echo time() ?>" 
    alt="Изображение не выбрано" class="bunner-image">
    <div class="slogan"><div></div></div>
  </div>
  <div  class="image-download">
   <div class="download-icon">
    <i class="fa fa-upload" aria-hidden="true"></i>
    Загрузить
  </div>
  <input type="file" name="file<?php echo numberFile();?>" multiple="multiple">
</div>
<div class="flex-wrapper">
 <div>
  <?php include 'color-picker.php' ?>
</div>
<div>
  <input type="text" class="slogan" placeholder="слоган">
</div> 
</div>

<div class="flex-wrapper">
  <div>
    <div class="range-wrapper">
      <div class="range-track"></div>
      <div class="range-icon">&#9668 &#9658</div>
      <input type="range" min="-100" max="100" value="0" 
      class="horizontal" name="range-input">
    </div>
  </div>
  <div>
    <div class="range-wrapper">
      <div class="range-track"></div>
      <div class="range-icon">&#9650 &#9660</div>
      <input type="range" min="-100" max="100" value="0" 
      class="vertical" name="range-input">
    </div>
  </div>
  <div>
    <div class="range-wrapper">
      <div class="range-track"></div>
      <div class="range-icon"> <b>+ / -</b></div>
      <input type="range" min="0" max="100" value="50" 
      class="scale" name="range-input">
    </div>
  </div>
</div>

<div class="flex-wrapper">
  <div>
    <div>Размер шрифта</div>
    <div>
      <select class="font-size">
        <option value="16">16</option>
        <option value="24">24</option>
        <option value="36">36</option>
      </select>
    </div>
  </div>
  <div>
    <div>Стиль шрифта</div>
    <div>
      <select class="font-style">
        <option value="normal">Обычный</option>
        <option value="bold">Жирный</option>
        <option value="italic">Курсив</option>
      </select>
    </div>
  </div>
  <div>
    <div>Вид шрифта:</div>
    <div>
      <select class="font-family">
        <option value='"Comic Sans MS", cursive, sans-serif'>Comic Sans MS</option>
        <option value="Arial, Helvetica, sans-serif">Arial</option>
        <option value='"Times New Roman", Times, serif'>Times New Roman</option>
      </select>
    </div>
  </div>

</div>


</div>
