const Player = require("../models/Player");
const Time = require("../models/Time");

const getPlayers = async () => {
    try {
        const players = await Player.find();
        
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
        const times = await Time.find();

        return times;
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