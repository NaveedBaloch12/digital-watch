function show_time() {

    const date = new Date;

    let hr = date.getHours();
    let mn = date.getMinutes();
    let ss = date.getSeconds();

    document.getElementById('hrs').innerHTML = hr +' :';
    document.getElementById('mins').innerHTML = mn + ' :' ;
    document.getElementById('secs').innerHTML = ss;

}

setInterval(show_time, 1000);