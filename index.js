let driverid = 0
let passengerid = 0
let tripid = 0
let store = {drivers: [], passengers: [], trips: []}
class Driver{
  constructor(name){
    this.name = name
    this.id = ++driverid
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter(trip => {return trip.driverid === this.id})
  }
}
class Passenger{
  constructor(name){
    this.name = name
    this.id = ++passengerid
    store.passengers.push(this)
  }
}
class Trip{
  constructor(name, driver){
    this.name = name
    this.id = ++tripid
    if(driver){
      this.driverid = driver.id
    }
    store.trips.push(this)
    }
    trip(driver){
      this.driverid = driver.id
    }

}
