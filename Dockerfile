FROM node:14.17.6-alpine3.13

WORKDIR /app

ENV GENERATE_SOURCEMAP=false

WORKDIR /app/frontend
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

WORKDIR /app
RUN npm install -g serve rimraf
RUN cp -R ./frontend/build ./dist
RUN rimraf frontend

CMD ["serve","dist"]