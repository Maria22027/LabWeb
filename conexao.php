<?php

$dbhost = "localhost";
$dbusuario = "root";
$dbsenha = "";
$dbName = "dream_beach";


$conexao = new mysqli($dbhost,$dbusuario,$dbsenha,$dbName);

/*if ($conexao->connect_errno){

    echo "Erro";
}else{
    echo "Conexão efetuada com sucesso";
}*/

?>