# Docker & Kubernetes Assessment Report

> [!TIP]
> Use this document to explain your design choices, optimisations and any challenges you faced.

## Dockerfile

<!-- TODO: (Optional) Explain any specific goals or design decisions -->
Hello!

I initally went for a very standard dockerfile. I have very little experience with any of these tools and my understanding now is still low.

Once I had a basic dockerfile, I noticed how my laptop got loud and hot everytime the container was run and so wanted to reduce the docker image. I went from 2 gb~ to 400 mb~.

I modified the server.ts file in the src folder because I didn't know how to view the localhost website to check if the api returned the data correctly. I changed the localhost to 0.0.0.0 to be more open so I could use port 3000.

Overall, it was challenging to conceptually understand all the dockerfile commands and their purpose but I learnt a lot! I did later look into interesting techniques to help reduce docker images through layer caching, multi stage builds and removing unnecessary files but wasn't able to implement them properly for now :(

### Forked repository

<!-- TODO: If you submitted your changes to a fork, replace with your forked repository -->
`https://github.com/Siya-Yuan/2026-recruitment-technical-assessment`

## Kubernetes
I have installed kubetcl and minikube but haven't started as the subcom deadline is tonight :O

May attempt later!

I apologise for my poor technical application submission! I originally was set on only completing the frontend task and the respective subcoms for it. However, after hearing more about platforms in the DevSoc training program, I thought it sounded super cool and different! 
<!-- TODO: Document your process for deploying Navidrome on Kubernetes -->
