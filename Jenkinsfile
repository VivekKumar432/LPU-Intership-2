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
                    // Install dependencies and build the application
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Run tests
                    sh 'npm test'
                }
            }
        }
        stage('Docker Build') {
            steps {
                script {
                    // Build Docker image
                    sh 'docker build -t your-docker-username/your-app-name:latest .'
                }
            }
        }
        stage('Docker Push') {
            steps {
                script {
                    // Push Docker image to registry
                    withCredentials([string(credentialsId: 'dockerhub-credentials-id', variable: 'DOCKERHUB_PASSWORD')]) {
                        sh 'echo $DOCKERHUB_PASSWORD | docker login -u your-docker-username --password-stdin'
                        sh 'docker push your-docker-username/your-app-name:latest'
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Deploy using Docker Compose
                    sh 'docker-compose down'
                    sh 'docker-compose up -d'
                }
            }
        }
    }
}
