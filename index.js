function distanceFromHqInBlocks(someValue) {
    return ((42 - someValue) < 0 ? (42 - someValue)*-1 : (42 - someValue))
}

function distanceFromHqInFeet(someValue) {
    return (distanceFromHqInBlocks(someValue) * 264)
}

function distanceTravelledInFeet(start, destination) {
    return ((start - destination) < 0 ? ((start - destination)*-1) * 264 : (start - destination) * 264)
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    let price;
    switch (true) {
        case (distance < 400) :
            price = 0;
            break
        case  (distance > 400 && distance < 2000) :
            price = (distance - 400) * 0.02;
            break
        case  (distance > 2000 && distance < 2500) :
            price = 25;
            break
        case (distance > 2500) :
            price = "cannot travel that far";
            break
        default :
            price = "not sure"
    }
    return price
}