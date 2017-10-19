---
layout: page
title: "Q137440: PRB: Class Browser: Removing a Parent Class Causes Error"
permalink: /kb/137/Q137440/
---

## Q137440: PRB: Class Browser: Removing a Parent Class Causes Error

	Article: Q137440
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Dragging a class from the Class Browser to the Visual FoxPro screen produces a
	"Syntax Error" or "Variable Not Found" error message, and then the Microsoft
	Visual FoxPro title disappears from the window.
	
	CAUSE
	=====
	
	When a class is dragged to the screen, an instance of the class is created. The
	code in the Init, Load, and Activate events is processed. Errors caused by the
	code are returned by the Class Browser.
	
	RESOLUTION
	==========
	
	To restore the settings of the main Visual FoxPro window, type the following in
	the Command window:
	
	  " MODIFY WINDOW SCREEN " (without the quotation marks)
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the Class Browser. Open the TSGEN class library located in the
	  Samples\Mainsamp\Libs directory.
	
	2. Click the Application class.
	
	3. Click the Custom Class icon, and drag the class to the screen. The error
	  "Variable Not Found" is displayed.
	
	4. Click OK until the last error is displayed. The Visual FoxPro window title
	  disappears.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
