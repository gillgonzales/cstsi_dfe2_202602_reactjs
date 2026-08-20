# Exemplos da Disciplina de Desenvolvimento Front-end II - CSTSI

Este repositório reúne os exemplos desenvolvidos durante as aulas da disciplina de
Desenvolvimento Front-end II (DEF2), do Curso Superior de Tecnologia em Sistemas
para Internet do IFSUL.

Os exemplos apresentam a evolução de uma página de produtos feita com JavaScript,
desde uma implementação sem bundler até projetos executados com Vite e integração
com uma API.

Autor: Prof. Gonzales  
E-mail: [gillgonzales@ifsul.edu.br](mailto:gillgonzales@ifsul.edu.br)

## 📋 Visão Geral - Tópico 01

O Tópico 01 contém atividades introdutórias de JavaScript e ferramentas de
desenvolvimento front-end:

- `site_no_bundler`: aplicação estática em JavaScript, CSS e HTML, sem processo de
	build ou dependências npm.
- `site_vite_vanilla`: aplicação JavaScript executada com Vite, usando produtos
	simulados no próprio projeto.
- `site_vite_vanilla_fetch`: aplicação JavaScript executada com Vite, buscando os
	produtos por uma API HTTP disponível em `http://localhost:8000/api/produtos`.

Embora o nome do repositório faça referência ao projeto da disciplina, os exemplos
deste tópico utilizam JavaScript vanilla para demonstrar os fundamentos antes da
adoção de bibliotecas e frameworks.

## ✅ Pré-requisitos

- Git instalado para clonar o repositório.
- Node.js e npm instalados para os exemplos com Vite.
- Um navegador moderno, como Firefox, Google Chrome ou Microsoft Edge.
- Para `site_vite_vanilla_fetch`, a API de produtos da disciplina de backend deve
	estar em execução na porta `8000`.

Confira as versões instaladas:

```bash
node --version
npm --version
```

## 🚀 Como testar os exemplos

### 1. Exemplo sem bundler

Entre no diretório do projeto e abra o arquivo `index.html` diretamente no navegador:

```bash
cd topico01/atividade/site_no_bundler
```

Também é possível abrir o arquivo pelo explorador de arquivos ou usar a extensão
Live Server do VS Code. Não é necessário executar `npm install`.

### 2. Exemplo Vite com dados simulados

Instale as dependências e inicie o servidor de desenvolvimento:

```bash
cd topico01/atividade/site_vite_vanilla
npm install
npm run dev
```

