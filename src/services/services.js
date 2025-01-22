const { probCalculationDice, coinSearchDice, selectedNumberDice, kmsDice } = require("../../dice");
const Player = require("../models/Player");
const PreciousStone = require("../models/PreciousStone");
const Saddlebag = require("../models/Saddlebag");
const Time = require("../models/Time");

const getPlayers = async () => {
    try {
        const populatedPlayers = await populatePlayers();
        
        return populatedPlayers;
    } catch (error) {
        throw error;
    }
}

const populatePlayers = async () => {
    const players = await Player.find();

    players.forEach(async (player) => {
        await player.equipment.populate('weapons');
        await player.equipment.populate('saddlebag');
        await player.equipment.pouch.populate('precious_stones');
    })

    return players;
}

const getTime = async () => {
    try {
        const times = await Time.find();

        return times;
    } catch (error) {
        throw error;
    }
}

const postTime = async () => {
    try {
        await executeTime();
    } catch (error) {
        throw error;
    }
}

const executeTime = async () => {
    const players = await populatePlayers();
    const times = await Time.find();
    const saddlebags = await Saddlebag.find();
    const preciousStones = await PreciousStone.find();
    
    for (let i = 0; i < 24; i++){
        console.log(`Day hour: ${i}:00`);
        
        switch (i) {
            case 5:
                console.log('The players Rest.');
                rest(players);

                console.log('The players Collect.');
                collect(players, saddlebags, preciousStones);
            break;

            case 12:
                console.log('The players Advance.');
                advance(times);
            break;
        }
    }
}

const rest = (players) => {
    players.forEach((player) => {
        const dice = probCalculationDice();
        console.log(`${player.name} is resting`);
        
        if (dice <= 50) {
            player.stats.strenght++;
            console.log(`Roll a dice, the result is ${dice} and obtain 1 point of strength and it strength is ${player.stats.strength}`);
        } else {
            player.stats.dexterity++;
            console.log(`Roll a dice, the result is ${dice} and obtain 1 point of dexterity and it dexterity is ${player.stats.dexterity}`);
        }
    })
}

const collect = (players, saddlebags, preciousStones) => {
    players.forEach((player) => {
        const dice = probCalculationDice();
        console.log(`${player.name} is collecting`);

        if (dice <= 30) {
            player.equipment.pouch.gold++;
            console.log(`Roll a dice, the result is ${dice} and collect 1 piece of gold and it gold is ${player.equipment.pouch.gold}`);
        } else if (dice > 30 && dice <= 80) {
            const coins = coinSearchDice();
            player.equipment.pouch.coins += coins;
            console.log(`Roll a dice, the result is ${dice} and collect ${coins} coins and it coins are ${player.equipment.pouch.coins}`);
        } else {
            const preciousStoneDice = selectedNumberDice(preciousStones.length);
            player.equipment.pouch.precious_stones.push(preciousStones[preciousStoneDice]);
            console.log(`Roll a dice, the result is ${dice} and obtain ${preciousStones[preciousStoneDice].name}`);
        }

        const saddlebagsDice = selectedNumberDice(saddlebags.length);
        player.equipment.saddlebag.push(saddlebags[saddlebagsDice]);
        console.log(`obtain ${saddlebags[saddlebagsDice].name}`);
    })
}

const advance = (times) => {
    const dice = kmsDice();
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const lastTime = times[times.length - 1];
    const newTime = {
        day_number: lastTime.day_number++,
        day_week: days[times.length],
        km_traveled: dice,
        km_total: lastTime.km_total + dice,
    };

    const time = new Time(newTime);
    
    console.log(`Roll a dice, the result is ${dice}, the players travel ${time.km_traveled} kms and the total kms traveled are ${time.km_total}`);
}

module.exports = {
    getPlayers,
    getTime,
    postTime,
}