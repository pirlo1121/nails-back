# FROM node:18
# WORKDIR /app.js
# COPY package*.json ./
# COPY . .

# RUN npm install
# RUN npm install bcrypt
# EXPOSE 3000
# CMD ["npm", "run","dev","./bin/www"]

# Usar una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo en la imagen
WORKDIR /usr/src/app

# Copiar los archivos de la aplicación al directorio de trabajo
COPY package*.json ./

# Instalar las dependencias de la aplicación
RUN npm install
RUN npm install bcrypt

# Copiar el resto de los archivos de la aplicación
COPY . .

# Exponer el puerto en el que la aplicación se ejecuta
EXPOSE 3000

# Comando para ejecutar la aplicación cuando se inicie el contenedor
CMD ["npm", "run", "dev"]
