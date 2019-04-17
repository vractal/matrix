const HashMap = require('hashmap');

/**
 * OfficeController
 */
class OfficeController {
  constructor() {
    this.usersInRoomOffice = new HashMap();
  }

  addUserInRoom(user, room) {
    const userInRoom = { user, room };

    this.removeUser(user.id);
    this.usersInRoomOffice.set(user.id, userInRoom);
  }

  setUserInMeet(userId,isUserInMeet) {
    const userInRoom = this.getUserInRoom(userId);

    if(userInRoom){
      this.addUserInRoom(
        Object.assign(userInRoom.user, { inMeet: isUserInMeet }),
        userInRoom.room
      )
    }
  }

  getUserInRoom(userId) {
    return this.usersInRoomOffice.get(userId);
  }

  removeUser(userId) {
    this.usersInRoomOffice.delete(userId);
  }

  getUsersInOffice() {
    return this.usersInRoomOffice;
  }

  getUsersInOfficeByMap() {
    let newMap = new Map();

    this.getUsersInOffice().forEach(
      (value, key) => newMap[key] = value
    );

    return newMap;
  }
}

module.exports = OfficeController;
