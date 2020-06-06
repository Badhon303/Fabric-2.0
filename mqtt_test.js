var mqtt = require('mqtt')
var client = mqtt.connect('http://broker.hivemq.com:1883')

client.on('connect', function () {
    client.subscribe('insulindata', function (err) {
        if (!err) {
            console.log("no error")
        }
    })
})

client.on('message', function (topic, message) {
    console.log(message.toString())
})

// [{"temp": "4", "owner": "manufacturer", "handover": "0"}, {"temp": "6", "owner": "supplier", "handover": "1"}, {"temp": "8", "owner": "Pharmacy", "handover": "3"}]  