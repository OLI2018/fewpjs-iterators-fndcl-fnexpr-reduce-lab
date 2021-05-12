const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// arrow function 

    // const totalBatteries = batteryBatches.reduce ((accumulator, currentValue) => accumulator + currentValue); 

// inline function 

    const totalBatteries = batteryBatches.reduce (function (accumulator, currentValue) {return accumulator + currentValue}); 



