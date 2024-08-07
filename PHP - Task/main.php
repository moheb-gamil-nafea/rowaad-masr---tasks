<?php
    
$num1 =200;
$num2 =400;
$op = '*';

if($op == '+'){
    $result = $num1 + $num2 ;
    echo "<br> the result of :  $num1 + $num2 is $result";
}else if($op == '-'){
    $result = $num1 - $num2 ;
    echo "<br> the result of :  $num1 - $num2 is $result";
}else if($op == '*'){
    $result = $num1 * $num2 ;
    echo "<br> the result of :  $num1 * $num2 is $result";
}else if($op == '/'){
    $result = $num1 / $num2 ;
    echo "<br> the result of :  $num1 / $num2 is $result";
}else{
    echo "invalid operators";
}