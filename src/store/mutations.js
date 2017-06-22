import {
    SAVE_STAFFLIST
} from './mutations-types.js';

import {
    judgeSave
} from './utils';

export default{
    [SAVE_STAFFLIST] (state, staffsList) {
        state.staffsListFromAddress = staffsList;
        judgeSave(state);
    }
};
