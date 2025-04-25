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
            stages {
                stage("install") {
                    steps {
                        sh "npm install"
                    }
                }
                stage("testing") {
                    steps {
                        sh "npm run test"
                    }
                }
                stage("build") {
                    steps {
                        sh "npm run build"
                    }
                }
            }
        }
        stage("quality assurance") {
            agent {
                docker {
                    image "sonarsource/sonar-scanner-cli"
                    reuseNode true
                }
            }
            stages {
                stage("validacion de codigo") {
                    steps {
                        withSonarQubeEnv("sonarqube"){
                            sh "sonar-scanner"
                        }
                    }
                }
            }
        }
        stage("docker build") {
            steps {
                sh "docker build -t backend-devops ."
            }
        }
    }
    
}