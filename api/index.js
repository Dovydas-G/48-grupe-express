import { Router } from "express";
import { formatTimeAsText } from "../lib/formatTimeAsText.js";
import { timeValueTitle } from "../lib/formatTimeAsText.js";

const apiRouter = Router();


apiRouter.get('/api', (req, res) => {
   return res.send(`Sveiki atvyke i API puslapi. Pasirinkite viena is veiksmu: suma, atimtis, daugyba, dalyba`);
});

apiRouter.get('/api/math/:veiksmas', (req, res) => {
    const mathFunc = req.params.veiksmas;

    if (mathFunc !== 'veiksmas' && mathFunc !== 'atimtis' && mathFunc !== 'daugyba' && mathFunc !== 'dalyba') {
        return res.send(`Norima atlikti funkcija yra neatpazinta`)
    }

   return res.send(`Norint susumuoti, reikia nurodyti 2 skaicius`);
});

apiRouter.get('/api/math/:veiksmas/:pirmas', (req, res) => {
   return res.send(`Norint susumuoti, dar truksta vieno skaiciaus`);
});

apiRouter.get('/api/math/:veiksmas/:pirmas/:antras', (req, res) => {
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

apiRouter.get('/api/initials', (req, res) => {

    return res.status(400).send('Norint pagaminti inicialus reikia nurodyti varda ir pavarde');
 });

apiRouter.get('/api/initials/:firstname', (req, res) => {

    return res.status(501).send('Norint pagaminti inicialus reikia nurodyti ne tik varda bet ir pavarde');
 });

apiRouter.get('/api/initials/:firstname/:lastname', (req, res) => {
    const firstname = req.params.firstname.trim();
    const lastName = req.params.lastname.trim();

    if (firstname.length === 0) {
        return res.status(400).send('Vardas negali buti tuscias');
    }
    if (lastName.length === 0) {
        return res.status(400).send('Pavarde negali buti tuscia');
    }

    const initials = (firstname[0] + '.' + lastName[0] + '.').toUpperCase();

    return res.status(200).send(initials);
 });


 //Kreipiantis konkreciai i toki URL yra grazinamas laikas: hh:mm:ss

apiRouter.get('/api/time', (req, res) => {
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


 apiRouter.get('/api/time-in-words', (req, res) => {
    
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
        '10': 'desimta',
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



 // Kreipiantis konkreciai i toli URL yra grazinamas laikas tokiu formatu hh:mm:ss, bet visi skaiciai yra zodziai
// pvz.: 10:57:14 => desimt valandu, penkiasdesimt septynios minutes, keturiolika sekundziu
// pasistenkti apgalvoti visas galimas gramatikos situacijas
apiRouter.get('/api/time-as-text', (req, res) => {
    const d = new Date();

    const h = formatTimeAsText(d.getHours());
    const m = formatTimeAsText(d.getMinutes());
    const s = formatTimeAsText(d.getSeconds());

    const ht = timeValueTitle(d.getHours(), 'h');
    const mt = timeValueTitle(d.getMinutes(), 'm');
    const st = timeValueTitle(d.getSeconds(), 's');

    const time1 = `${h} ${ht}, ${m} ${mt}, ${s} ${st}`;
    return res.status(200).send(time1);
});


apiRouter.get('/api/greeting', (req, res) => {

    return res.status(400).send('Norint gaudi pasisveikinimo zinute reikia nurodyti varda');
 });


 apiRouter.get('/api/greeting/:firstname', (req, res) => {
    const firstName = req.params.firstname.trim();

    if (firstName.length === 0) {
        return res.status(400).send('Vardas negali buti tuscias');
    }

    const lastLetter = firstName[firstName.length - 1].toLowerCase();
    const penultimateLetter = firstName[firstName.length - 2].toLowerCase();

    let greetingName = '';

    if (lastLetter === 'ė' && penultimateLetter !== 'i' && penultimateLetter !== 'u' && penultimateLetter !== 'y') {
        greetingName = (firstName.slice(0, -1) + 'e');
    }
    else if (lastLetter === 's' && penultimateLetter !== 'i' && penultimateLetter !== 'u' && penultimateLetter !== 'y') {
        greetingName = (firstName.slice(0, -1) + 'i');
    }
    else if (penultimateLetter === 'u') {
        greetingName = (firstName.slice(0, -2) + 'au');
    }
    else if (penultimateLetter === 'i' || penultimateLetter === 'y') {
        greetingName = (firstName.slice(0, -1));
    }
    else {
        greetingName = (firstName);
    }

    const result = greetingName.slice(0, 1).toUpperCase() + greetingName.slice(1).toLowerCase();


    return res.status(200).send(`Labas, ${result}!`);


 });


 export { apiRouter };


 