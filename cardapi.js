const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

let cradObgets = [
    {
        id:1,
        titolo: "Dragon's Dogma 2",
        immagine: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRXsre1_DAl4H2fNij-Tdv-DJhHCbdTFRpzjWquFmS5FmE3EvpgyhyM9AX5PStCIJWBdR1CuXW-FSw8N09SzJM2CEHNs6o74dk6Gn-KRAE&usqp=CAc",
        descrizione: "Parti per la tua grande avventura, Arisen! Dragon's Dogma è una serie di GDR per giocatore singolo ricca di azione e narrazione che offre ai giocatori la possibilità di scrivere la propria storia, dall'aspetto del loro Arisen, la sua classe, la sua squadra, l'approccio alle varie situazioni e molto altro.",
        link: "https://www.instant-gaming.com/it/15666-comprare-dragon-s-dogma-2-xbox-series-x-s-xbox-series-x-s-gioco-microsoft-store/?currency=EUR&utm_source=google&utm_medium=cpc&utm_campaign=21120682969&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAjwwr6wBhBcEiwAfMEQs95BhnYG3UwQM6UtNLiPRlFclg0FS9_Ket9SChG9POjU6P8gUJXXZRoCB9kQAvD_BwE"
    },
    {
        id:2,
        titolo: "Dragon's Dogma 2",
        immagine: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRXsre1_DAl4H2fNij-Tdv-DJhHCbdTFRpzjWquFmS5FmE3EvpgyhyM9AX5PStCIJWBdR1CuXW-FSw8N09SzJM2CEHNs6o74dk6Gn-KRAE&usqp=CAc",
        descrizione: "Parti per la tua grande avventura, Arisen! Dragon's Dogma è una serie di GDR per giocatore singolo ricca di azione e narrazione che offre ai giocatori la possibilità di scrivere la propria storia, dall'aspetto del loro Arisen, la sua classe, la sua squadra, l'approccio alle varie situazioni e molto altro.",
        link: "https://www.instant-gaming.com/it/15666-comprare-dragon-s-dogma-2-xbox-series-x-s-xbox-series-x-s-gioco-microsoft-store/?currency=EUR&utm_source=google&utm_medium=cpc&utm_campaign=21120682969&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAjwwr6wBhBcEiwAfMEQs95BhnYG3UwQM6UtNLiPRlFclg0FS9_Ket9SChG9POjU6P8gUJXXZRoCB9kQAvD_BwE"
    },
    {
        id:3,
        titolo: "Dragon's Dogma 2",
        immagine: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRXsre1_DAl4H2fNij-Tdv-DJhHCbdTFRpzjWquFmS5FmE3EvpgyhyM9AX5PStCIJWBdR1CuXW-FSw8N09SzJM2CEHNs6o74dk6Gn-KRAE&usqp=CAc",
        descrizione: "Parti per la tua grande avventura, Arisen! Dragon's Dogma è una serie di GDR per giocatore singolo ricca di azione e narrazione che offre ai giocatori la possibilità di scrivere la propria storia, dall'aspetto del loro Arisen, la sua classe, la sua squadra, l'approccio alle varie situazioni e molto altro.",
        link: "https://www.instant-gaming.com/it/15666-comprare-dragon-s-dogma-2-xbox-series-x-s-xbox-series-x-s-gioco-microsoft-store/?currency=EUR&utm_source=google&utm_medium=cpc&utm_campaign=21120682969&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAjwwr6wBhBcEiwAfMEQs95BhnYG3UwQM6UtNLiPRlFclg0FS9_Ket9SChG9POjU6P8gUJXXZRoCB9kQAvD_BwE"
    },
    {
        id:4,
        titolo: "Dragon's Dogma 2",
        immagine: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRXsre1_DAl4H2fNij-Tdv-DJhHCbdTFRpzjWquFmS5FmE3EvpgyhyM9AX5PStCIJWBdR1CuXW-FSw8N09SzJM2CEHNs6o74dk6Gn-KRAE&usqp=CAc",
        descrizione: "Parti per la tua grande avventura, Arisen! Dragon's Dogma è una serie di GDR per giocatore singolo ricca di azione e narrazione che offre ai giocatori la possibilità di scrivere la propria storia, dall'aspetto del loro Arisen, la sua classe, la sua squadra, l'approccio alle varie situazioni e molto altro.",
        link: "https://www.instant-gaming.com/it/15666-comprare-dragon-s-dogma-2-xbox-series-x-s-xbox-series-x-s-gioco-microsoft-store/?currency=EUR&utm_source=google&utm_medium=cpc&utm_campaign=21120682969&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAjwwr6wBhBcEiwAfMEQs95BhnYG3UwQM6UtNLiPRlFclg0FS9_Ket9SChG9POjU6P8gUJXXZRoCB9kQAvD_BwE"
    },
    {
        id:5,
        titolo: "Dragon's Dogma 2",
        immagine: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRXsre1_DAl4H2fNij-Tdv-DJhHCbdTFRpzjWquFmS5FmE3EvpgyhyM9AX5PStCIJWBdR1CuXW-FSw8N09SzJM2CEHNs6o74dk6Gn-KRAE&usqp=CAc",
        descrizione: "Parti per la tua grande avventura, Arisen! Dragon's Dogma è una serie di GDR per giocatore singolo ricca di azione e narrazione che offre ai giocatori la possibilità di scrivere la propria storia, dall'aspetto del loro Arisen, la sua classe, la sua squadra, l'approccio alle varie situazioni e molto altro.",
        link: "https://www.instant-gaming.com/it/15666-comprare-dragon-s-dogma-2-xbox-series-x-s-xbox-series-x-s-gioco-microsoft-store/?currency=EUR&utm_source=google&utm_medium=cpc&utm_campaign=21120682969&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAjwwr6wBhBcEiwAfMEQs95BhnYG3UwQM6UtNLiPRlFclg0FS9_Ket9SChG9POjU6P8gUJXXZRoCB9kQAvD_BwE"
    },
    {
        id:6,
        titolo: "Dragon's Dogma 2",
        immagine: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRXsre1_DAl4H2fNij-Tdv-DJhHCbdTFRpzjWquFmS5FmE3EvpgyhyM9AX5PStCIJWBdR1CuXW-FSw8N09SzJM2CEHNs6o74dk6Gn-KRAE&usqp=CAc",
        descrizione: "Parti per la tua grande avventura, Arisen! Dragon's Dogma è una serie di GDR per giocatore singolo ricca di azione e narrazione che offre ai giocatori la possibilità di scrivere la propria storia, dall'aspetto del loro Arisen, la sua classe, la sua squadra, l'approccio alle varie situazioni e molto altro.",
        link: "https://www.instant-gaming.com/it/15666-comprare-dragon-s-dogma-2-xbox-series-x-s-xbox-series-x-s-gioco-microsoft-store/?currency=EUR&utm_source=google&utm_medium=cpc&utm_campaign=21120682969&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAjwwr6wBhBcEiwAfMEQs95BhnYG3UwQM6UtNLiPRlFclg0FS9_Ket9SChG9POjU6P8gUJXXZRoCB9kQAvD_BwE"
    },
    {
        id:7,
        titolo: "Dragon's Dogma 2",
        immagine: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRXsre1_DAl4H2fNij-Tdv-DJhHCbdTFRpzjWquFmS5FmE3EvpgyhyM9AX5PStCIJWBdR1CuXW-FSw8N09SzJM2CEHNs6o74dk6Gn-KRAE&usqp=CAc",
        descrizione: "Parti per la tua grande avventura, Arisen! Dragon's Dogma è una serie di GDR per giocatore singolo ricca di azione e narrazione che offre ai giocatori la possibilità di scrivere la propria storia, dall'aspetto del loro Arisen, la sua classe, la sua squadra, l'approccio alle varie situazioni e molto altro.",
        link: "https://www.instant-gaming.com/it/15666-comprare-dragon-s-dogma-2-xbox-series-x-s-xbox-series-x-s-gioco-microsoft-store/?currency=EUR&utm_source=google&utm_medium=cpc&utm_campaign=21120682969&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAjwwr6wBhBcEiwAfMEQs95BhnYG3UwQM6UtNLiPRlFclg0FS9_Ket9SChG9POjU6P8gUJXXZRoCB9kQAvD_BwE"
    },
    {
        id:8,
        titolo: "Dragon's Dogma 2",
        immagine: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRXsre1_DAl4H2fNij-Tdv-DJhHCbdTFRpzjWquFmS5FmE3EvpgyhyM9AX5PStCIJWBdR1CuXW-FSw8N09SzJM2CEHNs6o74dk6Gn-KRAE&usqp=CAc",
        descrizione: "Parti per la tua grande avventura, Arisen! Dragon's Dogma è una serie di GDR per giocatore singolo ricca di azione e narrazione che offre ai giocatori la possibilità di scrivere la propria storia, dall'aspetto del loro Arisen, la sua classe, la sua squadra, l'approccio alle varie situazioni e molto altro.",
        link: "https://www.instant-gaming.com/it/15666-comprare-dragon-s-dogma-2-xbox-series-x-s-xbox-series-x-s-gioco-microsoft-store/?currency=EUR&utm_source=google&utm_medium=cpc&utm_campaign=21120682969&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAjwwr6wBhBcEiwAfMEQs95BhnYG3UwQM6UtNLiPRlFclg0FS9_Ket9SChG9POjU6P8gUJXXZRoCB9kQAvD_BwE"
    },
    {
        id:9,
        titolo: "Dragon's Dogma 2",
        immagine: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRXsre1_DAl4H2fNij-Tdv-DJhHCbdTFRpzjWquFmS5FmE3EvpgyhyM9AX5PStCIJWBdR1CuXW-FSw8N09SzJM2CEHNs6o74dk6Gn-KRAE&usqp=CAc",
        descrizione: "Parti per la tua grande avventura, Arisen! Dragon's Dogma è una serie di GDR per giocatore singolo ricca di azione e narrazione che offre ai giocatori la possibilità di scrivere la propria storia, dall'aspetto del loro Arisen, la sua classe, la sua squadra, l'approccio alle varie situazioni e molto altro.",
        link: "https://www.instant-gaming.com/it/15666-comprare-dragon-s-dogma-2-xbox-series-x-s-xbox-series-x-s-gioco-microsoft-store/?currency=EUR&utm_source=google&utm_medium=cpc&utm_campaign=21120682969&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAjwwr6wBhBcEiwAfMEQs95BhnYG3UwQM6UtNLiPRlFclg0FS9_Ket9SChG9POjU6P8gUJXXZRoCB9kQAvD_BwE"
    },
    {
        id:10,
        titolo: "Dragon's Dogma 2",
        immagine: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRXsre1_DAl4H2fNij-Tdv-DJhHCbdTFRpzjWquFmS5FmE3EvpgyhyM9AX5PStCIJWBdR1CuXW-FSw8N09SzJM2CEHNs6o74dk6Gn-KRAE&usqp=CAc",
        descrizione: "Parti per la tua grande avventura, Arisen! Dragon's Dogma è una serie di GDR per giocatore singolo ricca di azione e narrazione che offre ai giocatori la possibilità di scrivere la propria storia, dall'aspetto del loro Arisen, la sua classe, la sua squadra, l'approccio alle varie situazioni e molto altro.",
        link: "https://www.instant-gaming.com/it/15666-comprare-dragon-s-dogma-2-xbox-series-x-s-xbox-series-x-s-gioco-microsoft-store/?currency=EUR&utm_source=google&utm_medium=cpc&utm_campaign=21120682969&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAjwwr6wBhBcEiwAfMEQs95BhnYG3UwQM6UtNLiPRlFclg0FS9_Ket9SChG9POjU6P8gUJXXZRoCB9kQAvD_BwE"
    },
    {
        id:11,
        titolo: "Dragon's Dogma 2",
        immagine: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRXsre1_DAl4H2fNij-Tdv-DJhHCbdTFRpzjWquFmS5FmE3EvpgyhyM9AX5PStCIJWBdR1CuXW-FSw8N09SzJM2CEHNs6o74dk6Gn-KRAE&usqp=CAc",
        descrizione: "Parti per la tua grande avventura, Arisen! Dragon's Dogma è una serie di GDR per giocatore singolo ricca di azione e narrazione che offre ai giocatori la possibilità di scrivere la propria storia, dall'aspetto del loro Arisen, la sua classe, la sua squadra, l'approccio alle varie situazioni e molto altro.",
        link: "https://www.instant-gaming.com/it/15666-comprare-dragon-s-dogma-2-xbox-series-x-s-xbox-series-x-s-gioco-microsoft-store/?currency=EUR&utm_source=google&utm_medium=cpc&utm_campaign=21120682969&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAjwwr6wBhBcEiwAfMEQs95BhnYG3UwQM6UtNLiPRlFclg0FS9_Ket9SChG9POjU6P8gUJXXZRoCB9kQAvD_BwE"
    },
    {
        id:12,
        titolo: "Dragon's Dogma 2",
        immagine: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRXsre1_DAl4H2fNij-Tdv-DJhHCbdTFRpzjWquFmS5FmE3EvpgyhyM9AX5PStCIJWBdR1CuXW-FSw8N09SzJM2CEHNs6o74dk6Gn-KRAE&usqp=CAc",
        descrizione: "Parti per la tua grande avventura, Arisen! Dragon's Dogma è una serie di GDR per giocatore singolo ricca di azione e narrazione che offre ai giocatori la possibilità di scrivere la propria storia, dall'aspetto del loro Arisen, la sua classe, la sua squadra, l'approccio alle varie situazioni e molto altro.",
        link: "https://www.instant-gaming.com/it/15666-comprare-dragon-s-dogma-2-xbox-series-x-s-xbox-series-x-s-gioco-microsoft-store/?currency=EUR&utm_source=google&utm_medium=cpc&utm_campaign=21120682969&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAjwwr6wBhBcEiwAfMEQs95BhnYG3UwQM6UtNLiPRlFclg0FS9_Ket9SChG9POjU6P8gUJXXZRoCB9kQAvD_BwE"
    },
    {
        id:13,
        titolo: "Dragon's Dogma 2",
        immagine: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRXsre1_DAl4H2fNij-Tdv-DJhHCbdTFRpzjWquFmS5FmE3EvpgyhyM9AX5PStCIJWBdR1CuXW-FSw8N09SzJM2CEHNs6o74dk6Gn-KRAE&usqp=CAc",
        descrizione: "Parti per la tua grande avventura, Arisen! Dragon's Dogma è una serie di GDR per giocatore singolo ricca di azione e narrazione che offre ai giocatori la possibilità di scrivere la propria storia, dall'aspetto del loro Arisen, la sua classe, la sua squadra, l'approccio alle varie situazioni e molto altro.",
        link: "https://www.instant-gaming.com/it/15666-comprare-dragon-s-dogma-2-xbox-series-x-s-xbox-series-x-s-gioco-microsoft-store/?currency=EUR&utm_source=google&utm_medium=cpc&utm_campaign=21120682969&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAjwwr6wBhBcEiwAfMEQs95BhnYG3UwQM6UtNLiPRlFclg0FS9_Ket9SChG9POjU6P8gUJXXZRoCB9kQAvD_BwE"
    }
]



app.get('/api/oggetti', async (req, res) => {
    try {
        res.status(200).json(cradObgets);
    } catch (err) {
        console.error('Errore durante il recupero degli oggetti', err);
    }
});

app.listen(port, async () => {
    console.log(`${port}/api/oggetti`); 
})