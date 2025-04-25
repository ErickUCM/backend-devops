FROM node:22-alpine AS runner

WORKDIR /usr/app/

#COPY desde-stage  ruta_stage ruta_final
COPY ./dist ./dist
COPY ./node_modules ./node_modules
COPY package*.json ./

EXPOSE 3000

CMD ["node", "dist/index.js"]