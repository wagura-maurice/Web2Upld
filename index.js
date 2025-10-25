
var projectroot="./";
InitResources2('en');
var LMObjects = new Array();
var objindex=0;
var fontbase=96.;
//---------------------------------------------------------------------------------------------
try {
if(isValideBrowser(4.00,4.00)) {
//---------------------------------------------------------------------------------------------
LMObjects[objindex++] = LMDiv("Page",1,0,0,null,0,null,null,null,null,0);
defpagewitdh=1260;
LMObjects[objindex++] = LMImage("Img19",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img19=FindTagFromId('Img19');
LMObjects[objindex++] = LMDiv("Line6",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img7",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img7=FindTagFromId('Img7');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text3",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj3",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj4",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img8",1,1,0,null,0,null,new LMBranchEx("0","./kra.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img8=FindTagFromId('Img8');
branchlist = new Array();
branchlist[0] = new LMBranchEx("1","./kra.html",null,0.0,null,"NULL",1,1,1,1,1,1,0,640,480,"_self");
LMObjects[objindex++] = LMText("Obj5",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img9",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img9=FindTagFromId('Img9');
branchlist = new Array();
branchlist[0] = new LMBranchEx("1","./ntsa.html",null,0.0,null,"NULL",1,1,1,1,1,1,0,640,480,"_self");
LMObjects[objindex++] = LMText("Obj6",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img10",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img10=FindTagFromId('Img10');
branchlist = new Array();
branchlist[0] = new LMBranchEx("1","./ecitizen.html",null,0.0,null,"NULL",1,1,1,1,1,1,0,640,480,"_self");
LMObjects[objindex++] = LMText("Obj7",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img11",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img11=FindTagFromId('Img11');
branchlist = new Array();
branchlist[0] = new LMBranchEx("1","./sha.html",null,0.0,null,"NULL",1,1,1,1,1,1,0,640,480,"_self");
LMObjects[objindex++] = LMText("Obj8",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img12",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img12=FindTagFromId('Img12');
branchlist = new Array();
branchlist[0] = new LMBranchEx("1","./nssf.html",null,0.0,null,"NULL",1,1,1,1,1,1,0,640,480,"_self");
LMObjects[objindex++] = LMText("Obj9",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img13",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img13=FindTagFromId('Img13');
branchlist = new Array();
branchlist[0] = new LMBranchEx("1","./dci.html",null,0.0,null,"NULL",1,1,1,1,1,1,0,640,480,"_self");
LMObjects[objindex++] = LMText("Obj10",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img2",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
LMObjects[objindex++] = LMDiv("Box1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Panel1",1,1,0,null,0,null,null,null,null,0);
$('#Panel1').detach().appendTo('body');
LMObjects[objindex++] = LMImage("Img1",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img1=FindTagFromId('Img1');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text2",1,1,0,null,0,null,branchlist,null,null);
LMSimpleMenuBuilder('SimpleMenu1', LMSimpleMenuConfigTemplate['menu1'].html, LMSimpleMenuConfigTemplate['menu1'].css); var menu_SimpleMenu1 = LMSimpleMenuCool('SimpleMenu1', {orientation: 'horizontal', animation: 'fade', autodocked: false});
LMObjects[objindex++] = LMDiv("Line5",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img3",1,1,0,null,0,null,new LMBranchEx("0","./index.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img3=FindTagFromId('Img3');
LMObjects[objindex++] = LMImage("Img20",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img20=FindTagFromId('Img20');
LMObjects[objindex++] = LMImage("Img22",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img22=FindTagFromId('Img22');
LMObjects[objindex++] = LMImage("Img23",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img23=FindTagFromId('Img23');
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj1",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img24",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img24=FindTagFromId('Img24');
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj2",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMDiv("Box5",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj11",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMDiv("Line1",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj12",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj13",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMDiv("Line2",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
branchlist[0] = new LMBranchEx("1","./kra.html",null,0.0,null,"NULL",1,1,1,1,1,1,0,640,480,"_self");
branchlist[1] = new LMBranchEx("2","./ntsa.html",null,0.0,null,"NULL",1,1,1,1,1,1,0,640,480,"_self");
branchlist[2] = new LMBranchEx("3","./ecitizen.html",null,0.0,null,"NULL",1,1,1,1,1,1,0,640,480,"_self");
branchlist[3] = new LMBranchEx("4","./dci.html",null,0.0,null,"NULL",1,1,1,1,1,1,0,640,480,"_self");
branchlist[4] = new LMBranchEx("5","./nssf.html",null,0.0,null,"NULL",1,1,1,1,1,1,0,640,480,"_self");
branchlist[5] = new LMBranchEx("6","./sha.html",null,0.0,null,"NULL",1,1,1,1,1,1,0,640,480,"_self");
LMObjects[objindex++] = LMText("Obj14",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj15",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMDiv("Line3",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj17",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMDiv("Line4",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj18",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img21",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img21=FindTagFromId('Img21');
LMObjects[objindex++] = LMImage("Img15",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img15=FindTagFromId('Img15');
branchlist = new Array();
branchlist[0] = new LMBranchEx("1","./index.html",null,0.0,null,"NULL",1,1,1,1,1,1,0,640,480,"_self");
branchlist[1] = new LMBranchEx("2","./about-us.html",null,0.0,null,"NULL",1,1,1,1,1,1,0,640,480,"_self");
branchlist[2] = new LMBranchEx("3","./testimonials.html",null,0.0,null,"NULL",1,1,1,1,1,1,0,640,480,"_self");
LMObjects[objindex++] = LMText("Obj23",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMDiv("Line7",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box6",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj19",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj21",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj22",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj20",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMDiv("Panel2",1,1,0,null,0,null,new LMBranchEx("0","./index.html#PopUp1",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
$('#Panel2').detach().appendTo('body');
LMObjects[objindex++] = LMImage("Img5",1,1,0,null,0,null,new LMBranchEx("0","./index.html#PopUp1",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img5=FindTagFromId('Img5');
LMObjects[objindex++] = LMImage("Img6",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img6=FindTagFromId('Img6');
LMObjects[objindex++] = LMDiv("PopUp1",0,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text1",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But1",1,1,0,null,0,null,new LMBranchEx("0","https://wa.me/+254701423386",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMDiv("Panel4",1,1,0,null,0,null,null,null,null,0);
$('#Panel4').detach().appendTo('body');
LMObjects[objindex++] = LMImage("Img14",1,1,0,null,0,null,new LMBranchEx("0","./index.html#Line6",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_top"),null,null,1);
if(is.ns) Img14=FindTagFromId('Img14');
LMObjects[objindex++] = LMImage("Img16",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img16=FindTagFromId('Img16');
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3ef,0x400,0x86);
LMObjectAnimate();

var PopUp1=FindTagFromId("PopUp1");
PopUp1.Show=OpenPopUp1;
PopUp1.Hide=ClosePopUp1;
PopUp1.ToggleVisibleState=ToggleOpenPopUp1;
PopUp1.RollIn=OpenPopUp1;
PopUp1.RollOut=ClosePopUp1;
function OpenPopUp1() {
   var obj=document.getElementById('PopUp1');
   $("#PopUp1").dialog({width:'auto', height:'auto', modal:true, draggable:true, resizable:false, position:'center', closeOnEscape:true, show: {effect: "fade", duration: 800}, hide: {effect: "fade", duration: 800}, closeText:'', title:'DigiCyber Chat            Powered by BrandHub'});
   $("#PopUp1").css({'position':'relative','left':'0px','top':'0px','width':'520px','height':'316px','padding-left':'0px','padding-top':'0px','padding-right':'0px','padding-bottom':'0px'});
   $("#PopUp1").parent().css({'width':'520px','height':'316px','left':'0px','top':'0px','padding-left':'0px','padding-top':'0px','padding-right':'0px','padding-bottom':'0px', 'background':'none'});
   $("#PopUp1").parent().children().eq(0).css({'z-index':'100'});
   $("#PopUp1").parent().LMCentreInWindow();
   $(".ui-widget-overlay").css({'opacity':'0.7','background':'none','background-Color':'#000000'})
   $('.ui-widget-overlay').click(function() { $("#PopUp1").dialog('close'); });
}
function ClosePopUp1() {$("#PopUp1").dialog("close");}
function ToggleOpenPopUp1() { var isOpen = $("#PopUp1").dialog("isOpen"); if(isOpen == true) ClosePopUp1(); else OpenPopUp1(); }
function Img5_OnClick()
{

   // Begin Event-Action
   if(is.ns) PopUp1=document.getElementById("PopUp1");
   PopUp1.Show();
   // End Event-Action

}