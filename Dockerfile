# Estágio de build
FROM oven/bun:1 AS builder

WORKDIR /app
COPY package*.json ./
RUN bun i
COPY . .
RUN bun run build

# ---

# Estágio final (servindo com Nginx)
FROM nginx:1.25-alpine

# Copia os arquivos estáticos do build
COPY --from=builder /app/build /usr/share/nginx/html

# Copia configuração customizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]