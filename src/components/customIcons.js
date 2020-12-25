import leaflet from 'leaflet'
import defaultSVGicon from './../images/icon.svg'

const defaultIcon = leaflet.icon({
    iconUrl: defaultSVGicon,
    iconRetinaUrl: defaultSVGicon,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [40, 40],
})

const customIcons = {
    defaultIcon
}
export default customIcons