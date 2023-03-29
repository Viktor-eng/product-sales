FROM node:19.6.0

RUN npm i -g serve

WORKDIR /home/app

COPY build .

CMD ["serve", "-s", "build", "-l", "5000"]

EXPOSE 5000
