const upTime = (upTime) => {
    const date = new Date(upTime * 1000);
    const days = date.getUTCDate() - 1,
        hours = date.getUTCHours(),
        minutes = date.getUTCMinutes(),
        seconds = date.getUTCSeconds();

    let segments = [];

    if (days > 0) segments.push(days + " day" + (days == 1 ? "" : "s"));
    if (hours > 0) segments.push(hours + " hour" + (hours == 1 ? "" : "s"));
    if (minutes > 0)
        segments.push(minutes + " minute" + (minutes == 1 ? "" : "s"));
    if (seconds > 0)
        segments.push(seconds + " second" + (seconds == 1 ? "" : "s"));
    const dateString = segments.join(", ");
    return dateString;
};


export default upTime;
