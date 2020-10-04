const fs = require('fs');
const express = require('express');
const compression = require('compression');

const app = express();
app.set('view engine', 'ejs');
app.use(compression());
app.use(express.static('public'));

app.get([ '*' ], async (req, res) => {
    let data;

    try {
        data = await fs.readFileSync('data.json');
    } catch (error) {
        return res.render('splash', { visits: 'und', insults: 'und' });
    }

    let params = JSON.parse(data);
    
    return res.status(302).render('splash', { visits: params.visits + 1, insults: params.insults });
});

app.post('/insult', async (req, res) => {
    let data;

    try {
        data = await fs.readFileSync('data.json');
    } catch (error) {
        return res.sendStatus(501);
    }

    let params = JSON.parse(data);
    params.insults += 1;
    data = JSON.stringify(params);

    try {
        await fs.writeFileSync('data.json', data);
    } catch (error) {
        return res.sendStatus(501);
    }

    return res.sendStatus(200);
});

app.post('/visitor', async (req, res) => {
    let data;

    try {
        data = await fs.readFileSync('data.json');
    } catch (error) {
        return res.sendStatus(501);
    }

    let params = JSON.parse(data);
    params.visits += 1;
    data = JSON.stringify(params);

    try {
        await fs.writeFileSync('data.json', data);
    } catch (error) {
        return res.sendStatus(501);
    }

    return res.sendStatus(200);
});

start = async (port) => { await app.listen(port) };

module.exports = {
    start
};