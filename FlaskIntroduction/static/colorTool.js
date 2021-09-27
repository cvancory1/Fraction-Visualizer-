//Mouse Parameters
var paintFlag = false;
var paintColor = 'white';

//Toggle Button
var paintTool = new Path.Rectangle(new Point(50, 50), 50, 50);
paintTool.strokeColor = 'black';
paintTool.strokeWidth = 4;
paintTool.fillColor = 'grey';

//Palette Set Up
var paletteGroup = new Group();

//Show Palette
paintTool.onMouseDown = function(event){
    if(!paintFlag){
        paintFlag = true;
        
        //create Palette
        var totalX = 50;
        var totalY = 125;
        for (var i = 0; i < 3; i++) {
            var temp = new Path.Rectangle(new Point(totalX, totalY), 50, 50);
            
            paletteGroup.addChild(temp);
            
            totalX += 75;
        }
        
        temp.onMouseDown = function(event){
                paintColor = temp.fillColor;
                console.log(temp.fillColor);
            }
        
        paletteGroup.strokeColor = 'black';
        paletteGroup.strokeWidth = 4;
        
        paletteGroup.children[0].fillColor = 'red';
        paletteGroup.children[0].onMouseDown = function(event){
            paintColor = paletteGroup.children[0].fillColor;
            console.log(paletteGroup.children[0].fillColor);
        }
        
        paletteGroup.children[1].fillColor = 'blue';
        paletteGroup.children[1].onMouseDown = function(event){
            paintColor = paletteGroup.children[1].fillColor;
            console.log(paletteGroup.children[1].fillColor);
        }
        
        paletteGroup.children[2].fillColor = 'green';
        paletteGroup.children[2].onMouseDown = function(event){
            paintColor = paletteGroup.children[2].fillColor;
            console.log(paletteGroup.children[2].fillColor);
        }
        
    } else {
        paintFlag = false;
        paletteGroup.removeChildren()
    }
}

//Object to Paint
var backdrop = new Path.Rectangle(new Point(50, 300), 200, 200);
backdrop.strokeColor = 'black';
backdrop.strokeWidth = 4;
backdrop.fillColor = 'white'

//Paint Backdrop
backdrop.onMouseDown = function(event) {
    if (paintFlag){
        backdrop.fillColor = paintColor;
    }
}