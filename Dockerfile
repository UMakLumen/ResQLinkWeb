# Stage 1: Build the app using Bun
FROM oven/bun:latest AS builder

WORKDIR /app

# copy project files (including bun.lockb)
COPY . .

# install deps using bun and build
RUN bun install --frozen-lockfile
RUN bun run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# copy built static files from the builder stage (Vite outputs to /app/dist)
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]