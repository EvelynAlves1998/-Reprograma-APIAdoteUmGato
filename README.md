# -Reprograma-APIAdoteUmGato
Não abandone seu Amigo! Doe ou Adote um Gatinho!(Meu Projeto Final {Reprograma})
Essa API tem o objetivo de evitar o abandono de animais em especifico os gatos

- Dependências e Bibliotecas para instalar!
#npm i express bcryptjs body-parser mongoose jsonwebtoken

# Rotas Doador do Gato 
- Essa rota cadastra o doador do gato 
#(/doacao/cadastro)

- Nesta Rota é possivel fazer login da conta cadastrada pelo doador
#(/doacao/login)

- Nesta  Rota é possivel que o doador do gato coloque o animal para adoção 
#(/doacao/doargato)

- Nesta  rota é possível listar todos os gatos que o doador colocou para adoção 
#(/doacao/listargatos)

- Nesta rota é possível listar os gatos pelo ID
#(/doacao/gatosId/:gatosId)

- Nesta rota é possivel atualizar as informações do gato cadastrado pelo ID
#(/doacao/atualizagatoId/:atualizagatoId)

- Nesta rota é possivel apagar um gato cadastrado pelo ID
#(/doacao/deletegatoId/:deletegatoId)

- Nesta rota é possivel que o doador liste todos os doadores disponiveis 
#(/doacao/listaradotantes)

# Rotas Adotante do Gato
- Nesta rota é possivel listar todos os gatos para adoção
#(/adotar/listargatosdisp)

- Nesta rota é possivel que o adotante do gato envie suas informações pessoais para o doador do gato
#(/adotar/adotargato)





