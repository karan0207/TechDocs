---
sidebar_position: 4
---

# Deploying Applications on Civo Kubernetes

Deploying applications in Kubernetes allows you to easily manage, scale, and maintain your workloads. In this guide, we will walk through deploying a simple **Nginx web server** on Civo Kubernetes. We will also explore key concepts behind the deployment process and why Kubernetes makes application management easier.

---

## 🏗️ Understanding Kubernetes Deployments  

A Deployment in Kubernetes helps manage and maintain a set of application instances. It ensures the correct number of replicas are running and allows for easy updates or rollbacks. Kubernetes takes care of:  

✅ **Automatic Scheduling** – Distributes workloads efficiently across cluster nodes.  
✅ **Self-Healing** – Restarts failed pods automatically.  
✅ **Scaling** – Easily scale applications up or down.  
✅ **Rolling Updates** – Deploy new versions with zero downtime.  

---

## 📌 Prerequisites  

Before you begin, ensure you have:  

- ✅ A **Civo account** – [Sign up here](https://www.civo.com/) 🎟️  
- ✅ **Civo CLI** installed – [Installation guide](https://www.civo.com/docs) 🔧  
- ✅ **kubectl** installed – [Install kubectl](https://kubernetes.io/docs/tasks/tools/) 🖥️  
- ✅ **A running Kubernetes cluster** – If you haven’t set up a cluster yet, follow [this guide](#) to create one.  

---

## 🚀 Deploying a Simple Application  

Let’s deploy **Nginx**, a popular web server, on Civo Kubernetes.  

### 1️⃣ Create a Deployment YAML File  

Kubernetes uses **YAML configuration files** to define applications. Create a file called `my-app.yaml` and add the following content:  

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-container
        image: nginx:latest
        ports:
        - containerPort: 80
```

📌 Explanation:

Defines a Deployment named my-app.

Runs 2 replicas of the application to ensure high availability.

Uses the latest Nginx image from Docker Hub.

Opens port 80 to allow traffic to reach the application.

Ensures automatic rescheduling of pods if any instance fails.



### 2️⃣ Apply the Deployment
Run the following command to create the deployment in Kubernetes:
```
sh
Copy
Edit
kubectl apply -f my-app.yaml
```
✅ What happens here?

Kubernetes reads the YAML file and creates a Deployment object.

It schedules two pods (containers) across available nodes in your cluster.

The Deployment ensures that two replicas of Nginx remain running at all times.

### 3️⃣ Verify the Deployment
To check if the pods are running successfully, execute:
```
kubectl get pods
```
🔍 Expected Output:
```
NAME                          READY   STATUS    RESTARTS   AGE
my-app-6b9dc6b87d-v8x9p       1/1     Running   0          10s
my-app-6b9dc6b87d-lm2cq       1/1     Running   0          10s
```
If the pods are still initializing, wait a few moments and check again.

### 4️⃣ Expose the Application
To make the application accessible from the internet, create a LoadBalancer service:
```
kubectl expose deployment my-app --type=LoadBalancer --port=80
```
🌍 Explanation:

Creates a Service that allows external traffic to reach the my-app deployment.

The LoadBalancer type ensures that the application gets a publicly accessible IP address.

Traffic is automatically balanced across all running replicas of the application.

### 5️⃣ Get the Service URL
Run the following command to retrieve the external IP of your application:

```
kubectl get svc
```
🔎 Expected Output:

```
NAME         TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)        AGE
my-app       LoadBalancer   10.43.210.1      192.168.1.100   80:32567/TCP   2m
```
Once the EXTERNAL-IP is assigned, you can access your app in a browser:

```
http://<EXTERNAL-IP>
```
📌 If the external IP is ```<pending>```, wait a few minutes and try again.

🔄 Scaling the Application
One of the key benefits of Kubernetes is easy scaling. You can increase or decrease the number of replicas running your application with a single command:

```
kubectl scale deployment my-app --replicas=5
```
✅ This updates your deployment to run five instances instead of two, ensuring higher availability and better traffic handling.

To verify the change, run:

```
kubectl get pods
```
You should now see five running pods instead of two.

## 🎯 Why Use Kubernetes for Deployment?
Kubernetes provides several advantages for deploying and managing applications:

✅ Self-Healing – Automatically restarts failed containers to maintain availability. \
✅ Scalability – Easily increase or decrease the number of running instances. \
✅ Load Balancing – Distributes traffic evenly between application replicas. \
✅ Rolling Updates – Deploy updates without downtime. \
✅ Resource Efficiency – Optimizes CPU and memory usage across nodes. 

