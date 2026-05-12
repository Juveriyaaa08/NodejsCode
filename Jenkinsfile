pipeline {
    agent any

    triggers {
        pollSCM('H/2 * * * *')
    }

    environment {
        NODEJS_HOME = tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        PATH = "${env.NODEJS_HOME};${env.PATH}"
        DEPLOY_DIR = 'C:\\jenkins-deploy\\my-app'
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning Repository...'
                git branch: 'main', 
                    credentialsId: 'github-token-id', 
                    url: 'https://github.com/Juveriyaaa08/NodejsCode.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }

        stage('Deploy to Local Server') {
            steps {
                echo 'Deploying...'
                bat """
                    if not exist "${DEPLOY_DIR}" mkdir "${DEPLOY_DIR}"
                    xcopy /E /I /Y . "${DEPLOY_DIR}"
                    cd "${DEPLOY_DIR}"
                    npm install
                    pm2 restart my-app || pm2 start app.js --name my-app
                """
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline successfully completed!'
        }
        failure {
            echo 'Pipeline failed. Check Console Output.'
        }
    }
}