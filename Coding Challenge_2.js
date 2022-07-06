
'use strict';

// -------------- Coding Challenge #2 --------------

let fieldPlayers1;
let fieldPlayers2;
let gk;

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: 
    [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
};

for(const [i, player] of game.scored.entries()){
    console.log(`Goal ${i + 1}: ${player}`);
}

let sum = 0;
for(const y of Object.values(game.odds)){
    sum += y;
}
let average = sum / Object.values(game.odds).length;
console.log(average);

for(const [team, odd] of Object.entries(game.odds)){
    const teamSTR = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamSTR}: ${odd}`);
}

const scorers = {};
for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);   