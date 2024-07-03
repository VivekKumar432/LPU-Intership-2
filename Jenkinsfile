pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM',
                          branches: [[name: '*/main']],
                          userRemoteConfigs: [[url: 'https://github.com/VivekKumar432/LPU-Intership-2.git']]
                ])
            }
        }
        stage('Build') {
            steps {
                script {
                    // Using PowerShell for Windows
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Using PowerShell for Windows
                    bat 'npm test'
                }
            }
        }
        stage('Docker Build') {
            steps {
                script {
                    // Using PowerShell for Windows
                    bat 'docker build -t your-docker-username/your-app-name:latest .'
                }
            }
        }
        stage('Docker Push') {
            steps {
                script {
                    // Push Docker image to registry
                    withCredentials([string(credentialsId: 'dockerhub-credentials-id', variable: 'DOCKERHUB_PASSWORD')]) {
                        bat 'echo %DOCKERHUB_PASSWORD% | docker login -u your-docker-username --password-stdin'
                        bat 'docker push your-docker-username/your-app-name:latest'
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Using PowerShell for Windows
                    bat 'docker-compose down'
                    bat 'docker-compose up -d'
                }
            }
        }
    }
}
