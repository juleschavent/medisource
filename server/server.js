const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: 'bofv3727_julesadmin',
    host: 'localhost',
    password: '#1!i&05U7$k@',
    database: 'bofv3727_medisource',
});

// GET QUERY
// get systeme list
app.get('/systeme', (req, res) => {
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
        } else {
            res.send(result);
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
        } else {
            res.send(result);
        }
    })
})

//INSERT QUERY
//insert systeme
app.post('/addSysteme', (req, res) => {
    const name = req.body.name
    const desc = req.body.description

    db.query('INSERT INTO systeme (name_systeme, desc_systeme) VALUES (?,?)',
        [name, desc],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send('Values inserted')
            }
        }
    );
})

//UPDATE QUERY
//update systeme
app.put('/updateSysteme', (req, res) => {
    const id = req.body.index;
    const name = req.body.newName;
    const desc = req.body.newDesc;
    db.query('UPDATE systeme SET name_systeme = ?, desc_systeme = ? WHERE id_systeme = ?', [name, desc, id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        }
    })
})

//DELETE QUERY
//delete systeme
app.delete('/deleteSysteme/:index', (req, res) => {
    const id = req.params.index;
    db.query('DELETE FROM systeme WHERE id_systeme = ?', id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})