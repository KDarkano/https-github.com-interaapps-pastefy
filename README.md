<p align="center"><img src="/frontend/src/assets/logo.png" width="200"></p>

Pastefy is an open source alternative to Gists or Pastebin.<br>
You want to share some code to your friends or just save it for yourself? Just paste it.

<img src="./.github/screenshots/vid.gif" width="100%" >
## Features
- Raw-Preview
- Copy Button
- Fork
- An API ([Docs](https://github.com/interaapps/pastefy/wiki/API-v2))
- Log in
  - Folders 
  - See your created pastes
  - delete created pastes

# Overview
- [Screenshots](#Screenshots)
- [Deploy](#Deploy)
  - [Docker](#Deploy)
  - [Docker-Compose](#Docker-Compose)
  - [Custom Docker-Compose (Using Docker-Hub)](#custom-docker-compose-using-docker-hub)
  - [Kubernetes](#Kubernetes)
  - [Container-Less](#Container-Less)
- [Develop](#Develop)
- [API](#API)

# Screenshots
<img src="./.github/screenshots/home.png" width="49%" >
<img src="./.github/screenshots/paste.png" width="49%" >
<img src="./.github/screenshots/new.png" width="49%" >
<img src="./.github/screenshots/fullscreen.png" width="49%" >

## Deploy
### Docker
DockerHub: https://hub.docker.com/r/interaapps/pastefy
```bash
docker run -p 8080:80 \
      --env HTTP_SERVER_PORT=80 \
      --env HTTP_SERVER_CORS="*" \
      --env DATABASE_DRIVER=mysql \
      --env DATABASE_NAME=pastefy \
      --env DATABASE_USER=pastefy \
      --env DATABASE_PASSWORD=pastefy \
      --env DATABASE_HOST=host \
      --env DATABASE_PORT=3306 \
      --env AUTH_PROVIDER=NONE \
      --env INTERAAPPS_AUTH_KEY= \
      --env INTERAAPPS_AUTH_ID= \
      interaapps/pastefy
```
Or [Pastefy Docker in Host-Mode](https://pastefy.ga/JWLoudTI)

### Docker-Compose
https://github.com/interaapps/pastefy/blob/master/docker-compose.yml
```bash
git clone https://github.com/interaapps/pastefy.git
cd pastefy
docker-compose up
```

### Custom Docker-Compose (Using Docker-Hub)
https://pastefy.ga/Hj9N3bs2
```bash
wget https://pastefy.ga/Hj9N3bs2/raw -O docker-compose.yml
nano docker-compose.yml
docker-compose up
```

### Kubernetes
You can find an example kubernetes file here https://github.com/interaapps/pastefy/blob/master/deployment/prod.yaml. It's made to use with gitlab CI and cert-manager. With some changes you can use it.

### Container-Less
```bash
git clone https://github.com/interaapps/pastefy.git
cd pastefy/frontend
npm run install
npm run build
cd ../backend
mvn clean package
cd ..
cp .env.example .env
nano .env
java -jar backend/target/backend.jar
```
Using intelliJ? Look at [Develop](#Develop)

## Develop
#### Build frontend into the backend
```bash
# You might want to build the frontend
cd frontend
npm build prod
```

#### Frontend
Run the backend (On port 1337) and then go to the frontend and run
```bash
cd frontend
npm run serve
```

We are using IntelliJ Idea and Visual Studio code.

### API
You can find the docs of the Pastefy-Rest-APi here: [Github Wiki](https://github.com/interaapps/pastefy/wiki/API-v2)