const trips = [
  {
    id: 1,
    destination: "Paris",
    image: "https://accademiabritannica.com/public/pacchetti/264-disneyland-experience-connubio-magico-di-cultura-svago-e-incanto-raCplLSf.jpg",
    startDate: "2025-06-10",
    endDate: "2025-06-15",
    guide: { id: 1, name: "Luca", surname: "Bianchi" },
    travellers: [
      {
        id: 1,
        name: "Giulia",
        surname: "Rossi",
        birthday: "1990-04-12",
        email: "giulia.rossi@example.com",
        phone: "+39 345 678 9012",
        CF: "RSSGLI90D52H501U"
      },
      {
        id: 2,
        name: "Marco",
        surname: "Verdi",
        birthday: "1985-09-23",
        email: "marco.verdi@example.com",
        phone: "+39 347 123 4567",
        CF: "VRDMRC85P23H501Y"
      },
      {
        id: 3,
        name: "Sara",
        surname: "Russo",
        birthday: "1992-02-14",
        email: "sara.russo@example.com",
        phone: "+39 360 111 2233",
        CF: "RSSSRA92B54H501L"
      },
      {
        id: 4,
        name: "Alberto",
        surname: "Ferrari",
        birthday: "1988-07-05",
        email: "alberto.ferrari@example.com",
        phone: "+39 361 222 3344",
        CF: "FRRLBR88L05H501Z"
      }
    ]
  },
  {
    id: 2,
    destination: "New York",
    image: "https://www.travelguide.uno/media/new-york.jpeg",
    startDate: "2025-07-05",
    endDate: "2025-07-10",
    guide: { id: 2, name: "Anna", surname: "Neri" },
    travellers: [
      {
        id: 5,
        name: "Laura",
        surname: "Bianchi",
        birthday: "1992-11-30",
        email: "laura.bianchi@example.com",
        phone: "+39 348 234 5678",
        CF: "BNCLRA92S70H501Z"
      },
      {
        id: 6,
        name: "Paolo",
        surname: "Gialli",
        birthday: "1988-02-14",
        email: "paolo.gialli@example.com",
        phone: "+39 349 345 6789",
        CF: "GLLPLA88B14H501X"
      },
      {
        id: 7,
        name: "Martina",
        surname: "Colombo",
        birthday: "1991-06-20",
        email: "martina.colombo@example.com",
        phone: "+39 362 333 4455",
        CF: "CLBMRT91H60H501Q"
      },
      {
        id: 8,
        name: "Davide",
        surname: "Fontana",
        birthday: "1987-10-11",
        email: "davide.fontana@example.com",
        phone: "+39 363 444 5566",
        CF: "FNTDVD87R11H501S"
      }
    ]
  },
  {
    id: 3,
    destination: "Dubai",
    image: "https://octane.rent/wp-content/uploads/2023/03/The-Dubai-Marina-District.jpg",
    startDate: "2025-08-01",
    endDate: "2025-08-07",
    guide: { id: 3, name: "Maria", surname: "Rossi" },
    travellers: [
      {
        id: 9,
        name: "Alessandro",
        surname: "Neri",
        birthday: "1991-05-20",
        email: "alessandro.neri@example.com",
        phone: "+39 350 123 4567",
        CF: "NRIALS91E20H501V"
      },
      {
        id: 10,
        name: "Elena",
        surname: "Bianchi",
        birthday: "1993-08-15",
        email: "elena.bianchi@example.com",
        phone: "+39 351 234 5678",
        CF: "BNCLNE93M55H501W"
      },
      {
        id: 11,
        name: "Federico",
        surname: "Russo",
        birthday: "1990-12-03",
        email: "federico.russo@example.com",
        phone: "+39 364 555 6677",
        CF: "RSSFRC90T03H501M"
      },
      {
        id: 12,
        name: "Chiara",
        surname: "Marini",
        birthday: "1989-03-29",
        email: "chiara.marini@example.com",
        phone: "+39 365 666 7788",
        CF: "MRNCHR89C29H501N"
      }
    ]
  },
  {
    id: 4,
    destination: "Barcelona",
    image: "https://www.barcellona.org/wp-content/uploads/sites/14/barcellona-sagrada-familia-lontano-hd.jpg",
    startDate: "2025-09-10",
    endDate: "2025-09-15",
    guide: { id: 4, name: "Giovanni", surname: "Verdi" },
    travellers: [
      {
        id: 13,
        name: "Francesca",
        surname: "Rossi",
        birthday: "1989-12-01",
        email: "francesca.rossi@example.com",
        phone: "+39 352 345 6789",
        CF: "RSSFNC89T41H501Y"
      },
      {
        id: 14,
        name: "Lorenzo",
        surname: "Gialli",
        birthday: "1990-03-22",
        email: "lorenzo.gialli@example.com",
        phone: "+39 353 456 7890",
        CF: "GLLLRZ90C22H501Z"
      },
      {
        id: 15,
        name: "Margherita",
        surname: "Conti",
        birthday: "1992-07-14",
        email: "margherita.conti@example.com",
        phone: "+39 366 777 8899",
        CF: "CNTMRT92L14H501K"
      },
      {
        id: 16,
        name: "Riccardo",
        surname: "Grassi",
        birthday: "1988-01-08",
        email: "riccardo.grassi@example.com",
        phone: "+39 367 888 9900",
        CF: "GRSRCD88A08H501P"
      }
    ]
  },
  {
    id: 5,
    destination: "Londra",
    image: "https://londra.io/wp-content/uploads/2021/10/Londra.jpg",
    startDate: "2025-10-05",
    endDate: "2025-10-10",
    guide: { id: 5, name: "Sara", surname: "Bianchi" },
    travellers: [
      {
        id: 17,
        name: "Matteo",
        surname: "Verdi",
        birthday: "1992-06-18",
        email: "matteo.verdi@example.com",
        phone: "+39 354 567 8901",
        CF: "VRDMTT92H18H501X"
      },
      {
        id: 18,
        name: "Chiara",
        surname: "Neri",
        birthday: "1994-09-30",
        email: "chiara.neri@example.com",
        phone: "+39 355 678 9012",
        CF: "NRCCHR94P70H501W"
      },
      {
        id: 19,
        name: "Giorgia",
        surname: "Barbieri",
        birthday: "1991-11-22",
        email: "giorgia.barbieri@example.com",
        phone: "+39 368 999 0011",
        CF: "BRBGIA91S22H501D"
      },
      {
        id: 20,
        name: "Simone",
        surname: "De Luca",
        birthday: "1987-04-17",
        email: "simone.deluca@example.com",
        phone: "+39 369 000 1122",
        CF: "DLCSMN87D17H501J"
      }
    ]
  },
  {
    id: 6,
    destination: "Tokyo",
    image: "https://www.gotokyo.org/it/plan/tokyo-outline/images/main.jpg",
    startDate: "2025-11-15",
    endDate: "2025-11-20",
    guide: { id: 6, name: "Luca", surname: "Gialli" },
    travellers: [
      {
        id: 21,
        name: "Federica",
        surname: "Rossi",
        birthday: "1991-07-25",
        email: "federica.rossi@example.com",
        phone: "+39 356 789 0123",
        CF: "RSSFDR91L65H501Y"
      },
      {
        id: 22,
        name: "Davide",
        surname: "Bianchi",
        birthday: "1987-11-05",
        email: "davide.bianchi@example.com",
        phone: "+39 357 890 1234",
        CF: "BNCDVD87S45H501Z"
      },
      {
        id: 23,
        name: "Valentina",
        surname: "Romano",
        birthday: "1990-02-28",
        email: "valentina.romano@example.com",
        phone: "+39 370 111 2233",
        CF: "RMNVLN90C28H501T"
      },
      {
        id: 24,
        name: "Nicola",
        surname: "Silvestri",
        birthday: "1989-05-12",
        email: "nicola.silvestri@example.com",
        phone: "+39 371 222 3344",
        CF: "SLVNCL89E12H501R"
      }
    ]
  }
];

export default trips;