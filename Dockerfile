# --- 1st: Build the static files ---
FROM node:latest AS build
WORKDIR /client
COPY client/package*.json ./
RUN npm ci
COPY client/ ./
RUN npm run build

# --- 2nd: Prepare nginx with static files ---
FROM nginx:latest AS prod
COPY --from=build /client/dist /usr/share/nginx/html/

# Optionally expose port 80
EXPOSE 80

# Start nginx (default CMD is fine)