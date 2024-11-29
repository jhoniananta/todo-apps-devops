# Todo Apps
Todo App is a ToDo List App to help you managae and track down your daily activities. This project is developed by

<ul>
    <li><a href="https://github.com/jhoniananta">Jhoni</a></li>
    <li><a href="https://github.com/bryanmichaelk">Bryan</a></li>
    <li><a href="https://github.com/dwiindahr">Dwi Indah</a></li>
    <li><a href="https://github.com/KrisnaSetia">Krisna Setia</a></li>
</ul>

For further Read Me Configuration acces this link:
[ReadMeConfiguration](https://its.id/m/KonfigurasiTODOAPPS)

## Getting Started with React Project

To get local copy up and running follow these simple example steps.

#### Prerequisites

You need to download and install some tools to run todo-apps-devops

-   #### Docker
    visit docker official installation based on your machine: [Download](https://www.docker.com/products/docker-desktop/)

-   #### Node.js
    visit Node.js official installation based on your machine: [Download](https://nodejs.org/en)

#### Setup

_After downloading all prequities, you can follow this setup steps:_

1. Clone the repo
    ```sh
    git clone https://github.com/jhoniananta/todo-apps-devops.git
    ```
2. Go to clone directory
    ```sh
    cd todo-apps-devops
    ```
3. Install package manage for frontend side
    ```sh
    cd frontend
    npm install
    ```
4. Install package manage for backend side
    ```sh
    cd backend
    npm install
    ```
5. Open the docker desktop
6. Run the docker in root folder
    ```sh
    docker compose up --watch
    ```
    if this things doesn't work run the docker using:
    ```sh
    docker compose watch
    ```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
