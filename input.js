console.log('Hi from input');

class keybind {
    constructor(keyCode, func) {
        this.keyCode = upcode;
        this.func = func;
        this.pressed = false;
    }
}

//w: 87
//a: 65
//s: 83
//d: 68
KEYBINDS = {
    'forward': new keybind(87,()=>{

    }),
    'left': new keybind(65,()=>{
        player.rotation.z = -2
    }),
    'right': new keybind(68,()=>{
        player.rotation.z = 2
    }),
    'back': new keybind(83,()=>{

    }),
}

const keyCodes = KEYBINDS.map(x => x.keyCode)
document.addEventListener('keydown', (e) => {
    i = keyCodes.indexOf(e.keyCode);
    if (i != -1) {
        KEYBINDS[i].pressed = true;
    }
})
document.addEventListener('keyup', (e) => {
    i = keyCodes.indexOf(e.keyCode);
    if (i != -1) {
        KEYBINDS[i].pressed = false;
    }
})