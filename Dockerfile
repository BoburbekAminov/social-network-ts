FROM node:16.16

WORKDIR /network

COPY . /network

EXPOSE 3000

RUN npm i

CMD ["npm", "start"]