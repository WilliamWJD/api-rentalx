# Cadastro de carro

**RF**
- Deve ser possível cadastrar um novo carro.

**RN**
- Não deve ser possível cadastrar um carro com uma placa já existente.
- O carro deve ser cadastrado com disponibilidade por padrão.
- O cadastro de um carro só será permitido por usuários com perfil administrador.

# Listagem de carros

**RF**
- Deve ser possível listar todos os carros diponíveis
- Deve ser possível listar todos os carros disponíveis pelo nome da categorias.
- Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
- Não é necessário estar autenticado no sistema para listar os carros disponíveis.

# Cadastro de Especificação no carro

**RF**
- Deve ser possível cadastrar uma especificação para um carro.

**RN**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar uma especificação em duplicidade para o mesmo carro.

# Cadastro de imagens do carros

**RF**
- Deve ser possível cadastrar a imagem do carro.

**RNF**
- Utilizar o multer para upload dos arquivos.

**RN**
- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carros

**RF**
- Deve ser possível realizar um aluguél.

**RN**
- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aluguel aberto para o mesmo usuário.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aluguel aberto para o mesmo carro.
