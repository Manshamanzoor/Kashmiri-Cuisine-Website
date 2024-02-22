<?php
//include("../connection/db.php");

//productid generate 
function generateRandomString($length = 10) {
	
	global $con ;
	$q1=mysqli_query($con,"select * from admin_login where num=1");
	while($q1res=mysqli_fetch_array($q1))
	{
   		return ($q1res['user_number']+1);
	}
    /*$characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
	
	$v1=mysql_query("select * from product where productid='$randomString' ");
	if(mysql_num_rows($v1)==0)
	{
	
   		return $randomString;
	}
	else
	{
		generateRandomString();
	}*/
}




function getExtention($image_name){
	return substr($image_name,strrpos($image_name,'.')+1);
}
function getBaseName($image_name){
	return substr($image_name,0,strrpos($image_name,'.'));
}











	 function createSlug($str, $delimiter = '-')
	{

    $slug = strtolower(trim(preg_replace('/[\s-]+/', $delimiter, preg_replace('/[^A-Za-z0-9-]+/', $delimiter, preg_replace('/[&]/', 'and', preg_replace('/[\']/', '', iconv('UTF-8', 'ASCII//TRANSLIT', $str))))), $delimiter));
    return $slug;

	} 

	//echo $log_pass = encryptIt($_POST['log_pass']);
	//echo $log_pass = decryptIt($_POST['log_pass']);
/*function encryptIt( $q ) {
    $cryptKey  = 'qJB0rGtIn5UB1xG03efyCp';
    $qEncoded      = base64_encode( mcrypt_encrypt( MCRYPT_RIJNDAEL_256, md5( $cryptKey ), $q, MCRYPT_MODE_CBC, md5( md5( $cryptKey ) ) ) );
    return( $qEncoded );
}

function decryptIt( $q ) {
    $cryptKey  = 'qJB0rGtIn5UB1xG03efyCp';
    $qDecoded      = rtrim( mcrypt_decrypt( MCRYPT_RIJNDAEL_256, md5( $cryptKey ), base64_decode( $q ), MCRYPT_MODE_CBC, md5( md5( $cryptKey ) ) ), "\0");
    return( $qDecoded );
}*/

function encryptIt( $string ) {

    $secret_key = 'qJB0rGtIn5UB1xG03efyCp';
    $secret_iv = 'my_simple_secret_iv';

    $encrypt_method = "AES-256-CBC";
    $key = hash( 'sha256', $secret_key );
    $iv = substr( hash( 'sha256', $secret_iv ), 0, 16 );
	return base64_encode( openssl_encrypt( $string, $encrypt_method, $key, 0, $iv ) );
}

function decryptIt( $string ) {
    
    $secret_key = 'qJB0rGtIn5UB1xG03efyCp';
    $secret_iv = 'my_simple_secret_iv';

    $encrypt_method = "AES-256-CBC";
    $key = hash( 'sha256', $secret_key );
    $iv = substr( hash( 'sha256', $secret_iv ), 0, 16 );
	return openssl_decrypt( base64_decode( $string ), $encrypt_method, $key, 0, $iv );
}


function encryptIt1( $string ) {

    $secret_key = 'zrtghGTtIn5UB1Lg073efyCp';
    $secret_iv = 'my_simple_secret_iv';

    $encrypt_method = "AES-256-CBC";
    $key = hash( 'sha256', $secret_key );
    $iv = substr( hash( 'sha256', $secret_iv ), 0, 16 );
	return base64_encode( openssl_encrypt( $string, $encrypt_method, $key, 0, $iv ) );
}

function decryptIt1( $string ) {
    
    $secret_key = 'zrtghGTtIn5UB1Lg073efyCp';
    $secret_iv = 'my_simple_secret_iv';

    $encrypt_method = "AES-256-CBC";
    $key = hash( 'sha256', $secret_key );
    $iv = substr( hash( 'sha256', $secret_iv ), 0, 16 );
	return openssl_decrypt( base64_decode( $string ), $encrypt_method, $key, 0, $iv );
}


function state_name($q)
{
	global $con ;
	$s1=mysqli_query($con,"select * from state where state_id='$q'");
	while($s1_res=mysqli_fetch_array($s1))
	{
	return $s1_res['state_name'];
	}
}

function city_name($q)
{
	global $con ;
	$s1=mysqli_query($con,"select * from city where city_id='$q'");
	while($s1_res=mysqli_fetch_array($s1))
	{
	return $s1_res['city_name'];
	}
}
function category_alias($q)
{
	global $con ;
	$s1=mysqli_query($con,"select * from category where id='$q'");
	while($s1_res=mysqli_fetch_array($s1))
	{
	return $s1_res['alias'];
	}
}
function subcategory_alias($q)
{
	global $con ;
	$s1=mysqli_query($con,"select * from subcategory where sub_id='$q'");
	while($s1_res=mysqli_fetch_array($s1))
	{
	return $s1_res['alias'];
	}
}


