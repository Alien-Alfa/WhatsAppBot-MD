FROM node:lts-buster

RUN git clone https://github.com/Alien-alfa/WhatsAppBot-MD /root/AlienAlfa
WORKDIR /root/AlienAlfa/

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*


RUN npm i -g heroku

COPY package.json .

RUN npm install

COPY . .

CMD ["node", "."]
