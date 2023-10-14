<?php 
    $host       = "db4.myarena.ru";      // Адрес сервера базы данных
    $dbname     = "u19978_b03";          // Имя базы данных
    $user       = "u19978_b03";          // Имя пользователя
    $password   = "iH3tS3bV4w";         // Пароль

    
    if( $_SERVER['REQUEST_METHOD'] !== 'POST' ) exit ("Что-то пошло не так...");
    if(empty($_POST['login'])) exit('Поле "Логин" не заполнено');

    if( empty($_POST['password'])) exit('Поле "Пароль" не заполнено');

try{
    $connection = new PDO('mysql:host='.$host.';dbname='.$dbname.';charset=utf8', $user, $password);
   
   
}
    catch(PDOException $ex){
    die('Произошла ошибка');
}
      
        
        
?>   
