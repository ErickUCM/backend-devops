pipeline {
    agent any

    stages {
        stage("instalacion de dependencias") {
            agent {
                docker {
                    image "node:22.14.0-bullseye"
                    reuseNode true
                }
            }
            steps {
                sh "npm install"
            }
        }
    }
    
}