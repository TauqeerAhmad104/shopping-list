pipeline {
    agent {
        kubernetes {
            label 'jenkins-agent'
            defaultContainer 'jnlp'
            yaml """
            apiVersion: v1
            kind: Pod
            spec:
              serviceAccountName: jenkins  # Ensure this service account exists and has the required permissions
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
                  - dockerd-entrypoint.sh
                  tty: true
                  env:
                    - name: DOCKER_TLS_CERTDIR
                      value: ""
                  securityContext:
                    privileged: true  # Required to run Docker-in-Docker
                  volumeMounts:
                    - name: dockersock
                      mountPath: /var/run/docker.sock
              volumes:
                - name: dockersock
                  hostPath:
                    path: /var/run/docker.sock
                    type: Socket
            """
        }
    }
    stages {
        stage('Build') {
            steps {
                container('docker') {
                    sh 'docker build -t my-image .'
                }
            }
        }
        stage('Push') {
            steps {
                container('docker') {
                    withDockerRegistry([credentialsId: 'docker-hub-credentials', url: 'https://index.docker.io/v1/']) {
                        sh 'docker push my-image:latest'
                    }
                }
            }
        }
    }
}
