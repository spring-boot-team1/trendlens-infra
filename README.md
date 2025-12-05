# TrendLens Infrastructure

TrendLens 서비스를 위한 Infrastructure as Code (IaC) 저장소입니다.

## 디렉토리 구조

- **`eksctl/`**: AWS EKS 클러스터 설정을 위한 `eksctl` YAML 파일이 위치합니다.
- **`k8s/`**: Kubernetes 리소스 Manifest 파일들이 위치합니다. (Base, API, Worker, Redis, Ingress 등)
- **`helm/`**: Helm Chart 파일들이 위치합니다.
- **`terraform/`**: 추후 도입 예정인 Terraform 설정 파일들이 위치합니다.

> **Note**: `terraform` 폴더는 현재 프로젝트 단계에서는 사용하지 않으며, 추후 확장을 위해 구조만 잡아두었습니다.
