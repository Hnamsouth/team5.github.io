function btnm() {
    let btn = document.getElementById('chatb').style.display;
    if (btn == 'none') {
        document.getElementById('chatb').style.display = 'block';
    } else {
        document.getElementById('chatb').style.display = 'none';
    }

    var date = new Date();
    date.getTime();
    let time = 'AM';
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    if (h > 12) {
        h = h - 12;
        time = 'PM';
    }
    h == 0 ? h = 12 : (h < 10) ? h = "0" + h : h;
    document.getElementById('time').innerHTML = h + ":" + m + " " + time;
}

function zin() {
    document.getElementById('chatb').style.display = 'none';
}

function btnbars() {
    let btn = document.getElementById('menusml').style.display;
    if (btn == 'none') {
        document.getElementById('menusml').style.display = 'block';
    } else {
        0
        document.getElementById('menusml').style.display = 'none';
    }
}

// alert(date.getHours() + ":" + date.getMinutes());

function sendmess() {
    var cmess = document.getElementById('cmess').value;
    // alert(cmess);
    document.getElementById('inchat').innerHTML += `<p>${cmess}</p>`;
    var date = new Date();
    document.getElementById('time').innerHTML = date.getHours() + " : " + date.getMinutes();
}

function btnright() {
    let s = document.getElementById('teammeo').children;
    let img = [s[2].style.zIndex = 2,
        s[3].style.zIndex = 1,
        s[4].style.zIndex = 1,
        s[5].style.zIndex = 1
    ];
    for (let i = 0; i < 4; i++) {
        if (img[3] == 2) {
            img[3] = 1;
            img[1] = 2;
            break;
        }
        if (img[i] == 2) {
            img[i] = 1;
            img[i + 1] = 2;
            break;
        }
    }
    console.log(s[4].style.zIndex = 2);
}

function btnleft() {
    let s = document.getElementById('teammeo').children;
    console.log(s[1].style.zIndex = 3);
}