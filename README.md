# calculator

## Run Locally

Clone the project

```bash
  git clone https://github.com/omer72/calculatorTest
```

Go to the project directory

```bash
  cd calculatorTest
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run startEnv
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Docker 

* Build Docker Image: Use the docker build command to build your Docker image based on the Dockerfile. Navigate to your project directory in the terminal and run:

```
  docker build -t calculator .
```

* Run Docker Container: Once the Docker image is built, you can run a container using the docker run command. For example:

```
  docker run -p 3000:3000 --env-file .env calculator
```

* This command runs a container based on the calculator image, mapping port 3000 of the host to port 3000 of the container.