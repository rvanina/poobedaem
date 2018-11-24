import axios from 'axios';
import { HOSTNAME, PORT } from './settings';

const fetchRooms = () => axios
    .get(`http://${HOSTNAME}:${PORT}/api/fetch/rooms`)
    .then(response => response.data);

const fetchRoom = (roomId) => axios
    .get(`http://${HOSTNAME}:${PORT}/api/fetch/room?roomId=${roomId}`)
    .then(response => response.data);

const fetchUsersByRoom = (roomId) => axios
    .get(`http://${HOSTNAME}:${PORT}/api/fetch/users?roomId=${roomId}`)
    .then(response => response.data);

const addUserToRoom = (userId, roomId) => axios
    .get(`http://${HOSTNAME}:${PORT}/api/add/user-to-room?roomId=${roomId}&userId=d${userId}`)
    .then(response => response.data);

const removeUserFromRoom = (userId, roomId) => axios
    .get(`http://${HOSTNAME}:${PORT}/api/remove/user-from-room?roomId=${roomId}&userId=d${userId}`)
    .then(response => response.data);

export { fetchRooms, fetchRoom, fetchUsersByRoom, addUserToRoom, removeUserFromRoom as default };