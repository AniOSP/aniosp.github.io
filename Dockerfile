FROM node:18.4.0-alpine3.16

WORKDIR /app
COPY .output /app
EXPOSE 3000
CMD ["node", "/app/server/index.mjs"]
