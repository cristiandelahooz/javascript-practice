FROM node:22-alpine
WORKDIR /app
COPY package.json ./
COPY pnpm*.yaml ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
CMD ["node", "."]