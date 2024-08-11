csvData.forEach(function(waypoint) {
    addMarker({
        x: waypoint.x,
        y: waypoint.y,
        name: waypoint.name,
        game: waypoint.game,
        course: waypoint.course,
        description: waypoint.description,  
        iconpic: iconMapping[waypoint.icon], 
        imagesrc: waypoint.src
    });
});