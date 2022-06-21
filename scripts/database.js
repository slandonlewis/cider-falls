export const data = {
    // guests data
    guests: [{
        id: 1,
        name: "Alphonse Meron",
        email: "ameron0@mashable.com",
        areaId: 1
    }, {
        id: 2,
        name: "Damara Pentecust",
        email: "dpentecust1@apache.org",
        areaId: 1
    }, {
        id: 3,
        name: "Anna Bowton",
        email: "abowton2@wisc.edu",
        areaId: 2
    }, {
        id: 4,
        name: "Hunfredo Drynan",
        email: "hdrynan3@bizjournals.com",
        areaId: 2
    }, {
        id: 5,
        name: "Elmira Bick",
        email: "ebick4@biblegateway.com",
        areaId: 3
    }, {
        id: 6,
        name: "Bernie Dreger",
        email: "bdreger5@zimbio.com",
        areaId: 3
    }, {
        id: 7,
        name: "Rolando Gault",
        email: "rgault6@google.com",
        areaId: 4
    }, {
        id: 8,
        name: "Tiffanie Tubby",
        email: "ttubby7@intel.com",
        areaId: 4
    }, {
        id: 9,
        name: "Tomlin Cutill",
        email: "tcutill8@marketwatch.com",
        areaId: 5
    }, {
        id: 10,
        name: "Arv Biddle",
        email: "abiddle9@cafepress.com",
        areaId: 5
    }, {
        id: 11,
        name: "Zachariah Coates",
        email: "zcoates@gmail.com",
        areaId: 6
    }, {
        id: 12,
        name: "McKenzie Forster",
        email: "kenzie.forster123@gmail.com",
        areaId: 6
    }],
    // park areas data (boxLocation shows where each area will be displayed in HTML)
    parkAreas: [
        { id: 1, name: 'Lodge' },
        { id: 2, name: 'Lost Wolf Trail' },
        { id: 3, name: 'Chamfort River' },
        { id: 4, name: 'Gander River' },
        { id: 5, name: 'Campgrounds' },
        { id: 6, name: 'Pine Bluffs Trails' },
    ],
    // services data
    services: [
        { id: 1, name: 'Rafting' },
        { id: 2, name: 'Canoeing' },
        { id: 3, name: 'Fishing' },
        { id: 4, name: 'Hiking' },
        { id: 5, name: 'Picnicking' },
        { id: 6, name: 'Rock Climbing' },
        { id: 7, name: 'Lodging' },
        { id: 8, name: 'Parking' },
        { id: 9, name: 'Information' },
        { id: 10, name: 'Ziplining' },
    ],
    areaServices: [
        // lodge
        { id: 1, serviceId: 7, areaId: 1 },
        { id: 2, serviceId: 8, areaId: 1 },
        { id: 3, serviceId: 9, areaId: 1 },
        { id: 4, serviceId: 5, areaId: 1 },
        // LW Trail
        { id: 5, serviceId: 4, areaId: 2 },
        { id: 6, serviceId: 5, areaId: 2 },
        { id: 7, serviceId: 6, areaId: 2 },
        // Ch River
        { id: 8, serviceId: 1, areaId: 3 },
        { id: 9, serviceId: 2, areaId: 3 },
        { id: 10, serviceId: 3, areaId: 3 },
        // Gander River
        { id: 11, serviceId: 3, areaId: 4 },
        { id: 12, serviceId: 4, areaId: 4 },
        // Campgrounds
        { id: 13, serviceId: 9, areaId: 5 },
        { id: 14, serviceId: 7, areaId: 5 },
        { id: 15, serviceId: 8, areaId: 5 },
        // Campgrounds
        { id: 16, serviceId: 4, areaId: 6 },
        { id: 17, serviceId: 5, areaId: 6 },
        { id: 18, serviceId: 10, areaId: 6 },
    ]

}

// guests
export const getGuests = () => {
    return data.guests.map(guest => ({ ...guest }))
}

// park areas
export const getParkAreas = () => {
    return data.parkAreas.map(parkArea => ({ ...parkArea }))
}

// services
export const getServices = () => {
    return data.services.map(service => ({ ...service }))
}

// area services
export const getAreaServices = () => {
    return data.areaServices.map(service => ({ ...service }))
}

