gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite3Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite3Objects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite4Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite4Objects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite5Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite5Objects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite6Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite6Objects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite9Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite9Objects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite7Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite7Objects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite8Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite8Objects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.Untitled_32sceneCode.GDNewSprite4Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Untitled_32sceneCode.GDNewSpriteObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs.Untitled_32sceneCode.GDNewSprite7Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs.Untitled_32sceneCode.GDNewSprite8Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite9Objects1Objects = Hashtable.newFrom({"NewSprite9": gdjs.Untitled_32sceneCode.GDNewSprite9Objects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[k] = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].setX(gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getX() - (5));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[k] = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].setX(gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getX() + (5));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Untitled_32sceneCode.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite4Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene2", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").setCanNotAirJump();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.Untitled_32sceneCode.GDNewSprite7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite7Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].setX(gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getX() - (5));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.Untitled_32sceneCode.GDNewSprite8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite8Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].setX(gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getX() + (5));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite9"), gdjs.Untitled_32sceneCode.GDNewSprite9Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite9Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite5Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite5Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite6Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite6Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite9Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite9Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite7Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite7Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite8Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite8Objects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite5Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite5Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite6Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite6Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite9Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite9Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite7Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite7Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite8Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite8Objects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
