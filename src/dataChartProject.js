export default function generateDataChart(items, dataSet) {
    return dataSet.map(el => Object.assign(fillStructure(createStructure(items), el[1]), {name: el[0]}));
}

function fillStructure(structure, array) {
    array.forEach(el => structure[el.method]++);
    return structure;
}

function createStructure(items) {
    let stringArr = '{';
    items.forEach(el => {
        stringArr += `"${el.name}":0,`
    });
    stringArr = stringArr.substr(0, stringArr.length - 1);
    stringArr += '}';
    return JSON.parse(stringArr);
}
