// Import both User and Scooter class for app usage

const {User, Scooter} = require('./scr/index')

// Create a class for scooter 
class ScooterApp {
    constructor() {
      this.stations = {
        "Station A": [],
        "Station B": [],
        "Station C": [],
      };
      this.registeredUsers = {};
    }
  
    registerUser(username, password, age) {
      if (this.registeredUsers[username]) {
        throw new Error("User already registered.");
      }
      if (age < 18) {
        throw new Error("User is too young to register.");
      }
      const user = new User(username, password, age);
      this.registeredUsers[username] = user;
      console.log(`User ${username} has been registered.`);
      this.registeredUsers.push(this.registerUser)
      return user;
      
    }
  
    loginUser(username, password) {
      const user = this.registeredUsers[username];
      if (user) {
      user.login(password);
        console.log(`User ${username} has been logged in.`);
      } else {
        throw new Error("Username is incorrect.");
      }
    }
  
    logoutUser(username) {
      const user = this.registeredUsers[username];
      if (user) {
        user.logout();
        console.log(`User ${username} is logged out.`);
      } else {
        throw new Error("No such user is logged in.");
      }
    }
  
    createScooter(station) {
      if (!this.stations[station]) {
        throw new Error("No such station.");
      }
      const scooter = new Scooter(station);
      this.stations[station].push(scooter);
      console.log(`Created new scooter at station ${station}.`);
      return scooter;
    }
  
    dockScooter(scooter, station) {
      if (!this.stations[station]) {
        throw new Error("No such station.");
      }
      if (this.stations[station].includes(scooter)) {
        throw new Error("Scooter is already at the station.");
      }
      scooter.dock(station);
      this.stations[station].push(scooter);
      console.log(`Scooter ${scooter.serial} is docked at station ${station}.`);
    }
  
    rentScooter(scooter, user) {
      for (const station in this.stations) {
        const index = this.stations[station].indexOf(scooter);
        if (index !== -1) {
          this.stations[station].splice(index, 1);
          scooter.rent(user);
          console.log(`Scooter ${scooter.serial} is rented by ${user.username}.`);
          return;
         }
      }
      throw new Error("Scooter is already rented.");
    }
  
    print() {
      console.log("Registered Users:");
      for (const username in this.registeredUsers) {
        const user = this.registeredUsers[username];
        console.log(`Username: ${username}, Age: ${user.age}, Logged In: ${user.loggedIn}`);
      }
  
      console.log("Stations and Scooters:");
      for (const station in this.stations) {
        console.log(`Station: ${station}, Scooters: ${this.stations[station].length}`);
      }
    }
  }