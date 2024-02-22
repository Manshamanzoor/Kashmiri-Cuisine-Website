<?php include ('connection/db-file.php');
include ('website-link.php'); 
$main_id=$_GET['mainid'];
?>
<select class="select_box" name="sub_id">
<option value=""> -- Select Subcategory -- </option>
<?php
$v2=mysqli_query($con, "select * from sub_cat  where main_id='".$main_id."'  AND action=1  order by main_id ASC");
while($v2_res=mysqli_fetch_array($v2))
{
?>
<option value="<?php echo $v2_res['id']; ?>"><?php echo $v2_res['name']; ?></option>
<?php
}
?>
</select>