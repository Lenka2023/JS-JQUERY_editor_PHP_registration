<?php
if(isset($_POST['reg'])){
	$username=htmlspecialchars($_POST['username']);
	$login=htmlspecialchars($_POST['login']);
	$password=htmlspecialchars($_POST['password']);
	$r_password=htmlspecialchars($_POST['r_password']);
	$bad=false;
	session_start();
	if(!isset($_SESSION['text']))
{
$_SESSION['text'] = "";
}
else
{
echo 0;
}
	unset($_SESSION['errror_username']);
	unset($_SESSION['errror_login']);
	unset($_SESSION['errror_password']);
	unset($_SESSION['reg_succes']);
	
	if((strlen($username)<3)||(strlen($username)>32)){
		$_SESSION['errror_username']=1;
		$bad=true;
											}
	if((strlen($login)<3)||(strlen($login)>32)){
		$_SESSION['errror_login']=1;
		$bad=true;
											}
	if((strlen($password)<6)||(strlen($password)>32)){
		$_SESSION['errror_password']=1;
		$bad=true;
												}
	if($password==$r_password){
		echo "<p><span style='color:red;'>This password is correct</span></p>";	
	}else{
		echo "<p><span style='color:red;'>Enter the same password </span></p>";	
		$bad=true;
	}	
												if(!$bad){
													$mysqli=new mysqli ('localhost', 'Mysitefour', '00000', "mysite-local");
													$password=md5($password);
													$query="SELECT* FROM `users`";
													$result = mysqli_query($mysqli, $query);
													
													$user_data=mysqli_fetch_array($result);
													if($user_data[login]==$e_login){
														//echo"<p><span style='color:red;'>This login is already exist, please enter enother login</span></p>";
																					}
													$mysqli->query("INSERT INTO users(username, login, password) VALUES ('$username', '$login', '$password')");
													$mysqli->close();
													//$_SESSION['reg_succes']=1;
													header("Location:editor.php");
														}
						}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
	<link rel="stylesheet" href="css/regstyle.css"type="text/css"/>
    <title>Registration</title>
	</head>
	<body>
	<table  width='100%;' cellpadding='0' cellspacing='0'>
			<tr>
				<td colspan='2'>
					<img src="img/logo.jpg" width='100%;' alt="Шапка сайта"/>
				</td>
				</tr>
				<tr>
					<td style= 'width:20%;' valign='top'>
					<td>
					<td style= 'width:80%;' >
						<div style = "text-align:center; ">
							<h1>Registration</h1>
							<form id="form1" action="" method="post">
<?php
if ($_SESSION['reg_succes']==1) echo "<p><span style='color:red;'>Succes registration</span></p>";
if ($_SESSION['errror_login']==1) echo "<p><span style='color:red;'>Invalid login</span></p>";
if ($_SESSION['errror_password']==1) echo "<p><span style='color:red;'>Invalid password</span></p>";
unset($_SESSION['reg_succes']);
?>
							<div class="fieldmain">	
								<div class="mainfield">
									<div class="regfield">
										<label for="username">Username</label>
										<input type='text' name='username' id="username" placeholder="Username" required/>
									</div>
									<div class="regfield">
										<label for="login">Login</label>
										<input type='text' name='login' id="login" placeholder="Login" required/>
									</div>
									<div class="regfield">
										<label for="password">Password</label>
										<input type='password' name='password' id="password" placeholder="Password" required/>
									</div>
									<div class="regfield">
										<label for="password">Password</label>
										<input type='password' name='r_password' id="password" placeholder="Repeat password" required/>
									</div>
								
									<div class="regfield">
										<input type='submit' name='reg' value='Register'/><br><a href="index.php">Log in</a>
									</div>
								</div>
							</div>	
							</form>
						</div>
					</td>
				</tr>
				<tr>
				
				