// import posts from "./tuits/tuits.js"
import tuitsDao from './tuits-dao.js'

let tuits = posts;

const createTuit = async (req, res) => {
    const newTuit = req.body;
    const insertedTuit = await tuitsDao.createTuit(newTuit);

    newTuit._id = (new Date()).getTime() + '';
    newTuit.topic = "Cat";
    newTuit.postedBy.username = "i_am_choonsik";
    newTuit.liked = false;
    newTuit.verified = false;
    newTuit.handle = "i_am_choonsik";
    newTuit.time = "1h";
    newTuit.title = "Default";
    // newTuit.tuit = "Tuit! Tuit!";
    newTuit.logo_image = "https://pbs.twimg.com/profile_images/1407528509170401280/B7uaH6fC_400x400.jpg",
    newTuit.avatar_image = "";
    newTuit.tuits = "0K";
    newTuit.stats.comments = 0;
    newTuit.stats.likes = 0;
    newTuit.stats.retuits = 0;

    // tuits.push(newTuit);
    res.json(newTuit);
}
const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits();
    res.json(tuits);
}


const updateTuit = async (req, res) => {
    const tuitIdtoUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitIdtoUpdate);
    // tuits = tuits.map(t => t._id === tuitIdtoUpdate ? updatedTuit : t);
    res.sendStatus(200);
}

const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);
    // tuits = tuits.filter(t => t._id !== tuitIdToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}