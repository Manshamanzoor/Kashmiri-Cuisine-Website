<?php include ('connection/db-file.php'); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php include ('website-link.php'); ?>
</head>

<body>


<script language="javascript" type="text/javascript">
function getXMLHTTP() 
{ //fuction to return the xml http object
                                var xmlhttp=false;           
                                try
                                {
                                                xmlhttp=new XMLHttpRequest();
                                }
                                catch(e)               
                                {                              
                                                try
                                                {                                              
                                                                xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
                                                }
                                                catch(e)
                                                {
                                                                try
                                                                {
                                                                xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
                                                                }
                                                                catch(e1)
                                                                {
                                                                                xmlhttp=false;
                                                                }
                                                }
                                }
                                                
                                return xmlhttp;
}
                
function getsubcat(strURL) 
{
                                var req4 = getXMLHTTP();                            
                                if (req4) 
                                {
                                                req4.onreadystatechange = function() 
                                                {
                                                                                if (req4.readyState == 4) 
                                                                                {
                                                                                                if(req4.status == 200) 
                                                                                                {                                                                                              
                                                                                                document.getElementById('castediv').innerHTML=req4.responseText;                                                                                 
                                                                                                } 
                                                                                                else 
                                                                                                {
                                                                                                alert("There was a problem while using XMLHTTP:\n" + req4.statusText);
                                                                                                }
                                                                                }                                                              
                                                }                                              
                                                req4.open("GET", strURL, true);
                                                req4.send(null);
                                }                                                              
}
</script>




<?php 
$product=true;
include ('menu-page.php'); ?>





<div class="content">
<div class="container-fluid">




 <div class="admin_mainouter">
 	<div class="admin_all_head"> Kashmiri Dishes
    <a href="add-product.php"><button type="button"  class="add-new"><i class="fa fa-plus"></i></button></a></div>



<!--admin-search-outer-->
<div class="admin_search_outer1">
<form action="" method="post" autocomplete="off" id="s1" name="s1" >

<font color="#000000">
<input name="keywords" id="keywords" class="search_box" placeholder="Search..." autocomplete="off"  type="text" required=""  
value="<?php if(isset($_REQUEST['keywords']) and $_REQUEST['keywords']!=''){ echo $_REQUEST['keywords']; } ?>"></font>
<input type="submit" value="Search" id="show_but" />
<a href="product.php"><input type="button" id="show_but" value="Show all" /></a>


</form>
</div> 

<!--admin-search-outer-->

<div class="clearfix"></div>


<form action="" method="post" name="v1" id="v1">
<!--view_tables_details  start-->

<div class="view_tables_details">
<table class="view_table">
<tbody><tr>
<th></th>
<th>Dish name</th>
<th>Action</th>
</tr>


