const canvas = document.querySelector(".paintingArea canvas"),
    ctx = canvas.getContext("2d"),
    barStatus = document.querySelector(".status.bar"),
    user = {
        x: 0,
        y: 0
    },
    loc = {
        x: document.querySelector(".status.bar .loc span.lX"),
        y: document.querySelector(".status.bar .loc span.lY")
    }