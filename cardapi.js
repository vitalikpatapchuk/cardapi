const express = require('express')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

let cradObgets1 = [
    {
        id:1,
        titolo:"",
        descrizione:"",
        immagine:"",
        link:""
    },
    {
        id:2,
        titolo:"",
        descrizione:"",
        immagine:"",
        link:""
    },
    {
        id:3,
        titolo:"",
        descrizione:"",
        immagine:"",
        link:""
    },
    {
        id:4,
        titolo:"",
        descrizione:"",
        immagine:"",
        link:""
    },
    {
        id:5,
        titolo:"",
        descrizione:"",
        immagine:"",
        link:""
    },
    {
        id:6,
        titolo:"",
        descrizione:"",
        immagine:"",
        link:""
    },
    {
        id:7,
        titolo:"",
        descrizione:"",
        immagine:"",
        link:""
    },
    {
        id:8,
        titolo:"",
        descrizione:"",
        immagine:"",
        link:""
    },
    {
        id:9,
        titolo:"",
        descrizione:"",
        immagine:"",
        link:""
    },
    {
        id:10,
        titolo:"",
        descrizione:"",
        immagine:"",
        link:""
    },
    {
        id:11,
        titolo:"",
        descrizione:"",
        immagine:"",
        link:""
    },
    {
        id:1,
        titolo:"",
        descrizione:"",
        immagine:"",
        link:""
    },
    {
        id:12,
        titolo:"",
        descrizione:"",
        immagine:"",
        link:""
    },
    {
        id:13,
        titolo:"",
        descrizione:"",
        immagine:"",
        link:""
    },
    {
        id:14,
        titolo:"",
        descrizione:"",
        immagine:"",
        link:""
    }
    
]

app.get('/api/oggetti', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    try {
        res.status(200).json(cradObgets1);
    } catch (err) {
        console.error('Errore durante il recupero degli oggetti', err);
    }
});


app.listen(port, async () => {
    console.log(`${port}/api/oggetti`); 
})