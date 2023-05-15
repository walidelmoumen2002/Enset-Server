# Enset Server Application

This is a simple Express.js server application that responds to various GET requests with random responses based on certain pre-defined arrays.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```
Node.js
```

### Installing

After downloading or cloning the project.   

Install the dependencies:

```
npm install
```
### Running the server

Start the server:

```
npm run dev
```



## Routes

The server has several routes:
* `/` - This route responds with 'hello from Enset Server'.
* `/CHECK/:code` - This route responds with 'SUCCESS' if the code matches the predefined code.
* `/ACCIDENT/:code` - This route responds with a random accident code ("A1" or "A2").
* `/HOSPITAL/:code` - This route responds with a random hospital code ("H1" or "H2").
* `/LIGHT/:code` - This route responds with a random light status ("GREEN" or "RED").
* `/GREEN/:code` - This route responds with 'CHANGED'.
* `/TRAFFIC/:code` - This route responds with a random traffic status. The response depends on the previous response from the /HOSPITAL/:code route.

Any other route will respond with 'FAILED'.

Note: Replace `:code` with the actual code from the `equipes` object in the server file. For example, if you are using the code for 'jihad', the request would look like  `/CHECK/12345`.


## Built With

* [Express](https://expressjs.com/) - The web framework used
* [Node.js](https://nodejs.org/en) - JavaScript runtime
* [ip](https://www.npmjs.com/package/ip) - Node.js package for IP address manipulation

N.B: The server will also provide its IP address which can be used by clients to send data.
the request would look like  `192.168.1.3/CHECK/12345`.
