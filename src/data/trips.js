const trips = [
  {
    id: 1,
    destination: 'Parigi',
    image: 'https://accademiabritannica.com/public/pacchetti/264-disneyland-experience-connubio-magico-di-cultura-svago-e-incanto-raCplLSf.jpg',
    startDate: '2025-06-10',
    endDate: '2025-06-15',
    guide: { id: 1, name: 'Luca', surname: 'Bianchi' }
  },
  {
    id: 2,
    destination: 'New York',
    image: 'https://www.travelguide.uno/media/new-york.jpeg',
    startDate: '2025-07-05',
    endDate: '2025-07-10',
    guide: { id: 2, name: 'Anna', surname: 'Neri' }
  },
  {
    id: 3,
    destination: 'Dubai',
    image: 'https://octane.rent/wp-content/uploads/2023/03/The-Dubai-Marina-District.jpg',
    startDate: '2025-08-01',
    endDate: '2025-08-07',
    guide: { id: 3, name: 'Maria', surname: 'Rossi' }
  },
  {
    id: 4,
    destination: 'Barcellona',
    image: 'https://www.barcellona.org/wp-content/uploads/sites/14/barcellona-sagrada-familia-lontano-hd.jpg',
    startDate: '2025-09-10',
    endDate: '2025-09-15',
    guide: { id: 4, name: 'Giovanni', surname: 'Verdi' }
  },
  {
    id: 5,
    destination: 'Londra',
    image: 'https://londra.io/wp-content/uploads/2021/10/Londra.jpg',
    startDate: '2025-10-05',
    endDate: '2025-10-10',
    guide: { id: 5, name: 'Sara', surname: 'Bianchi' }
  },
  {
    id: 6,
    destination: 'Tokyo',
    image: 'https://www.gotokyo.org/it/plan/tokyo-outline/images/main.jpg',
    startDate: '2025-11-15',
    endDate: '2025-11-20',
    guide: { id: 6, name: 'Luca', surname: 'Gialli' }
  },
  {
    id: 7,
    destination: 'Roma',
    image: 'https://images.unsplash.com/photo-1552832230-c0197cebb158?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    startDate: '2025-06-20',
    endDate: '2025-06-25',
    guide: { id: 7, name: 'Giulia', surname: 'Conti' }
  },
  {
    id: 8,
    destination: 'Berlino',
    image: 'https://images.unsplash.com/photo-1560969588-4e16d43e33f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    startDate: '2025-07-15',
    endDate: '2025-07-20',
    guide: { id: 8, name: 'Simone', surname: 'Moretti' }
  },
  {
    id: 9,
    destination: 'Sydney',
    image: 'https://images.unsplash.com/photo-1506973008323-9366a6a9de9b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    startDate: '2025-08-10',
    endDate: '2025-08-18',
    guide: { id: 9, name: 'Chiara', surname: 'Greco' }
  },
  {
    id: 10,
    destination: 'Rio de Janeiro',
    image: 'https://images.unsplash.com/photo-1610817088921-665e751221b6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    startDate: '2025-09-01',
    endDate: '2025-09-07',
    guide: { id: 10, name: 'Davide', surname: 'Rizzo' }
  },
  {
    id: 11,
    destination: 'Amsterdam',
    image: 'https://images.unsplash.com/photo-1534351590666-ea95b172a5a5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    startDate: '2025-10-20',
    endDate: '2025-10-25',
    guide: { id: 11, name: 'Federica', surname: 'Mancini' }
  },
  {
    id: 12,
    destination: 'Pechino',
    image: 'https://images.unsplash.com/photo-1547475143-6906a59600e1?q=80&w=2890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    startDate: '2025-11-01',
    endDate: '2025-11-08',
    guide: { id: 12, name: 'Andrea', surname: 'Costanzo' }
  }
];

export default trips;