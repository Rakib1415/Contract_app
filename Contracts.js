class Contracts {
    constructor(){
        this.contracts = [];
    }
    getAllContracts(){
        return this.contracts;
    }
    getSingleContractById(id){
       return this.contracts.find(contract => contract.id === id);
    } 
    createContract(contract){
       contract.id = this.contracts.length + 1;
        this.contracts.push(contract);
        return contract;
    }

    updateContractById(id, updateContract){
        let index = this.contracts.findIndex(contract => contract.id ===id);
        this.contracts[index].name = updateContract.name || this.contracts[index].name;
        this.contracts[index].phone = updateContract.phone || this.contracts[index].phone;
        this.contracts[index].email = updateContract.email || this.contracts[index].email;
        return this.contracts[index];
    }

    deleteContractById(id){
        let index = this.contracts.findIndex(contract => contract.id ==id);
        let deleteContract = this.contracts[index];
        this.contracts = this.contracts.filter(contract => contract.id != id);
        return deleteContract;
    }
}
module.exports = new Contracts();