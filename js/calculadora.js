var u = document.getElementById('n');
function i(l){
    u.value +=l;
}

function c(){
    u.value = '';
}

function ha(){
    let bs = u.value.length - 1;
    u.value = u.value.slice(0, bs);
}

function h(){
    u.value = eval(u.value);
}