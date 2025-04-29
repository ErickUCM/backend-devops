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
                    args "--network=devops-infra_default"
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
                stage("validacion quality gate") {
                    steps {
                        script {
                            def qualityGate = waitForQualityGate() // esperar por el resultado del qualitygate en un endpoint de jenkins, que se gatilla desde sonar via webhook
                            if(qualityGate.status != 'OK'){
                                error "La puerta de calidad ha fallado: ${qualityGate.status}"
                            }
                        }
                    }
                }
            }
        }
        stage("docker build") {
            steps {
                script {
                    docker.withRegistry("http://localhost:8082","nexus-account") {
                        sh "docker build -t backend-devops ."
                        sh "docker tag backend-devops localhost:8082/backend-devops"
                        sh "docker push localhost:8082/backend-devops"
                    }
                }
            }
        }
    }
    
}