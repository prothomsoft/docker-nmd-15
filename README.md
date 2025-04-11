1. M1 MAC support for linux/amd64 platform `docker buildx build --platform linux/amd64 -t nextjs-docker-dev . --load`
1. Run your container: `docker run -p 3000:3000 nextjs-docker-dev`
1. Save image `docker save -o nextjs-docker-dev.tar nextjs-docker-dev`
1. Load image `docker load -i nextjs-docker-dev.tar`

Other commands: 
`docker-compose stop`
`docker-compose down`
`docker images`
`docker rmi IMAGE ID`
`docker load -i nextjs-docker-dev.tar`
`docker-compose up -d`

1. Build your container: `docker build -t backend-docker .`.
1. Run your container: `docker run -p 5000:5000 backend-docker`.
1. Save image `docker save -o backend-docker.tar backend-docker`
1. Load image `docker load -i backend-docker.tar`