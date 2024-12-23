<?php 

include_once('conexao.php');


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="login.css">

    
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

  
    <div id="login-container">
        <h1>Login</h1>
        <form action="">
            <label for="email">E-mail*</label>
            <input type="email" name="email" id="email" placeholder="Digitie seu e-mail" autocomplete="off">
            <label for="password">Senha*</label>
            <input type="password" name="password" id="password" placeholder="Digite a sua senha">
            <a class="esq-senha" href="#" id="forgot-pass">Esqueceu a senha?</a>
            <input type="submit" value="Login">
        </form>
        <div  id="social-container">
            <p>Ou entre pelas redes sociais</p>
            <i class="fa fa-facebook-f"></i>
            <i class="fa fa-google"></i>
        </div>
        <div id="register-container">
            <p>Ainda não tem cadastro?</p><br>
            <a class="btn5" href="cadastro.html"><strong>CADASTRAR?</strong></a>
            <a class= "btn5" href="index.html"><strong>VOLTAR HOME?</strong></a>
        </div>
    </div>
</body>
</html>

