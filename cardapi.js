const express = require('express')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

let cradObgets = [
    {
        id:1,
        titolo:"EA SPORTS FC™ 24",
        immagine:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_EaSportsFc24_image500w.jpg",
        descrizione:"EA SPORTS FC™ 24 è la nuova era del gioco più bello del mondo: oltre 19.000 giocatori con licenza piena, più di 700 squadre e oltre 30 campionati nell'esperienza calcistica più autentica mai creata. Vivi un'esperienza più immersiva che mai con due tecnologie d'avanguardia che offrono in ogni partita un realismo senza precedenti: stili di gioco ottimizzati da Opta e un motore Frostbite™ completamente rivisto rappresentano la base di EA SPORTS FC™ 24, per la prima volta nella storia di EA SPORTS™ su Nintendo Switch™.",
        link:"https://multiplayer.it/recensioni/ea-sports-fc-24-recensione-nintendo-switch.html"
    },
    {
        id:2,
        titolo:"Just Dance®",
        immagine:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_JustDance_V2_image500w.jpg",
        descrizione:"Just Dance è una serie che non ha bisogno di presentazioni: fin dal 2009 Ubisoft si è fatta portatrice del potere universale della danza, mezzo comunicativo ed espressivo amato da milioni di persone in tutto il mondo. Non è un mistero che Just Dance abbia adottato un approccio profondamente conservativo nel corso degli anni, forte di una formula rodata e alfiere dell'antico adagio secondo cui squadra che vince non si cambia.",
        link:"https://multiplayer.it/recensioni/just-dance-2023-recensione.html"
    },
    {
        id:3,
        titolo:"Unravel Two",
        immagine:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_UnravelTwo_image500w.jpg",
        descrizione:"Quando tagli i ponti con il passato, si formano nuovi legami. In Unravel Two crei uno Yarny tutto tuo. Poi stringi relazioni con altri Yarny in partite locali co-op o per giocatore singolo, coltivando amicizie e offrendo il tuo sostegno in un viaggio comune. Inizia la tua avventura in una terra fredda e piena di fascino, poi guarda la vita sbocciare intorno a te mentre insegui lo spirito dell’avventura. Immergiti in una coinvolgente storia piena di energia, esuberanza, ispirazione... e mostri. Affronta ogni sfida con positività e ardore per risvegliare il mondo attorno a te e scopri il legame indissolubile dell’amicizia.",
        link:"https://multiplayer.it/recensioni/unravel-2-two-recensione-201095.html"
    },
    {
        id:4,
        titolo:"Animal Crossing: New Horizons",
        immagine:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_AnimalCrossingNewHorizons_image500w.jpg",
        descrizione:"Con solo una tenda e il tuo fidato Nook Phone nuovo di zecca, la vita all'inizio ti sembrerà un po' spartana. Ma non ti preoccupare! Con un po' di olio di gomito, l'isola può diventare un luogo che puoi chiamare (casa) con orgoglio. Come si dice, se vuoi che una cosa sia fatta come desideri, devi farla tu!",
        link:"https://multiplayer.it/recensioni/animal-crossing-new-horizons-recensione.html"
    },
    {
        id:5,
        titolo:"Super Mario Odyssey",
        immagine:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_SuperMarioOdyssey_image500w.jpg",
        descrizione:"Per parlare di questo gioco non possiamo che partire da due concetti, il primo dei quali è di facile comprensione. Nonostante sia stato spesso definito - e anche pubblicizzato - come tale, Super Mario Odyssey, almeno in senso stretto, non è il seguito di Super Mario 64. Il secondo concetto è leggermente più complicato, e antico quasi quanto l'opera citata nel titolo del gioco: EPD Tokyo ha peccato, se così si può dire, di hybris.",
        link:"https://multiplayer.it/recensioni/190393-super-mario-odyssey-la-recensione-di-super-mario-odyssey.html"
    },
    {
        id:6,
        titolo:"",
        immagine:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DragonBallZKakarotANewPowerAwakensSet_image500w.jpg",
        descrizione:"Vai oltre la storia di DRAGON BALL Z e affronta 2 battaglie boss aggiuntive con il set Il risveglio di un nuovo potere! Padroneggia la potenza degli dei per sfidare Lord Bills e supera ogni limite per sconfiggere Freezer dorato con la forza del Super Saiyan Blue! Vivi la storia di DRAGON BALL Z tra epiche battaglie e spassose storie secondarie, tra cui momenti inediti che fanno luce su alcuni dettagli della storia di DRAGON BALL mai svelati prima!",
        link:"https://multiplayer.it/recensioni/dragon-ball-z-kakarot-a-new-power-awakens-set-recensione-nintendo-switch.html"
    },
    {
        id:7,
        titolo:"LEGO® Marvel™ Super Heroes",
        immagine:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_LegoMarvelSuperHeroes_image500w.jpg",
        descrizione:"LEGO® Marvel™ Super Heroes presenta una storia originale che attraversa l'intero universo Marvel. I giocatori vestiranno i panni di Iron Man, Spider-Man, Hulk, Capitan America, Wolverine e molti altri personaggi Marvel uniti da una sola missione: impedire a Loki e a una schiera di supercattivi Marvel di costruire una super arma in grado di distruggere il mondo intero",
        link:"https://multiplayer.it/recensioni/125732-lego-marvel-super-heroes-un-mattoncino-per-wolverine.html"
    },
    {
        id:8,
        titolo:"Hogwarts Legacy",
        immagine:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_HogwartsLegacy_image500w.jpg",
        descrizione:"Hogwarts Legacy è un coinvolgente gioco di ruolo d'azione open world, ambientato nel magico universo dei libri di Harry Potter. Ora puoi assumere il controllo della narrazione ed essere il protagonista della tua storia personale nel mondo magico. Vivi a Hogwarts nel 1800. Forgia alleanze, combatti i Maghi Oscuri e determina il fato del mondo magico. L'eredità che lascerai è solo tua da plasmare. Scrivi la tua storia.",
        link:"https://multiplayer.it/notizie/hogwarts-legacy-nintendo-switch-digital-foundry-conferma-tanti-compromessi.html"
    },
    {
        id:9,
        titolo:"Rayman Legends: Definitive Edition",
        immagine:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_RaymanLegendsDefinitiveEdition_image500w.jpg",
        descrizione:"Nonostante sia nato come esclusiva Wii U, l'eccellente Rayman Legends non è rimasto confinato per troppo tempo nella libreria ludica della console Nintendo: complici anche le scarse vendite dell'hardware, il prodotto Ubisoft ci ha messo meno di un anno per sbarcare su PC, PlayStation 4, Xbox One e persino PlayStation Vita, confermandosi in tutte queste versioni come uno dei migliori platform bidimensionali degli ultimi tempi.",
        link:"https://multiplayer.it/recensioni/188671-rayman-legends-definitive-edition-a-volte-ritornano-la-recensione-di-rayman-legends-definitive-edition.html"
    },
    {
        id:10,
        titolo:"Cars 3: In Gara per la Vittoria",
        immagine:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Cars3DrivenToWin_enGB_image500w.jpg",
        descrizione:"Scopri oltre 20 personaggi personalizzabili tra cui Saetta McQueen, Jackson Storm, Cruz Ramirez e la futura generazione di piloti in più di 20 percorsi ambientati in luoghi rappresentativi del film, come Radiator Springs. Allenati e affina le tue abilità in 6 modalità di gioco e competi con la tua famiglia e i tuoi amici nella Sfida Automobilistica per diventare il campione supremo. Sulla strada per diventare un pilota degno della Hall of Fame, l'allenamento e l'abilità ti daranno un vantaggio in gara che nessuno potrà superare.",
        link:"https://multiplayer.it/giochi/cars-3-in-gara-per-la-vittoria-per-nsw.html"
    },
    {
        id:11,
        titolo:"Monopoly per Nintendo Switch",
        immagine:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_MonopolyForNintendoSwitch_enGB_image500w.jpg",
        descrizione:"Prova tre tabelloni 3D unici a casa o in viaggio con un massimo di sei giocatori in totale, oppure porta il tuo gioco online e sfida i giocatori in partite veloci. Non hai tempo per una partita completa? Velocizzala con gli Obiettivi speciali, che accorciano le sessioni di gioco, e con le Carte azioni per spostarti sul tabellone e penalizzare i tuoi avversari. Costruisci il tuo impero e contratta fino alla vittoria!",
        link:"https://multiplayer.it/giochi/monopoly-per-nintendo-switch-per-nsw.html"
    },
    {
        id:12,
        titolo:"ASSASSIN'S CREED®: THE EZIO COLLECTION",
        immagine:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_AssassinsCreedTheEzioCollection_image500w.jpg",
        descrizione:"Include le acclamate campagne per giocatore singolo e tutti i DLC dei tre giochi: Assassin's Creed® II, Assassin's Creed® Brotherhood e Assassin's Creed® Revelations, oltre a due cortometraggi. Rivivi l'intera saga del Maestro Assassino. Apprendi le tattiche degli Assassini mentre vendichi il tradimento subito dalla tua famiglia. Viaggia nell'Italia rinascimentale del XV secolo e diventa il capo più leggendario della Confraternita, poi salpa per un'ultima missione nella quale scoprirai la verità sul Credo.",
        link:"https://multiplayer.it/recensioni/assassins-creed-the-ezio-collection-recensione-nintendo-switch.html"
    },
    {
        id:13,
        titolo:"NINTENDO SWITCH OLED CON 8GB DI RAM: MODDER RIESCE A ESEGUIRE ZELDA TOTK IN 4K!",
        immagine:"https://images.everyeye.it/img-notiziealt/nintendo-switch-oled-8gb-ram-modder-riesce-eseguire-zelda-totk-4k-v4-710268-350x16.webp",
        descrizione:"Mentre in rete continuano a rimbalzare i rumor su Nintendo Switch 2, un creatore di contenuti con la passione per il modding ha provato a spingere l'architettura hardware di Nintendo Switch al massimo delle sue potenzialità grafiche e prestazionali integrando 8GB di RAM a un modello OLED della console ibrida.",
        link:"https://www.everyeye.it/notizie/nintendo-switch-oled-8gb-ram-modder-riesce-eseguire-zelda-totk-4k-710268.html"
    },
    {
        id:14,
        titolo:"QUALI SONO I MIGLIORI GIOCHI NINTENDO SWITCH USCITI NEL 2024 FINORA? LA CLASSIFICA",
        immagine:"https://images.everyeye.it/img-notiziealt/quali-migliori-giochi-nintendo-switch-usciti-2024-finora-classifica-v4-709334-350x16.webp",
        descrizione:"Con il 2024 che ha concluso il suo primo trimestre si può iniziare a tirare le prime somme sui giochi più belli pubblicati su Nintendo Switch tra gennaio e marzo. E così, dopo aver scoperto quali sono i migliori giochi PS5 dei primi mesi del 2024, passiamo ora in rassegna il meglio offerto fin qui dalla console ibrida Nintendo secondo le medie su Metacritic:",
        link:"https://www.everyeye.it/notizie/migliori-giochi-nintendo-switch-usciti-2024-finora-classifica-709334.html"
    },
    {
        id:15,
        titolo:"NINTENDO 3DS E WII U PROSSIME AL TRAMONTO: I SERVER ONLINE VERRANNO SPENTI A BREVE",
        immagine:"https://images.everyeye.it/img-notiziealt/nintendo-3ds-wii-u-prossime-tramonto-server-online-verranno-spenti-breve-v3-708637-350x16.webp",
        descrizione:"A distanza di qualche mese dalla chiusura dell'eShop, Nintendo ha annunciato che manca davvero poco all'interruzione definitiva di tutti i servizi online di 3DS e WiiU, le vecchie console dell'azienda di Kyoto.",
        link:"https://www.everyeye.it/notizie/nintendo-3ds-wii-u-prossime-tramonto-server-online-verranno-spenti-breve-708637.html"
    },
    {
        id:16,
        titolo:"SCONTI NINTENDO: 5 OFFERTE INCREDIBILI SUI MIGLIORI GIOCHI SWITCH",
        immagine:"https://images.everyeye.it/img-notiziealt/sconti-nintendo-5-offerte-incredibili-migliori-giochi-switch-v5-707671-350x16.webp",
        descrizione:"Una valanga di offerte sui migliori videogiochi per Nintendo Switch! Tra tutti, Just Dance 2024, il gioco di ballo più amato, ora in vendita a prezzo scontato. Ma ci sono anche tanti altri giochi in sconto per divertirsi.... risparmiando!",
        link:"https://www.everyeye.it/notizie/sconti-nintendo-5-offerte-incredibili-migliori-giochi-switch-707671.html"
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