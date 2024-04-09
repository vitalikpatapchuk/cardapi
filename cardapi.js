const express = require('express')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

let cradObgets1 = [
    {
        id:1,
        titolo:"Uncharted 4: Fine di un Ladro",
        descrizione:"Uncharted 4: Fine di un ladro porta i giocatori in un viaggio attorno al globo, per isole ricoperte dalla giungla, città remote e cime innevate alla ricerca del tesoro di Avery. Dopo il ritiro dall'attività di cercatore di tesori, Drake si trova improvvisamente di nuovo alle prese con il mondo dei ladri.",
        immagine:"https://multiplayer.net-cdn.it/thumbs/images/2021/06/10/productproduct-image-427057-0x0-q85_jpg_300x300_q85.jpg",
        link:"https://multiplayer.it/recensioni/167674-uncharted-4-fine-di-un-ladro-un-viaggio-meraviglioso.html"
    },
    {
        id:2,
        titolo:"Persona 5 Royal",
        descrizione:"Persona 5 Royal presenta uno stile visivo unico, e il premiato compositore Shoji Meguro tornerà con una colonna sonora tutta nuova. Esplora Tokyo, sblocca nuove Persone, personalizza il Covo dei Ladri, scopri un arco narrativo mai visto prima, cutscenes, finali alternativi e tanto altro!",
        immagine:"https://multiplayer.net-cdn.it/thumbs/images/2021/02/26/productproduct-image-438287-0x0-q85_jpg_300x300_q85.jpg",
        link:"https://multiplayer.it/recensioni/persona-5-royal-recensione.html"
    },
    {
        id:3,
        titolo:"Street Fighter 6",
        descrizione:"Il mondo di Street Fighter 6 è incentrato sulla cultura della strada. Dai graffiti, alla musica che rimbomba nel tumulto dei quartieri, fino al combattimento stesso. Grazie alla nuova qualità grafica, potrai inoltre sperimentare una dimensione fisica ancora più accurata. Tuffati in battaglia contro altri giocatori.",
        immagine:"https://multiplayer.net-cdn.it/thumbs/images/2022/12/29/3max_2_jpg_300x300_q85.jpg",
        link:"https://multiplayer.it/recensioni/street-fighter-6-recensione.html"
    },
    {
        id:4,
        titolo:"The Last of Us Remastered",
        descrizione:"The Last of Us Remastered include i pacchetti mappe Territori abbandonati e Territori riscattati, oltre all'acclamata campagna per giocatore singolo The Last of Us: Left Behind, che combina istinto di sopravvivenza, lealtà e amore con la giocabilità ricca di suspense tipica della saga.",
        immagine:"https://multiplayer.net-cdn.it/thumbs/images/2021/06/15/productproduct-image-427064-0x0-q85_jpg_300x300_q85.jpg",
        link:"https://multiplayer.it/recensioni/135385-the-last-of-us-remastered-joel-ed-ellie-mai-cosi-belli.html"
    },
    {
        id:5,
        titolo:"Final Fantasy VII Remake",
        descrizione:"Annunciato nel lontano 15 Giugno 2015, Final Fantasy VII Remake raccoglie a sorpresa l'instancabile appello di migliaia di fan di Final Fantasy, prefiggendosi l'ambizioso obiettivo di riproporre su Playstation 4 - ma anche su Playstation 5 e PC - lo straordinario universo di Final Fantasy VII (primo titolo per PS1 della serie, rilasciato nel 1997). Quale omaggio a un mostro sacro della saga, Final Fantasy VII Remake trae ovviamente la propria linfa creativa dalla stessa trama e dagli stessi personaggi dall'opera originale.",
        immagine:"https://multiplayer.net-cdn.it/thumbs/images/2019/09/24/final-fantasy-7-remake-cover_jpg_300x300_q85.jpg",
        link:"https://multiplayer.it/recensioni/final-fantasy-7-remake-recensione.html"
    },
    {
        id:6,
        titolo:"Divinity: Original Sin II - Definitive Edition",
        descrizione:"Divinity: Original Sin 2 - Definitive Edition è un RPG sandbox di nuova generazione. Incentrato sulla narrazione, si svolge in un mondo immenso con una storia che si adatta a chi sei e a cosa hai fatto. Incarna uno dei 6 Origin Characters originali, ognuno dotato di missioni specifiche, oppure crea un personaggio e definiscine le caratteristiche per un'avventura tutta tua. Gli dei hanno abbandonato Rivellon, ma solo un membro del tuo gruppo avrà la possibilità di diventare il Divine.",
        immagine:"https://multiplayer.net-cdn.it/thumbs/images/2019/11/23/productproduct-image-425796-0x0-q85_jpg_300x300_q85.jpg",
        link:"https://multiplayer.it/recensioni/divinity-original-sin-2-definitive-edition-recensione-ps4-xbox.html"
    },
    {
        id:7,
        titolo:"La Terra di Mezzo: L'Ombra della Guerra",
        descrizione:"Il gioco si basa sul sistema Nemesis introdotto nell'Ombra di Mordor, permettendo a Talion di guadagnare seguaci di diverse razze della Terra di Mezzo, tra cui orchi e troll e pianificare strategie complesse usando questi per completare le missioni.",
        immagine:"https://multiplayer.net-cdn.it/thumbs/images/2021/07/09/productproduct-image-405878-0x0-q85_jpg_300x300_q85.jpg",
        link:"https://multiplayer.it/recensioni/189479-la-terra-di-mezzo-lombra-della-guerra-ricevi-questo-anello-la-recensione-de-la-terra-di-mezzo-lombra-della-guerra.html"
    },
    {
        id:8,
        titolo:"Resident Evil Village",
        descrizione:"Come Resident Evil 7, Village è un Survival Horror in prima persona. La mappa di gioco comprende varie location (tra le quali un villaggio rurale ed un castello, entrambi esplorabili dal giocatore). Il sistema di gestione dell'inventario è simile a quello di Resident Evil 4.",
        immagine:"https://multiplayer.net-cdn.it/thumbs/images/2021/05/05/productproduct-image-458670-600x0-q85_jpg_300x300_q85.jpg",
        link:"https://multiplayer.it/recensioni/resident-evil-village-recensione.html"
    },
    {
        id:9,
        titolo:"Sid Meier's Civilization VI",
        descrizione:"Originariamente creato dal leggendario Sid Meier, Civilization è un gioco strategico a turni in cui l'obiettivo è costruire un impero in grado di superare la prova del tempo. Diventa il dominatore del mondo, conducendo la tua civiltà dall'età della pietra a quella dell'informazione!",
        immagine:"https://multiplayer.net-cdn.it/thumbs/images/2019/11/16/81byc39yhol_sl1500__jpg_300x300_q85.jpg",
        link:"https://multiplayer.it/recensioni/sid-meiers-civilization-6-recensione-console.html"
    },
    {
        id:10,
        titolo:"Death Stranding",
        descrizione:"Dopo una serie di devastanti esplosioni congiunte in punti nevralgici del pianeta, un misterioso evento, noto nella narrazione popolare come Death Stranding, ha aperto una breccia tra il mondo reale e la Spiaggia, una sorta di limbo che separa il regno dei morti da quello dei vivi.",
        immagine:"https://multiplayer.net-cdn.it/thumbs/images/2021/06/15/productproduct-image-424516-0x0-q85_jpg_300x300_q85.jpg",
        link:"https://multiplayer.it/recensioni/death-stranding-recensione.html"
    },
    {
        id:11,
        titolo:"Cyberpunk 2077",
        descrizione:"Ultima creazione dello studio polacco CD Projekt RED, noto per la serie The Witcher, Cyberpunk 2077 porta il giocatore nella futuristica Night City, una megalopoli dove il crimine e la corruzione vanno di pari passo a stupefacenti tecnologie e un utilizzo sempre più pervasivo della cibernetica.",
        immagine:"https://multiplayer.net-cdn.it/thumbs/images/2022/02/17/ckz4tknfj9c00gitzyth8pf1_jpg_300x300_q85.jpg",
        link:"https://multiplayer.it/recensioni/cyberpunk-2077-recensione.html"
    },
    {
        id:12,
        titolo:"Crusader Kings III",
        descrizione:"Come il predecessore, Crusader Kings III appartiene al genere grand strategy e consiste in un simulatore dinastico in cui il giocatore controlla una dinastia medievale con l'obiettivo di garantirne la perpetuazione e l'espansione, acquisendo titoli e territori attraverso guerre, matrimoni e diplomazia.",
        immagine:"https://multiplayer.net-cdn.it/thumbs/images/2022/03/28/3max_jpg_300x300_q85.jpg",
        link:"https://multiplayer.it/recensioni/crusader-kings-3-recensione-ps5-xbox-series-xs.html"
    },
    {
        id:13,
        titolo:"Final Fantasy 7 Rebirth: i migliori (e i peggiori) minigiochi",
        descrizione:"Final Fantasy 7 Rebirth ha da poco spento la candelina del primo mese trascorso sul mercato: dopo aver raccolto un risultato eccellente nella nostra recensione, si è consegnato nelle mani di un pubblico che - fatta eccezione per alcune storture nella messa in scena della narrazione - sembra averlo promosso a pieni voti, apprezzando nella maggior parte dei casi la rinnovata visione creativa della Creative Business Unit I di Square Enix. L'opera ha, infatti, messo in scena una versione stratosferica del pianeta Gaia, sorretta da un eccellente sistema di combattimento e pronta a esplodere nella maturazione dei rapporti fra i protagonisti, che si scoprono inseparabili compagni di viaggio all'ombra di alcune fra le ambientazioni più iconiche della serie.",
        immagine:"https://multiplayer.net-cdn.it/thumbs/images/2023/12/09/en_21_ff7rebirth_ss_1208_trailer_png_jpgcopy_jpg_1600x900_crop_q85.jpg",
        link:"https://multiplayer.it/articoli/final-fantasy-7-rebirth-i-migliori-e-i-peggiori-minigiochi.html"
    },
    {
        id:14,
        titolo:"Elden Ring Shadow of the Erdtree: cosa fare per prepararsi all'arrivo dell'espansione",
        descrizione:"State giocando agli ultimi capolavori giunti sul mercato come Final Fantasy 7 Rebirth e Dragon's Dogma 2? Siete in prima linea nel vostro live service preferito? O state aspettando un gioco in uscita tra poco? Male. Questo è il momento perfetto per rispondere: sto giocando a Elden Ring.",
        immagine:"https://multiplayer.net-cdn.it/thumbs/images/2023/03/08/elden_ring_shadow_of_the_erdtree_2_jpg_1600x900_crop_q85.jpg",
        link:"https://multiplayer.it/articoli/elden-ring-shadow-of-the-erdtree-cosa-fare-prepararsi-arrivo-espansione.html"
    },
    {
        id:15,
        titolo:"PlayStation Store, Sconti di Primavera: le migliori offerte sui giochi PS4 e PS5",
        descrizione:"Su PlayStation Store sono tornati gli Sconti di Primavera, una promozione valida fino al prossimo 11 aprile che coinvolge un'ampia gamma di giochi PS4 e PS5, spesso disponibili al prezzo più basso di sempre grazie a riduzioni che arrivano al 75%. Ebbene, quali sono le offerte da non perdere?",
        immagine:"https://multiplayer.net-cdn.it/thumbs/images/2024/04/07/banishers_jpg_1600x900_crop_q85.jpg",
        link:"https://multiplayer.it/articoli/playstation-store-sconti-di-primavera-2024-migliori-offerte-giochi-ps4-ps5.html"
    },
    {
        id:16,
        titolo:"SONY CAMBIA LA STRATEGIA DI ANNUNCIO DEI NUOVI GIOCHI? E' UNA SCIOCCHEZZA, DICE SCHREIER",
        descrizione:"Dopo aver blastato il leaker Silknight accusandolo di riportare leak fasulli, Jason Schreier si espone in prima persona per smentire un leak riportato proprio dal presunto insider, salito agli onori della cronaca per aver svelato in anticipo la data di annuncio di Ghost of Tsushima per PC.",
        immagine:"https://images.everyeye.it/img-notizie/sony-cambia-strategia-annuncio-giochi-e-sciocchezza-schreier-v3-709438-1280x720.webp",
        link:"https://www.everyeye.it/notizie/sony-cambia-strategia-annuncio-giochi-e-sciocchezza-schreier-709438.html"
    },
    {
        id:17,
        titolo:"PLAYSTATION: HIROKI TOTOKI È ORA IN CARICA COME CEO AD INTERIM, JIM RYAN HA LASCIATO",
        descrizione:"Il 29 marzo scorso Jim Ryan ha lasciato la guida di PlayStation dopo trent'anni di lavoro in Sony, in queste ore dunque Hiroki Totoki è entrato in carica come nuovo CEO ad Interim della divisione gaming del colosso nipponico. Già COO e CFO di Sony Corporation, Totoki ricopre ora la carica di Presidente di PlayStation, ruolo che potrà ricoprire per un massimo di dodici mesi in attesa di trovare un valido nome che possa portare avanti la legacy e la visione di Sony Interactive Entertainment.",
        immagine:"https://images.everyeye.it/img-notizie/playstation-hiroki-totoki-carica-come-ceo-interim-jim-ryan-lasciato-v4-708695-1280x720.webp",
        link:"https://www.everyeye.it/notizie/playstation-hiroki-totoki-ufficialmente-carica-come-ceo-interim-708695.html"
    },
    {
        id:18,
        titolo:"SONY SPINGE SU REMASTER E REMAKE, ALCUNI GIOCHI USCIRANNO IN CONTEMPORANEA SU PS5 E PC?",
        descrizione:"Silknigth è un fiume in piena, l'insider diventato celebre per aver anticipato la data di annuncio di Ghost of Tsushima per PC sembra essere bene informato sugli affari di Sony e ci rivela alcuni retroscena molto interessanti. A quanto pare Sony non avrebbe intenzione di fermare la macchine delle remaster e attualmente avrebbe in cantiere una serie di riedizioni (remake e remaster) in fase di sviluppo, in particolare il 2025 sarà un anno significativo per il brand con probabile riferimento ai festeggiamenti per il trentesimo anniversario di PlayStation, che cade il 3 dicembre 2024.",
        immagine:"https://images.everyeye.it/img-notizie/sony-spinge-remaster-remake-giochi-usciranno-contemporanea-ps5-pc-v4-704085-1280x720.webp",
        link:"https://www.everyeye.it/notizie/sony-spinge-remaster-remake-giochi-usciranno-contemporanea-ps5-pc-704085.html",
    },
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