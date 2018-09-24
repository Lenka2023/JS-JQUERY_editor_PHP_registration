<?php session_start();
	if(isset($_POST['reg'])){
		$username=htmlspecialchars($_POST['username']);
		$login=htmlspecialchars($_POST['login']);
		$password=htmlspecialchars($_POST['password']);
		$r_password=htmlspecialchars($_POST['r_password']);
		$bad=false;
		
		
	
		unset($_SESSION['errror_username']);
		unset($_SESSION['errror_login']);
		unset($_SESSION['errror_password']);
		unset($_SESSION['reg_succes']);
		$mysqli=new mysqli ('localhost', 'Mysitefour', '00000', "mysite-local");
		if (!$mysqli){
			echo "Sorry <br>";
			echo mysqli_connect_error();
			exit();
						}
		$password=md5($password);
		$r_password=md5($r_password);
		$query="SELECT * FROM `users`";
		$result = mysqli_query($mysqli, $query);
		$user_data=mysqli_fetch_assoc($result);
					

		$count_query="SELECT COUNT(*) FROM `users`";
		$res = mysqli_query($mysqli, $count_query);
		$row = mysqli_fetch_row($res);
		$total = $row[0]; // всего записей
		echo $total;
		$stack = array();
		for($n=1;$n<=$total;$n++){
			$log_query="SELECT  `login` FROM `users` WHERE `id`=$n";
			$log_result = mysqli_query($mysqli, $log_query);
			$log_user_data=mysqli_fetch_assoc($log_result);
			$log_user=reset($log_user_data);
			array_push($stack, $log_user);

								}
							
		for($n=0;$n<$total;$n++){
			if((strlen($login)!=0)&&($login==$stack[$n])){
				echo "<p><span style='color:red;'>This login is already exist, please enter another login</span></p>";
				$_SESSION['reg_succes']=0;
				$bad=true;							
															}	
								}
		if((strlen($username)!=0)&&((strlen($username)<=1)||(strlen($username)>32))){
			$_SESSION['errror_username']=1;
			$bad=true;
												}
		if((strlen($login)!=0)&&((strlen($login)<3)||(strlen($login)>32))){
			$_SESSION['errror_login']=1;
			$bad=true;
												}
		if((strlen($password)!=0)&&((strlen($password)<6)||(strlen($password)>32))){
			$_SESSION['errror_password']=1;
			$bad=true;
													}
		if(((strlen($password)!=0)&&(strlen($r_password)!=0))&&($password==$r_password)){
			
			echo "<p><span style='color:red;'>This password is correct</span></p>";	
																						}
		if(((strlen($password)!=0)&&(strlen($r_password)!=0))&&($password!=$r_password)){
			echo "<p><span style='color:red;'>Enter the same password </span></p>";	
			$bad=true;
																						}	
		if(!$bad){
			if((strlen($login)!=0)&&($user_data['login']!=$login)){
				$mysqli->query("INSERT INTO users(username, login, password) VALUES ('$username', '$login', '$password')");
				$_SESSION['reg_succes']=1;
																}
			$mysqli->close();
			
					}
							}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
	<link rel="stylesheet" href="css/style1.css"type="text/css"/>
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
	if((isset($_SESSION['reg_succes']))&&($_SESSION['reg_succes']==1)){
		echo '<script>location.replace("index.php");</script>';		
		exit;
		echo "<p><span style='color:red;'>Succes registration</span></p>";
																		}
	if((isset($_SESSION['errror_username']))&&($_SESSION['errror_username']==1)){
		echo "<p><span style='color:red;'>Incorrect username</span></p>";
																			}
	if((isset($_SESSION['errror_login']))&&($_SESSION['errror_login']==1)){
		echo "<p><span style='color:red;'>Incorrect login</span></p>";
																			}
	if((isset($_SESSION['errror_password']))&&($_SESSION['errror_password']==1)){
		echo "<p><span style='color:red;'>Incorrect password</span></p>";
																				}																								
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
										<label for="password">Repeat password</label>
										<input type='password' name='r_password' id="r_password" placeholder="Repeat password" required/>
									</div>
								
									<div class="regfield">
										<input type='submit' name='reg' value='Register'/>
										<br>
										
									</div>
								</div>
							</div>	
							</form>
						</div>
					</td>
				</tr>
				<tr>
				
				