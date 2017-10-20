---
layout: page
title: "Q170383: HOWTO: Get Tooltips to Appear when Code in MouseMove"
permalink: /kb/170/Q170383/
---

## Q170383: HOWTO: Get Tooltips to Appear when Code in MouseMove

{% raw %}

	Article: Q170383
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbvfp500
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to get ToolTipText to appear if there is code in the
	MouseMove method.
	
	MORE INFORMATION
	================
	
	In Visual FoxPro, command buttons and other objects on a form can have ToolTips
	displayed when the mouse pointer is placed over the object. If there is code in
	the MouseMove method of the object, the ToolTipText only shows very briefly, if
	at all, not allowing the ToolTip to be read.
	
	To get the ToolTipText to display normally, issue the NODEFAULT keyword in the
	MouseMove method of the object whose ToolTip is not displaying properly.
	
	Below is some sample code that creates a form with five command buttons. Place
	the code in a new program file and run it. When the mouse pointer is placed over
	a command button, the text on it turns red and the button receives focus. The
	text on the other command buttons is set back to black. Each command button also
	has text in the ToolTipText property.
	
	Note that in the code below, the NODEFAULT keyword is commented out in the
	MouseMove method for command buttons Command1 and Command2. Uncomment the
	NODEFAULT keyword to have these two command buttons display their ToolTips like
	the other command buttons:
	
	     PUBLIC oform1
	
	     oform1=CREATEOBJECT("form1")
	     oform1.Show
	     RETURN
	
	     **************************************************
	     *-- Form:         form1
	     *-- ParentClass:  form
	     *-- BaseClass:    form
	     *
	     DEFINE CLASS form1 AS form
	
	        Top = 32
	        Left = 54
	        Height = 283
	        Width = 468
	        DoCreate = .T.
	        ShowTips = .T.
	        Caption = "ToolTip Form"
	        Name = "Form1"
	
	        ADD OBJECT command1 AS commandbutton WITH ;
	           Top = 72, ;
	           Left = 24, ;
	           Height = 27, ;
	           Width = 84, ;
	           Caption = "Command1", ;
	           ToolTipText = "This is Command 1", ;
	           Name = "Command1"
	
	        ADD OBJECT command2 AS commandbutton WITH ;
	           Top = 132, ;
	           Left = 24, ;
	           Height = 27, ;
	           Width = 84, ;
	           Caption = "Command2", ;
	           ToolTipText = "Hello", ;
	           Name = "Command2"
	
	        ADD OBJECT command3 AS commandbutton WITH ;
	           Top = 204, ;
	           Left = 24, ;
	           Height = 27, ;
	           Width = 84, ;
	           Caption = "Command3", ;
	           ToolTipText = "This is Command3", ;
	           Name = "Command3"
	
	        ADD OBJECT command4 AS commandbutton WITH ;
	           Top = 72, ;
	           Left = 216, ;
	           Height = 27, ;
	           Width = 84, ;
	           Caption = "Command4", ;
	           ToolTipText = "Goodbye", ;
	           Name = "Command4"
	
	        ADD OBJECT command5 AS commandbutton WITH ;
	           Top = 132, ;
	           Left = 216, ;
	           Height = 27, ;
	           Width = 84, ;
	           Caption = "Command5", ;
	           ToolTipText = "This is Command 5", ;
	           Name = "Command5"
	
	        PROCEDURE blackbuts
	           Thisform.SetAll("ForeColor",RGB(0,0,0),"CommandButton")
	        ENDPROC
	
	        PROCEDURE command1.MouseMove
	           LPARAMETERS nButton, nShift, nXCoord, nYCoord
	           *NODEFAULT
	           Thisform.BlackButs()
	           This.ForeColor=RGB(255,0,0)
	           This.SetFocus()
	           Thisform.Refresh()
	        ENDPROC
	
	        PROCEDURE command2.MouseMove
	           LPARAMETERS nButton, nShift, nXCoord, nYCoord
	           *NODEFAULT
	           Thisform.BlackButs()
	           This.ForeColor=RGB(255,0,0)
	           This.SetFocus()
	        ENDPROC
	
	        PROCEDURE command3.MouseMove
	           LPARAMETERS nButton, nShift, nXCoord, nYCoord
	           NODEFAULT
	           Thisform.BlackButs()
	           This.ForeColor=RGB(255,0,0)
	           This.SetFocus()
	        ENDPROC
	
	        PROCEDURE command4.MouseMove
	           LPARAMETERS nButton, nShift, nXCoord, nYCoord
	           NODEFAULT
	           Thisform.BlackButs()
	           This.ForeColor=RGB(255,0,0)
	           This.SetFocus()
	           Thisform.Refresh()
	        ENDPROC
	
	        PROCEDURE command5.MouseMove
	           LPARAMETERS nButton, nShift, nXCoord, nYCoord
	           NODEFAULT
	           Thisform.BlackButs()
	           This.ForeColor=RGB(255,0,0)
	           This.SetFocus()
	           Thisform.Refresh()
	        ENDPROC
	
	     ENDDEFINE
	     *
	     *-- EndDefine: form1
	     **************************************************
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbvfp500 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
