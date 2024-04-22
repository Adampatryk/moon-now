export const moonPhaseToShadePercentage = (moonPhase : number) => {
    return Math.abs( ( moonPhase * 2 ) - 1 )
}

export const moonPhaseToShadeDirection = (moonPhase : number) => {
    return moonPhase < 0.5 ? 'left' : 'right'
}

export const moonPhaseToDescription = (moonPhase : number) => {
    let category: string;

    switch (true) {
        case (moonPhase === 0 || moonPhase === 1):
            category = "New Moon";
            break;
        case (moonPhase > 0 && moonPhase < 0.25):
            category = "Waxing Crescent";
            break;
        case (moonPhase === 0.25):
            category = "First Quarter";
            break;
        case (moonPhase > 0.25 && moonPhase < 0.5):
            category = "Waxing Gibbous";
            break;
        case (moonPhase === 0.5):
            category = "Full Moon";
            break;
        case (moonPhase > 0.5 && moonPhase < 0.75):
            category = "Waning Gibbous";
            break;
        case (moonPhase === 0.75):
            category = "Last Quarter";
            break;
        case (moonPhase > 0.75 && moonPhase < 1):
            category = "Waning Crescent";
            break;
        
        default:
            category = "Number is not in the range of 0 to 1";
    }

    return category
}