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

const fetchUser = (userId) => axios
    .get(`http://${HOSTNAME}:${PORT}/api/fetch/user?userId=${userId}`)
    .then(response => response.data);

const moveToRoom = (userId, roomId) => axios
    .get(`http://${HOSTNAME}:${PORT}/api/add/user-to-room?roomId=${roomId}&userId=d${userId}`)
    .then(response => response.data);

const fetchVenue = (venueId) => axios
    .get(`http://${HOSTNAME}:${PORT}/api/fetch/venue?venueId=${venueId}`)
    .then(response => response.data);

export { 
    fetchRooms, fetchRoom, fetchUsersByRoom, fetchVenue,
    moveToRoom, removeUserFromRoom, fetchUser 
    as default };