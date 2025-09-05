pipeline {
    agent {
        docker {
            image 'node:18' // Uses Node.js inside Docker
        }
    }

    stages {
        stage('Check Node Version') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Packages') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run App') {
            steps {
                sh 'npm start' // Or your custom start script
            }
        }
    }
}
