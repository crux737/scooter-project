class Scooter {
    static nextSerial = 1;
  
    constructor(station) {
      this.station = station;
      this.user = null;
      this.serial = Scooter.nextSerial++;
      this.charge = 100;
      this.isBroken = false;
    }
  
    rent(user) {
      if (this.charge > 20 && !this.isBroken) {
        this.station = null;
        this.user = user;
      } else {
        throw new Error("Scooter needs to charge or needs repair.");
      }
    }
  
    dock(station) {
      this.station = station;
      this.user = null;
    }
  
    recharge() {
      const interval = setInterval(() => {
        if (this.charge < 100) {
          this.charge += 10;
          console.log(`Scooter ${this.serial} charge: ${this.charge}%`);
        } else {
          clearInterval(interval);
        }
      }, 1000);
    }
  
    requestRepair() {
      setTimeout(() => {
        this.isBroken = false;
        console.log(`Scooter ${this.serial} repair completed.`);
      }, 5000);
    }
  }
module.exports = Scooter  