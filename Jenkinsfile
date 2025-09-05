pipeline {
    agent {
        docker { image 'node:18' }
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
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                npm install -g gh-pages
                gh-pages -d dist
                '''
            }
        }
    }
}
