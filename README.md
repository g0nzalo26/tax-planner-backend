# 🧾 Tax Planner - Backend

Este es el backend de **Tax Planner**, una API construida con **Node.js** y **Express** pensada para gestionar planes tributarios de manera eficiente y segura. 
Este repositorio forma parte de una aplicación completa enfocada en ayudar a usuarios a planificar y registrar su carga tributaria.

## 🚀 Características principales

- 📁 API RESTful estructurada y escalable.
- 🔐 Autenticación con JWT.
- 🧑‍💼 Gestión de usuarios.
- 📊 Registro de ingresos y gastos.
- 🔧 Arquitectura modular con controladores y rutas separadas.
- 🌐 Conexión a base de datos MongoDB.

## 🛠️ Tecnologías utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- dotenv
- bcryptjs
- jsonwebtoken
- cors


## ⚙️ Instalación y ejecución local (CMD)

# 1. Clona el repositorio
git clone https://github.com/g0nzalo26/tax-planner-backend.git
cd tax-planner-backend

# 2. Instala dependencias
npm install

# 3. Crea un archivo .env basado en .env.example
cp .env.example .env

- PORT= Puerto a elección
- MONGODB_CNN= mongodb+srv://<usuario>:<contraseña>@<nombre-del-cluster>.mongodb.net/<nombre-de-tu-base-de-datos>?retryWrites=true&w=majority
- SECRETORPRIVATEKEY= Clave Secreta Ejemplo
- CLOUDINARY_URL= cloudinary://<api_key>:<api_secret>@<cloud_name>

# 4. Ejecuta el servidor
npm run dev

