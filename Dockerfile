# Imagem do node
FROM node

# Diretório onde as informações vão estar contidas
WORKDIR /usr/app

# Copia o arquivo package.json para dentro do diretório criado na linha acima
COPY package.json ./

# Instalar as depedências do projeto no container
RUN npm install

# Copia tudo para dentro da pasta raiz
COPY . .

EXPOSE 3333

# Rodar o script
CMD ["npm","run","dev:server"]