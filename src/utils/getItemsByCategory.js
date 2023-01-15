import { Items } from "./data/DATA_JSON";


export const getItemsByCategory = (category) => {
    const validCategories = ['DC Comics', 'Marvel Comics']
    if(!validCategories.includes(category)){ 
        throw new Error(`${category} is not a valid category`)
    }

    return Items.filter( item => item.category === category )
}
