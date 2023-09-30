<?php 
    if( $_SERVER['REQUEST_METHOD'] !== 'POST' ) exit ("Что-то пошло не так...");
        if(empty($_POST['login'])) exit('Поле "Логин" не заполнено');
        if(empty($_POST['password1'])) exit('Поле "Пароль" не заполнено');
        if( strlen ($_POST['password1']) < 8) exit('В поле "Пароль" введено мало символов');
        if( strlen ($_POST['password1']) > 15) exit('В поле "Пароль" введено много символов');
        if ($_POST['password1']!==$_POST['password2']) {
           exit ('Пароли не совпадают');
        }
        if(empty($_POST['mail'])) exit('Поле "Почта" не заполнено');
        
        

        echo 'Поздравляем с успешной регистрацией, '.htmlspecialchars($_POST['login']).'. <br>';
    
?>
