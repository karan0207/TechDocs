---
sidebar_position: 5
---

# 🛠️ Managing Kubernetes Resources in Civo Kubernetes

Managing Kubernetes resources efficiently is essential for ensuring application performance, scalability, and stability. This guide covers scaling applications, monitoring cluster health, and answering frequently asked questions about managing Kubernetes on Civo.

## 🔄 Scaling Applications

Scaling applications in Kubernetes helps you handle increased traffic, improve fault tolerance, and optimize resource utilization. Kubernetes provides an easy way to scale applications up or down dynamically.

### 📌 Increase the number of replicas

To scale an application up or down, use the following command:

```sh
kubectl scale deployment my-app --replicas=5
```

✅ **What happens?**

- Kubernetes updates the deployment to run **5 replicas** of the application.
- If more resources are required, Kubernetes automatically schedules new pods on available nodes.
- If scaling down, Kubernetes terminates excess pods while ensuring that existing traffic is not disrupted.

### 📌 Verify the updated pod count

Run the following command to confirm the scaling process:

```sh
kubectl get pods
```

🔍 **Expected Output:** A list of pods should now show five instances of `my-app` running. If the number is different, check resource limits or pending scheduling issues.

## 📊 Monitoring Cluster Health

Proactively monitoring cluster health is crucial for ensuring smooth application performance and quick troubleshooting. Kubernetes provides various commands to inspect different components of the cluster.

### 🖥️ View all cluster nodes

Nodes are the worker machines that run your application pods. To check the nodes in your cluster and their statuses, use:

```sh
kubectl get nodes
```

✅ **This command displays all nodes along with their roles and status (e.g., Ready, NotReady, etc.).**

### 🔍 Get detailed information about a specific node

To inspect a specific node and diagnose any potential issues, run:

```sh
kubectl describe node <node-name>
```

✅ **This provides insights into node capacity, running pods, allocated resources, and events such as failures or warnings.**

### 📜 Check application logs

Logs provide crucial information about application errors and runtime behavior. To view logs of a specific pod, use:

```sh
kubectl logs <pod-name>
```

✅ **Use this command to debug application issues, check API responses, and monitor application output.**

For continuously updating logs, use:

```sh
kubectl logs -f <pod-name>
```

✅ **This allows you to follow real-time logs as they are generated.**

##  5️⃣ Interactive Q&A

Here are some frequently asked questions about managing Kubernetes on Civo:

### ❓ How do I delete a Kubernetes cluster in Civo?

✅ If you no longer need a cluster and want to free up resources, remove it using:

```sh
civo kubernetes remove my-cluster --yes
```

⚠️ **This permanently deletes your cluster, including all workloads, storage, and configurations. Ensure you back up important data before proceeding.**

### ❓ Can I install Helm on Civo Kubernetes?

✅ Helm is a package manager for Kubernetes that simplifies application deployment. Install it using:

```sh
curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 | bash
```

Then, install a Helm chart (e.g., Nginx):

```sh
helm install my-chart stable/nginx
```

✅ **Helm enables you to manage Kubernetes applications efficiently by using pre-configured Helm charts.**

### ❓ How do I update my application deployment?

✅ When you need to modify an application (e.g., change the container image or environment variables), update the deployment YAML file and apply the changes using:

```sh
kubectl apply -f my-app.yaml
```

✅ **This updates the deployment without downtime by performing a rolling update. Kubernetes gradually replaces old pods with new ones while ensuring availability.**

### ❓ How do I roll back to a previous version of my application?

✅ If a deployment update causes issues, you can easily roll back to a previous version:

```sh
kubectl rollout undo deployment my-app
```

✅ **This command restores the last stable deployment version.**

To check previous revisions, use:

```sh
kubectl rollout history deployment my-app
```

🔍 **This lists all previous deployment versions, allowing you to revert to a specific one if needed.**

## 🎯 Conclusion

Civo Kubernetes is an excellent choice for developers who need a fast, cost-effective, and easy-to-use Kubernetes solution. With its developer-friendly CLI, lightweight K3s-based infrastructure, and simple deployment options, managing Kubernetes resources has never been easier! 

### ✅ Key Takeaways:

- Scale applications up or down to meet demand efficiently.
- Monitor cluster health using `kubectl` commands.
- Use Helm for easier application management.
- Rollback deployments in case of failures.

🔗 **Explore more:** [Civo Kubernetes Documentation](https://www.civo.com/docs) 📚
