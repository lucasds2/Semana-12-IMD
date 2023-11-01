<?php
/* Isso é um comentário em PHP */
$nome = "Maria";
/* Variáveis tem um $ no início, seguindo do seu nome */
$idade = 30;
/* Arrays são criados com o comando array() com uma lista de valores
separados por vírgula */
$animais_de_estimação = array("Juá", "Oriosvaldo");
/* funções podem ser declaradas facilmente dentro de arquivos PHP assim:
*/
function subtrair($a, $b) {
/* Operações matemáticas comuns em valores e variáveis seguem o
mesmo padrão da maioria das linguagens como C e Javascript */
$resultado = $a - $b;
return $resultado;
}
?>
<html>
 <head>
 <title>Página da <?= $nome ?></title>
 </head>
 <body>
<h1>Página pessoal da <?= $nome ?></h1>
Oi, eu sou a <?= $nome ?>, tenho <?= $idade ?> anos e essa é minha
lista de animais:
<ul>
<?php foreach($animais_de_estimação as $animal) { ?>
 <li><?= $animal ?></li>
<?php } ?>
</ul>
Obrigada por me visitar hoje, dia: <?= date("d/m/Y") ?><br/>
Caso tenha curiosidade, 5 - 2 = <?= subtrair(1, 1) ?>
 </body>
</html>
