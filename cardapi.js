const express = require('express')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

let cradObgets = [
    {
        id:1,
        titolo:"Forza Horizon 4",
        immagine:"https://multiplayer.net-cdn.it/thumbs/images/2018/07/04/apps3609314339303838396367725ab8dd-f8b7-4a29-a351-45ebd5d66edd_jpg_300x300_q85.jpg",
        descrizione:"Forza Horizon 4 è puro godimento visivo. Un racer così spettacolare non lo si vedeva da tempo, e se la memoria torna immancabilmente a Project Gotham Racing 4 è perché tra le fila di Playground Games c'è gente che ha lavorato in Bizarre Creations, dunque sa perfettamente come far cascare la mascella agli appassionati. Dopo poche ore dall'inizio della campagna, abbiamo fatto un piccolo esperimento: ci siamo messi a girare liberamente per l'enorme ambientazione britannica del gioco, raggiunto la città di Edimburgo e parcheggiato in un viale del parco antistante il castello. A quel punto siamo virtualmente scesi dall'auto e abbiamo attivato il drone, muovendoci rapidissimi fra le strade della capitale scozzese, ammirando le architetture dei suoi edifici più celebri e le strade del centro.",
        link:"https://multiplayer.it/recensioni/forza-horizon-4-pc-recensione.html"
    },
    {
        id:2,
        titolo:"StarCraft II: Wings of Liberty",
        immagine:"https://multiplayer.net-cdn.it/thumbs/images/2018/03/01/productproduct-image-402248-0x0-q85_jpg_300x300_q85.jpg",
        descrizione:"E' passato molto tempo, davvero tantissimo. Un arco temporale, quello trascorso tra il 1998 e il 2010, che permette di notare differenze macroscopiche all'interno della vita di un uomo, segnando addirittura lo scorrere di più generazioni di software e hardware quando si volge lo sguardo verso un medium giovane come quello trattato in queste pagine. Se chi scrive non può azzardare alcuna supposizione su come allora ciascuno occupasse le proprie giornate, qualche certezza in più riguardo le serate è possibile averla: quei dodici mesi furono gloriosi in ambito console, con la nascita di Metal Gear Solid e Xenogears su Playstation, oltre che di Zelda: Ocarina of the Time su Nintendo 64, ma forse ancor di più per chi si dilettava con mouse e tastiera, intento a destreggiarsi tra i vari Half Life, Unreal, Thief, Grim Fandango e, ovviamente, StarCraft con la relativa espansione Broodwar - uscita l'anno dopo in Europa.",
        link:"https://multiplayer.it/recensioni/79481-starcraft-ii-wings-of-liberty-hell-its-about-time.html"
    },
    {
        id:3,
        titolo:"March of Empires: War of Lords",
        immagine:"https://store-images.s-microsoft.com/image/apps.29548.13510798885034953.71bce0fd-7d3d-43b1-a6ff-ffe511aec3a6.e680c140-4d1c-483a-8954-5f6b139ce0ed?mode=scale&q=90&h=300&w=200",
        descrizione:"Tuffati nell'MMO strategico in tempo reale March of Empires! Costruisci un potente regno, crea un esercito imbattibile e conquista l'impero! Durante la tua missione, costruisci un impero medievale con una delle grandi fazioni in guerra a tua scelta: shogun, re degli altipiani, zar del nord e sultani del deserto. Ogni esercito ti garantisce uno speciale vantaggio nella zona di guerra che puoi usare per delineare la tua strategia di battaglia.",
        link:"https://apps.microsoft.com/detail/9nblggh33zdv?hl=it-it&gl=IT"
    },
    {
        id:4,
        titolo:"Asphalt 9: Legends",
        immagine:"https://store-images.s-microsoft.com/image/apps.15390.14471421918435459.3615d8d5-10ca-4c2f-b3e5-e8c97fe18682.abd3cc95-35b2-40d0-8b62-33ced0101eec?q=90&w=177&h=265",
        descrizione:"Il carburante che alimenta il battito del tuo cuore. Accelera, derapa ed elimina i tuoi rivali in ambientazioni reali da brivido. Colleziona più di 200 supercar e corri al volante dei bolidi dei marchi più prestigiosi come Ferrari, Porsche e Lamborghini. Raggiungi la gloria in questo multipremiato gioco di corse arcade! Auto leggendarie da collezionare e personalizzare. Corri al volante di bolidi scelti tra i marchi più prestigiosi. Potenzia gli attributi delle tue auto e personalizzale modificandone i colori, aggiungendo parti in fibra di carbonio e tanto altro ancora.",
        link:"https://multiplayer.it/recensioni/asphalt-9-legends-recensione.html"
    },
    {
        id:5,
        titolo:"Forza Horizon 5",
        immagine:"https://store-images.s-microsoft.com/image/apps.56329.13734397844529069.202e3fc9-37d6-4853-a58b-fabe504b71e8.b2447b97-7903-48de-8a49-9669d0495c4f?q=90&w=177&h=265",
        descrizione:"Forza Horizon 5 è un videogioco open world di guida, sviluppato da Playground Games e pubblicato il 9 novembre 2021 da Xbox Game Studios in esclusiva per Xbox One, Xbox Series X/S e Windows da Playground Games utilizzando il motore grafico ForzaTech dei Turn 10 Studios.",
        link:"https://multiplayer.it/recensioni/forza-horizon-5-recensione-racing-game-arcade-definitivo-xbox-pc.html"
    },
    {
        id:6,
        titolo:"Forza Motorsport Premium Edition",
        immagine:"https://store-images.s-microsoft.com/image/apps.23691.14083713035901346.16619c9c-f1cb-4fd8-93b8-e5754d238bfe.4052cbaa-13c5-47d9-b436-27e536e0a197?q=90&w=177&h=265",
        descrizione:"Forza Motorsport Premium Edition include il gioco completo con 5 giorni di accesso anticipato, pacchetto auto Race Day, pass auto (30 auto consegnate settimanalmente al tuo gioco, una a settimana), abbonamento VIP e pacchetto di benvenuto.",
        link:"https://multiplayer.it/recensioni/189568-forza-motorsport-7-prova-di-forza-la-recensione-di-forza-motorsport-7-su-pc.html"
    },
    {
        id:7,
        titolo:"The Crew Motorfest Cross-Gen Bundle",
        immagine:"https://store-images.s-microsoft.com/image/apps.20396.13949675886756188.dad92b2f-f3da-4409-9797-fb951136d3c5.3bc50be1-3a60-4808-837f-051165e3f00c?q=90&w=177&h=265",
        descrizione:"Fai il biglietto per il Motorfest e divertiti a giocare gratis per cinque ore! Se vuoi continuare le tue avventure in The Crew Motorfest, acquista il gioco e mantieni i tuoi progressi! Tutto quello che avrai fatto e sbloccato durante la prova gratuita sarà salvato e resterà disponibile nel caso decidessi di acquistare il gioco.",
        link:"https://multiplayer.it/recensioni/the-crew-motorfest-recensione.html"
    },
    {
        id:8,
        titolo:"Asphalt 8: Airborne",
        immagine:"https://store-images.s-microsoft.com/image/apps.55946.9007199266242715.2368eea1-5d8f-4935-a5bb-f16bc919be66.ef3b53b9-747c-4dfb-8d20-6e15eaab0ead?mode=scale&q=90&h=300&w=200",
        descrizione:"UNA VALANGA DI CONTENUTI: più di 400 eventi carriera, 1.500 sfide Maestria auto, 5 modalità di gioco uniche. Un vero e proprio torrente di contenuti per giocatore singolo! MODIFICA E POTENZIA LE TUE AUTO: affronta gli avversari con stile, con oltre 2.300 adesivi!",
        link:"https://multiplayer.it/recensioni/122481-asphalt-8-airborne-in-alto-piu-in-alto.html"
    },
    {
        id:9,
        titolo:"Starfield",
        immagine:"https://store-images.s-microsoft.com/image/apps.35187.13567343664224659.1eb6fdf9-8a0b-4344-a135-ab17dfa3c609.c83b6d6a-56c3-4c3f-8b31-456cfb21c3b7?q=90&w=177&h=265",
        descrizione:"Starfield è il primo nuovo universo in oltre 25 anni da Bethesda Game Studios, i pluripremiati creatori di The Elder Scrolls V: Skyrim e Fallout 4. In questo gioco di ruolo di nuova generazione ambientato tra le stelle, crea il personaggio che desideri ed esplora con una libertà senza precedenti, in un epico viaggio per scoprire la risposta al più grande mistero dell'umanità.",
        link:"https://multiplayer.it/recensioni/starfield-recensione-esclusiva-xbox.html"
    },
    {
        id:10,
        titolo:"The Elder Scrolls V: Skyrim Anniversary Edition",
        immagine:"https://store-images.s-microsoft.com/image/apps.19255.14120048182721302.9120a847-1aae-4918-be10-96c02cb917a6.092d6861-c0ff-498c-9881-c0b7ff9f1f2d?q=90&w=177&h=265",
        descrizione:"The Elder Scrolls V: Skyrim, vincitore di più di 200 premi come Gioco dell'Anno, festeggia 10 anni di avventure con dettagli mozzafiato. L'Anniversary Edition include dieci anni di contenuti: il pluripremiato gioco base, gli add-on di Skyrim Special Edition e i contenuti del Creation Club pubblicati fino all'11 novembre 2021.",
        link:"https://multiplayer.it/articoli/the-elder-scroll-v-skyrim-anniversary-edition-vale-pena-tornare-terre-nord.html"
    },
    {
        id:11,
        titolo:"Atomic Heart",
        immagine:"https://store-images.s-microsoft.com/image/apps.47017.14612697019000138.539d22c7-f29f-45cb-90a2-8cd62b2154e8.276a878c-e989-44f4-8019-8a04231f0bc0?q=90&w=177&h=265",
        descrizione:"Sfruttando le abilità di combattimento conferite dal tuo guanto sperimentale e l'arsenale di lame e armi all'avanguardia, dovrai lottare per la sopravvivenza in incontri frenetici ed esplosivi. Adatta lo stile di combattimento a ogni avversario. Combina abilità e risorse, serviti dell'ambiente e potenzia l'equipaggiamento per superare ogni sfida e garantire la supremazia del bene.",
        link:"https://multiplayer.it/recensioni/atomic-heart-recensione.html"
    },
    {
        id:12,
        titolo:"TERMINATOR: RESISTANCE - COMPLETE EDITION",
        immagine:"https://store-images.s-microsoft.com/image/apps.28963.14481702441162721.c7480887-b91d-4bcd-b3e8-f3b6ec68853a.cffd31f5-683a-43be-8c1c-470aa0242ccf?q=90&w=177&h=265",
        descrizione:"Il futuro non è ancora stato scritto… prendi il destino nelle tue mani con Terminator: Resistance - Complete Edition! Un pacchetto completo che sfodera una versione migliorata di Terminator: Resistance, lo sparatutto in soggettiva ufficiale ambientato nell'universo di Terminator, l'espansione narrativa Annihilation Line con Kyle Reese e l'Infiltrator Mode, in cui i giocatori possono assumere il controllo della celeberrima unità da infiltrazione T-800 series.",
        link:"https://multiplayer.it/recensioni/terminator-resistance-recensione.html"
    },
    {
        id:13,
        titolo:"STEAM, I MIGLIORI GIOCHI DA COMPRARE CON I SALDI",
        immagine:"https://images.everyeye.it/img-notiziealt/steam-migliori-giochi-comprare-saldi-cyberpunk-gta-v-the-witcher-3-v4-709838-350x16.webp",
        descrizione:"Ogni giorno è festa tra le pagine di Steam, grazie ai saldi che non terminano mai. Anche oggi è arrivato il momento di scoprire quali titoli recuperare ad un prezzo ridotto rispetto a quello di listino, complice una vasta offerta videoludica che vi intratterrà per tantissime ore. Quali sono i migliori giochi in saldo su Steam? Ce n'è per tutti! I nomi più in voga sono diversi: con Cyberpunk 2077, Assetto Corsa Competizione, The Witcher 3 Wild Hunt, Grand Theft Auto V e tanto altro, Steam ha dato il via a offerte speciali a un prezzo stracciato. Si avvicina la fine del weekend, ed è giunta l'ora di passare la restante parte del fine settimana con diverse ore d'intrattenimento all'insegna del gaming. Bando alle ciance, ecco i prodotti da recuperare su Steam:",
        link:"https://www.everyeye.it/notizie/steam-migliori-giochi-comprare-saldi-cyberpunk-gta-v-the-witcher-3-709838.html"
    },
    {
        id:14,
        titolo:"XBOX GAME PASS: 5 MAGNIFICHE AVVENTURE NARRATIVE",
        immagine:"https://images.everyeye.it/img-notiziealt/xbox-game-pass-5-magnifiche-avventure-narrative-non-potete-perdervi-v12-709709-350x16.webp",
        descrizione:"I giochi competitivi online sono senza dubbio avvincenti, non a caso oggigiorno vanno per la maggiore rappresentando delle grandi fonti di guadagno per i publisher. Ciononostante un'ampia numero di utenti continua a preferire le esperienze solitarie dai forti connotati narrativi. Siete tra loro? Ecco 5 single player imperdibili su Game Pass. Se avete apprezzato Innocence, non potete fare a meno del suo eccellente seguito, A Plague Tale: Requiem, che prosegue il viaggio di Amica ed Hugo verso il sud della Francia su un'isola che parrebbe racchiudere la chiave per salvare il giovane dalla sua maledizione.",
        link:"https://www.everyeye.it/notizie/xbox-game-pass-5-grandi-avventure-narrative-non-potete-perdervi-709709.html"
    },
    {
        id:15,
        titolo:"VALORANT SCATENA IL POTERE DEGLI INCUBI",
        immagine:"https://images.everyeye.it/img-notiziealt/valorant-scatena-potere-incubi-impressionante-cosplay-fade-xhemyd-v4-709392-350x16.webp",
        descrizione:"Valorant prosegue il proprio programma di rinnovamento, a metà tra gli eSports e continui aggiornamenti che permettono all'utenza di non abbandonare il campo di battaglia. L'offerta proposta dallo shooter di Riot Games è sempre più ampia e attrae anche e soprattutto la community dei cosplayer. Il mondo dei cosplay è in crescita e tra i videogiochi che più stanno catturando l'immaginazione degli artisti da ogni angolo del globo troviamo Valorant. Il titolo free to play di Riot offre un mix unico di personaggi carismatici e misteriosi che permettono ai cosplayer di immergersi nei loro panni e di portarli in vita con un livello di fedeltà senza pari. A tal proposito, avete scoperto del Cosplay Grand Tour di Riot Games?",
        link:"https://www.everyeye.it/notizie/valorant-scatena-potere-incubi-impressionante-cosplay-fade-xhemyd-709392.html"
    },
    {
        id:16,
        titolo:"UN NUOVO PRINCE OF PERSIA NEL 2024",
        immagine:"https://images.everyeye.it/img-notiziealt/un-prince-of-persia-2024-verrA-annunciato-entro-aprile-v5-708930-350x16.webp",
        descrizione:"Aggiornamento: in un nuovo messaggio condiviso su X, Tom Henderson rivela che il gioco di Prince of Persia in questione verrà annunciato entro la fine di questo mese, anche se una data precisa per il reveal non è stata comunicata dall'insider. A poco tempo dal lancio di Prince of Persia The Lost Crown, che ha ottenuto un buon successo tra i fan e rilanciato la storica IP di Ubisoft, ecco spuntare un rumor su un nuovo capitolo della serie apparentemente in sviluppo presso gli studi di Evil Empire.",
        link:"https://www.everyeye.it/notizie/prince-of-persia-gioco-2024-sviluppato-autori-dead-cells-rumor-708930.html"
    }
]

app.get('/api/oggetti', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    try {
        res.status(200).json(cradObgets);
    } catch (err) {
        console.error('Errore durante il recupero degli oggetti', err);
    }
});


app.listen(port, async () => {
    console.log(`${port}/api/oggetti`); 
})