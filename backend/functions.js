const userEvents = {
    move: function (e) {
        if (e.srcElement === canvas) {
            user.x = loc.x.innerText = e.offsetX
            user.y = loc.y.innerText = e.offsetY
        }
    }
}