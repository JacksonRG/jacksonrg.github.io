function inputInit() {
    class keybind {
        constructor(keyCode, func) {
            this.keyCode = keyCode;
            this.func = func;
            this.pressed = false;
        }
    }

    //w: 87
    //a: 65
    //s: 83
    //d: 68
    KEYBINDS = [
        /*'forward':*/ new keybind(87,()=>{

        }),
        /*'left':*/ new keybind(65,()=>{
            // if (player.rotation.z >= 0 && player.rotation.z <= .1) {
            //     player.rotation.z += 0.03;
            // }
            player.rotation.z += 0.01;
            player.rotation.z = Math.min(player.rotation.z, .5);
        }),
        /*'right':*/ new keybind(68,()=>{
            // if (player.rotation.z <= 0 && player.rotation.z >= -.1) {
            //     player.rotation.z -= 0.03;
            // }
            player.rotation.z -= 0.01;
            player.rotation.z = Math.max(player.rotation.z, -.5);
        }),
        /*'back':*/ new keybind(83,()=>{

        }),
    ]

    const keyCodes = KEYBINDS.map(x => x.keyCode)
    document.addEventListener('keydown', (e) => {
        i = keyCodes.indexOf(e.keyCode);
        if (i != -1) {
            KEYBINDS[i]['pressed'] = true;
            // KEYBINDS[i].down();
        }
    })
    document.addEventListener('keyup', (e) => {
        i = keyCodes.indexOf(e.keyCode);
        if (i != -1) {
            KEYBINDS[i]['pressed'] = false;
            // KEYBINDS[i].up();
        }
    })
}