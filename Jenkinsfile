pipeline {
    agent {
        kubernetes {
            label 'jenkins-agent'
            yaml """
            apiVersion: v1
            kind: Pod
            spec:
              containers:
                - name: docker
                  image: docker:19.03.12
                  command:
                  - cat
                  tty: true
                  volumeMounts:
                    - name: docker-sock
                      mountPath: /var/run/docker.sock
              volumes:
                - name: docker-sock
                  hostPath:
                    path: /var/run/docker.sock
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
                withDockerRegistry([ credentialsId: 'docker-hub-credentials', url: '' ]) {
                    sh 'docker push my-image:latest'
                }
            }
        }
    }
}
