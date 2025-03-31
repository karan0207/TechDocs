---
sidebar_position: 3
---

#  Getting started with Civo Kubernetes  

Civo Kubernetes simplifies the deployment and management of containerized applications. Let’s walk through creating your first cluster while understanding what each step does. 

## 📌 Prerequisites  
Before setting up a cluster, ensure you have:

- ✅ A **Civo account** – [Sign up here](https://www.civo.com/) 🎟️
- ✅ **Civo CLI** – The command-line tool to interact with Civo. [Installation guide](https://www.civo.com/docs) 🔧
- ✅ **kubectl (Kubernetes CLI)** – A tool to manage Kubernetes clusters. [Install kubectl](https://kubernetes.io/docs/tasks/tools/) 🖥️

## 🚀 Deploying Your First Civo Kubernetes Cluster  

### 1️⃣ Log in to Civo CLI  
First, authenticate your Civo CLI with your account:
```sh
civo auth login
```
This command links your CLI to your Civo account, allowing you to create and manage resources.

### 2️⃣ Create a Kubernetes Cluster  
To deploy a new Kubernetes cluster, run:
```sh
civo kubernetes create my-cluster --size g3.k3s.medium --region NYC1
```
- `my-cluster` → The name of your cluster.
- `--size g3.k3s.medium` → Specifies the size of the nodes (more CPU and RAM for larger workloads).
- `--region NYC1` → Selects a specific data center location.

🛠 **What happens here?**
Kubernetes needs underlying machines (nodes) to run workloads. This command provisions virtual machines in the selected region and installs Kubernetes on them. Since Civo uses **K3s**, a lightweight Kubernetes distribution, your cluster is up and running in under **90 seconds**! 🚀

### 3️⃣ Check Your Active Clusters  
To see if your cluster is ready:
```sh
civo kubernetes list
```
📋 **How does this help?**
This command lists all Kubernetes clusters in your Civo account, showing their **status**, **region**, and **node size**. If the cluster is still provisioning, wait a moment before proceeding.

### 4️⃣ Configure kubectl to Use Your Cluster  
To connect `kubectl` with your Civo Kubernetes cluster:
```sh
civo kubernetes config my-cluster --save
```
🔗 **Why is this important?**
- Kubernetes clusters are managed via `kubectl`, but first, it needs access to the cluster’s API server.
- This command **fetches the kubeconfig file**, storing credentials that let `kubectl` securely interact with your cluster.

### 5️⃣ Verify the Cluster is Running  
Confirm that the cluster is active and the nodes are ready:
```sh
kubectl get nodes
```
✅ **Expected Output:** You’ll see a list of worker nodes in the cluster, each marked as `Ready`.

📌 **What does this mean?**
- Each node represents a **virtual machine** running in your Civo cluster.
- If nodes are **not in a Ready state**, they might still be starting up or experiencing issues.

## 🌟 Why Choose Civo Kubernetes?  

Civo Kubernetes stands out with its unique advantages:

✅ **Ultra-Fast Cluster Creation** – Launch Kubernetes in **under 90 seconds**.  \
✅ **Optimized for Simplicity** – No complex setup; get started with minimal effort.  \
✅ **Cost-Effective** – More affordable than AWS, GCP, and Azure.  \
✅ **Built-in App Marketplace** – Deploy popular applications with a single click. 

Now that your cluster is ready, you can start deploying applications and exploring Kubernetes in action! 🎉