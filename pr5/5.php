<?php
    $host       = "db4.myarena.ru";      // Адрес сервера базы данных
    $dbname     = "u19978_b03";          // Имя базы данных
    $user       = "u19978_b03";          // Имя пользователя
    $password   = "iH3tS3bV4w";         // Пароль
   
    try{
        $connection = new PDO('mysql:host='.$host.';dbname='.$dbname.';charset=utf8', $user, $password);
        echo ('Подключение успешно');
    }
        catch(PDOException $ex){
        die('Произошла ошибка');
    }
    $result = $connection->query('SELECT * FROM `product`');
        while($row = $result->fetch( PDO::FETCH_ASSOC )){
        foreach ($row as $key => $value) {
        echo "<td>".$value."</td>";
    }
}

?>