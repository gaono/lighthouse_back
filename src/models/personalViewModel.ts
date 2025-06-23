import { Cr } from './dbTypesModel'

export let personalCRs: Cr[] = [];

export let examplePersonalCRs: Cr[] = [
    {
        id: 1,
        name: 'Example CR 1',
        is_DDIC: false,
        environment: 'DEV',
        is_customization: true,
        is_released: false,
        is_documented: true
    },
    {
        id: 2,
        name: 'Example CR 2',
        is_DDIC: true,
        environment: 'TEST',
        is_customization: false,
        is_released: true,
        is_documented: false
    }
]

export const getPersonalCRs = () => {
    return personalCRs;
}

export const setPersonalCRs = (crs: Cr[]) => {
    personalCRs = crs;
}