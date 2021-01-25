import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let players = new Schema({
    First_Name: {
        type: String
    },
    Last_Name: {
        type: String 
    },
    Age: {
        type: String
    },
    Free_Throws: {
        type: String
    },
    Dunks: {
        type: String
    },
    Deaths_of_Fans: {
        type: String
    }
});

export default mongoose.model('players', players);