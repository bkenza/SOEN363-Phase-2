# SOEN363-Phase-2

## Objective 🎯
This repo was created for the second phase of our Data Systems project. 

## Team 👥
| Name          | Github        |
| ------------- |:-------------:|
| Kenza Boulisfane | bkenza |
| Firas Sawan | firassawan |

## Technologies 💻
* MongoDB

## Initial Environment Setup

1. Open a terminal window and start Docker using the command: 
`docker-compose up`

2. Get the docker Container ID (for port 27017) using the command: 
`docker ps`

3. Connect docker to MongoDB using the command: 
`docker exec -it <CONTAINER_ID> bash`

4. In your terminal window cd into the scripts folder of the project and import the dataset using the command: 
`./mongoseed.sh`
 
Note: if you encounter a “permission denied message here, please use the following command: 
`chmod +x ./mongoseed.sh`

5. Wait until the importation is done and then head to http://localhost:8085/.
