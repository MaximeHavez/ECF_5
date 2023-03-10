# <span style="color:deepskyblue"><b>LOCALIB</b></span> [ECF 5]

Auteur : Maxime HAVEZ

# <span style="color:violet">Description</span>

Cette application a pour but de gérer la location de véhicule de la société Localib.
L'évaluation de l'ECF 5 porte sur la dockerization du front et back et du bon fonctionnement de la communication entre ces deux entités.

# <span style="color:violet">Pré-requis</span>

- Java 12+
- [Docker](https://docs.docker.com/get-docker/)
- [docker-compose](https://docs.docker.com/compose/install/)
- Un IDE ( [VS CODE](https://code.visualstudio.com/) de preférence)
- [Postman](https://www.postman.com/) (pour vérifier les requêtes)

## <span style="color:orange"><b>Installation</b></span>

### <span style="color:orange">Installation de la base de données</span>

Dans un terminal, exécutez la commande suivante avec Docker de lancé:
```bash
docker-compose up -d
```

Cette installation lancera la dockerization du projet en créant la base de données en Mongo, le Back-end en Java avec une image en openJdk version 18 et le Front-end avec une image en node sur un OS alpine.

### <span style="color:orange">Utilisation de l'application</span>

L'application est accessible à l'adresse suivante: [http://localhost:3000](http://localhost:3000)<br>
Les requêtes Postman sont disponible dans la documentation des fonctions du back-end.