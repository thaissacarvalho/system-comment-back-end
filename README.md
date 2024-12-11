# System Comment API

A **System Comment API** é uma solução robusta e escalável desenvolvida para gerenciamento de usuários, posts, comentários e curtidas. A API foi projetada para atender as necessidades de sistemas que demandam funcionalidades sociais, como blogs, redes sociais e plataformas de conteúdo interativo.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript para o servidor, conhecido por sua alta performance e escalabilidade.
- **Express**: Framework minimalista e flexível para criação de aplicações web, altamente configurável para construção de APIs RESTful.
- **Swagger**: Documentação interativa da API, facilitando a integração e testes dos endpoints.
- **TypeScript**: Utilização de tipagem estática para garantir maior robustez e qualidade no desenvolvimento.
- **Prisma**: ORM moderno e eficiente para interação com o banco de dados, proporcionando segurança e facilidade nas operações CRUD.
- **dotenv**: Gerenciamento seguro de variáveis de ambiente.
- **Helmet**: Biblioteca para proteger a aplicação com cabeçalhos HTTP, aumentando a segurança contra ataques comuns.
- **CORS**: Controle de acessos e proteção contra requisições não autorizadas de domínios externos.

## 📝 Funcionalidades

A API oferece os seguintes recursos:

### **Usuários**
- **Cadastro, atualização, exclusão e listagem** de usuários.
- Recuperação de informações de usuário por **ID** ou **Username**.

### **Posts**
- **Criação, listagem, exclusão e recuperação** de posts.
- Cada post pode ser associado a um ou mais comentários.

### **Comentários**
- **Criação, listagem, exclusão e recuperação** de comentários.
- Comentários são vinculados a posts específicos, permitindo uma organização hierárquica.

### **Curtidas**
- **Criação e exclusão de curtidas** tanto em posts quanto em comentários, permitindo interações dinâmicas com o conteúdo.

### Estrutura de dados:
- **Usuários**: ID, username, email, etc.
- **Posts**: ID, título, conteúdo, autor, etc.
- **Comentários**: ID, texto, autor, post relacionado.
- **Curtidas**: ID, autor, post ou comentário relacionado.

## 📚 Documentação da API

A documentação interativa, gerada com **Swagger**, está disponível em `/api-docs`. Utilize este endpoint para visualizar, testar e integrar os recursos da API diretamente em seu navegador.

### Exemplos de Endpoints:
- **Listar todos os usuários**: `GET /users`
- **Criar um novo post**: `POST /posts`
- **Recuperar um comentário por ID**: `GET /comments/{id}`

## 🛠️ Configuração e Execução

### Pré-requisitos:
- **Node.js** versão 16+.
- **npm** ou **yarn** como gerenciador de pacotes.
- **Prisma CLI** para gerenciar o banco de dados (`npm install -g prisma`).

### Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/system-comment-api.git

2. Instale as dependências:
    ```bash
    npm install

3. Configure as variáveis de ambiente no arquivo .env:
    ```bash
    PORT=3000
    DOMAIN=http://localhost
    METHOD=GET,POST,PATCH,DELETE

### Rodando a aplicação

1. Ambiente de desenvolvimento:
    ```bash
    npm run dev

2. Ambiente de produção:
    ```bash 
    npm start

## 📂 Estrutura do Projeto
    src/
    ├── app/
    │   ├── controllers/     # Controladores responsáveis pela lógica dos endpoints
    │   ├── docs/            # Documentação Swagger da API
    │   ├── repository/      # Interação com o banco de dados utilizando Prisma
    │   ├── routes/          # Definição das rotas da API
    │   └── services/        # Serviços de lógica de negócios
    ├── infra/
    │   ├── index.js         # Configuração inicial e pontos de entrada da aplicação
    ├── .env                 # Arquivo de variáveis de ambiente
    └── prisma/
        └── schema.prisma    # Esquema do banco de dados com Prisma

## 🛡️ Segurança
- Helmet para proteção com cabeçalhos HTTP.
- Configuração de CORS para permitir apenas domínios e métodos específicos.

## 📖 Próximos Passos
- Implementar autenticação e autorização (JWT).
- Adicionar testes automatizados.
- Melhorar as mensagens de erro.

## 👩‍💻 Contribuição

Este é um projeto de código aberto. Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades! Para contribuir, siga os passos abaixo:

- Faça o fork do repositório.
- Crie uma branch para sua alteração (git checkout -b feature/nome-da-feature).
- Realize suas modificações e faça um commit (git commit -m 'Adicionar nova feature').
- Envie para o repositório remoto (git push origin feature/nome-da-feature).
- Abra um Pull Request explicando suas mudanças.

## 📬 Contato
Para dúvidas ou sugestões, entre em contato com o desenvolvedor principal do projeto:

- Email: thaissa-carvalho@outloook.com
- GitHub: www.github.com/thaissacarvalho