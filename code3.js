gdjs.YOU_32WONCode = {};
gdjs.YOU_32WONCode.localVariables = [];
gdjs.YOU_32WONCode.idToCallbackMap = new Map();
gdjs.YOU_32WONCode.GDTwoChoicesDialogBoxObjects1= [];
gdjs.YOU_32WONCode.GDTwoChoicesDialogBoxObjects2= [];
gdjs.YOU_32WONCode.GDNewSpriteObjects1= [];
gdjs.YOU_32WONCode.GDNewSpriteObjects2= [];
gdjs.YOU_32WONCode.GDNewSprite2Objects1= [];
gdjs.YOU_32WONCode.GDNewSprite2Objects2= [];
gdjs.YOU_32WONCode.GDNewSprite3Objects1= [];
gdjs.YOU_32WONCode.GDNewSprite3Objects2= [];
gdjs.YOU_32WONCode.GDNewSprite4Objects1= [];
gdjs.YOU_32WONCode.GDNewSprite4Objects2= [];
gdjs.YOU_32WONCode.GDNewSprite5Objects1= [];
gdjs.YOU_32WONCode.GDNewSprite5Objects2= [];
gdjs.YOU_32WONCode.GDNewSprite6Objects1= [];
gdjs.YOU_32WONCode.GDNewSprite6Objects2= [];
gdjs.YOU_32WONCode.GDNewSprite9Objects1= [];
gdjs.YOU_32WONCode.GDNewSprite9Objects2= [];
gdjs.YOU_32WONCode.GDNewSprite7Objects1= [];
gdjs.YOU_32WONCode.GDNewSprite7Objects2= [];
gdjs.YOU_32WONCode.GDNewSprite8Objects1= [];
gdjs.YOU_32WONCode.GDNewSprite8Objects2= [];


gdjs.YOU_32WONCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TwoChoicesDialogBox"), gdjs.YOU_32WONCode.GDTwoChoicesDialogBoxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.YOU_32WONCode.GDTwoChoicesDialogBoxObjects1.length;i<l;++i) {
    if ( gdjs.YOU_32WONCode.GDTwoChoicesDialogBoxObjects1[i].IsNoClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.YOU_32WONCode.GDTwoChoicesDialogBoxObjects1[k] = gdjs.YOU_32WONCode.GDTwoChoicesDialogBoxObjects1[i];
        ++k;
    }
}
gdjs.YOU_32WONCode.GDTwoChoicesDialogBoxObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TwoChoicesDialogBox"), gdjs.YOU_32WONCode.GDTwoChoicesDialogBoxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.YOU_32WONCode.GDTwoChoicesDialogBoxObjects1.length;i<l;++i) {
    if ( gdjs.YOU_32WONCode.GDTwoChoicesDialogBoxObjects1[i].IsYesClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.YOU_32WONCode.GDTwoChoicesDialogBoxObjects1[k] = gdjs.YOU_32WONCode.GDTwoChoicesDialogBoxObjects1[i];
        ++k;
    }
}
gdjs.YOU_32WONCode.GDTwoChoicesDialogBoxObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}
}

}


};

gdjs.YOU_32WONCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.YOU_32WONCode.GDTwoChoicesDialogBoxObjects1.length = 0;
gdjs.YOU_32WONCode.GDTwoChoicesDialogBoxObjects2.length = 0;
gdjs.YOU_32WONCode.GDNewSpriteObjects1.length = 0;
gdjs.YOU_32WONCode.GDNewSpriteObjects2.length = 0;
gdjs.YOU_32WONCode.GDNewSprite2Objects1.length = 0;
gdjs.YOU_32WONCode.GDNewSprite2Objects2.length = 0;
gdjs.YOU_32WONCode.GDNewSprite3Objects1.length = 0;
gdjs.YOU_32WONCode.GDNewSprite3Objects2.length = 0;
gdjs.YOU_32WONCode.GDNewSprite4Objects1.length = 0;
gdjs.YOU_32WONCode.GDNewSprite4Objects2.length = 0;
gdjs.YOU_32WONCode.GDNewSprite5Objects1.length = 0;
gdjs.YOU_32WONCode.GDNewSprite5Objects2.length = 0;
gdjs.YOU_32WONCode.GDNewSprite6Objects1.length = 0;
gdjs.YOU_32WONCode.GDNewSprite6Objects2.length = 0;
gdjs.YOU_32WONCode.GDNewSprite9Objects1.length = 0;
gdjs.YOU_32WONCode.GDNewSprite9Objects2.length = 0;
gdjs.YOU_32WONCode.GDNewSprite7Objects1.length = 0;
gdjs.YOU_32WONCode.GDNewSprite7Objects2.length = 0;
gdjs.YOU_32WONCode.GDNewSprite8Objects1.length = 0;
gdjs.YOU_32WONCode.GDNewSprite8Objects2.length = 0;

gdjs.YOU_32WONCode.eventsList0(runtimeScene);
gdjs.YOU_32WONCode.GDTwoChoicesDialogBoxObjects1.length = 0;
gdjs.YOU_32WONCode.GDTwoChoicesDialogBoxObjects2.length = 0;
gdjs.YOU_32WONCode.GDNewSpriteObjects1.length = 0;
gdjs.YOU_32WONCode.GDNewSpriteObjects2.length = 0;
gdjs.YOU_32WONCode.GDNewSprite2Objects1.length = 0;
gdjs.YOU_32WONCode.GDNewSprite2Objects2.length = 0;
gdjs.YOU_32WONCode.GDNewSprite3Objects1.length = 0;
gdjs.YOU_32WONCode.GDNewSprite3Objects2.length = 0;
gdjs.YOU_32WONCode.GDNewSprite4Objects1.length = 0;
gdjs.YOU_32WONCode.GDNewSprite4Objects2.length = 0;
gdjs.YOU_32WONCode.GDNewSprite5Objects1.length = 0;
gdjs.YOU_32WONCode.GDNewSprite5Objects2.length = 0;
gdjs.YOU_32WONCode.GDNewSprite6Objects1.length = 0;
gdjs.YOU_32WONCode.GDNewSprite6Objects2.length = 0;
gdjs.YOU_32WONCode.GDNewSprite9Objects1.length = 0;
gdjs.YOU_32WONCode.GDNewSprite9Objects2.length = 0;
gdjs.YOU_32WONCode.GDNewSprite7Objects1.length = 0;
gdjs.YOU_32WONCode.GDNewSprite7Objects2.length = 0;
gdjs.YOU_32WONCode.GDNewSprite8Objects1.length = 0;
gdjs.YOU_32WONCode.GDNewSprite8Objects2.length = 0;


return;

}

gdjs['YOU_32WONCode'] = gdjs.YOU_32WONCode;
