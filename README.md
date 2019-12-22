# -Reprograma-APIAdoteUmGato
Não abandone seu Amigo! Doe ou Adote um Gatinho!(Meu Projeto Final {Reprograma})
Essa API tem o objetivo de evitar o abandono de animais em especifico os gatos

- Dependências e Bibliotecas para instalar!
#npm i express bcryptjs body-parser mongoose jsonwebtoken

# Rotas Doador do Gato 
- Essa rota cadastra o doador do gato 
#(/doacao/cadastro)

- Nessa Rota é possivel fazer login da conta cadastrada pelo doador
#(/doacao/login)

- Esta Rota é possivel que o doador do gato coloque o animal para adoção 
#(/doacao/doargato)

- Nessa rota é possível listar todos os gatos que o doador colocou para adoção 
#(/doacao/listargatos)

-Nesta rota é possível listar os gatos pelo ID
#(/doacao/:gatosId)

- Nessa rota é possivel atualizar as informações do gato cadastrado pelo ID
#(/doacao/atualizagatoid/:atualizagatoid)

- Nessa rota é possivel apagar um gato cadastrado pelo ID
#(/doacao/deletagatoid/:deletagatoid)

- Nessa rota é possivel que o doador liste todos os doadores disponiveis 
#(/doacao/listaradotantes)

# Rotas Adotante do Gato
- Nessa rota é possivel listar todos os gatos para adoção
#(/adotar/listargatosdisp)

- Nessa rota é possivel que o adotante do gato envie suas informações pessoais para o doador do gato
#(/adotar/adotargato)





