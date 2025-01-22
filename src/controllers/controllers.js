const services = require("../services/services");

const getPlayers = async (req, res) => {
    try{
        const players = await services.getPlayers();

        if (players.length === 0) {
            return res.status(404).send({message: "players don't exist"});
        }
        res.send({ status: 200, data: players});
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED",
                message: "Error making the request: ",
                data: { error: error?.message || error }});
    }
}

const getTime = async (req, res) => {
    try{
        const time = await services.getTime();

        if (time.length === 0) {
            return res.status(404).send({message: "Time don't exist"});
        }
        res.send({ status: 200, data: time});
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED",
                message: "Error making the request: ",
                data: { error: error?.message || error }});
    }
}

const postTime = async (req, res) => {
    try{
        const time = await services.getTime();

        if (time.length === 0) {
            return res.status(404).send({message: "Time don't exist"});
        }
        res.send({ status: 200, data: time});
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED",
                message: "Error making the request: ",
                data: { error: error?.message || error }});
    }
}

module.exports = {
    getPlayers,
    getTime,
    postTime,
}