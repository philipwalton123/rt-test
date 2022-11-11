FROM --platform=linux/amd64 node:14.3-slim AS build
WORKDIR /reactapp
ADD package.json .
RUN npm install --production

FROM --platform=linux/amd64 node:14.3-slim
WORKDIR /reactapp
COPY --from=build /reactapp .
ADD . .
EXPOSE 3000
CMD ["npm", "start"]