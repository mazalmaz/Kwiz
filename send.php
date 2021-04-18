<?php
if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') //проверка на асинхронность
	
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $zabor = $_POST['zabor'];
    $visona = $_POST['visona'];
    $dlina = $_POST['dlina'];
    $vorota = $_POST['vorota'];
    $kalitka = $_POST['kalitka'];
    $fudament = $_POST['fudament'];
    
$to = 'advancesss@mail.ru'; // адрес получателя
$subject = 'Расчет стоимости профнастила'; // тема письма
 
// формируем тело сообщения
$message = 'Тип забора: ' . $zabor . "\r\n" . 'Высота: ' . $visona . "\r\n" . 'Длина: ' . $dlina . "\r\n" . 'Ворота: ' . $vorota . "\r\n" . 'Калитка: ' . $kalitka . "\r\n" . 'Установка: ' . $fudament . "\r\n" . 'Телефон: ' . $phone . "\r\n" . 'Имя: ' . $name; 
 
// формируем headers для письма
$headers = 'From: '. $email . "\r\n"; // от кого
 
// кодируем заголовок в UTF-8
$subject = preg_replace("/(\r\n)|(\r)|(\n)/", "", $subject);
$subject = preg_replace("/(\t)/", " ", $subject);
$subject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
 
// отправка
@mail($to, $subject, $message, $headers);
 
echo 'Спасибо, ваше сообщение отправлено!';
   
?>