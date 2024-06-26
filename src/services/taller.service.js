const TallerModel = require( '../models/Taller');

async function registerTaller(product) {
    return await TallerModel.create( product );
}

async function getAllTallers() {
    return await TallerModel.find();
}

async function getOneTallerById( id ) {
    return await TallerModel.findById( id );
}

async function removeOneTallerById(id) {
    return await TallerModel.findOneAndRemove(id);
    
}

async function updateOneTallerById() {
    return await TallerModel.findOneAndUpdate(
        {_id: id },
        updateTaller,
        { new: true }
    );
}


module.exports = {
    registerTaller,
    getAllTallers,
    getOneTallerById,
    removeOneTallerById,
    updateOneTallerById
}