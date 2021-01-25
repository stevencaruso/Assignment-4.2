import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Player from './models/Player';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/myteam');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/players').get((req, res) => {
    Player.find((err, players) => {
        if (err)
            console.log(err);
        else
            res.json(players);
    });
});

router.route('/players/:id').get((req, res) => {
    Player.findById(req.params.id, (err, Player) => {
        if (err)
            console.log(err);
        else
            res.json(Player);
    })
});

router.route('/players/add').post((req, res) => {
    let Player = new Player(req.body);
    Player.save()
        .then(Player => {
            res.status(200).json({'Player': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/players/update/:id').post((req, res) => {
    Player.findById(req.params.id, (err, Player) => {
        if (!Player)
            return next(new Error('Could not load Document'));
        else {
            Player.First_Name = req.body.First_Name;
            Player.Last_Name = req.body.Last_Name;
            Player.Age = req.body.Age;
            Player.Free_Throws = req.body.Free_Throws;
            Player.Dunks = req.body.Dunks;
            Player.Deaths_of_Fans = req.body.Death_of_Fans;

            Player.save().then(Player => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/players/delete/:id').get((req, res) => {
    Issue.findByIdAndRemove({_id: req.params.id}, (err, Player) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    });
});

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));