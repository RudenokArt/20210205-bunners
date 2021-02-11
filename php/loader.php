<?php     header('Content-type: text/html; charset=utf-8');

if (isset($_FILES['file1']['tmp_name'])) {
  move_uploaded_file($_FILES['file1']['tmp_name'], '../galery/file1.jpg');
  ?><script>document.location.href = "../index.php#view1";</script><?
}elseif (isset($_FILES['file2']['tmp_name'])) {
  move_uploaded_file($_FILES['file2']['tmp_name'], '../galery/file2.jpg');
  ?><script>document.location.href = "../index.php#view2";</script><?
}elseif (isset($_FILES['file3']['tmp_name'])) {
  move_uploaded_file($_FILES['file3']['tmp_name'], '../galery/file3.jpg');
  ?><script>document.location.href = "../index.php#view3";</script><?
}



?>