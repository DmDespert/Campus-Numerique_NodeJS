//3.1 Object.keys

const bus = {
    vehicle: 'Urbanway CNG 12',
    id: 3221,
    line: 'C6',
    paint: 'chrono',
    garage: {
        name: 'Sassenage',
        place: '47'
    },
    equipments: ['sae', 'tft', 'speech']
};

//3.2 Object.values

console.log(bus.vehicle);
console.log(bus.id)
console.log(data);

for(const [key, value] of Object.entries(data)) {
    console.log(key, value);
    console.log(value.texte);
}

for(const key in data) {
    console.log(data[key].texte);
}