//when player clicks on a column piece drops 
export function dropTile(col) {
    return {
        type: 'DROP_TILE',
        payload: col,
    };
}