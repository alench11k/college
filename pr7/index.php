<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Практика 7</title>
</head>
<body>
    <form action="action.php" method="post">
    <p>Введите логин*: <input type="text" name="login" required name = "login" placeholder = "Введите логин"></p>
    <p>Придумайте пароль (не более 15 символов и не менее 8)*: <input type="password" name="password1" required name = "password1" min=1 placeholder = "Введите пароль">
    <?php
	$login = $_POST['login'];
	$password = md5($_POST['password']); // преобразуем пароль в его хеш
	
	$query = "INSERT INTO users SET login='$login', password='$password'";
?></p>
    <p>Повторите пароль*: <input type="password" name="password2" required name = "password2" min=1 placeholder = "Повторите пароль"></p>
    <p>Введите адрес электронной почты*: <input type="email" name="mail" required name = "mail" min=1 placeholder = "Введите почту"></p>
    <p><input type="submit"></p> 
    </form>
</body>
</html>