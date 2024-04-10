const express = require('express')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

let cradObgets = [
    {
        id:1,
        titolo:"Fortnite",
        immagine:"https://store-images.s-microsoft.com/image/apps.29094.70702278257994163.1152c6f1-f586-40eb-a61e-0f8bad1ee621.314f1cc2-cc6c-4ff5-a64c-8de57bb88084?q=90&w=177&h=177",
        descrizione:"Sopravvivi fino alla fine nelle modalità Battaglia reale e Zero costruzioni, esplora e sopravvivi in LEGO Fortnite, raggiungi il traguardo con Rocket Racing o assisti a un concerto con il Festival di Fortnite. Gioca con gli amici a migliaia di isole gratuite realizzate dai creatori, tra cui deathrun, giochi gestionali, corse, sopravvivenza zombi e altro ancora! Unisciti alla community dei creatori e costruisci la tua isola con Unreal Editor per Fortnite (UEFN) o gli strumenti della modalità Creativa di Fortnite.",
        link:"https://it.trustpilot.com/review/fortnite.com",
    },
    {
        id:2,
        titolo:"Call of Duty®: Warzone™",
        immagine:"https://store-images.s-microsoft.com/image/apps.749.13739535057760905.7c8fd6b8-823a-494c-be29-9826314658d6.a57e78af-2f06-4448-a230-87064b820fb3?q=90&w=177&h=177",
        descrizione:"Ti diamo il benvenuto in Call of Duty®: Warzone™, l'enorme arena di combattimento free-to-play che ora include Urzikstan, Rebirth Island e Fortune's Keep.Il gioco si fa duroPreparati a combattere in un'inedita metropoli con Urzikstan, la nuova grande mappa Battle royale. Lanciati e festeggia l'epico ritorno di Rebirth Island e Fortune's Keep, due mappe Ritorno che accenderanno l'entusiasmo di veterani e nuove reclute. Cerca ricompense Scopri casse di scorte e completa contratti per costruire il tuo arsenale e guadagnare un vantaggio tattico. Per la modalità di gioco di Call of Duty®: Warzone™ non sarà necessario un abbonamento Game Pass Core, che sarà invece sempre richiesto per tutte le altre modalità online.",
        link:"https://it.trustpilot.com/review/www.callofduty.com",
    },
    {
        id:3,
        titolo:"Grand Theft Auto V (Xbox One)",
        immagine:"https://store-images.s-microsoft.com/image/apps.7814.68565266983380288.0f5ef871-88c0-45f7-b108-6aacbc041fcf.b7e42789-b2bf-4b60-bf0a-f891f2f04226?q=90&w=177&h=177",
        descrizione:"Un giovane truffatore, un rapinatore di banche in pensione e uno spaventoso psicopatico si ritrovano nel mirino degli elementi più discutibili del mondo della malavita, del governo e dell'industria dello spettacolo: per sopravvivere dovranno mettere in atto una serie di audaci colpi, in una città spietata dove non possono fidarsi di nessuno, men che meno l'uno dell'altro. Esplora il mondo di Los Santos e Blaine County nell'esperienza definitiva di Grand Theft Auto V, caratterizzata da una vasta gamma di miglioramenti tecnici per nuovi e vecchi giocatori.",
        link:"https://multiplayer.it/recensioni/140783-grand-theft-auto-v-gta-5-grand-theft-next.html",
    },
    {
        id:4,
        titolo:"ARK: Survival Ascended",
        immagine:"https://store-images.s-microsoft.com/image/apps.22041.14545480955348978.971a18b6-ebe3-437f-af65-4ba072de8964.4929058d-944d-48ac-bbf3-d52f18c24565?q=90&w=177&h=177",
        descrizione:"Rinasci in una nuova esperienza di sopravvivenza dei dinosauri oltre i tuoi sogni più sfrenati... mentre ARK viene reinventato da zero nella tecnologia dei videogiochi di prossima generazione con Unreal Engine 5! Ti svegli su un'isola misteriosa, i tuoi sensi sono sopraffatti dalla luce solare accecante e dai colori brillanti che rimbalzano su ogni superficie intorno a te, le acque azzurre di un'isola verdeggiante lambiscono i tuoi piedi nudi. Un profondo ruggito echeggia dalla giungla nebbiosa, spingendoti all'azione e tu ti alzi, non spaventato, ma incuriosito. Sei pronto a formare una tribù, domare e allevare centinaia di specie di dinosauri e altre creature primordiali, esplorare, creare, costruire e combattere per raggiungere la cima della catena alimentare? Il tuo nuovo mondo ti aspetta... attraversa lo specchio e unisciti ad esso!",
        link:"https://www.gamereactor.it/ark-survival-ascended-1108273/",
    },
    {
        id:5,
        titolo:"Minecraft",
        immagine:"https://store-images.s-microsoft.com/image/apps.13222.13850085746326678.a9b1e0db-29d0-40f3-a86c-2155353d053c.9ac3b8cf-240c-413b-bbce-46427455f5b6?q=90&w=177&h=177",
        descrizione:"Esplora mondi generati casualmente e realizza costruzioni di ogni tipo, dal più umile dei rifugi al più maestoso dei castelli. Gioca in modalità Creativa con risorse illimitate o scava nelle profondità del mondo in modalità Sopravvivenza, creando armi e armature con cui difenderti dai nemici.",
        link:"https://multiplayer.it/recensioni/137276-minecraft-lintramontabile.html",
    },
    {
        id:6,
        titolo:"Tom Clancy's Rainbow Six® Siege",
        immagine:"https://store-images.s-microsoft.com/image/apps.64361.65170969132831011.ecb621da-0ebf-4e9a-9c6b-5366a71d333b.b67210f4-9c81-48ad-93c8-2ad8c426300a?q=90&w=177&h=177",
        descrizione:"Tom Clancy's Rainbow Six® Siege è uno sparatutto d'élite a squadre, tattico e realistico, in cui trionfano pianificazione ed esecuzione ad alto livello. È caratterizzato da un gameplay 5v5 attacco contro difesa e da intensi combattimenti ravvicinati in ambienti distruttibili. Scegli tra oltre 60 operatori, ognuno con gadget unici e dotazioni di armi personalizzabili. Supera in astuzia i tuoi avversari sfondando muri, pavimenti e finestre, o attendi in agguato con trappole mortali.",
        link:"https://www.mondoxbox.com/recensione/2211/rainbow-six-siege.html",
    },
    {
        id:7,
        titolo:"THE FINALS",
        immagine:"https://store-images.s-microsoft.com/image/apps.21957.14187080498030026.722f2199-ebb0-4551-be20-8445b13a52c0.8060d7ba-4a6a-4bfb-bd5b-02ec9580b441?q=90&w=177&h=177",
        descrizione:"Trionfa su tutti, raggiungi THE FINALS e conquista i cuori del pubblico. In THE FINALS non c'è niente che può ostacolarti. Sfonda il soffitto e le pareti, distruggi qualsiasi cosa davanti a te e costruisci ponti e barricate in questa frenetica e rischiosa lotta per la fama sul palcoscenico più grande del mondo.",
        link:"https://multiplayer.it/recensioni/the-finals-recensione.html",
    },
    {
        id:8,
        titolo:"Madden NFL 24 Xbox Series X|S",
        immagine:"https://store-images.s-microsoft.com/image/apps.25009.13582651418363129.1a01c2b2-8587-4cd2-9dc0-7401bdf49afa.a90936fc-555d-4cf2-9b55-22cb218ced79?q=90&w=177&h=177",
        descrizione:"Presentazione della tecnologia SAPIEN in Madden NFL 24 su Xbox Series X|S Con la tecnologia SAPIEN si fa un balzo in avanti nel realismo dei giocatori NFL: definizione del corpo e variazione dell'aspetto fisico maggiori, movimenti più realistici.",
        link:"https://it.ign.com/madden-nfl-24/205494/review/madden-nfl-24-la-recensione",
    },
    {
        id:9,
        titolo:"STAR WARS™: Battlefront Classic Collection",
        immagine:"https://store-images.s-microsoft.com/image/apps.9398.14152583263281692.b0348270-2c83-49db-bddc-2a31747e53df.c8209227-b527-4d95-9302-7e5241b1a639?q=90&w=177&h=177",
        descrizione:"Combatti in battaglie iconiche lungo la galassia di STAR WARS™ Gioca ai titoli classici di STAR WARS Battlefront su console moderne, online e offline, in questa collezione classica completa. Conquista Galattica: Idea una strategia, recluta truppe e porta a termine il tuo piano tattico per la conquista della galassia.",
        link:"https://multiplayer.it/recensioni/star-wars-battlefront-classic-collection-recensione.html",
    },
    {
        id:10,
        titolo:"NBA 2K24 per Xbox One",
        immagine:"https://store-images.s-microsoft.com/image/apps.41998.14149820581167521.ee00106c-c535-40d2-8892-1082ebcf87c0.52323ac5-6ad6-4f5e-8382-c7279065b97e?q=90&w=177&h=177",
        descrizione:"Schiera la tua squadra per vivere il passato, il presente e il futuro della cultura del basket con NBA 2K24. Goditi il massimo dell'azione e del realismo oltre alle illimitate opzioni personalizzabili della modalità Il mio GIOCATORE in La mia CARRIERA. Arricchisci la tua collezione con una straordinaria selezione di leggende e crea la formazione dei tuoi sogni in MyTEAM. Scopri una dinamica di gioco più reattiva e grafiche più rifinite giocando con le tue squadre NBA e WNBA preferite in GIOCA ORA.",
        link:"https://multiplayer.it/recensioni/nba-2k24-recensione.html",
    },
    {
        id:11,
        titolo:"XBOX GAME PASS: DIMINUISCONO I GIOCHI IN ARRIVO A FEBBRAIO, UNO È STATO POSTICIPATO",
        immagine:"https://images.everyeye.it/img-notiziealt/xbox-game-pass-diminuiscono-giochi-arrivo-febbraio-posticipato-v3-570624-350x16.webp",
        descrizione:"Per la seconda metà del mese, Microsoft ha preparato un aggiornamento per Game Pass sicuramente meno esuberante del solito, specialmente per gli abbonati attivi su Xbox One. Spiace quindi constatare che la già esigua conta di giochi destinati alle console sia ulteriormente diminuita, passando da tre a due.",
        link:"https://www.everyeye.it/notizie/xbox-game-pass-diminuiscono-giochi-arrivo-febbraio-posticipato-570624.html",
    },
    {
        id:12,
        titolo:"CONTROLLER XBOX: GAMEPLAY REATTIVO, BLE E CAMBIO PIATTAFORMA RAPIDO CON IL NUOVO FIRMWARE",
        immagine:"https://images.everyeye.it/img-notizie/controller-xbox-gameplay-reattivo-ble-cambio-piattaforma-rapido-firmware-v5-539537-1280x720.webp",
        descrizione:"Microsoft ha iniziato i test su un nuovo firmware per i controller di Xbox One, Xbox Elite Series 2 e Xbox Adaptive Controller che introdurrà una serie importante di miglioramenti, confermando ancora una volta l'attenzione rivolta alla retrocompatibilità e al supporto per tutti i suoi hardware.",
        link:"https://www.everyeye.it/notizie/xbox-one-gameplay-reattivo-ble-firmware-vecchi-controller-539537.html",
    },
    {
        id:13,
        titolo:"XBOX CLOUD GAMING IN ARRIVO SU SERIES X|S E ONE: 100+ GIOCHI PER GAME PASS ULTIMATE",
        immagine:"https://www.everyeye.it/public/immagini/24082021/r-xbox-cloud-gaming_notizia.jpg",
        descrizione:"Xbox Cloud Gaming, ricordiamo, è alimentato da server dotati di hardware Xbox Series X, ed è già disponibile sui dispositivi Android (incluse le TV), iOS e sui browser per PC. Per utilizzarlo sono necessarie una velocità di almeno 10 Mbps e una connessione Wi-Fi a 5 Ghz. ",
        link:"https://www.everyeye.it/notizie/xbox-cloud-gaming-arrivo-series-x-124-s-one-100-giochi-game-pass-ultimate-536715.html",
    },
    {
        id:14,
        titolo:"OFFERTE XBOX: I NUOVI SCONTI SCONTI DI NATALE DI GAMESTOPZING",
        immagine:"https://images.everyeye.it/img-notizie/offerte-xbox-sconti-sconti-natale-gamestopzing-v4-485066-1280x720.jpg",
        descrizione:"Puntualissimo come ogni mese è arrivato il nuovo Volantone di GameStopZing. Quello di dicembre, ovviamente, è interamente dedicato al Natale, ed è ricco di offerte su console, videogiochi, accessori e merchandising. In questa notizia ci concentreremo sugli sconti dedicati all'ecosistema Xbox!",
        link:"https://www.everyeye.it/notizie/offerte-xbox-nuovi-sconti-sconti-natale-gamestopzing-485066.html",
    },
    {
        id:15,
        titolo:"Mortal Kombat™ 1",
        immagine:"https://store-images.s-microsoft.com/image/apps.62634.14007497573636681.4ee0da90-8866-4e78-bc18-31395aa61837.ff3ca5b6-0163-4c09-b045-8a24552e743a?q=90&w=177&h=177",
        descrizione:"Scopri un universo di Mortal Kombat™del tutto rivoluzionato, creato dal Dio del fuoco Liu Kang. Mortal Kombat™ 1 inaugura una nuova era per l'iconico franchise: un nuovo sistema di kombattimento, nuove modalità e Fatality inedite! È un periodo particolarmente roseo per gli amanti dei picchiaduro: dopo l'ottimo Street Fighter 6, ecco arrivare un altro dei titoli più attesi del genere, Mortal Kombat 1.",
        link:"https://www.mondoxbox.com/recensione/3618/mortal-kombat-1.html",
    },
    {
        id:16,
        titolo:"Red Dead Redemption 2",
        immagine:"https://store-images.s-microsoft.com/image/apps.46694.13942869738016799.078aba97-2f28-440f-97b6-b852e1af307a.983820f4-8fd4-4d72-afcc-f01cfb3b2278?q=90&w=177&h=177",
        descrizione:"America, 1899. Arthur Morgan e la banda di Van der Linde sono in fuga. Con gli agenti federali e i migliori cacciatori di taglie alle costole, la banda deve rapinare, combattere e rubare per farsi strada e cercare di sopravvivere nel cuore di un'America dura e selvaggia. Una serie di conflitti e divisioni rischiano di mettere a repentaglio l'unità del gruppo, e Arthur si ritrova costretto a scegliere tra i suoi ideali e la lealtà nei confronti della banda che l'ha cresciuto.",
        link:"https://multiplayer.it/recensioni/red-dead-redemption-2-recensione-rockstar-games.html",
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