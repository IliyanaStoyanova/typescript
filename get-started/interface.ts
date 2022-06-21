interface OS {
    name: string;
    language: string;
}
const desert = (type: OS): void => {
    console.log(`Android ${type.name} has ${type.language} language`);
};
const nougat = {
    name: 'N',
    language: 'Java'
}

desert(nougat);