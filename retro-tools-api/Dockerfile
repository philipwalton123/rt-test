FROM node:14.3-slim AS build
WORKDIR /api-test
COPY package.json .
RUN npm install --production

FROM node:14.3-slim
WORKDIR /api-test
COPY --from=build /api-test .
COPY index.js RDSConnect.js pgconfig.json ./
EXPOSE 3000
CMD ["npm", "start"]