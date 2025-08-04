# Basic Task Manager App using AWS, Docker, Kubernetes and Terraform for Learning

## 🎯 Learning Objectives

This project will teach you:
- **Containerization**: Docker with multi-stage builds
- **Orchestration**: Kubernetes deployment and management
- **Cloud Infrastructure**: AWS services (ECS, RDS, ALB, VPC)
- **Infrastructure as Code**: Terraform for AWS resource management
- **CI/CD**: GitHub Actions for automated deployment

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Database      │
│   (React.js)    │◄──►│   (Node.js)     │◄──►│   (PostgreSQL)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Kubernetes Cluster                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│  │ Frontend    │  │ Backend     │  │ Database    │            │
│  │ Pod         │  │ Pod         │  │ Pod         │            │
│  └─────────────┘  └─────────────┘  └─────────────┘            │
└─────────────────────────────────────────────────────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                        AWS Infrastructure                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│  │ Application │  │ ECS Service │  │ RDS         │            │
│  │ Load        │  │             │  │ Instance    │            │
│  │ Balancer    │  │             │  │             │            │
│  └─────────────┘  └─────────────┘  └─────────────┘            │
└─────────────────────────────────────────────────────────────────┘
```

## 📚 Learning Path

1. **Local Development**: Run the app locally to understand the codebase
2. **Docker**: Containerize the application
3. **Kubernetes**: Deploy to local Kubernetes cluster
4. **AWS**: Deploy to AWS using Terraform
5. **CI/CD**: Set up automated deployment pipeline
s
## 🛠️ Technologies Used

- **Frontend**: React.js, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: SQLite
- **Security**: bcrypt, jsonwebtoken
- **Containerization**: Docker
- **Orchestration**: Kubernetes
- **Cloud**: AWS (ECS, RDS, ALB, VPC, IAM)
- **IaC**: Terraform
- **CI/CD**: GitHub Actions

## 📖 Documentation

- [Local Development Guide](docs/local-development.md)
- [Docker Setup Guide](docs/docker-setup.md)
- [Kubernetes Deployment Guide](docs/kubernetes-deployment.md)
- [AWS Infrastructure Guide](docs/aws-infrastructure.md)
- [Terraform Configuration Guide](docs/terraform-config.md)