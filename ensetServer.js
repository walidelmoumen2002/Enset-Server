const express = require('express')
const ip = require("ip")
const app = express();

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
let h = ""
const accident = ["A1", "A2"]
const hospital = ["H1", "H2"]
const light = ["GREEN", "RED"]
const traffic1 = ["V11", "V12"]
const traffic2 = ["V21", "V22"]
const equipes = {
    jihad: "12345",
    walid: "45678",
    rachid: "789"
}
const code = equipes.jihad
app.get('/', (req, res) => {
    res.status(200).send('hello from Enset Server');
    console.log("hello from Enset Server")
})

app.get(`/CHECK/${code}`, (req, res) => {
    res.status(200).send('SUCCESS');
    const clientIpAdress = req.socket.remoteAddress
    console.log(`${clientIpAdress} : SUCCESS`)
})

app.get(`/ACCIDENT/${code}`, (req, res) => {
    const response = accident[randomNumber(0, 1)]
    res.status(200).send(response);
    const clientIpAdress = req.socket.remoteAddress
    console.log(`${clientIpAdress} : ${response}`)
})

app.get(`/HOSPITAL/${code}`, (req, res) => {
    h = hospital[randomNumber(0, 1)]
    res.status(200).send(h);
    const clientIpAdress = req.socket.remoteAddress
    console.log(`${clientIpAdress} : ${h}`)
})

app.get(`/LIGHT/${code}`, (req, res) => {
    const response = light[randomNumber(0, 1)]
    res.status(200).send(response);
    const clientIpAdress = req.socket.remoteAddress
    console.log(`${clientIpAdress} : ${response}`)
})

app.get(`/GREEN/${code}`, (req, res) => {
    const response = "CHANGED"
    res.status(200).send(response);
    const clientIpAdress = req.socket.remoteAddress
    console.log(`${clientIpAdress} : ${response}`)
})
app.get(`/TRAFFIC/${code}`, (req, res) => {
    let response = ""
    if (h === "H1") {
        response = traffic1[randomNumber(0, 1)]
    } else {
        response = traffic2[randomNumber(0, 1)]
    }
    res.status(200).send(response);
    const clientIpAdress = req.socket.remoteAddress
    console.log(`${clientIpAdress} : ${response}`)
})

app.use((req, res) => {
    res.status(404).send("FAILED")
})


app.listen(80, () => {
    console.log("Enset Server listening on port 80")
    console.log(`server ip adrress ${ip.address()}`)
})