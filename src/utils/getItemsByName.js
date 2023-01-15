import { Items } from "./data/DATA_JSON"

export const getItemsByName = (name = '') => {
    name = name.toLowerCase().trim()
    if(name.length === 0) return []

    return Items.filter(
        item => item.superhero.toLowerCase().includes( name )
    )

}