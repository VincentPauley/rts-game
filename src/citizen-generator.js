import { randomArraySelection, randomAlphaNumericString } from './common';

/**
 * Function: assign_name_to_citizen
 * 
 * Uses gender to create a random name for 
 * the citizen.
 * 
 * @param {object} citizen - start of citizen object, includes gender key 
 */
function assign_name_to_citizen( citizen ) {

    const name_list = {
        "F": [ 'Sophie', 'Ellie', 'Denise', 'Rachel', 'Emma', 'Sarah', 'Amanda' ],
        "M": [ 'Alex', 'Ryan', 'Peter', 'Edward', 'Carl', 'Andre', 'Chuck', 'Maurice' ]
    };

    const last_names = [ 'Chesterley', 'Sanderson', 'Ramirez', 'Shaw', 'Peverley', 'Stevens', 'Brown' ];

    return { 
        ...citizen, 
        first_name: randomArraySelection( name_list[ citizen.gender ] ), 
        last_name: randomArraySelection( last_names )
    };
}

export function randomCitizenList() {

    let citizens = [  ];

    for( let i=0; i<10; i++ ) {

        citizens.push({ gender: randomArraySelection([ 'M', 'F' ]) });
    }

    const name_expanded = citizens
                            .map( c => assign_name_to_citizen( c ))
                            .map( c => ({ ...c, id: randomAlphaNumericString(10) }) );

    return name_expanded;
}