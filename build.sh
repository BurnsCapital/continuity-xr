set -e

#set env vars 
COMMIT_TAG=$(git rev-parse --short HEAD)

if [ "$1" != "" ]; then
    echo "Setting host ip to: " $1
    HOSTIP=$1
else
    echo "Setting host ip to: localhost"
    HOSTIP=localhost
fi

#install deps in folders
echo "Setting up environment..."

cd ./playground
yarn install
yarn bundle

cd ..

# run tests on everything 
echo "Runing tests..."
#npm run test

#build the containers with tags
echo "Building Containers..."
#use build commit tag
docker build -t continuity/playground:$COMMIT_TAG ./playground

#add latest tag
docker build -t continuity/playground: ./playground

#push containers to registery
#do helm stuff

#temp run local
#sudo docker run -d -p 27017:27017 -v ~/data:/data/db mongo

# start backend server
#docker run -d --env MONGO_DB="mongodb://$HOSTIP:27017/GPCTEST" -p 3001:3001 gcp/backend:latest 

#start the client
docker run -d -p 80:80 continuity/playground:latest 

