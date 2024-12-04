import { nanoid } from "nanoid"
import { suma } from './config.js'

const id1 = nanoid()
const id2 = nanoid()


const manejador = () => {
    const variante1 = `ID1: ${id1}`
    const variante2 = `ID2: ${id2}`


    if(suma) {
        return `${id1} + ${id2}`
    } else {
        return variante1.length + variante2.length
    }
}
export { manejador };