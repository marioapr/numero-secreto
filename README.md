# Número Secreto

 O projeto do Curso [JavaScript: validações e reconhecimento de voz](https://cursos.alura.com.br/course/javascript-validacoes-reconhecimento-voz), o jogo Número secreto tinha como objetivo criar um jogo com 
 RECONHECIMENTO DE VOZ que consistia em
 o computador escolher um número aleatorio e então o usuario tentar acertar o mesmo em usando das dicas que o 
 computador fornece.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Número Secreto**
| :label: Tecnologias | java, html e css
| :rocket: URL         | https://url-deploy.com.br
| :fire: Desafio     | https://cursos.alura.com.br/course/javascript-validacoes-reconhecimento-voz

<!-- Inserir imagem com a #vitrinedev ao final do link -->
![Resultado do projeto finalizado](imgs/resultado%20final.png#vitrinedev)

## Detalhes do projeto

 Como dito anteriormente o projeto se trata de um jogo com o objetivo de acertar um número secreto utilizando de reconhecimento de voz do usuario. 

 O primeiro passo assim como em todo projeto foi criar um layout da página, utilizando as tecnologias HTML e CSS.

 O segundo passo foi fazer o computador gerar um número aleatorio e armazer esse número, e depois usando a API 
 do [Web speech](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API), para que com o 
 reconhecimento de voz o usuario tentasse acertar o número.

 O proximo passo era fazer com que a tentativa do jogador aparece na tela com dicas caso o número que ele 
 chutou fosse maior ou menor que o número secreto.

 Tentativa de chute MENOR que o Número Secreto.
 ![](imgs/resultado%20menor.png)

 Tentativa de chute MAIOR que o Número Secreto.
 ![](imgs/resultado%20maior.png)

 E o passo final era fazer com que quando o jogador finalmente acertasse o Número Secreto uma tela final 
 aparece dando parabéns por ter acertado.
 ![](imgs/resultado%20correto.png)

 E por fim foi deixado um desafio no curso.
 O desafio é: Caso alguem falasse a frase "Game over" o navegador reconheça essa frase e mude para uma tela de
 Game over com um layout diferente e com o botão para que o jogador tentasse jogar novamente.
 ![](imgs/resultado%20game%20over.png)