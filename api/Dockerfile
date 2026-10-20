FROM node:24-alpine AS builder

WORKDIR /app
COPY ./package*.json ./
RUN apk add --no-cache python3 make g++ \
    && npm install
COPY . .
RUN npm run build

FROM node:24-alpine
WORKDIR /app
COPY ./package*.json ./
RUN apk add --no-cache libstdc++ \
    && apk add --no-cache --virtual .build-deps python3 make g++ \
    && npm install --omit=dev \
    && apk del .build-deps \
    && node -e "const db = require('better-sqlite3')(':memory:'); require('node:assert/strict').equal(db.prepare('SELECT 1 AS value').get().value, 1); db.close();"
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/database ./database

EXPOSE 3000
CMD ["npm", "start"]
