const rooms = [
    {
        id:1,
        capacity:5,
        description: 'Обсудим хакатон',
        time: 1543050600,
        promo: true,
        venue_id: null,
    },
    {
        id:2,
        capacity:10,
        description: 'JS ланч',
        time: 1543051500,
        promo: false,
        venue_id: 1,
    },
    {
        id:3,
        capacity:3,
        description: 'Быстрый перекус',
        time: 1543053000,
        promo: true,
        venue_id: null,
    }
]

const users = [
	{
        id: 1,
        name: 'Оля Бузова',
        tags: {0: 'мясоедка'},
		description: 'люблю вечеринки и красивые места',
		photo: '',
		room_id: null
    },
    {
        id: 2,
        name: 'Ваня',
        tags: {0: 'мясоед'},
		description: 'физик, студент',
		photo: '',
		room_id: null
    },
    {
        id: 3,
        name: 'Катя Холмова',
        tags: {0: 'вегетарианка'},
		description: 'студентка, киноманка',
		photo: '',
		room_id: null
    },
    {
        id: 4,
        name: 'Филя',
        tags: {0: 'мясоед'},
		description: 'певец, люблю красивые места и качественное обслуживание',
		photo: '',
		room_id: null
    },
    {
        id: 5,
        name: 'Юрий',
        tags: {0: 'мясоед'},
		description: 'люблю алкоголь и шаверму',
		photo: '',
		room_id: null
    },
    {
        id: 6,
        name: 'Аня Цой',
        tags: {0: 'вегетарианка'},
		description: 'домохозяйка, мама двоих детей',
		photo: '',
		room_id: null
    },
    {
        id: 7,
        name: 'Юлий',
        tags: {0: 'мясоед'},
		description: 'люблю фастфуд, студент, поэтому денег мало',
		photo: '',
		room_id: null
    },
    {
        id: 8,
        name: 'Дружок',
        tags: {0: 'мясоед'},
		description: 'гурман',
		photo: '',
		room_id: null
    },
    {
        id: 9,
        name: 'Андрей Макаревич',
        tags: {0: 'мясоед'},
		description: 'гурман, пищевой маньяк',
		photo: '',
		room_id: null
    },
    {
        id: 10,
        name: 'Неизвестный Повор',
        tags: {0: 'мясоед'},
		description: 'знаю о еде все, люблю высокое качество обслуживания',
		photo: '',
		room_id: null
    },
]

const venues = [
    {
        id: 1,
        name: 'Venue',
        description: 'About venue',
        address: 'address',
        photo: null,
    }
]
const stubData = {
    getRooms: () => {
        return Promise.resolve(rooms)
    },

    getRoom: (roomId) => {
        return Promise.resolve(
            rooms.find(function (element) {
                return element.id === roomId
            }))
    },

    getUsersByRoom: (roomId) => {
        return Promise.resolve(
            users.find(function(element) {
                return element.room_id === roomId
            }))
    },

    getUser: (userId) => {
        return Promise.resolve(
            users.find(function (element) {
                return element.id === userId
            })
        )
    },

    getVenue: (venueId) => {
        return Promise.resolve(
            venues.find(function (element) {
                return element.id === venueId
            })
        )
    },
}

class Api {
    constructor(config) {
        const { data } = config

        this.data = stubData
    }

    getRooms() {
        return this.data.getRooms()
    }

    getRoom(roomId) {
        return this.data.getRoom(roomId)
    }

    getUsersByRoom(roomId) {
        return this.data.getUsersByRoom(roomId)
    }

    getUser(userId) {
        return this.data.getUser(userId)
    }

    getVenue(venueId) {
        return this.data.getVenue(venueId)
    }
}

module.exports = Api
