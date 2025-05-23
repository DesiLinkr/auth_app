# ---- Build Stage ----
FROM node:20-bookworm AS build
WORKDIR /app

COPY pnpm-lock.yaml package.json ./

COPY . .

RUN npm i -g pnpm && pnpm install

RUN pnpm run build


FROM nginx:stable-alpine AS production

# Set Nginx to listen on port 3000
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built app to Nginx public folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose custom port
EXPOSE 3001

CMD ["nginx", "-g", "daemon off;"]
