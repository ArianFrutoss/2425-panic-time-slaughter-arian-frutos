const probCalculationDice = () => {
    return Math.floor(Math.random() * 100 + 1);
}

const coinSearchDice = () => {
    return Math.floor(Math.random() * 20 + 1);
}

const weaponDamageDice = () => {
    return Math.floor(Math.random() * 4 + 1);
}

const dailyHealingDice = () => {
    return Math.floor(Math.random() * 3 + 1);
}

const BetDice = () => {
    return Math.floor(Math.random() * 2 + 1);
}

const kmsDice = () => {
    return Math.floor(Math.random() * 10 + 1);
}

const selectedNumberDice = (num) => {
    return Math.floor(Math.random() * num + 1);
}

module.exports = {
    probCalculationDice,
    coinSearchDice,
    weaponDamageDice,
    dailyHealingDice,
    BetDice,
    kmsDice,
    selectedNumberDice,
}