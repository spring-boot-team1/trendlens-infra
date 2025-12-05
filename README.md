# TrendLens Infrastructure

TrendLens 서비스를 위한 Infrastructure as Code (IaC) 저장소입니다.

## 디렉토리 구조

- **`cluster/`**: 클러스터 인프라 관련 설정 파일들이 위치합니다.
  - `cluster.yaml`: eksctl 클러스터 정의
  - `nodegroup.yaml`: 워커 노드 정의 (선택)
- **`addons/`**: AWS EKS Add-ons 설정 파일들이 위치합니다.
  - `alb-controller/`: AWS Load Balancer Controller 설정
  - `ebs-csi/`: EBS CSI Driver 설정
  - `namespace.yaml`: 네임스페이스 정의
- **`apps/`**: ArgoCD가 관리할 애플리케이션 Manifest 파일들이 위치합니다.
  - `base/`: 공통 Manifest (API, Worker, Redis, Ingress 등)
  - `dev/`: 로컬 개발 및 테스트 환경용 Overlay
  - `prod/`: 운영 환경용 Overlay (EKS Prod)
- **`argocd/`**: ArgoCD 설치 및 App Project 정의 파일들이 위치합니다.
- **`scripts/`**: 클러스터 관리 및 배포 자동화를 위한 쉘 스크립트들이 위치합니다.

> **Note**: 본 프로젝트는 **ArgoCD**를 사용하여 GitOps 방식으로 배포를 관리하며, `scripts/` 내의 스크립트를 통해 인프라 프로비저닝을 자동화합니다. 
