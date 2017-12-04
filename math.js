fetch('math.wasm')
    .then(response => response.arrayBuffer())
    .then(bytes => WebAssembly.instantiate(bytes, {}))
    .then(results => {

        const nums = [
            1.23,
            2.34,
            3.45,
            4.56,
            5.67,
            6.78,
            7.89,
            8.9,
            9.0,
            100000,
            1,
            0
        ];

        const floor = results.instance.exports.floor;

        nums.forEach(num => {
            console.time('mathfloor' + num);
            Math.floor(num);
            console.timeEnd('mathfloor' + num);

            console.time('rustfloor' + num);
            floor(num);
            console.timeEnd('rustfloor' + num);
        });

    });
