---
layout: page
title: "Q76553: FIX: Can't Have Menu with No Caption Bar/Buttons/Control Box"
permalink: /kb/076/Q76553/
---

## Q76553: FIX: Can't Have Menu with No Caption Bar/Buttons/Control Box

	Article: Q76553
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,2.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, versions 2.0, 4.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can't add a menu that has no caption, no maximize/minimize buttons, and no
	control-menu box to a form.
	
	CAUSE
	=====
	
	This feature is not supported in Visual Basic in Windows version 3.0 or 3.1
	because of a bug in the Microsoft Windows menu driver that prevents Windows from
	painting menus correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft Windows versions 3.0 and
	3.1. This problem does not occur in Visual Basic version 3.0 in Microsoft
	Windows version 3.1.
	
	MORE INFORMATION
	================
	
	If you place a menu on a form with no caption bar or associated buttons, the
	result is a menu bar that does not refresh correctly.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Visual Basic or from the File menu, choose New Project (ALT, F, N) if
	  Visual Basic is already running. Form1 is created by default.
	
	2. Delete the contents of the Caption property.
	
	3. Set the ControlBox, MaxButton, and MinButton properties to False.
	
	4. Using the Menu Design window, create a single menu item. Set the Caption
	  property to Test and the control name property to Test.
	
	5. Press the F5 key to run the application.
	
	NOTE: The menu bar does not repaint correctly. This causes the image immediately
	behind the form to be visible through the menu bar.
	
	If you place any other form over the menu bar and then remove it, the portion
	that was covering the menu bar area remains.
	
	This problem occurs because the Microsoft Windows menu driver does not paint the
	menus correctly.
	
	For this reason, this particular form configuration is not supported by Visual
	Basic at this time even though you are able to create the configuration in the
	editing environment.
	
	For more information about a related problem with the menu bar and the Fixed
	Double border style, query on the following words in the Microsoft Knowledge
	Base:
	
	  Visual and Basic and menu and fixed and double and border
	
	Additional query words: buglist2.00 fixlist3.00 2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : :1.0,2.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
