const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST
router.post( '/', ( req, res )=>{
    console.log( 'in /feedback POST:', req.body );
    let queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4)`;
    pool.query( queryString, 
        [ req.body.day, req.body.feeling , req.body.understanding, req.body.support, req.body.comments] ).then( ( result )=>{
            res.sendStatus( 201 );
        }).catch( ( err )=>{
            console.log( err );
            res.sendStatus( 500 );
        }) //end query
}) // end /events POST route, INSERT query, "Create" in CRUD




// router.post('/', async (req, res) => {
//     const client = await pool.connect();

//     try {
//         const {
//             feeling,
//             understanding,
//             support,
//             comments
//         } = req.body;
//         await client.query('BEGIN')
//         const userInsertResults = await client.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
//         VALUES ($1, $2, $3, $4)`;
        
//         await client.query('COMMIT')
//         res.sendStatus(201);
//     } catch (error) {
//         await client.query('ROLLBACK')
//         console.log('Error POST /api/order', error);
//         res.sendStatus(500);
//     } finally {
//         client.release()
//     }
// });