Abra a URL exibida pelo Vite, normalmente
[http://localhost:5173](http://localhost:5173/).

Para validar a compilação de produção:

```bash
npm run build
npm run preview
```

### 3. Exemplo Vite com consumo de API

Primeiro, inicie a API que fornece os produtos. Depois, em outro terminal:

```bash
cd topico01/atividade/site_vite_vanilla_fetch
npm install
npm run dev
```

Acesse a URL exibida pelo Vite, normalmente
[http://localhost:5173](http://localhost:5173/). Se os produtos não forem exibidos,
verifique se a API está respondendo em
`http://localhost:8000/api/produtos` e se o navegador não bloqueou a requisição por
CORS.

Para validar a compilação de produção:

```bash
npm run build
npm run preview
```

## 🧪 Checklist de teste

- A página é carregada sem erros no console do navegador.
- Os estilos e as imagens dos cards de produtos são exibidos corretamente.
- O exemplo sem bundler funciona abrindo `index.html`.
- Os dois projetos Vite iniciam com `npm run dev`.
- Os dois projetos Vite terminam `npm run build` sem erros.
- No exemplo com `fetch`, a API está disponível e retorna uma lista de produtos.

## 📁 Estrutura do repositório

```text
topico01/
└── atividade/
		├── site_no_bundler/
		├── site_vite_vanilla/
		└── site_vite_vanilla_fetch/
```

Cada projeto possui seu próprio `index.html`, código-fonte, estilos e arquivos de
dados. Os projetos Vite têm um `package.json` independente e devem ser executados
a partir de seus respectivos diretórios.


## 🔗 Links Úteis e Tutoriais

  * **Playlist de vídeos da disciplina**: [Link](https://www.youtube.com/playlist?list=PLYIQM64rTyLLZY2dkmXwKdhWSfn8LUgMW)

## 🛠️ Ferramentas

### NodeJS

  * **Instalação do NodeJS**: [Link](https://nodejs.org/en/download)
  * **NVM (Node Version Manager)**: [Link](https://github.com/nvm-sh/nvm)
  * **FNM (Fast Node Manager)**: [Link](https://github.com/Schniz/fnm)
  * **Chocolatey e NodeJS via NVM para Windows**: [Link](https://blog.logrocket.com/install-node-windows-chocolatey/)

### Vite
  * **Documentação do Vite**: [Link](https://vite.dev/guide/)

-----

### ZSH (Linux/Ubuntu)

  * **ZSH no Linux (Ubuntu)**: [Link](https://pt.linux-console.net/?p=13785#google_vignette)
  * **Tutorial ZSH + Plugins + Power10k Theme no Ubuntu 22.04**: [Link](https://gist.github.com/jonilsonds9/4b017d54876b279c27ce77f116f5d3ca)  
  * **Repositório do OH-MY-ZSH**: [Link](https://github.com/ohmyzsh/)
  * **Power10K ZSH Theme**: [Link](https://github.com/romkatv/powerlevel10k)

-----

### Windows

  * **Tutorial de Instalação do GIT (Use Windows Secure Channel)**: [Link](https://dicasdeprogramacao.com.br/como-instalar-o-git-no-windows/)
  * **Download Git para Windows (Usar Windows Native Secure Channel Library)**: [Link](https://git-scm.com/downloads/win)
  * **OH-MY-POSH para WINDOWS**: [Link](https://ohmyposh.dev/docs/installation/windows)
  * **Tutorial OH-MY-POSH (Versão do ZSH para Windows PowerShell)**: [Link](https://prof-gillgonzales-ifsul.notion.site/Oh-My-Posh-2551037386bf8057a457f2564059dbe1h)

-----

## 🤖 Versionamento de Código

### Git

  * **Git vs SVN**: [Link](https://prof-gillgonzales-ifsul.notion.site/SVN-vs-GIT-2551037386bf80a4b26ec69429777850)
  * **Tutorial de Instalação do Git no Windows**: [Link](https://dicasdeprogramacao.com.br/como-instalar-o-git-no-windows/)
  * **Git e Github - Criação de projetos**: [Link](https://www.freecodecamp.org/portuguese/news/tutorial-de-git-e-github-controle-de-versao-para-iniciantes/)
  * **Git e GitLab - Criação de Projeto**: [Link](https://medium.com/ekode/primeiros-passos-com-git-e-gitlab-criando-seu-primeiro-projeto-89f9001614b0)
  * **Git por Linus Torvalds**: [Link](https://www.youtube.com/watch?v=4XpnKHJAok8)
  * **Git para iniciantes**: [Link](https://www.youtube.com/watch?v=8JJ101D3knE)
  * **Pro Git - Livro Gratuito**: [Link](https://git-scm.com/book/pt-br/v2)

### Dicas de Configuração Git

#### Configurando a chave SSH para o repositório

* **Uso de chaves SSH para acesso ao GitHub**:[Link](https://docs.github.com/pt/enterprise-cloud@latest/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

Para garantir que o Git use a chave SSH correta para o seu repositório, você pode usar o seguinte comando. Isso é especialmente útil se você tiver várias chaves SSH no seu sistema.

```bash
git config core.sshCommand 'ssh -o IdentitiesOnly=yes -i ~/.ssh/NOME_DA_CHAVE -F /dev/null'
```

Substitua `NOME_DA_CHAVE` pelo nome do arquivo da sua chave SSH.

#### Instalação e Configuração no Windows

Ao instalar o Git no Windows, use a opção **HTTPS "Windows Secure Channel library"** para garantir uma configuração mais segura e compatível.

## 📚 Recursos adicionais

- [Documentação do JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Documentação do HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [Documentação do CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Documentação do Vite](https://vite.dev/guide/)
- [Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)
