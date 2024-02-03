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

## Show Swagger Documentation
```
http://localhost:3000/api-docs
```
![swagger](./images/swaggerPage.png)

## Running Flow

```html
http://localhost:3000/generate-token

or

localhost:3000/generate-token?userId='aaaa'&password='bbb'
```
* Will return the result of the generated token that is valid for the next hour
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiInYWFhYSciLCJ1c2VybmFtZSI6IidiYmInIiwiaWF0IjoxNzA2OTgxNDk2LCJleHAiOjE3MDY5ODUwOTZ9.9hmUvBW3NmEtDsrAX3uLuWYnY5q-Ty7xmMuOT5ehKU0"
}
```
![](./images/generateToken.png)

* now, you can use the token to send the calculate request to the server
```angular2html
http://localhost:3000/calculate
```
* in the Authorization tab, choose 'Barer token' and paste the token
![](./images/useToken.png)
* in the body tab, choose raw (JSON) and write the body of the request
```json
{
  "num1": 30,
  "num2": 20,
  "operation": "add"
}
```
![](./images/postBody.png)


## Docker 

* Build Docker Image: Use the docker build command to build your Docker image based on the Dockerfile. Navigate to your project directory in the terminal and run:

```
  docker build -t calculator .
```

* Run Docker Container: Once the Docker image is built, you can run a container using the docker run command. For example:

```
  docker run -p 3000:3000 calculator
```

* This command runs a container based on the calculator image, mapping port 3000 of the host to port 3000 of the container.