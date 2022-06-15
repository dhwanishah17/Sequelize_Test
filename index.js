const express = require('express');
const mysql = require('mysql2');
const app = express();
const path = require('path');
const db = require("./models");
const { Player, Sequelize } = require('./models');
const { Team } = require('./models');
const Op = Sequelize.Op

// fetching Player 
app.get("/selectplayer", (req, res) => {
    Player.findAll({
        order: [
            ['name', 'ASC'],
        ]
    }).then((emloyees) => {
        res.send(emloyees);
    }).catch((err) => {
        if (err) {
            console.log(err);
        }
    })
})

app.get("/insertplayer", (req, res) => {
    Player.create({
        name: "ABD",
        age: 39,
        captain: "No",
        dob: "1970-04-12",
    }).catch((err) => {
        if (err) {
            console.log(err);
        }
    })
    res.send("inserted");
})

app.get("/deleteplayer", (req, res) => {
    Player.destroy({ where: { id: 1 } })
    res.send("deleted");
})


// fetch team with players.
app.get("/onetoone", (req,res)=>{
    Team.findAll({where: {name: "RCB"},include : [{model: Player }]}).then((players)=>{
        res.send(players);
    }).catch((err)=>{
        if(err){
            console.log(err);
        }
    })
})
// one-to-one association
// app.get("/onetoone", (req,res)=>{
//     Player.findAll({where: {name: "ABD"},include : [{model: Team }]}).then((players)=>{
//         res.send(players);
//     }).catch((err)=>{
//         if(err){
//             console.log(err);
//         }
//     })
// })

app.get("/select", (req, res) => {
    Team.findAll().then((team) => {
        res.send(team);
    }).catch((err) => {
        if (err) {
            console.log(err);
        }
    })
})

app.get("/insert", (req, res) => {
    Team.create({
        name: "RCB",
    }).catch((err) => {
        if (err) {
            console.log(err);
        }
    })
    res.send("inserted");
})

app.get("/delete", (req, res) => {
    Team.destroy({ where: { id: 1 } })
    res.send("deleted");
})
db.Team.hasOne(db.Player );
db.Player.belongsTo(db.Team,{foreignKey:{
    allopwNull: false
}});

app.use(express.json());

db.sequelize.sync().then((req) => {
    app.listen(5000, () => {
        console.log("App is listening to port 5000");
    });
});