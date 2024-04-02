////////////////////////////////////
//rollover image handling
////////////////////////////////////
//wrap images in a <div id=mouseovers></div> images same name but over version should have _omo appended before the extension
var W3CDOM = (document.createElement && document.getElementsByTagName);
var mouseOvers = new Array();
var mouseOuts = new Array();
window.onload = preloadImages;
var imagesPreloaded=false;
function preloadImages(){
	try{
	if (imagesPreloaded) return;
	if (!W3CDOM) return;
	var nav = document.getElementById('mouseovers');
	var imgs = nav.getElementsByTagName('img');
	for (var i=0;i<imgs.length;i++)
	{
		imgs[i].onmouseover = mouseGoesOver;
		imgs[i].onmouseout = mouseGoesOut;
		var suffix = imgs[i].src.substring(imgs[i].src.lastIndexOf('.'));
		mouseOuts[i] = new Image();
		mouseOuts[i].src = imgs[i].src;
		mouseOvers[i] = new Image();
		mouseOvers[i].src = imgs[i].src.substring(0,imgs[i].src.lastIndexOf('.')) + "_omo" + suffix;
		imgs[i].number = i;
	}
	imagesPreloaded=true;
	}catch(e){}
}
function mouseGoesOver(){
	this.src = mouseOvers[this.number].src;
}
function mouseGoesOut(){
	this.src = mouseOuts[this.number].src;
}
function doNothing(){
}
function setMouseOverFor(srcvalue){
	if(!imagesPreloaded)preloadImages();
	if (!W3CDOM) return;
	var nav = document.getElementById('mouseovers');
	var imgs = nav.getElementsByTagName('img');
	for (var i=0;i<imgs.length;i++){
		if(imgs[i].src.indexOf(srcvalue)>1){
			imgs[i].src=mouseOvers[i].src;
			imgs[i].onmouseover=doNothing;
			imgs[i].onmouseout=doNothing;
		}
	}
}

function printerfriendly() { 
    childWin = open("", "childWin", "toolbar,scrollbars,menubar,status,innerwidth=300,innerheight=200"); 

    var text = document.Form1.termOfUseText.value; 
    //childWin.document.write("<p><b>You may print the text below for your records:</b></p>"); 
    var re = /\r\n/g;
	text = text.replace(re, "<BR>");
    childWin.document.write(text); 
} 

function setValue(fldname1, fldname2, fldname3, fldname4, fldname5, value1, value2, value3, value4, value5){
	var stest='document.forms[0].'+fldname1; var test1; var s1='';
	var stest2='document.forms[0].'+fldname2; var test2; var s2='';
	var stest3='document.forms[0].'+fldname3; var test3; var s3='';
	var stest4='document.forms[0].'+fldname4; var test4; var s4='';
	var stest5='document.forms[0].'+fldname5; var test5; var s5='';
	try{test1=eval(stest);test2=eval(stest2);test3=eval(stest3);test4=eval(stest4);test5=eval(stest5);}catch(e){test1=false;test2=false;test3=false;test4=false;test5=false;}
	if(test1 && test2 && test3 && test4 && test5){
		s1='document.forms[0].'+fldname1+'.value=\''+value1+'\';';
		s2='document.forms[0].'+fldname2+'.value=\''+value2+'\';';
		s3='document.forms[0].'+fldname3+'.value=\''+value3+'\';';
		s4='document.forms[0].'+fldname4+'.value=\''+value4+'\';';
		s5='document.forms[0].'+fldname5+'.value=\''+value5+'\';';
	} else {
		s1=fldname1+'.innerHTML=\''+value1+'\';';
		s2=fldname2+'.innerHTML=\''+value2+'\';';
		s3=fldname3+'.innerHTML=\''+value3+'\';';
		s4=fldname4+'.innerHTML=\''+value4+'\';';
		s4=fldname5+'.innerHTML=\''+value5+'\';';
	}
	eval(s1);
	eval(s2);
	eval(s3);
	eval(s4);
	eval(s5);
}
function getValue(fldname){
	var stest='document.forms[0].'+fldname; var test; var s='';
	try{test=eval(stest);}catch(e){test=false;}
	if(test){
		s='document.forms[0].'+fldname+'.value;';
	} else {
		s=fldname+'.innerHTML;';
	}
	return eval(s);
}

///////////////////////////////////
// popup handling
///////////////////////////////////
function openNewWindow(image)
{
	popupWin = window.open(image, 'open_window', 
		'resizable=yes,scrollbars=yes', false);
}

function popCenterWindow(name, url, width, height){
	if(window.screen){
		var ah = window.screen.availHeight - 30;
		var aw = screen.availWidth - 10;
		var xc = Math.round((aw - width)/2);
		var yc = Math.round((ah - height)/2);
		return popWindow(name,url,width,height,xc,yc);
	}
	return popWindow(name,url,width,height,200,200);
}
function popWindow(name, url, width, height, left, top){
	var s = "height=" + height + ",innerHeight=" + height;
	s += ",width=" + width + ",innerWidth=" + width;
	s += ",scrollbars=1,resizable=1,toolbar=0,menubar=0,location=0,directories=0";
	s += ",left=" + left + ",screenX=" + left;
	s += ",top=" + top + ",screenY=" + top;
	var win = window.open(url,name,s);
	win.focus();
	return win;
}
function popAlignedWindow(name,url,width,height,elem){
	var top=0; var left=0;
	if(window.screenLeft){
		top+=screenTop;
		left+=screenLeft;
	}
	if(window.screenY){
			top+=window.screenY;
			left+=window.screenX;
	}
	if(elem.offsetTop){
		top += elem.offsetTop;
		left += elem.offsetLeft;
		var elemheight = elem.offsetHeight;
		var elemwidth = elem.offsetWidth;
		for(elem=elem.offsetParent;elem!=null;elem=elem.offsetParent){
			top += elem.offsetTop;
			left += elem.offsetLeft;
		}
		top += elemheight;
		left -= (width-elemwidth);
	}
	left-=8;
	
	var win = popWindow(name,url,width,height,left,top);
	if(win.screen){
		var testbottom = top + height + 8;
		var ah = screen.availHeight;
		if(ah<testbottom)top-=testbottom-ah;
		if(top<0||left<0){
			if(top<0)top=0;
			if(left<0)left=0;
			win.moveTo(left,top);
		}
	}
	win.focus();
	return win;
}

