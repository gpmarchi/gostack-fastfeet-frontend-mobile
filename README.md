# FastFeet front-end mobile

Projeto desenvolvido como exercício para certificação do Bootcamp Gostack 10 da Rocketseat. Front-end desenvolvido em React Native disponibilizando um app para o entregador de uma transportadora possibilitando o acompanhamento de suas encomendas designadas, retirada de mercadorias para entrega, sinalização de problemas e finalização do processo de entrega.

O aplicativo foi desenvolvido utilizando como base a plataforma Android em dispositivo físico. O código ainda não foi testado em iOS.

<div align="center">
    <img alt="FastFeet" title="FastFeet" src=".github/fastfeet-mobile.gif" />
</div>

## Tecnologias e libs utilizadas

Abaixo seguem as tecnologias utilizadas no desenvolvimento do projeto:

- React Native
- React Navigation 5.x
- Reactotron
- Redux
- Redux saga
- axios
- date-fns
- styled components

## Requisitos iniciais

Para poder rodar o projeto, é necessário que os itens abaixo estejam instalados:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) ou [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
- [git](https://git-scm.com/downloads)
- [Android Studio](https://developer.android.com/studio)
- [JDK8](https://www.oracle.com/java/technologies/javase-jdk8-downloads.html)

Também será necessário que o back-end da aplicação esteja rodando para que o app mobile acesse as rotas da API.

Para maiores informações sobre como preparar o seu ambiente para rodar projetos baseados em React Native, acessar a documentação da [Rocketseat](https://react-native.rocketseat.dev/).

## Instalação

Para instalar o projeto localmente na sua máquina, clonar o repositório (caso tenha clonado o projeto pai `gostack-fastfeet`, não será necessário rodar o comando abaixo pois os arquivos já estarão em sua máquina dentro da pasta mobile):

    git clone https://github.com/gpmarchi/gostack-fastfeet-frontend-mobile.git && cd gostack-fastfeet-frontend-mobile

Rodar o comando abaixo para instalar as dependências:

    yarn

## Configuração

Será necessário configurar o endereço onde o servidor da API estiver rodando. Para isso editar o arquivo `src/services/api.js`, informando na propriedade `baseURL` o endereço correto de acesso à API:

    baseURL: 'http://<endereço ip>:<porta>'

## Rodando o projeto

A partir desse momento o ambiente já está preparado para rodarmos o app. Para iniciar o bundler rodar o comando:

    yarn start

Com o bundler rodando, agora será necessário instalar o app no seu emulador ou dispositivo físico. Com o emulador rodando ou o dispositivo físico conectado via USB, rodar o comando:

    adb reverse tcp:8081 tpc:8081 && yarn android

Após instalado o app no dispositivo físico, se desejar emular o app pela rede sem fio será necessário acessar o **Developer Menu** chacoalhando o dispositivo e acessar **Dev Settings** e selecionar a opção **Debug server host & port for device** para informar o ip e porta da sua máquina de desenvolvimento (<ip da máquina>:8081)

Caso tenha problemas para acessar as rotas da API pelo dispositivo, rodar o comando abaixo:

    adb reverse tcp:<porta da api> tpc:<porta da api>

## Testando as funcionalidades

As funcionalidades da aplicação poderão ser testadas abrindo o aplicativo e informando o id de um entregador previamente cadastrado através do aplicativo web. Todas as encomendas cadastradas para o referido entregador deverão ser listadas no aplicativo para simulação do processo de entrega.
