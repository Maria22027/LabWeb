<?php 

if (isset($_POST['submit'])){
/*
  print_r('E-mail: ' . $_POST['email']);
  print_r('<br>');
  print_r('Nome: ' . $_POST['name']);
  print_r('<br>');
  print_r('Sobrenome: ' . $_POST['lastname']);
  print_r('<br>');
  print_r('Senha: ' . $_POST['password']);
  print_r('<br>');
  print_r('Confirmação de senha: ' . $_POST['passwordconfirmation']);
  print_r('<br>');
  print_r('Termos de uso: ' . $_POST['agreement']);*/


  include_once('conexao.php');

  $email = $_POST['email'];
  $nome = $_POST['name'];
  $sobrenome = $_POST['lastname'];
  $senha = $_POST['password'];
  $confirmacaosenha = $_POST['passwordconfirmation'];

  $result = mysqli_query($conexao, "INSERT INTO tb_cadastro(email,name,lastname,password,passwordconfirmation) VALUES 
  ($email,$nome,$sobrenome,$senha,$confirmacaosenha)");
  
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Form de Registro com validações em JS</title>
  <link rel="stylesheet" href="cadastro.css">
</head>
<body>
   <!-- acessivel em libras -->
  <div vw class="enabled">
    <div vw-access-button class="active"></div>
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper"></div>
    </div>
  </div>
  <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
  <script>
    new window.VLibras.Widget('https://vlibras.gov.br/app');
  </script>
     
  <div id="main-container">
    <h1>CADASTRO</h1>
    <form id="register-form" action="cadastro.php" method="POST">
      <div class="full-box">
        <label for="email">E-mail*</label>
        <input type="email" name="email" id="email" placeholder="Digite seu e-mail" data-min-length="2" data-email-validate>
      </div>
      <div class="half-box spacing">
          <label for="name">Nome*</label>
          <input type="text" name="name" id="name" placeholder="Digite seu nome" data-required data-min-length="3" data-max-length="16">
      </div>
      <div class="half-box">
          <label for="lastname">Sobrenome*</label>
          <input type="text" name="lastname" id="lastname" placeholder="Digite seu sobrenome" data-required data-only-letters>
      </div>
      <div class="half-box spacing">
        <label for="lastname">Senha*</label>
        <input type="password" name="password" id="password" placeholder="Digite sua senha" data-password-validate data-required>
      </div>
      <div class="half-box">
        <label for="passconfirmation">Confirmação de senha*</label>
        <input type="password" name="passconfirmation" id="passwordconfirmation" placeholder="Digite novamente sua senha" data-equal="password">
      </div>
      <div>
        <input type="checkbox" name="agreement" id="agreement">
        <label for="agreement" id="agreement-label">Eu li e aceito os <a href="termos_uso.html">termos de uso*</a></label>
      </div>
      <div class="full-box">
        <input id="btn-submit" type="submit" value="Registrar">

      </div>

    <div>
        <a class="btn5" href="index.html"><strong>VOLTAR PARA HOME?</strong></a>
    </div>


    </form>
  </div>
  <p class="error-validation template"></p>
  <script src="cadastro.js"></script>
</body>
</html>