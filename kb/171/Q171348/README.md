---
layout: page
title: "Q171348: PRB: TabStrip Control is Always on Top During Runtime"
permalink: /kb/171/Q171348/
---

## Q171348: PRB: TabStrip Control is Always on Top During Runtime

{% raw %}

	Article: Q171348
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5.0, the TabStrip Control can have objects placed in front of
	it during design mode but the objects go behind the TabStrip control during
	runtime. Changing the ZORDER of either the TabStrip control, or the controls
	placed on the TabStrip control, has no effect on the controls during runtime.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	A TabStrip control is an ActiveX control that is like the dividers in a notebook
	or the labels on a group of file folders. By using a TabStrip control, you can
	define multiple pages for the same area of a window or dialog box in your
	application. The TabStrip control is similar to the tabs on the PageFrame or
	Tabbed Dialog control.
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following program illustrates the behavior of the TabStrip control during
	runtime. When you execute the program, an "Insert Object" prompt appears. Select
	"Insert Control" and locate, or add, the "Microsoft TabStrip Control, version
	5.0." When the form runs, a TextBox should be on the TabStrip Control but
	actually is behind the TabStrip control. Click on the "Place Textbox on Shape"
	command button to move the TextBox to the Shape. The two command buttons on the
	form change the location of the TextBox and also changes the ZORDER. When the
	TextBox is in the area of the TabStrip control it does not appear on top of the
	TabStrip control:
	
	     **Start of Program
	     frmTabStrip = CREATEOBJECT("tabstrip")
	     frmTabStrip.SHOW(1)
	     **************************************************
	     *-- StartDefine: tabstrip
	     DEFINE CLASS tabstrip AS FORM
	         TOP = 5
	         LEFT = 51
	         HEIGHT = 338
	         WIDTH = 335
	         DOCREATE = .T.
	         CAPTION = "TabStrip Example"
	         NAME = "Form1"
	         ADD OBJECT olecontrol1 AS OLECONTROL WITH ;
	             TOP = 24, ;
	             LEFT = 24, ;
	             HEIGHT = 132, ;
	             WIDTH = 288, ;
	             NAME = "Olecontrol1"
	         ADD OBJECT txtText1 AS TEXTBOX WITH ;
	             HEIGHT = 60, ;
	             LEFT = 36, ;
	             TOP = 72, ;
	             WIDTH = 252, ;
	             NAME = "txtText1"
	         ADD OBJECT shape1 AS SHAPE WITH ;
	             TOP = 168, ;
	             LEFT = 24, ;
	             HEIGHT = 97, ;
	             WIDTH = 288, ;
	             NAME = "Shape1"
	         ADD OBJECT cmdCommand1 AS COMMANDBUTTON WITH ;
	             TOP = 288, ;
	             LEFT = 24, ;
	             HEIGHT = 25, ;
	             WIDTH = 132, ;
	             CAPTION = "Send Textbox to Front", ;
	             NAME = "cmdCommand1"
	         ADD OBJECT cmdCommand2 AS COMMANDBUTTON WITH ;
	             TOP = 288, ;
	             LEFT = 156, ;
	             HEIGHT = 25, ;
	             WIDTH = 157, ;
	             CAPTION = "Place Textbox on Shape", ;
	             NAME = "cmdCommand2"
	         ADD OBJECT label1 AS LABEL WITH ;
	             FONTBOLD = .T., ;
	             CAPTION = "Shape", ;
	             HEIGHT = 20, ;
	             LEFT = 38, ;
	             TOP = 172, ;
	             WIDTH = 61, ;
	             NAME = "Label1"
	
	         PROCEDURE cmdCommand1.CLICK
	             IF THIS.CAPTION = "Send Textbox to Front"
	                 THISFORM.txtText1.ZORDER(0) && Send to front
	                 THIS.CAPTION = "Send Textbox to Back"
	             ELSE
	                 THISFORM.txtText1.ZORDER(1) && Send to back
	                 THIS.CAPTION = "Send Textbox to Front"
	             ENDIF
	         ENDPROC
	         PROCEDURE cmdCommand2.CLICK
	             IF THIS.CAPTION = "Place Textbox on Shape"
	                 THISFORM.txtText1.TOP = 192
	                 THISFORM.txtText1.ZORDER(0) && Send to front
	                 THIS.CAPTION = "Place Textbox on TabStrip"
	                 THISFORM.cmdCommand1.CAPTION = "Send Textbox to Back"
	             ELSE
	                 THISFORM.txtText1.TOP = 72
	                 THIS.CAPTION = "Place Textbox on Shape"
	             ENDIF
	         ENDPROC
	     ENDDEFINE
	     *-- EndDefine: tabstrip
	
	REFERENCES
	==========
	
	Visual Basic Online Help file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