<?php
$pagination='';
if(isset($_POST['keywords']))
{
$keyword=$_POST['keywords'];


$sql_query = mysqli_query($con, "select * from  product where  name like '%$keyword%'  order by id DESC");

if(mysqli_num_rows($sql_query)==0)
{
	echo '<tr><td  colspan="5"><h4 class="error_rec" style="float:left";>  No Records Found.</h4></td></tr>';
}
while($rows = mysqli_fetch_array($sql_query))
{
?>
<tr>
<td><input type="checkbox" id="ch1[]" name="ch1[]" value="<?php echo $rows['id']; ?>"/></td>


<td><?php echo  $rows['name']; ?> </td>



<td>

<?php
if($rows['action']==1){ ?>
<a href="product.php?dact=<?php echo $rows['id']; ?>"><img src="images/active1.jpg" title="Active" class="active-btn" /></a>

<?php } else {  ?>
<a href="product.php?act=<?php echo $rows['id']; ?>"><img src="images/deactive1.jpg" title="Deactive" class="active-btn" /></a> <?php } ?>

<a href="edit-product.php?id=<?php echo $rows['id']; ?>"><i class="fa fa-pencil-square-o" style="font-size:20px; color:#1c8314; margin-left: 10px; margin-top: 5px;"></i></a>
<a href="product.php?id=<?php echo $rows['id']; ?>"  onclick="return confirm('Are you sure, you want to delete this Record?')" class="all_file1">
<i class="fa fa-trash" style="font-size:20px; color:#1c8314; margin-left: 5px; margin-top: 5px;"></i></a>
</td>
</tr>



<?php

}

?>

<?php
}
else
{
//Without sortby and Search
?>

<?php
$ss1='';
$ss2='';

$ss1='select * from product order by id DESC';
$sql = mysqli_query($con, $ss1); 
$total = mysqli_num_rows($sql);

if(mysqli_num_rows($sql)==0)
{
	echo '<tr><td  colspan="5"><h4 class="error_rec"> * No Records Found.</h4></td></tr>';
}

$adjacents = 1;
$counter=0;
$targetpage = "product.php?"; //your file name

$limit =20; //how many items to show per page
if(isset($_GET['page']))
{
	$page = $_GET['page'];
}
else
{
	$page =1;
}

if($page){ 
$start = ($page - 1) * $limit; //first item to display on this page
}else{
$start = 0;
}



/* Setup page vars for display. */
if ($page == 0) $page = 1; //if no page var is given, default to 1.
$prev = $page - 1; //previous page is current page - 1
$next = $page + 1; //next page is current page + 1
$lastpage = ceil($total/$limit); //lastpage.
$lpm1 = $lastpage - 1; //last page minus 1



$ss2='select * from product order by id DESC LIMIT '.$start.','.$limit;


/*$ss2='SELECT * FROM category INNER JOIN
 subcategory ON category.id = subcategory.main_id order by subcategory.sub_id DESC LIMIT '.$start.','.$limit;*/


$sql_query = mysqli_query($con, $ss2); 
$curnm = mysqli_num_rows($sql_query);

/* CREATE THE PAGINATION */



$pagination = "";
if($lastpage > 1)
{ 
$pagination .= "<div class='pagination1'> <ul>";
if ($page > $counter+1) {
$pagination.= "<li><a href=\"$targetpage"."page=$prev\">prev</a></li>"; 
}



if ($lastpage < 7 + ($adjacents * 2)) 
{ 
for ($counter = 1; $counter <= $lastpage; $counter++)
{
if ($counter == $page)
$pagination.= "<li><a href='#' class='active'>$counter</a></li>";
else
$pagination.= "<li><a href=\"$targetpage"."page=$counter\">$counter</a></li>"; 
}
}

else if($lastpage > 5 + ($adjacents * 2)) //enough pages to hide some
{

//close to beginning; only hide later pages
if($page < 1 + ($adjacents * 2)) 
{
for ($counter = 1; $counter < 4 + ($adjacents * 2); $counter++)
{
if ($counter == $page)
$pagination.= "<li><a href='#' class='active'>$counter</a></li>";
else
$pagination.= "<li><a href=\"$targetpage"."page=$counter\">$counter</a></li>"; 
}

$pagination.= "<li>...</li>";
$pagination.= "<li><a href=\"$targetpage"."page=$lpm1\">$lpm1</a></li>";
$pagination.= "<li><a href=\"$targetpage"."page=$lastpage\">$lastpage</a></li>"; 
}

//in middle; hide some front and some back

elseif($lastpage - ($adjacents * 2) > $page && $page > ($adjacents * 2))
{
$pagination.= "<li><a href=\"$targetpage"."page=1\">1</a></li>";
$pagination.= "<li><a href=\"$targetpage"."page=2\">2</a></li>";
$pagination.= "<li>...</li>";

for ($counter = $page - $adjacents; $counter <= $page + $adjacents; $counter++)
{
if ($counter == $page)
$pagination.= "<li><a href='#' class='active'>$counter</a></li>";
else
$pagination.= "<li><a href=\"$targetpage"."page=$counter\">$counter</a></li>"; 
}

$pagination.= "<li>...</li>";
$pagination.= "<li><a href=\"$targetpage"."page=$lpm1\">$lpm1</a></li>";
$pagination.= "<li><a href=\"$targetpage"."page=$lastpage\">$lastpage</a></li>"; 
}

//close to end; only hide early pages

else
{
$pagination.= "<li><a href=\"$targetpage"."page=1\">1</a></li>";
$pagination.= "<li><a href=\"$targetpage"."page=2\">2</a></li>";
$pagination.= "<li>...</li>";
for ($counter = $lastpage - (2 + ($adjacents * 2)); $counter <= $lastpage; $counter++)
{
if ($counter == $page)
$pagination.= "<li><a href='#' class='active'>$counter</a></li>";
else
$pagination.= "<li><a href=\"$targetpage"."page=$counter\">$counter</a></li>"; 
}
}
}



//next button

if ($page < $counter - 1) 
$pagination.= "<li><a href=\"$targetpage"."page=$next\">next</a></li>";
else
$pagination.= "";
$pagination.= "</ul></div>\n"; 
}
$i=1;
while($rows = mysqli_fetch_array($sql_query))
{
?>


<tr>
<td><input type="checkbox" id="ch1[]" name="ch1[]" value="<?php echo $rows['id']; ?>"/></td>

<td><?php echo  $rows['name']; ?> </td>

<td>
<?php
if($rows['action']==1){ ?>
<a href="product.php?dact=<?php echo $rows['id']; ?>"><img src="images/active1.jpg" title="Active" class="active-btn" /></a>

<?php } else {  ?>
<a href="product.php?act=<?php echo $rows['id']; ?>"><img src="images/deactive1.jpg" title="Deactive" class="active-btn" /></a> <?php } ?>

<a href="edit-product.php?id=<?php echo $rows['id']; ?>"><i class="fa fa-pencil-square-o" style="font-size:20px; color:#1c8314; margin-left: 10px; margin-top: 5px;"></i></a>
<a href="product.php?id=<?php echo $rows['id']; ?>"  onclick="return confirm('Are you sure, you want to delete this Record?')" class="all_file1">
<i class="fa fa-trash" style="font-size:20px; color:#1c8314; margin-left: 5px; margin-top: 5px;"></i></a>
</td>
</tr>

<?php

}

?>
<?php
}//without search
?>



