# Utilizar Node.js como base
FROM node:18-alpine

# Instalar la última versión disponible de Chromium
RUN apk add --no-cache chromium

# Verificar la versión instalada
RUN chromium-browser --version

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos del proyecto
COPY package*.json ./
COPY . .

# Instalar dependencias sin conflictos
ENV PUPPETEER_SKIP_DOWNLOAD=true
RUN npm install --legacy-peer-deps

# Construir el proyecto de NestJS
RUN npm run build

# Exponer el puerto de la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "dist/main.js"]
