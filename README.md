# Desafio JExperts

Api criada como parte da solução do desafio para Front End da JExperts

Rodando em: https://jexperts-challenge-backend.herokuapp.com


## Ferramentas utilizadas

- express e node-restful (Utilizado para criação da API)
- mongoose (para mapeamento ODM no banco de dados mongoDB)
- jsonwebtoken (pacote que implementa o protocolo JSON Web Token)
- bcrypt (para criptografar as senhas)


## Estrutura de Pastas

| Nome da Pasta  | Descrição                                                                               |
| -------------- | --------------------------------------------------------------------------------------- |
| `api   `       | Schemas, modelos e Serviços criados                                                     |
| `config    `   | Configurações para auteticação, habilitação do CORS, banco de dados, rotas e servidor   |


## Scripts

  Para iniciar o projeto :
  `yarn start`
  
  Para iniciar o projeto localmente como desenvolvedor:
  `yarn dev` 

## Rotas

### Abertas 

POST `./oapi/login` : para efetuar o login

POST `./oapi/signup` : para cadastrar usuário

POST `./oapi/validaToken` : para validar token

### Fechadas (Necessita de token)

GET `./api/usuario` : para pegar a lista de usuários

PUT `./api/usuario/:id` : para atualizar usuário

DELETE `./api/usuario/:id` : para deletar usuário


## Author

| ![Willian Rodrigues](https://avatars1.githubusercontent.com/u/28413303?v=3&s=150)|
|:---------------------:|
|  [Willian Rodrigues](https://github.com/willianrssi/)   |