waypointData.forEach(function(waypoint) {
    addMarker({
        x: waypoint.x,
        y: waypoint.y,
        name: waypoint.name,
        game: waypoint.game,
        course: waypoint.course,
        description: waypoint.description,  
        iconpic: iconMapping[waypoint.icon], 
        imagesrc: waypoint.src,
        tag: waypoint.tag
    });
});

arrowData.forEach(function(arrow) {
    addArrow({
        x: arrow.x,
        y: arrow.y,
        name: arrow.name,
        imagesrc: arrow.src,
        angle: arrow.angle
    })
})

// addMarker2({
//     x: 0,
//     y: 0,
//     name: "test",
//     game: "",
//     course: "",
//     description: "lorem ipsum bitches",
//     iconpic: iconMapping["red"],
//     images: ["peachcastle1.jpg", "MKWii.webp"],
//     tag: "landmark"
// })

toggleWaypoints('landmark')
toggleWaypoints('arrow')
