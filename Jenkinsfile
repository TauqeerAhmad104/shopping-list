pipeline {
    agent {
        kubernetes {
            label 'jenkins-agent'
            yaml """
            apiVersion: v1
            kind: Pod
            spec:
              containers:
                - name: jnlp
                  image: jenkins/inbound-agent:latest
                  workingDir: /home/jenkins/agent
                  command:
                  - cat
                  tty: true
                - name: docker
                  image: docker:19.03.12-dind
                  workingDir: /home/jenkins/agent
                  command:
                  - cat
                  tty: true
                  env:
                    - name: DOCKER_TLS_CERTDIR
                      value: ""
              serviceAccountName: jenkins
            """
        }
    }
    stages {
        stage('Build') {
            steps {
                container('docker') {
                    sh '''
                    #!/bin/sh
                    docker build -t my-image .
                    '''
                }
            }
        }
        stage('Push') {
            steps {
                container('docker') {
                    withDockerRegistry([credentialsId: 'docker-hub-credentials', url: '']) {
                        sh '''
                        #!/bin/sh
                        docker push my-image:latest
                        '''
                    }
                }
            }
        }
    }
}
