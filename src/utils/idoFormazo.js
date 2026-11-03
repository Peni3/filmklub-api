function percbolSzoveg(perc){
    const ora = Math.floor(perc / 60);
    const maradekperc = perc % 60;
    return `${ora} óra, ${maradekperc} perc`;
}

module.exports = percbolSzoveg;