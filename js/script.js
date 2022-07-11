const players = [
    {id: 111, name: 'Vasa', balance: 105, online: true},
    {id: 112, name: 'Peta', balance: 115, online: false},
    {id: 113, name: 'Alla', balance: 20, online: true},
];


const onlineAndSorted = players
        .filter(p => p.online)
        .sort((a, b) => a.balance - b.balance)
        ;

        
console.table(onlineAndSorted);

