---
layout: page
title: "Q154518: FIX: MDI Child Windows Control Box Affected by Parent Toolbars"
permalink: /kb/154/Q154518/
---

## Q154518: FIX: MDI Child Windows Control Box Affected by Parent Toolbars

	Article: Q154518
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp400bug kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport kbControl
	Last Modified: 28-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Placing a Windows Common Control's Toolbar on an MDI Parent form affects the
	functionality of the Control Box on MDI Child windows under Windows NT 3.51.
	Under normal circumstances, double-clicking a Control Box closes a window as if
	the user had clicked once to drop down the menu and then selected "Close." When
	the Toolbar is placed on a Parent window under Windows NT 3.51, double-clicking
	the Control Box drops the menu but doesn't dismiss the window.
	
	This problem does not occur with Visual Basic under Windows 2000, Windows NT
	version 4.0, Windows 95, Windows 98, or Windows Me.
	
	RESOLUTION
	==========
	
	If you add a PictureBox control to the Form, and Cut and Paste the Toolbar onto
	the PictureBox, the problem is resolved. When you run the code after doing this,
	the Control Box behaves in the expected manner.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	This problem was corrected in Windows 2000.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Set the MDIChild property of Form1 to TRUE.
	
	3. From the Insert menu, choose MDI Form.
	
	4. Add a Toolbar Control to the MDI Form. No images or buttons are required to
	  show the problem.
	
	5. Press the F5 key to start the project.
	
	6. Maximize the Child Window.
	
	7. Double-click the Control Box of the Child Window. The menu should drop down,
	  but the window is not dismissed.
	
	REFERENCES
	==========
	
	The Visual Basic Programmer's Guide, Chapter 14.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp400bug kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport kbControl 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
