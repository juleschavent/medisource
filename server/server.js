const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'medisource',
});

// GET QUERY
// get systeme list
app.get('/systeme', (req,res) => {
    db.query('SELECT * FROM systeme', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

// get organe list
app.get('/organe/:systeme', (req, res) => {
    const systeme = req.params.systeme;
    db.query("SELECT * from systeme INNER JOIN organe ON organe.systeme_id_systeme = systeme.id_systeme WHERE name_systeme = ? ", systeme, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
            // console.log(systeme)
        }
    })
})

// get maladie list
app.get('/maladie/:systeme/:organe', (req, res) => {
    const systeme = req.params.systeme;
    const organe = req.params.organe;
    db.query(`SELECT * from systeme 
    INNER JOIN organe ON organe.systeme_id_systeme = systeme.id_systeme 
    INNER JOIN maladie_has_organe ON maladie_has_organe.organe_id_organe = organe.id_organe 
    INNER JOIN maladie ON maladie.id_maladie = maladie_has_organe.maladie_id_maladie 
    WHERE name_systeme = ? AND name_organe = ?`, [systeme, organe], (err, result) => {
        if (err) {
            console.log(err)
            console.log(systeme)
        } else {
            res.send(result);
            console.log(systeme)
        }
    })
})

// get traitement list
app.get('/traitement/:systeme/:organe/:maladie', (req, res) => {
    const systeme = req.params.systeme;
    const organe = req.params.organe;
    const maladie = req.params.maladie;
    db.query(`SELECT * from systeme 
    INNER JOIN organe ON organe.systeme_id_systeme = systeme.id_systeme 
    INNER JOIN maladie_has_organe ON maladie_has_organe.organe_id_organe = organe.id_organe 
    INNER JOIN maladie ON maladie.id_maladie = maladie_has_organe.maladie_id_maladie
    INNER JOIN traitement_has_maladie ON traitement_has_maladie.maladie_id_maladie = maladie.id_maladie
	INNER JOIN traitement ON traitement.id_traitement = traitement_has_maladie.traitement_id_traitement
    
    WHERE name_systeme = ? AND name_organe = ? AND name_maladie = ?`, [systeme, organe, maladie], (err, result) => {
        if (err) {
            console.log(err)
            console.log(systeme)
        } else {
            res.send(result);
            console.log(systeme)
        }
    })
})

//INSERT QUERY
// app.post('/create', (req, res) => {
//     const name = req.body.*name of my var from frontend*
//     const age = req.body.*name of my var from frontend*
//     const country = req.body.*name of my var from frontend*
//     etc..

//     db.query('INSERT INTO people (name, age, country) VALUES (?,?,?)',          //utiliser une requête SQL
//     [name, age, country], 
//     (err, result) => {
//         if (err) {
//             console.log(err)
//         } else {
//             res.send('Values inserted')
//         }
//     }
// );
// })

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})