//import sqlite3 from 'sqlite3'
//import {open} from 'sqlite'
//import databasefile from './web_mgr.db'
//import SQlite from 'sqlite3'
//var mysql = require('mysql');
//import React from 'react';
//import * as mysql from 'mysql';
/*
class DBfunctions extends React.Component{




    constructor()
    {
        super();
        this.connection = mysql.createConnection({
            host        : '127.0.0.1',
            user        : 'root',
            password    : 'null',
            database    : 'web_mgr'
        });
        
        
        this.connection.connect(function(err) {
            // in case of error
            if(err){
                console.log(err.code);
                console.log(err.fatal);
            }
        });

        this.query = 'SELECT name from categories';

        this.connection.query(this.query, function(err, rows, fields) {
            if(err){
                console.log("An error ocurred performing the query.");
                return;
            }
        
            console.log("Query succesfully executed: ", rows);
        });

            // Close the connection
        this.connection.end(function(){
            // The connection has been closed
        });
    }

/*
// connect to mysql
this.connection.connect(function(err) {
    // in case of error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});
*/

/*
connection.query(query, function(err, rows, fields) {
    if(err){
        console.log("An error ocurred performing the query.");
        return;
    }

    console.log("Query succesfully executed: ", rows);
});
*/



/*
    getAllCategories()
    {
        

    }

}


*/
//const sqlite3 = require('sqlite3').verbose();

//const path = './web_mgr.sqlite3'

/*
let db = new sqlite3.Database(databasefile, sqlite3.OPEN_READWRITE, (err)=>{
    if (err)
        console.error(err.message);
    else
        console.log('Connected to the Database');
});
*/
/*
SQlite.openDatabase(
    {
        name: './web_mgr',
        createFromLocation: 1,
    },
    successToOpenDB(),
    failToOpenDB()
);

function successToOpenDB()
{
    console.log('Success To Open DB')
}

function failToOpenDB()
{
    console.error('Fail To Open DB')
}

class DBfunctions 
{

getAllCategories()
{
    //const result = db.all('SELECT name FROM categories')

    //console.log(result)
}

doNothing(){}

}




*/



/*
(async () => {
    const db = await open({
        filename: './web_mgr.db',
        driver: sqlite3.Database
    })
})()


function getAllCategories()
{
    const result = await db.all('SELECT name FROM categories')

    console.log(result)
}
*/
/*
export default DBfunctions

*/