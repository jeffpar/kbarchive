---
layout: page
title: "Q131081: How to Set Object's BackColor to Button Face's BackColor"
permalink: /kb/131/Q131081/
---

## Q131081: How to Set Object's BackColor to Button Face's BackColor

	Article: Q131081
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to set the BackColor of an object to the
	current button-face color. You can use this in a program to change the BackColor
	of the form or form page color to match that of the button face or 3D color.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example Using Code
	-------------------------------
	
	The following program displays a form that contains one command button (Button1).
	The code in the Click procedure sets the BackColor of the form to the current
	BackColor of the button face.
	
	1. From the File menu, choose New. Select the Program option, and choose the New
	  File button to bring up the Modify Program window.
	
	2. Enter the following code:
	
	     oMyForm = CREATEOBJECT("MyForm")
	     oMyForm.show
	     READ EVENTS
	
	     DEFINE CLASS MyForm AS FORM
	
	        ADD OBJECT Button1 AS COMMANDBUTTON WITH ;
	           caption="QUIT"
	
	        PROCEDURE Click
	           Local cColor cRGB
	           m.cRGB = RGBSCHEME(1,2)
	           m.cColor = 'RGB(' + SUBSTR(m.cRGB, AT(',', m.cRGB, 3) +1)
	           This.BackColor = EVAL(cColor)
	        ENDPROC
	
	        PROCEDURE button1.Click
	           CLEAR EVENTS
	        ENDPROC
	     ENDDEFINE
	
	3. Save the Program, and run it. When the form displays, click an area of the
	  form to see the BackColor of the form change to the BackColor of the button.
	
	Step-by-Step Example Using the Form Designer
	--------------------------------------------
	
	To add this functionality to a Form by using the Visual FoxPro Form Designer,
	follow these steps:
	
	1. Add a command button to the form by using the Form Control Toolbar.
	
	2. Using the secondary (right) mouse button, click the new command button
	  object. Select Properties from the menu that appears.
	
	3. Select the Layout tab in the Properties dialog box. Change the Caption
	  property to QUIT.
	
	4. Select the Methods tab in the Properties dialog box, and double-click the
	  Click event to open the Code window for the Click Procedure of the command
	  button. In the Code window for the Click event, type:
	
	     THISFORM.RELEASE
	
	  NOTE: This code differs from that used in the code example. The command
	  THISFORM.RELEASE is used instead of CLEAR EVENTS because the READ EVENTS is
	  not used to keep the form in memory when DO FORM <formname> is used.
	
	5. Using the primary (left) mouse button, double-click the Form to open the Code
	  window for the different events available for the Form.
	
	6. Select Click from the Procedure list, and add the following code to this
	  Click event:
	
	     Local cColor cRGB
	     m.cRGB = RGBSCHEME(1,2)
	     m.cColor = 'RGB(' + SUBSTR(m.cRGB, AT(',', m.cRGB, 3) +1)
	     This.BackColor = EVAL(cColor)
	
	7. Save the Form, and run it.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
