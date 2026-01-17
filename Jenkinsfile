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
                sh 'npm ci' // Faster, cleaner install in CI environments
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                withEnv(["CI=true"]) {  // Treats this as a CI environment for npm scripts
                    sh '''
                    npm install -g gh-pages
                    gh-pages -d dist
                    '''
                }
            }
        }
    }
}
