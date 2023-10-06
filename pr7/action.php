<?php 
    $host       = "db4.myarena.ru";      // Адрес сервера базы данных
    $dbname     = "u19978_b03";          // Имя базы данных
    $user       = "u19978_b03";          // Имя пользователя
    $password   = "iH3tS3bV4w";         // Пароль

try{
    $connection = new PDO('mysql:host='.$host.';dbname='.$dbname.';charset=utf8', $user, $password);
   // echo ('Подключение успешно');
   
}
    catch(PDOException $ex){
    die('Произошла ошибка');
}

$result = $connection->query('SELECT * FROM `users`');
    if( $_SERVER['REQUEST_METHOD'] !== 'POST' ) exit ("Что-то пошло не так...");
        if(empty($_POST['login'])) exit('Поле "Логин" не заполнено');

        if(empty($_POST['password1'])) exit('Поле "Пароль" не заполнено');

        if( strlen ($_POST['password1']) < 8) exit('В поле "Пароль" введено мало символов');

        if( strlen ($_POST['password1']) > 15) exit('В поле "Пароль" введено много символов');

        if ($_POST['password1']!==$_POST['password2']) {
           exit ('Пароли не совпадают');
        }
        if(empty($_POST['mail'])) exit('Поле "Почта" не заполнено');

        
        $data = [$_POST['login'], $_POST['password1'], $_POST['mail']];
        $insert = $connection-> prepare ("INSERT INTO `users`(`login`,`password`,`mail`) VALUES (?, ?, ?);");
        $result = $insert-> execute ($data);

        if($result){
            echo ('Поздравляем с успешной регистрацией, ');
        }
        else {
            exit ('Ошибка в процессе регистрации.');
        }
        
?>   
