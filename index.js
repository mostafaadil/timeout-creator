var sleeper = {}
sleeper.takeNap = async function (time) {
    console.log(1);
    await sleep(time);
    console.log(2);
}
sleeper.sleep = function (ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

module.exports = sleeper;