</tbody></table>
<div class="clearfix"></div>



</div>
<!--view_tables_details  close-->

<div class="clearfix"></div>


<div class="clearfix"></div>
<div class="col-md-6 check_outerbox" style="margin-top:20px;">
 <div class="check_outer"> <a href="javascript:checkall();" class="green_text"><font color="#000000">Check All</font></a> / <a href="javascript: checknone();" class="green_text"><font color="#000000">Uncheck All</font></a></div>
 <select name="action" id="action" class="select-box" required="">	
                                <option value="">Select Option</option>        
								<!--<option value="Active">Active</option>     
								<option value="Deactive">Deactive</option>-->
								<option value="Delete">Delete</option>
                            	</select>
                            
<input type="submit" id="go_btn" value="Go" />
</div>

<div class="col-md-6">
<?php echo $pagination; ?>
</div>
</form>                 



<script>

function checkall()
	{
	
		for(i=0;i<document.v1.elements.length;i++)
		{
			if(document.v1.elements[i].type=="checkbox")
			{
				document.v1.elements[i].checked="true";
			}		
		}
	}
function checknone()
	{
		for(i=0;i<document.v1.elements.length;i++)
		{
			if(document.v1.elements[i].type=="checkbox" && document.v1.elements[i].checked)
			{
				document.v1.elements[i].checked="";
			}		
		}
	}
</script>




<?php
/*delete*/
if(isset($_GET['id']))
{
	$id=$_GET['id'];
	if(mysqli_query($con,"delete from product where id='$id'"))
	{
		echo '<script>window.location.assign("product.php")</script>';
	}
}



if(isset($_GET['act'])) { 
$active=$_GET['act'];
$act_query=mysqli_query($con,"update product set action=1 where id='".$active."'");
echo '<script>window.location.assign("product.php")</script>';
}

if(isset($_GET['dact'])) { 
$deactive=$_GET['dact'];
$dact_query=mysqli_query($con,"update product set action=0 where id='".$deactive."'");
echo '<script>window.location.assign("product.php")</script>';
}




/*chechbok_type*/

		if(isset($_REQUEST['action']) && $_REQUEST['action']=='Delete')
		{	
			if(isset($_POST['ch1']))
			{
				foreach($_POST['ch1'] as $key => $value)
				{
					mysqli_query($con,"delete from product where id='$value'");
				}
				echo '<script>alert("* Deleted Successfully!");</script>';
				
			}

		}
		
		
		
		
		/*chechbok_type*/

		if(isset($_REQUEST['action']) && $_REQUEST['action']=='Deactive')
		{	
			if(isset($_POST['ch1']))
			{
				foreach($_POST['ch1'] as $key => $value)
				{
					mysqli_query($con,"update product set action='0' where id='$value' ");
				}
				echo '<script>alert("* Deactive Successfully!");</script>';
				
				
				
				
	if($_GET['category'])
	{
		$pp_rul='product.php?category='.$_GET['category'].'&subprod='.$_GET['subprod'].'&keywords='.$_GET['keywords'];
	}
	else
	{
		$pp_rul='product.php';
	}
	
	
	 echo '<script>window.location.assign("'.$pp_rul.'")</script>';
				
				
				
				
			}

		}
	
	
/*chechbok_type*/

		if(isset($_REQUEST['action']) && $_REQUEST['action']=='Active')
		{	
			if(isset($_POST['ch1']))
			{
				foreach($_POST['ch1'] as $key => $value)
				{
					mysqli_query($con,"update product set action='1' where id='$value' ");
				}
				echo '<script>alert("* Active Successfully!");</script>';
				
				
				
				
	if($_GET['category'])
	{
		$pp_rul='product.php?category='.$_GET['category'].'&subprod='.$_GET['subprod'].'&keywords='.$_GET['keywords'];
	}
	else
	{
		$pp_rul='product.php';
	}
	
	
	 echo '<script>window.location.assign("'.$pp_rul.'")</script>';
			}

		}
	
	
	
	
?>
</div>
</div>
</div>


</body>
</html>
