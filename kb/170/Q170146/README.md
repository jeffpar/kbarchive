---
layout: page
title: "Q170146: HOWTO: Access ImageList from TreeView &amp; ListView Control"
permalink: /kb/170/Q170146/
---

## Q170146: HOWTO: Access ImageList from TreeView &amp; ListView Control

	Article: Q170146
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbOOP kbvfp500 kbvfp600
	Last Modified: 29-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how images of an ImageList control can be accessed by
	TreeView and ListView controls programmatically.
	
	MORE INFORMATION
	================
	
	This section has two code examples. The first example illustrates how ImageList
	images can be assigned to a TreeView control. In this example if Leaves are
	added to a Node of the TreeView, then a Closed Folder icon is assigned to the
	Node. If a node containing leaves is expanded, its icon changes to an Open
	Folder, and upon collapse, it changes back to the Closed Folder.
	
	The second example shows how ImageList images can be assigned to a ListView
	control. In this example, when a List Item is created it is assigned a large
	icon. The item icons can then be toggled between a small and a large icon. For
	each type of icon--large and small--separate ImageList controls are used;
	otherwise, both types of icons appear as same size.
	
	NOTE: the folders containing the icon and bitmap files have changed in Visual
	FoxPro 6.0. The new location for the icons is:
	
	 home(4)+"icons\office\<filename>"
	
	The new location for the bitmaps is:
	
	  home(4)+"bitmaps\outline\<Filename>"
	
	Following is the sample code for the first example to assign ImageList images to
	a TreeView:
	
	     LVForm=CREATEOBJECT("MyLVForm")
	     LVForm.SHOW
	     READ EVENT
	
	     *** Define the Form to hold and display all the controls ***
	     DEFINE CLASS MyLVForm AS FORM
	        LEFT=23
	        HEIGHT=250
	        WIDTH=425
	        mndx=0
	        *** Add the Control Objects to the Form ***
	        ADD OBJECT ImageList1 AS MyImageList
	        ADD OBJECT TreeView1  AS MyTreeView
	        ADD OBJECT AddNode    AS ANCButton
	        ADD OBJECT AddLeaf    AS ALCButton
	        ADD OBJECT mDelete    AS DCButton
	        ADD OBJECT mExit      AS ECButton
	     ENDDEFINE
	
	     *** Define ImageList to Hold Images for the TreeView Control ***
	     DEFINE CLASS MyImageList AS OLECONTROL
	        OLECLASS="COMCTL.ImageListCtrl.1"
	        TOP=36
	        LEFT=420
	        PROCEDURE INIT
	           THIS.OBJECT.ListImages.ADD(1,,LOADPICTURE(home()+;
	                 "samples\graphics\bmps\outline\closed.bmp"))
	           THIS.OBJECT.ListImages.ADD(2,,LOADPICTURE(home()+;
	                 "samples\graphics\bmps\outline\open.bmp"))
	        ENDPROC
	     ENDDEFINE
	
	     *** Define the TreeView Control ***
	     DEFINE CLASS MyTreeView AS OLECONTROL
	        OLECLASS="COMCTL.TreeCtrl.1"
	        TOP=24
	        HEIGHT=169
	        WIDTH=300
	        LEFT=20
	        .OBJECT.LineStyle=1
	        VISIBLE=.T.
	
	        *** Set ImageList property to ImageList1 Images ***
	        PROCEDURE INIT
	           THIS.OBJECT.ImageList=THISFORM.ImageList1.OBJECT
	        ENDPROC
	        PROCEDURE nodeclick
	           LPARAMETERS NODE
	        ENDPROC
	
	        *** Assign Image for Collapsed object ***
	        PROCEDURE collapse
	           LPARAMETERS NODE
	           IF !EMPTY(NODE.IMAGE)
	              NODE.IMAGE=1
	           ENDIF
	        ENDPROC
	
	        *** Assign Image for Expanded object ***
	        PROCEDURE expand
	           LPARAMETERS NODE
	           IF !EMPTY(NODE.IMAGE)
	              NODE.IMAGE=2
	           ENDIF
	        ENDPROC
	     ENDDEFINE
	     *** Define the Add Node Command Button ***
	     DEFINE CLASS ANCButton AS COMMANDBUTTON
	        TOP=70
	        LEFT=350
	        HEIGHT=18
	        WIDTH=59
	        CAPTION="Add Node"
	        VISIBLE=.T.
	        PROCEDURE CLICK
	           mndxtxt=""
	           mndxtxt=ALLTRIM(STR(THISFORM.mndx))
	
	           THISFORM.TreeView1.nodes.ADD(,2,mndxtxt+;
	            "_",REPLICATE(mndxtxt,5),,0)
	           THISFORM.mndx=THISFORM.mndx+1
	           THISFORM.TreeView1.ENABLED=.T.
	           THISFORM.AddLeaf.ENABLED=.T.
	           THISFORM.mDelete.ENABLED=.T.
	        ENDPROC
	     ENDDEFINE
	     *** Define the Add Leaf Command Button ***
	     DEFINE CLASS ALCButton AS COMMANDBUTTON
	        TOP=100
	        LEFT=350
	        HEIGHT=18
	        WIDTH=59
	        CAPTION="Add Leaf"
	        VISIBLE=.T.
	        ENABLED=.F.
	        PROCEDURE CLICK
	           so=THISFORM.TreeView1.SELECTEDITEM
	           IF !ISNULL(so)
	              THISFORM.TreeView1.nodes.ADD(so.INDEX,;
	                        4,,"Sub"+ALLTRIM(so.TEXT),,0)
	              so.IMAGE=1
	           ENDIF
	           THISFORM.REFRESH
	        ENDPROC
	     ENDDEFINE
	     *** Define the Delete Command Button  ***
	     DEFINE CLASS DCButton AS COMMANDBUTTON
	        TOP=150
	        LEFT=350
	        HEIGHT=18
	        WIDTH=59
	        CAPTION="Delete"
	        VISIBLE=.T.
	        ENABLED=.F.
	        PROCEDURE CLICK
	           o=THISFORM.TreeView1.SELECTEDITEM
	           IF !ISNULL(o)
	              IF !ISNULL(o.PARENT)
	                 IF o.PARENT.children<2
	                    o.PARENT.IMAGE=0
	                 ENDIF
	              ENDIF
	              THISFORM.TreeView1.nodes.REMOVE(o.INDEX)
	           ENDIF
	        ENDPROC
	     ENDDEFINE
	     *** Define the Exit Command Button ***
	     DEFINE CLASS ECButton AS COMMANDBUTTON
	        TOP=215
	        LEFT=180
	        WIDTH=70
	        HEIGHT=25
	        CAPTION="Exit"
	        VISIBLE=.T.
	        PROCEDURE CLICK
	           THISFORM.RELEASE
	           CLEAR EVENTS
	        ENDPROC
	     ENDDEFINE
	
	     Following is the sample code for the Second example:
	
	     LVForm=CREATEOBJECT("MYLVForm")
	     LVForm.SHOW
	     READ EVENT
	
	     *** Define the Form that will hold and display the controls ***
	     DEFINE CLASS MyLVForm AS FORM
	        LEFT=23
	        HEIGHT=300
	        WIDTH=478
	        lvitm=0
	        lvitxt=''
	        ADD OBJECT ImageList2 AS MyImageList1
	        ADD OBJECT ImageList3 AS MyImageList2
	        ADD OBJECT ListView1  AS MyListView
	        ADD OBJECT ADDITEM    AS AICButton
	        ADD OBJECT LSIOption  AS LSIOGroup
	        ADD OBJECT mDelete    AS DButton
	        ADD OBJECT MExit      AS ExButton
	     ENDDEFINE
	
	     *** Need separate ImageList Controls for Large and Small Icons of
	     *** ListView otherwise both type of icons will appear as same size
	     ***
	     *** Define ImageList to Hold Large Icon Image for the ListView
	     *** Control
	
	     DEFINE CLASS MyImageList1 AS OLECONTROL
	        OLECLASS="COMCTL.ImageListCtrl.1"
	        TOP=204
	        LEFT=420
	        PROCEDURE INIT
	           THIS.OBJECT.ListImages.ADD(1,,LOADPICTURE(home()+;
	               "samples\graphics\icons\office\folder01.ico"))
	        ENDPROC
	     ENDDEFINE
	
	     *** Define ImageList to Hold Small Icon Image for the
	     *** ListView Control
	
	     DEFINE CLASS MyImageList2 AS OLECONTROL
	        OLECLASS="COMCTL.ImageListCtrl.1"
	        TOP=264
	        LEFT=420
	        PROCEDURE INIT
	           THIS.OBJECT.ListImages.ADD(1,,LOADPICTURE(home()+;
	                 "samples\graphics\bmps\outline\closed.bmp"))
	        ENDPROC
	     ENDDEFINE
	
	     *** Define the ListView Class ***
	     DEFINE CLASS MyListView AS OLECONTROL
	        OLECLASS="COMCTL.ListViewCtrl.1"
	        TOP=24
	        HEIGHT=169
	        WIDTH=275
	        LEFT=36
	        .OBJECT.LineStyle=1
	        VISIBLE=.T.
	
	     *** Set the ListView Icons property to Images in ImageList1 ***
	     *** and SmallIcons property to Images in ImageList2 ***
	
	        PROCEDURE INIT
	           THIS.OBJECT.icons=THISFORM.ImageList2.OBJECT
	           THIS.OBJECT.smallicons=THISFORM.ImageList3.OBJECT
	        ENDPROC
	     ENDDEFINE
	
	     *** Define the Add Item Button Class ***
	     DEFINE CLASS AICButton AS COMMANDBUTTON
	        TOP=50
	        LEFT=360
	        HEIGHT=18
	        WIDTH=59
	        CAPTION="Add Item"
	        VISIBLE=.T.
	        PROCEDURE CLICK
	           THISFORM.lvitm=THISFORM.lvitm+1
	           THISFORM.lvitxt=ALLTRIM(STR(THISFORM.lvitm))
	           x=THISFORM.ListView1.OBJECT.listitems.ADD;
	              (,THISFORM.lvitxt+"_","Item"+THISFORM.lvitxt,)
	           x.smallicon=1
	           x.ICON=1
	           THISFORM.LSIOption.ENABLED=.T.
	           THISFORM.mDelete.ENABLED=.T.
	           THISFORM.REFRESH
	        ENDPROC
	     ENDDEFINE
	
	     *** Define the Large/Small Icon Option Group ***
	     DEFINE CLASS LSIOGroup AS OPTIONGROUP
	        BUTTONCOUNT = 2
	        VALUE = 1
	        HEIGHT = 39
	        LEFT = 340
	        TOP = 80
	        WIDTH = 96
	        Option1.CAPTION = "Large Icon"
	        Option1.LEFT = 11
	        Option1.TOP = 5
	        Option1.WIDTH = 82
	        Option1.NAME = "Option1"
	        Option2.CAPTION = "Small Icon"
	        Option2.LEFT = 11
	        Option2.TOP = 20
	        Option2.WIDTH = 82
	        Option2.NAME = "Option2"
	        PROCEDURE INTERACTIVECHANGE
	           DO CASE
	           CASE THIS.VALUE=1
	              THISFORM.ListView1.OBJECT.VIEW=0
	           CASE THIS.VALUE=2
	              THISFORM.ListView1.OBJECT.VIEW=1
	           ENDCASE
	           THISFORM.REFRESH
	        ENDPROC
	     ENDDEFINE
	     *** Define the Delete Button Class ***
	     DEFINE CLASS DButton AS COMMANDBUTTON
	        TOP=156
	        LEFT=360
	        HEIGHT=18
	        WIDTH=59
	        CAPTION="Delete"
	        VISIBLE=.T.
	        ENABLED=.F.
	        PROCEDURE CLICK
	           o=THISFORM.ListView1.SELECTEDITEM
	           IF !ISNULL(o)
	              THISFORM.ListView1.listitems.REMOVE(o.INDEX)
	           ENDIF
	        ENDPROC
	     ENDDEFINE
	
	     *** Define the Exit Button Class
	     DEFINE CLASS ExButton AS COMMANDBUTTON
	        TOP=226
	        LEFT=192
	        WIDTH=192
	        HEIGHT=18
	        WIDTH=59
	        CAPTION="Exit"
	        VISIBLE=.T.
	        PROCEDURE CLICK
	           THISFORM.RELEASE
	           CLEAR EVENTS
	        ENDPROC
	     ENDDEFINE
	
	REFERENCES
	==========
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q166937 Programmatically Adding Images to ImageList Control
	
	  Q160921 Error Using OLE Controls
	
	  Q163803 Cannot Set ImageList Property of Treeview Visually
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbOOP kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	
