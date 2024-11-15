# React + TypeScript + Vite

## Getting Started with React Project

To get local copy up and running follow these simple example steps.

#### Prerequisites

You need to download and install some tools to run todo-apps-devops

-   #### Docker

    visit docker official installation based on your machine: [Download](https://www.docker.com/products/docker-desktop/)

-   #### Node.js
    visit Node.js official installation based on your machine: [Download](https://nodejs.org/en)

#### Setup

_After donwloading all prequities, you can follow this setup steps:_

1. Clone the repo
    ```sh
    git clone https://github.com/jhoniananta/todo-apps-devops.git
    ```
2. Go to clone directory
    ```sh
    cd todo-apps-devops
    ```
3. To build the docker
    ```sh
    docker build -t todo-apps .
    ```
4. To run the docker
    ```sh
    docker run -it -p 8080:8080 todo-apps
    ```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
