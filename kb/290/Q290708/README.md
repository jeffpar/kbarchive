---
layout: page
title: "Q290708: PRB: BorderStyle Property May Prevent Taskbar from Appearing"
permalink: /kb/290/Q290708/
---

## Q290708: PRB: BorderStyle Property May Prevent Taskbar from Appearing

	Article: Q290708
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 09-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0, on platform(s):
	   - the operating system: Microsoft Windows Millennium Edition 
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows taskbar has the Always on Top and AutoHide properties set on. When a
	Visual FoxPro top-level form is maximized and the BorderSyle property has any
	value other than 3-Sizable, the Windows taskbar may not appear when the mouse
	moves over the edge of the form.
	
	RESOLUTION
	==========
	
	Set the BorderStyle property to 3-Sizable.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On Windows 2000 and Windows Me, set the Windows taskbar properties to Always
	  on Top and Auto Hide.
	
	2. Place the following code in a program and then run it:
	
	  PUBLIC Y
	  Y=CREATEOBJECT("formtest")
	  Y.SHOW
	  RETURN
	  DEFINE CLASS formtest AS FORM
	  	CAPTION = "Form1"
	  	SHOWWINDOW = 2
	  	BORDERSTYLE = 0
	  ** A BorderStyle of 1 or 2 also fails.
	  ** Change BorderStyle to 3 and it works.
	          MAXBUTTON = .F.
	          CLOSABLE = .F.
	          WINDOWSTATE = 2
	  	VISIBLE=.T.
	  	HEIGHT=200
	  	WIDTH=375
	  	ADD OBJECT extbtn AS COMMANDBUTTON WITH ;
	  		HEIGHT = 24, ;
	  		LEFT = 72, ;
	  		TOP = 48, ;
	  		WIDTH = 108, ;
	  		CAPTION = "Exit"
	  	VISIBLE=.T.
	
	  	PROCEDURE extbtn.CLICK
	  	THISFORM.RELEASE
	  ENDPROC
	  ENDDEFINE
	
	3. After the form appears, move the mouse over the bottom edge of the form. Note
	  that the taskbar does not appear.
	
	4. Open the program and change the BorderStyle property of the form to either 1
	  or 2. Run the code and perform step 3 again. Again, the taskbar does not
	  appear.
	
	5. Open the program and change the BorderStyle property of the form to 3. Run
	  the code and perform step 3 again. The taskbar now appears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : :5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
