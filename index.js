const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const counter = 0;

const totalBatteries = batteryBatches.reduce(
    (firstValue, secondValue) => firstValue + secondValue, 
    counter
)
