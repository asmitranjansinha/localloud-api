# 🌍 LocalLoud API

LocalLoud API is the backend service for the **LocalLoud** mobile application, built with **NestJS**. It provides the necessary APIs for community-driven discussions, voting systems, and user authentication. This project is designed to work seamlessly with the [LocalLoud Flutter frontend](https://github.com/asmitranjansinha/localloud).  

---

## ✨ Features  

- **🗣 Community-Based Discussions** - APIs to create, read, update, and delete community posts.  
- **🗳 Voting System** - APIs to create and participate in polls.  
- **🔑 User Authentication** - Secure user authentication and authorization using JWT.  
- **📡 RESTful APIs** - Clean and well-structured RESTful endpoints.  
- **🧩 Modular Architecture** - Organized codebase with a modular structure for scalability.  

---

## 🛠 Tech Stack  

- **🚀 Framework**: NestJS  
- **📦 Package Manager**: Yarn  
- **💾 Database**: MySQL & SQLite3  
- **🔐 Authentication**: JWT (JSON Web Tokens)  
- **⚙ ORM**: TypeORM  

---

## 📂 Project Structure  

```
📦 localloud-api
 ┣ 📂 src
 ┃ ┣ 📂 modules
 ┃ ┃ ┗ 📂 example
 ┃ ┃ ┃ ┣ 📄 example.controller.ts
 ┃ ┃ ┃ ┣ 📄 example.service.ts
 ┃ ┃ ┃ ┗ 📄 example.module.ts
 ┃ ┣ 📄 app.controller.ts
 ┃ ┣ 📄 app.module.ts
 ┃ ┗ 📄 main.ts
 ┣ 📂 test
 ┃ ┗ 📄 (test files)
 ┣ 📄 .env
 ┣ 📄 .gitignore
 ┣ 📄 package.json
 ┣ 📄 yarn.lock
 ┗ 📄 README.md
```

---

## 📦 Dependencies  

This project uses the following key dependencies:  

### 🔧 Core Dependencies  

- `@nestjs/core` - Core framework for building scalable server-side applications.  
- `@nestjs/common` - Common utilities and decorators for NestJS.  
- `@nestjs/platform-express` - Express platform for NestJS.  
- `typeorm` - ORM for database interactions.  
- `mysql2` & `sqlite3` - MySQL & SQLite3 database support.  
- `bcrypt` - Secure password hashing.  
- `jsonwebtoken` - JSON Web Token (JWT) for authentication.  

### 🛠 Development Dependencies  

- `@nestjs/cli` - NestJS command-line interface.  
- `@nestjs/schematics` - Schematics for scaffolding NestJS projects.  
- `typescript` - TypeScript support.  
- `jest` - Testing framework.  
- `eslint` & `prettier` - Linting and code formatting.  

To install dependencies, run:  

```bash
yarn install
```

---

## 🚀 Installation  

1. **Clone the repository:**  

   ```bash
   git clone https://github.com/yourusername/localloud-api.git
   cd localloud-api
   ```

2. **Install dependencies:**  

   ```bash
   yarn install
   ```

3. **Set up environment variables:**  

   Create a `.env` file in the root directory and add the necessary environment variables (e.g., database connection string, JWT secret).  

   Example `.env` file:  

   ```env
   DATABASE_URL=your_database_url
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the application:**  

   ```bash
   yarn start
   ```

5. **Access the API:**  

   The API will be available at `http://localhost:3000/api`.  

---

## 🏗 Available Scripts  

These scripts help in development, testing, and production:  

| Command                  | Description                                 |
|--------------------------|---------------------------------------------|
| `yarn start`            | 🚀 Starts the application                   |
| `yarn start:dev`        | 🔄 Starts the app in watch mode for development |
| `yarn start:debug`      | 🐞 Starts the app in debug mode             |
| `yarn start:prod`       | ⚡ Runs the compiled app in production mode  |
| `yarn build`           | 🏗 Builds the project                        |
| `yarn lint`            | 🧹 Lints the code with ESLint                 |
| `yarn format`          | 🎨 Formats the code using Prettier           |
| `yarn test`            | 🧪 Runs all tests using Jest                 |
| `yarn test:watch`      | 👀 Runs Jest in watch mode                   |
| `yarn test:cov`        | 📊 Generates a test coverage report         |
| `yarn test:debug`      | 🛠 Runs Jest with debugging enabled          |
| `yarn test:e2e`        | 🔎 Runs end-to-end tests                     |

---

## 🤝 Contributing  

Contributions are welcome! Follow these steps to contribute:  

1. **Fork the repository.**  
2. **Create a new branch:**  

   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. **Commit your changes:**  

   ```bash
   git commit -m '✨ Add feature XYZ'
   ```

4. **Push to the branch:**  

   ```bash
   git push origin feature/YourFeatureName
   ```

5. **Open a pull request.**  

---

## 📜 License  

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.  

---