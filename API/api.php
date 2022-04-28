<?php

header('Access-Control-Allow-Origin: *');


// serverInfo();

function serverInfo()
{
    echo '<pre>';
    var_dump($_SERVER);
    echo '</pre>';
}

// http://localhost/new/api.php?op=select

header('Content-type: application/json');

// gestion des routes de l'API
// cf. aussi $_SERVER["REQUEST_METHOD"]
$op = $_GET['op'] ?? 'select';
$id = intval($_GET['id']  ?? 0);
switch ($op) {

    case 'insert':
        $val = $_GET['val'];
        if (mb_strlen($val) === 0) {
            http_response_code(422);
            break;
        }
        apiInsert($val);
        break;

    case 'select':
        echo apiSelect();
        break;

    case 'delete':
        apiDelete($id);
        break;
}

function myPdo()
{
    $db = new PDO('mysql:host=localhost;dbname=appli_jouet', 'root', '');
    return $db;
}

function apiSelect()
{
    $pdo = myPdo();
    $sql = "select * from jouet";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $data = $stmt->fetchAll();
    return json_encode($data);
}

function apiDelete($id)
{
    $pdo = myPdo();
    $sql = "delete from jouet where id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
}

function apiInsert($val)
{
    $pdo = myPdo();

    $sql = "insert into jouet (id, valeur) values (4, :val)";
    echo $sql;
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':val', $val, PDO::PARAM_STR);
    $stmt->execute();
}
