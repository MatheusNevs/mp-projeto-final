# Projeto T3 - Stack com Next.js, TailwindCSS, Prisma, tRPC, Zod e Cloudinary

## Descrição

Este é um projeto desenvolvido com a **Stack T3**, que combina tecnologias modernas para criar aplicações fullstack escaláveis. O projeto usa **Next.js** para o frontend e backend, com **TailwindCSS** para estilização. **Prisma** é usado para a ORM e gerenciamento de banco de dados, **tRPC** para comunicação eficiente entre frontend e backend, e **Zod** para validação de dados. As imagens são gerenciadas através da plataforma **Cloudinary**. O desenvolvimento segue a abordagem **Test-Driven Development (TDD)**, garantindo a qualidade do código com testes unitários e de integração através do frameworkd de teste **Jest**..

## Tecnologias Utilizadas

- **Next.js** - Framework React para renderização no lado do servidor (SSR) e geração de sites estáticos (SSG).
- **TailwindCSS** - Framework utilitário para estilização.
- **Prisma** - ORM para gerenciamento de banco de dados.
- **tRPC** - RPC type-safe para comunicação entre cliente e servidor.
- **Zod** - Biblioteca de validação e parsing de dados.
- **Cloudinary** - Plataforma de gerenciamento e otimização de imagens.
- **Jest** - Framework de testes para desenvolvimento orientado a testes (TDD).

## Funcionalidades

- Acompanhamento geográfica de doações feitas.
- Criação e autenticação de usuários.
- Upload e gerenciamento de imagens com Cloudinary.
- API segura e validada com tRPC e Zod.
- Conexão com banco de dados via Prisma.

## Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
- [Yarn](https://classic.yarnpkg.com/en/docs/install) ou [pnpm](https://pnpm.io/pt/)
- Conta no [Cloudinary](https://cloudinary.com/) para gerenciamento de imagens
- Banco de dados PostgreSQL/MySQL ou SQLite (configurável via Prisma)

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

```bash
DATABASE_URL="sua_url_do_banco_de_dados"
CLOUDINARY_URL="sua_url_cloudinary"
```

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/MatheusNevs/mp-projeto-final
```

2. Navegue até o diretório do projeto:

```bash
cd nome-do-projeto
```

3. Instale as dependências:

```bash
yarn install
```

ou

```bash
pnpm install
```

4. Configure o Prisma para se conectar ao seu banco de dados:

```bash
npx prisma generate
```

5. Execute as migrações para criar as tabelas no banco de dados:

```bash
npx prisma migrate dev
```

## Desenvolvimento

Para iniciar o ambiente de desenvolvimento, execute:

```bash
yarn dev
```

ou

```bash
pnpm run dev
```

O projeto será executado em `http://localhost:3000`.

## Build

Para compilar o projeto para produção, utilize:

```bash
yarn build
```

ou

```bash
pnpm run build
```

Isso gerará os arquivos otimizados na pasta `.next`.

## Executando os Testes

O projeto foi desenvolvido seguindo a abordagem **TDD**. Os testes se encontram na pasta `src/test`. Para rodar os testes:

1. **Testes Unitários e de Integração:**

   Execute os testes com:

   ```bash
   yarn test
   ```

   ou

   ```bash
   pnpm test
   ```

   Para executar os testes no modo observação, utilize:

   ```bash
   yarn test:watch
   ```

   ou

   ```bash
   pnpm run test:watch
   ```

## Licença

Este projeto está licenciado sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
