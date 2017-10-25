export function convertTime(seconds) {
    let hours = Math.floor((seconds/60)/60);
    let minutes = Math.floor((seconds - hours*60*60) / 60);
    let sec = seconds % 60;
    hours = hours < 10 ? `0${hours}` : `${hours}`;
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    sec = sec < 10 ? `0${sec}` : `${sec}`;
    return `${hours}:${minutes}:${sec}`
}

export function convertDateToTime(timestamp) {
    const date = new Date(timestamp);
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}