# Etapa de build
FROM node:22-alpine AS builder

WORKDIR /usr/src/app

# Copia apenas os arquivos essenciais primeiro (para cache)
COPY ./app/package.json ./

# Instala as dependências (dev + prod)
RUN yarn install || npm install

# Copia o restante do código da aplicação
COPY ./app .

# Compila o TypeScript, se existir
RUN if [ -f "tsconfig.json" ]; then yarn build || npx tsc; fi

# Etapa final (produção)
FROM node:22-alpine AS app

ENV NODE_ENV=production
WORKDIR /application

# Copia apenas o necessário da etapa anterior
COPY --from=builder /usr/src/app/package.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/build ./build

EXPOSE 3005

# Comando padrão (ajuste se precisar)
CMD ["node", "build/src/server.js"]
