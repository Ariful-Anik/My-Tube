function getTimeString(time){
    const hour = parseInt(time/3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond/60);
    remainingSecond = remainingSecond%60;


    return `${hour} hour ${minute} minute ago ${remainingSecond} second ago`;

}
console.log(getTimeString(5000));