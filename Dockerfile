# Stage 1: Build the app
FROM node:21.7.0-alpine AS builder

WORKDIR /app

COPY package.json bun.lockb ./
COPY . .

RUN npm install --frozen-lockfile \
	&& npm audit fix --force
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]