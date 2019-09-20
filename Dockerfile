FROM node

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

CMD ["yarn", "start"]