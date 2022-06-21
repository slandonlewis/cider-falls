import { getServices, getAreaServices, getParkAreas } from "./database.js";
const services = getServices()
const areaServices = getAreaServices()
const parkAreas = getParkAreas()

export const serviceList = () => {
    let servicesHTML = ``
    for (const service of services) {
        servicesHTML += `<li class="service-btn" id="service--${service.id}">${service.name}</li>`
    }
    return servicesHTML
}

// get area ids to later be converted to area names
export const filterService = (service) => {
    const serviceNames = []

    for (const areaService of areaServices) {
        if (service.id === areaService.serviceId) {
            serviceNames.push(areaService.areaId)
        }
    }
    return serviceNames
}

export const finalFilterService = (serviceNames) => {
    let serviceList = ``

    for (const serviceName of serviceNames) {
        for (const area of parkAreas) {
            if (area.id === serviceName) {
                serviceList += `${area.name}, `
            }
        }
    }
    return serviceList
}

// "(Service) can be provided at (area)"
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("service")) {
            const [,serviceId] = itemClicked.id.split("--")

            for (const service of services) {
                if (service.id === parseInt(serviceId)) {
                    const areaIds = filterService(service)
                    const areaNames = finalFilterService(areaIds)
                    window.alert(`${service.name} locations: ${areaNames}`)
                }
            }
        }
    }
)