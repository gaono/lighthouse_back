import type { Shosh, CrToShosh, Cr, Users } from '../models/dbTypesModel';

export interface User {
    id: string;
    pernr: string;
    name: string;
    userTypeCode: string;
    userTypeDesc: string;
    imageUrl: string;
}

export interface CR {
    id: string;
    name: string;
    isDDIC: boolean;
    environmentCode: string;
    environmentDesc: string;
    isCustomization: boolean;
    isReleased: boolean;
}

export interface Project {
    id: string;
    name: string;
}

export let currentUser: Users = {
    id: 's123',
    pernr: '123',
    name: "ג'וני וולקר",
    userType: '1',
    imageUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
};

export interface ShoshCr extends Cr {
    relationDescription: CrToShosh['description'];
}
export interface ShoshWithCRs extends Shosh {
    crs: ShoshCr[];
}