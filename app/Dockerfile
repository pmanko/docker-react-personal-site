FROM node:8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g create-react-app \
                   create-react-native-app \
                   react-native-cli

ENV PATH /usr/lib/node_modules/.bin:$PATH
