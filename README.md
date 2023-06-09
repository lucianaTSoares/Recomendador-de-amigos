# Recomendador de amigos

## O que é?

O Recomendador de amigos é um sistema que sugere novos amigos se baseando nas amizades já existentes de um usuário, desenvolvido em Node.js.

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/en)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/pt-BR/)
- [Supertest](https://www.npmjs.com/package/supertest)

## Pré-requisitos

Certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/en)
- npm (Node Package Manager): geralmente vem junto com a instalação do Node.js

## Configurando o projeto

Siga as etapas abaixo para configurar o projeto em sua máquina:

### Clonando o projeto

Faça o clone do repositório através do comando abaixo ou baixe-o como arquivo ZIP e extraia-o.

```bash
$ git clone https://github.com/lucianaTSoares/test2.0.git
```
OU
```bash
$ git clone git@github.com:lucianaTSoares/test2.0.git       (nessessita de chave SSH)
```

Após a clonagem finalizada, encontre o diretório do projeto através do Explorador de Arquivos ou por um terminal.

### Instalando Dependências

Antes de executar o projeto, é preciso instalar as dependências encontradas no arquivo `package.json`. Para isso, basta executar o comando abaixo no terminal:

```bash
$ npm install
```

Este comando irá baixar e instalar todas as dependências necessárias para o projeto ser executado e criará uma pasta chamada `node_modules` na raiz do projeto.

## Executando o Projeto

Após realizar as configurações do projeto, já é possível executar o projeto. Existem 2 scripts já configurados para executá-lo:

### 1. Execução padrão

Execução padrão do projeto.

```bash
$ npm run start
```

### 2. Execução para desenvolvimento

Execução do projeto voltada para desenvolvimento em que, a cada alteração no código, o projeto é re-executado automaticamente.

```bash
$ npm run dev
```

## Executando testes

O projeto possui alguns testes automatizados, localizados na pasta `/tests` na raiz do projeto, que testam cada endpoint da API. Para executá-los, basta rodar o comando abaixo no terminal:

```bash
$ npm run test
```

Para executar um arquivo de teste específico, basta executar o mesmo comando acima acrescentando o caminho do teste desejado para execução, como no exemplo abaixo:

```bash
$ npm run test tests/person/createPerson.spec.ts
```
