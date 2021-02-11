<?php 
include_once 'php/id-maker.php';
$idArr=[];
$radioname=rand(1,1000000);
idMaker();
?>

<div class="color-picker">
  <span>Цвет текста:</span>
  <label class="color" for="<?php echo $idArr[0] ?>">
    <input type="radio" class="color" value="rgb(0,0,0)" 
    name="<?php echo $radioname ?>" checked="checked" id="<?php echo $idArr[0] ?>">
  </label>
  <label class="color" for="<?php echo $idArr[1] ?>">
    <input type="radio" class="color" value="rgb(250,0,0)"
    name="<?php echo $radioname ?>" id="<?php  echo $idArr[1] ?>">
  </label>
  <label class="color" for="<?php  echo $idArr[2] ?>">
    <input type="radio" class="color" value="rgb(0,250,0)"
    name="<?php echo $radioname ?>" id="<?php  echo $idArr[2] ?>">
  </label>
  <label class="color" for="<?php  echo $idArr[3] ?>">
    <input type="radio" class="color" value="rgb(0,0,250)"
    name="<?php echo $radioname ?>" id="<?php  echo $idArr[3] ?>">
  </label>
  <label class="color" for="<?php  echo $idArr[4] ?>">
    <input type="radio" class="color" value="rgb(250,250,0)"
    name="<?php echo $radioname ?>" id="<?php  echo $idArr[4] ?>">
  </label>
  <label class="color" for="<?php  echo $idArr[5] ?>">
    <input type="radio" class="color" value="rgb(0,250,250)"
    name="<?php echo $radioname ?>" id="<?php  echo $idArr[5] ?>">
  </label>
</div>