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
                    bat
