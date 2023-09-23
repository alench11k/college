<!DOCTYPE html>
<html lang="en">
<head>

</head>
<body>
    

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
    
$result = $connection->query('SELECT * FROM product');
echo "<table class = 'table' border = '1'>";

$row = $result->fetch( PDO::FETCH_ASSOC );
    echo "<tr>";
    foreach ($row as $key => $value) {
        echo "<th>".$key."</th>";
    };
    echo "</tr>";
{
do {
    echo "<tr>";
    foreach ($row as $key => $value) {
        echo "<td>".$value."</td>";
    }
    echo "</tr>";
} while($row = $result->fetch( PDO::FETCH_ASSOC )); 
}
echo "</table>";

?>
</body>
</html>