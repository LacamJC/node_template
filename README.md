# Guia Completo: Estrutura Modular no Express.js

## 1. Introdução
A estrutura modular no **Express.js** é amplamente utilizada para criar APIs REST e aplicações escaláveis. Diferente do **Express Generator**, essa abordagem melhora a separação de responsabilidades e facilita a manutenção.

Neste guia, você aprenderá a estruturar um projeto Express de forma modular, separando **rotas, controladores, serviços e modelos**.

---

## 2. Criando o Projeto
### Passo 1: Inicializar o projeto
```bash
mkdir meu-projeto && cd meu-projeto
npm init -y
```

### Passo 2: Instalar dependências principais
```bash
npm install express dotenv cors morgan
```

- `express` - Framework para construir APIs.
- `dotenv` - Gerencia variáveis de ambiente.
- `cors` - Permite comunicação entre diferentes origens.
- `morgan` - Middleware para logs HTTP.

---

## 3. Estrutura do Projeto
A estrutura modular recomendada:
```
📂 meu-projeto
 ├── 📂 src
 │    ├── 📂 config       # Configurações gerais (Banco de dados, .env, etc.)
 │    ├── 📂 routes       # Define as rotas da aplicação
 │    ├── 📂 controllers  # Controla a lógica das requisições
 │    ├── 📂 services     # Camada de serviço (Regras de negócio)
 │    ├── 📂 models       # Modelos (Banco de dados, ORM)
 │    ├── 📂 middlewares  # Funções intermediárias
 │    ├── 📂 utils        # Funções auxiliares
 ├── 📜 .env              # Variáveis de ambiente
 ├── 📜 server.js         # Inicialização do servidor Express
 ├── 📜 package.json      # Configurações do Node.js
```

---

## 4. Configuração do Servidor
Crie `server.js` para iniciar o servidor Express.

```javascript
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./src/routes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
```

---

## 5. Configuração de Rotas
Crie `src/routes/index.js` para organizar as rotas.

```javascript
const express = require('express');
const userRoutes = require('./user.routes');
const router = express.Router();

router.use('/users', userRoutes);

module.exports = router;
```

Crie `src/routes/user.routes.js` para definir rotas de usuário.

```javascript
const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

router.get('/', userController.getAllUsers);

module.exports = router;
```

---

## 6. Criando um Controller
Crie `src/controllers/user.controller.js` para manipular requisições.

```javascript
const userService = require('../services/user.service');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
```

---

## 7. Criando um Service
Crie `src/services/user.service.js` para regras de negócio.

```javascript
exports.getAllUsers = async () => {
    return [
        { id: 1, name: 'João' },
        { id: 2, name: 'Maria' }
    ];
};
```

---

## 8. Configuração do .env
No arquivo `.env`, defina variáveis de ambiente:

```env
PORT=3000
DB_NAME=meubanco
DB_USER=root
DB_PASS=senha
DB_HOST=localhost
```

---

## 9. Executando o Projeto
### Passo 1: Iniciar o servidor
```bash
node server.js
```

### Passo 2: Testar a API
Abra o navegador ou use o **Postman** para acessar:
```
GET http://localhost:3000/api/users
```

Resposta esperada:
```json
[
    { "id": 1, "name": "João" },
    { "id": 2, "name": "Maria" }
]
```

---

## 10. Conclusão
Essa estrutura modular é ideal para APIs REST escaláveis, seguindo boas práticas de desenvolvimento. Ela separa bem **rotas, controladores, serviços e modelos**, facilitando a manutenção e expansão do código. 🚀

