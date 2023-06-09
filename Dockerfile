FROM node:20
WORKDIR /api/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
RUN npm run build
CMD ["npm", "run", "start:prod"]