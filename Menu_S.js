_menuCloseDelay=500           // The time delay for menus to remain visible on mouse out
_menuOpenDelay=150            // The time delay before menus open on mouse over
_subOffsetTop=10              // Sub menu top offset
_subOffsetLeft=-10            // Sub menu left offset


with(menuStyle1=new mm_style()){
styleid=1;
onbgcolor="#23446C";
oncolor="#FFE531";
offbgcolor="#505b31";
offcolor="#FFFFFF";
bordercolor="#6699cc";
borderstyle="solid";
borderwidth=0;
separatorcolor="#330099";
separatorsize=0;
padding=5;
fontsize=11;
fontstyle="bold";
fontfamily="Arial ";
pagecolor="#FFE531";
fontweight="bold";
// pagebgcolor="#adad8d";
headercolor="#000000";
headerbgcolor="#ffffff";
subimagepadding=2;
}


with(menuStyle=new mm_style()){
onbgcolor="#23446C";
oncolor="#FFE531";
offbgcolor="#505b31";
offcolor="#FFFFFF";
bordercolor="#6699cc";
borderstyle="solid";
borderwidth=0;
separatorcolor="#330099";
separatorsize=0;
padding=5;
fontsize=11;
fontstyle="bold";
fontfamily="Arial ";
pagecolor="#FFE531";
fontweight="bold";
// pagebgcolor="#adad8d";
headercolor="#000000";
headerbgcolor="#ffffff";
subimagepadding=2;
overfilter="Fade(duration=0.2);Alpha(opacity=100);";
outfilter="randomdissolve(duration=0.3)";
}

with(PageStyle=new mm_style()){
styleid=2;
onbgcolor="#23446C";
oncolor="#FFE531";
offbgcolor="#505b31";
offcolor="#FFFFFF";
bordercolor="#6699cc";
borderstyle="solid";
borderwidth=0;
separatorcolor="#FFFFFF";
separatorsize=2;
padding=5;
fontsize=11;
fontstyle="bold";
fontfamily="Arial ";
pagecolor="2928b2";
fontweight="bold";
pagebgcolor="#adad8d";
headercolor="#000000";
headerbgcolor="#ffffff";
subimagepadding=2;
overfilter="Fade(duration=0.2);Alpha(opacity=100);Shadow(color='#777777', Direction=135, Strength=5)";
outfilter="randomdissolve(duration=0.3)";
}

with(milonic=new menuname("Main")){
style=menuStyle1;
top=1;
screenposition="center";
orientation="horizontal";
alwaysvisible=1;
aI("text=Home;url=/zen/default.asp;");
aI("text=News;url=/sn/new/n_main.aspx?ClientCode=zen;showmenu=news;");
aI("text=People;url=/sn/peo/p_main.aspx?ClientCode=zen;showmenu=news;");
aI("text=About Zen;url=/sn/adm/editpage.aspx?ClientCode=zen&Filename=About_Zen.txt;");
aI("text=Admin;showmenu=admin;");
aI("text=Logout;url=/sn/sec/logout.aspx?ClientCode=zen;");
}

with(milonic=new menuname("admin")){
style=menuStyle;
aI("text=Edit Pages;align=left;url=/sn/adm/editpagelist.aspx?ClientCode=zen&ListType=Page;");
aI("text=Edit Email Text;align=left;url=/sn/adm/editemaillist.aspx?ClientCode=zen&ListType=Page;");
aI("text=Edit Templates;align=left;url=/sn/adm/editpagelist.aspx?ClientCode=zen&ListType=Template;");
aI("text=Upload;url=/sn/adm/upload.aspx?ClientCode=zen;");
aI("text=Welcome;url=/sn/sec/welcome.aspx?ClientCode=zen;");
aI("text=Duplicate Emails;url=/sn/peo/p_dupemail.aspx?ClientCode=zen;");
aI("text=Duplicate Toggle Switch;url=/sn/peo/p_duptoggle.aspx?ClientCode=zen;");
}

drawMenus();
