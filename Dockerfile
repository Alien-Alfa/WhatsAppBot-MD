FROM node:lts-buster

RUN git clone https://github.com/Alien-alfa/WhatsAppBot-MD /root/AlienAlfa
WORKDIR /root/AlienAlfa/

RUN yarn install --no-audit

RUN apt-get update && apt-get upgrade -y 

RUN npm i -g heroku

// RUN git clone https://github.com/

CMD ["node", "index.js"]
