---
layout: page
title: "Q188234: PRB: Cannot Move Windowless Controls on Form"
permalink: /kb/188/Q188234/
---

## Q188234: PRB: Cannot Move Windowless Controls on Form

	Article: Q188234
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Windowless UserControl has its Backstyle Property set to 0 - Transparent,
	it will not be possible to move the control once it has been sited upon a form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new ActiveX Control project in Visual Basic. Form1 is created by
	  default.
	
	2. Set the following properties on the UserControl1 Object:
	
	     Windowless = True
	     BackStyle  = Transparent
	
	3. Add a Label to the UserControl1 Container object.
	
	4. Make the OCX (Project1.Ocx).
	
	5. Start a new Standard EXE Project in Visual Basic. Form1 is created by
	  default.
	
	6. Select Components from the Project menu and select Project1.
	
	7. When the test ActiveX UserControl is in the Toolbox, double-click its icon to
	  site the control on the default form (Form1).
	
	8. Once the control is on the form, try to move it with the mouse.
	
	Additional query words: kbDSupport kbVBp600 kbCtrl kbdss kbVBp kbCtrl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
