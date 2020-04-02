import Bank from './Bank';

class Player {
    constructor(name) {
        this.name = name;
        this.bank = new Bank();
        this.turnPlayed = 0
    }

    addAccount(number) {
        this.bank.accountContent += number;
    }

    getAccount() {
        return this.bank.accountContent;
    }
}

export default Player