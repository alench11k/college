<?php 
    if( $_SERVER['REQUEST_METHOD'] !== 'POST' ) exit ("Что-то пошло не так...");

        if(empty($_POST['age'])) exit('Поле "возраст" не заполнено');
        if((int)$_POST['age'] < 1) exit('В поле "возраст" введено отрицательное или НЕ числовое значение');

        if(empty($_POST['name'])) exit('Поле "имя" не заполнено');
        

        echo 'Здравствуйте, '.htmlspecialchars($_POST['name']).'. <br>';
        echo 'Вам '.(int)$_POST['age'].' лет.'.'<br>';
    
?>