
export function randomArraySelection( arrayVal ) {

    return arrayVal[ Math.floor( arrayVal.length * Math.random() ) ];
}
/**
 * Function: randomAlphaNumericString
 * 
 * Generates a random alphanumeric string mostly 
 * for creating unique identifiers for list iteratiolns
 * 
 * @param {interger} stringLength - length of random string
 */
export function randomAlphaNumericString( stringLength ) {

    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');

    let string = '';

    for( let i=0; i<stringLength; i++ ) {

        const random_char = randomArraySelection( chars );

        string += /^\d$/.test( random_char ) ? random_char :/**/  Math.random() > .5 ? random_char.toUpperCase() : random_char  /**/; 

    }

    return string;
}