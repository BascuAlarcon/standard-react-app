import { Items } from "./data/DATA_JSON"

export const getItemsById = (id) => {
    return Items.find( item => item.id === id);
}