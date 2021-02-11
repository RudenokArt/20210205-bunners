<?php include_once 'php/file-number.php' ?>
<div class="image-item">
  <div class="image-wrapper">
    <img src="galery/file<?php echo numberImage();?>.jpg" 
    alt="Изображение не выбрано" class="bunner-image">
    <div class="slogan"></div>
  </div>
  <div class="flex-wrapper">
    <div  class="image-download">
     <div class="download-icon">
      <i class="fa fa-upload" aria-hidden="true"></i>
      Загрузить
    </div>
    <form action="php/loader.php" enctype="multipart/form-data" method="post">
      <input type="file" name="file<?php echo numberFile();?>" >
    </form>
  </div>
  <div>
   <div>
    <?php include 'color-picker.php' ?>
  </div>
  <div>
    <input type="text" class="slogan" placeholder="слоган">
  </div> 
</div>
</div>





<div class="image-control">
  &#8644
  <input type="range" min="-100" max="100" value="0" class="horizontal">
</div>
<div class="image-control">
  &#8645
  <input type="range" min="-100" max="100" value="0" class="vertical">
</div>
<div class="image-control">
 -+<input type="range" min="0" max="100" value="50" class="scale">
</div>
</div>
