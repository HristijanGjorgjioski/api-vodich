# Nauci povejke za API
1. API e skrateno od Application Programming Interface
2. API e posrednik za komunikacija pomejgu klient i server(frontend & backend)
3. API mu dozvoluva na tvojot sajt da komunicira so drugi sajtovi, bazi na podatoci, serveri ili servisi
4. API moze da go pretstavime kako dogovor pomejgu dve strani - klientot(front-end) pusta baranje
    do serverot(back-end) i vo zavisnost dali baranjeto e vo red, serverot vrajka odgovor
5. Sekakvi podatoci mozat da bidat prateni preku API
6. Najcesto se koristi JSON data format za strukturiranje na podatocite
    - link vo opis na videoto - poveke za JSON
7. API e nasekade okolu nas, gi koristime sekojdnevno. Koga plajkame preku mobilen,
    koga objavuvame slika na instagram, koga prebaruvame na google
9. API povik moze da bide napraven bukvalno od bilo koj aparat, denes API se koristi i vo
    modernite aparati za domajkinstvo.
10. Se e bazirano vrz request and response - baranje(pravi klient) i odgovor(dava server)
- PRIMER: Restoranot moze da go zamislime kako API
    1. Gostin === Klient - pravi baranje do server/baza(gotvac) preku Kelner(request, povik)
    2. Kelner === Povik do server/baza so podatocite sto gi dobil od gostinot(klientot)
    3. Gotvac/Kujna === Server/baza (vrajka odreden odgovor vo zavisnost sto pobaral gostinot(klientot))


# Nauci povejke za FETCH()
1. `fetch()` metodot go zapocnuva procesot na povelkuvanje podatoci od server
2. `fetch()` metodot ni vrajka `PROMISE` sto se pretvara vo objekt koj ni go vratil serverot
3. Pred `fetch()` se koristese `XMLHttpRequest()` - povejke ne se koristi
4. Preku `fetch()` moze da koristime sekakvi `HTTP Methods`
