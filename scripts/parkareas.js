import { getParkAreas } from "./database.js";
const parkAreas = getParkAreas()

export const parkAreaList = () => {
    let parkAreasHTML = ``
    for (const area of parkAreas) {
        parkAreasHTML += `<div class="areaBox"><p>${area.name}</p></div>`
    }
    return parkAreasHTML
}