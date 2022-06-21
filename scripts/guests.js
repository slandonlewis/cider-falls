import { getGuests } from "./database.js";
const guests = getGuests() // to get all guests

// creates guest list
export const guestList = () => {
    let guestsHTML = ``
    for (const guest of guests) {
        guestsHTML += `<li id="guest--${guest.id}">${guest.name}</li>`
    }

    return guestsHTML
}