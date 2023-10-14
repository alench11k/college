<?php 
    $host       = "db4.myarena.ru";      // Адрес сервера базы данных
    $dbname     = "u19978_b03";          // Имя базы данных
    $user       = "u19978_b03";          // Имя пользователя
    $password   = "iH3tS3bV4w";         // Пароль

    
    if( $_SERVER['REQUEST_METHOD'] !== 'POST' ) exit ("Что-то пошло не так...");
    if(empty($_POST['login'])) exit('Поле "Логин" не заполнено');

    if( empty($_POST['password1'])) exit('Поле "Пароль" не заполнено');
  
    if( strlen ($_POST['password1']) < 8) exit('В поле "Пароль" введено мало символов');

    if( strlen ($_POST['password1']) > 15) exit('В поле "Пароль" введено много символов');

    if ($_POST['password1']!==$_POST['password2']) {
       exit ('Пароли не совпадают');
    }
    if(empty($_POST['mail'])) exit('Поле "Почта" не заполнено');

try{
    $connection = new PDO('mysql:host='.$host.';dbname='.$dbname.';charset=utf8', $user, $password);
   
   
}
    catch(PDOException $ex){
    die('Произошла ошибка');
}
      
        
        $select = $connection-> prepare ("SELECT COUNT(`id`) as cnt from `users` where `login`=? or `mail`= ?;");
        $result=$select->execute([$_POST['login'],$_POST['mail']]);
        $row=$select->fetch();
        
        if(!$result) {
            exit('Ошибка регистрации');
        }
        
        if ($row[0] > 0 ){
            exit('Ошибка регистрации (Пользователь уже существует)');
        }

        $password = password_hash ($_POST['password1'], PASSWORD_DEFAULT);
        $data = [$_POST['login'], $password, $_POST['mail']];
        $insert = $connection-> prepare ("INSERT INTO `users`(`login`,`password`,`mail`) VALUES (?, ?, ?);");
        $result = $insert-> execute ($data);
        
        if($result){
            echo ('Поздравляем с успешной регистрацией! ');
        }
        else {
            exit ('Ошибка в процессе регистрации.');
        }
        
?>   
