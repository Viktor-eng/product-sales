FROM node:16-bullseye-slim AS node-build
RUN mkdir /app
WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install
COPY . .
RUN npm run build

FROM node:19.6.0

RUN npm i -g serve

WORKDIR /home/app

COPY --from=node-build /app/build/ ./build

CMD ["serve", "-s", "build", "-l", "5000"]

EXPOSE 5000