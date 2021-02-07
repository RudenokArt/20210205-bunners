<?php 

function idMaker(){
  global $idArr;
  $id=rand(1,1000000);
  for ($i=0; $i < 100; $i++) { 
    $idArr[$i]=$id+$i;
  }
}

?>