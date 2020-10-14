const contracts = require('./Contracts');

exports.getAllContracts =  (req, res) => {
    res.json(contracts.getAllContracts());
};

exports.getSingleContract = (req, res) =>{
   let {id} = req.params;
   id = parseInt(id);
   let contract = contracts.getSingleContractById(id);
   res.json(contract);
};
exports.singlePost = (req, res) =>{
    const {name, phone, email} = req.body;
    const contract = contracts.createContract({
        name,
        phone,
        email
    });
    res.json(contract);
};
exports.postUpdated = (req, res) =>{
    let {id} = req.params;
    id = parseInt(id);
    let {name, phone, email} = req.body;
    let contract = contracts.updateContractById(id, {
        name,
        phone,
        email
    });
    res.json(contract);
};
exports.deletePost = (req, res) => {
    let {id} = req.params;
    id = parseInt(id);
    let contract = contracts.deleteContractById(id);
    res.json(contract);
};