const assert = require('assert');
const OfficeController = require('../../controllers/office.controller');


describe('OfficeController Spec', () => {
  const controllerInstance = () => new OfficeController();

  const defaultProfileData = {
    id: '111',
    name: 'Nome do fulano',
    imageUrl: 'http://localhost/img.jpg',
    email: 'Mail@mail.com',
  };


  it('adds user to an office', () => {
    let controller = controllerInstance();
    controller.addUserInRoom(defaultProfileData, 'room-1');

    const expectedMap = controller.getUsersInOffice().get(defaultProfileData.id);

    assert.equal(expectedMap.user.id, '111');
    assert.equal(expectedMap.room, 'room-1');
  });

  it('removes user from the office', () => {
    let controller = controllerInstance();

    controller.addUserInRoom(defaultProfileData, 'room-1');
    controller.removeUser(defaultProfileData.id);

    const expectedMap = controller.getUsersInOffice().get(defaultProfileData.id);

    assert.equal(expectedMap, null);
  });

  it('returns offices size as 1 when add user to two offices', () => {
    let controller = controllerInstance();

    controller.addUserInRoom(defaultProfileData, 'room-1');
    controller.addUserInRoom(defaultProfileData, 'room-2');

    const expectedUsersInOffice = controller.getUsersInOffice();

    assert.equal(expectedUsersInOffice.size, 1);
  });

  it('changes user from an office need returns last office added', () => {
    let controller = controllerInstance();

    controller.addUserInRoom(defaultProfileData, 'room-1');
    controller.addUserInRoom(defaultProfileData, 'room-2');

    const expectedUsersInOffice = controller.getUsersInOffice().get(defaultProfileData.id);

    assert.equal(expectedUsersInOffice.room, 'room-2');
  });
});
