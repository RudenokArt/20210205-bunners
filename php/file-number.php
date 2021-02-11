<?php     

$fileNumber=0;
$imageNumber=0;
function numberFile(){
  global $fileNumber;
  $fileNumber=$fileNumber+1;
  return $fileNumber;
}
function numberImage(){
  global $imageNumber;
  $imageNumber=$imageNumber+1;
  return $imageNumber;
}

?>