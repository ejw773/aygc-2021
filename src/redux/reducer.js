import { FEATUREDATA } from '../shared/aygcInfo';
import { HOMEDATA } from '../shared/aygcInfo';
import { CONTACTDATA } from '../shared/aygcInfo';

export const initialState = {
    featureData: FEATUREDATA,
    homeData: HOMEDATA,
    contactData: CONTACTDATA
};

export const Reducer = (state = initialState, action) => {
    return state;
};