function category($q)
{
	global $con ;
	$s1=mysqli_query($con,"select * from main_cat where id='$q'");
	while($s1_res=mysqli_fetch_array($s1))
	{
	return $s1_res['name'];
	}
}


function categoryid($q)
{
	global $con ;
	$s1=mysqli_query($con,"select * from main_cat where alias='$q'");
	while($s1_res=mysqli_fetch_array($s1))
	{
	return $s1_res['id'];
	}
}


function subcategory($q)
{
	global $con ;
	$s1=mysqli_query($con,"select * from sub_cat where id='$q'");
	while($s1_res=mysqli_fetch_array($s1))
	{
	return $s1_res['name'];
	}
}


function subcategoryid($q)
{
	global $con ;
	$s1=mysqli_query($con,"select * from sub_cat where alias='$q'");
	while($s1_res=mysqli_fetch_array($s1))
	{
	return $s1_res['id'];
	}
}

function useremail($q)
{
	global $con ;
	$s1=mysqli_query($con,"select * from register where user_id='$q'");
	while($s1_res=mysqli_fetch_array($s1))
	{
	return $s1_res['email'];
	}
}
function bulkuseremail($q)
{
	global $con ;
	$s1=mysqli_query($con,"select * from bulkusers where userid='$q'");
	while($s1_res=mysqli_fetch_array($s1))
	{
	return $s1_res['email'];
	}
}


function count_subprd($q)
{
	global $con ;
	$s1=mysqli_query($con,"select * from product where sub_id='$q' AND action=1");
	return mysqli_num_rows($s1);
}

function weight_ch($q)
{
	global $con ;
	$s1=mysqli_query($con,"select * from product where id='$q' ");
	while($s1_res=mysqli_fetch_array($s1))
	{
	return $s1_res['weg'];
	}
}

function weight_price($w,$st)
{
	global $con ;
	$w_check=($w/1000);
	if(($w%1000)!=0)
	{
	$check_weight=(int)$w_check+1;
	}
	else
	{
	$check_weight=(int)$w_check;
	}
	
	
	//check state price
	$c1=mysqli_query($con,"select * from courier_tariff where state='$st' ");
	while($c1_res=mysqli_fetch_array($c1))
	{
		$price_state=$c1_res['1kg'];
	}
	
	return $price_state*$check_weight;
	return $w;
}


function check_pincode($q,$s)
{
	global $con ;
	$cpin=0;
	$s1=mysqli_query($con,"select * from pincode where pincode='$q' AND statename='$s' ");
	if(mysqli_num_rows($s1)==1)
	{
		$cpin=1;
	}
	return $cpin;
}

function productrating($pid)
{
	global $con ;
	$total_rating=0;
	$total_user=0;
	$final_rate=0;
	$s1=0;
	$s2=0;
	$s3=0;
	$s4=0;
	$s5=0;
	
	$cr1=mysqli_query($con,"select * from product_rating where prodid='".$pid."'  AND admin_status=1");
	$total_user=mysqli_num_rows($cr1);
	
	while($cr1res=mysqli_fetch_array($cr1))
	{
		$total_rating=$total_rating+$cr1res['rate_star'];
	
	}
	if($total_rating==0&&$total_user==0)
	{
		return $final_rate=0;
	}
	else  return $final_rate=($total_rating/$total_user);	
}
function totatreviews($pid)
{
	global $con ;
	$total_rating=0;
	$total_user=0;
	$final_rate=0;
	$s1=0;
	$s2=0;
	$s3=0;
	$s4=0;
	$s5=0;
	
	$cr1=mysqli_query($con,"select * from product_rating where prodid='".$pid."'  AND admin_status=1");
	return $total_user=mysqli_num_rows($cr1);
}
function checkuname($q)
{
	global $con ;
	$s1=mysqli_query($con,"select * from register where user_id='$q' ");
	while($s1_res=mysqli_fetch_array($s1))
	{
	return $s1_res['name'];
	
	}	
}

function checkrates($q)
{
	global $con ;
	$total_rating=0;
	$total_user=0;
	$cr1=mysqli_query($con,"select * from product_rating where prodid='".$q."' AND admin_status=1");
	$total_user=mysqli_num_rows($cr1);
	while($cr1res=mysqli_fetch_array($cr1))
	{
		$total_rating=$total_rating+$cr1res['rate_star'];
	}
	
	if($total_rating==0&&$total_user==0)
	{
		 return 0;
	}
	else return ($total_rating/$total_user);

}
date_default_timezone_set('Asia/Kolkata');
$todaydate = date('Y-m-d H:i:s');
$todate = date('Y-m-d');
?>
