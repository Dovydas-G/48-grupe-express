import { Router } from "express";

const apiRouter = Router();


apiRouter.get('/api', (req, res) => {
   return res.send(`Sveiki atvyke i API puslapi. Pasirinkite viena is veiksmu: suma, atimtis, daugyba, dalyba`);
});

apiRouter.get('/api/:veiksmas', (req, res) => {
    const mathFunc = req.params.veiksmas;

    if (mathFunc !== 'veiksmas' && mathFunc !== 'atimtis' && mathFunc !== 'daugyba' && mathFunc !== 'dalyba') {
        return res.send(`Norima atlikti funkcija yra neatpazinta`)
    }

   return res.send(`Norint susumuoti, reikia nurodyti 2 skaicius`);
});

apiRouter.get('/api/:veiksmas/:pirmas', (req, res) => {
   return res.send(`Norint susumuoti, dar truksta vieno skaiciaus`);
});

apiRouter.get('/api/:veiksmas/:pirmas/:antras', (req, res) => {
    const a = (+ req.params.pirmas);
    const b = (+ req.params.antras);

    if (isNaN(a)) {
        return res.send(`Pirmas parametras nera tikras skaicius`);
    }

    if (isNaN(b)) {
        return res.send(`Antras parametras nera tikras skaicius`);
    }


    const sum = +(a + b).toFixed(10);
    return res.send(`${a} + ${b} = ${sum}`);
});




//Reikia priimti varda ir pavarde ir grazinti inicialus.

apiRouter.get('/apiname', (req, res) => {

    return res.send('Iveskite: varda ir pavarde');
 });


apiRouter.get('/apiname/:vardas/:pavarde', (req, res) => {
    const name = req.params.vardas;
    const lastName = req.params.pavarde;

    const result = `${name[0]}. ${lastName[0]}.`
    return res.send(result);
 });


 //Kreipiantis konkreciai i toki URL yra grazinamas laikas: hh:mm:ss

apiRouter.get('/apitime/time', (req, res) => {
    function plusZero (digits) {
        if (digits < 10) {
            digits = '0' + digits;
        }
        return digits;
      }

    const start = new Date()
    const hours = plusZero(start.getHours());
    const minutes = plusZero(start.getMinutes());
    const seconds = plusZero(start.getSeconds());

    const time = `${hours}val : ${minutes}min : ${seconds}sec`;
    return res.send(time);
 });


 apiRouter.get('/apitimewords/time', (req, res) => {
    
    const firstNumObj = {
        '1': 'pirma',
        '2': 'antra',
        '3': 'trecia',
        '4': 'ketvirta',
        '5': 'penkta',
        '6': 'sesta',
        '7': 'septinta',
        '8': 'astunta',
        '9': 'devinta',
        '10': 'desimt',
        '11': 'venuolika',
        '12': 'dvylika',
        '13': 'trylika',
        '14': 'keturiolika',
        '15': 'penkiolika',
        '16': 'sesiolika',
        '17': 'septyniolika',
        '18': 'astuoniolika',
        '19': 'devyniolika',
        '20': 'dvidesimt',
        '21': 'dvidesimt pirma',
        '22': 'dvidesimt antra',
        '23': 'dvidesimt trecia',
        '24': 'dvidesimt ketvirta',
    }
    
    const secondNumObj = {
        '10': 'desimt',
        '20': 'dvidesimt',
        '30': 'trisdesimt',
        '40': 'keturiasdesimt',
        '50': 'penkiasdesimt',
        '60': 'sesiasdesimt',
    }
    
    const thirdNumObj = {
        '0': 'nulis',
        '1': 'viena',
        '2': 'dvi',
        '3': 'trys',
        '4': 'keturios',
        '5': 'penkios',
        '6': 'sesios',
        '7': 'septynios',
        '8': 'astuonios',
        '9': 'devynios',
    }
     
    
    const start = new Date()
    const hours = '' + start.getHours();
    const minutes = '' + start.getMinutes();
    const seconds = '' +  start.getSeconds();
    
    const h = firstNumObj[hours];
    let m = 0;
    let s = 0;
    
    if (seconds < 10) {
        s = (thirdNumObj[seconds]);
    }
    else if (seconds < 20) { 
        s = (firstNumObj[seconds]);
    }
    
    else  {
        s = (seconds[1] < 1 ? secondNumObj[seconds[0] + '0'] : secondNumObj[seconds[0] + '0'] + ' ' + thirdNumObj[seconds[1]]);
    }
    
    
    if (minutes < 10) {
        m = (thirdNumObj[minutes]);
        
    }
    else if (minutes < 20) { 
        m = (firstNumObj[minutes]);
    }
    
    else  {
        m = (minutes[1] < 1 ? secondNumObj[minutes[0] + '0'] : secondNumObj[minutes[0] + '0'] + ' ' + thirdNumObj[minutes[1]]);
    }
    
    const time = `${h} val : ${m} min : ${s} sec`;
    

    return res.send(time);
 });



 export { apiRouter };


 