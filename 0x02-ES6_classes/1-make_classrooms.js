import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const array = [];
  const room = new ClassRoom(19);
  const room1 = new ClassRoom(20);
  const room2 = new ClassRoom(34);

  array.push(room, room1, room2);
  return array;
}
