const Player = require("../models/Player");

const getPlayers = async () => {
    try {
        const players = await Player.find().exec();
        
        players.forEach(async (player) => {
            await player.equipment.populate('weapons');
            await player.equipment.populate('saddlebag');
            await player.equipment.pouch.populate('precious_stones');
        })

        return players;
    } catch (error) {
        throw error;
    }
}

const getTime = async () => {
    try {

    } catch (error) {
        throw error;
    }
}

const postTime = async () => {
    try {

    } catch (error) {
        throw error;
    }
}

module.exports = {
    getPlayers,
    getTime,
    postTime,
}