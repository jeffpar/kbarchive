---
layout: page
title: "Q131473: How to Load the Class Browser into Memory on Startup"
permalink: kb/131/Q131473/
---

## Q131473: How to Load the Class Browser into Memory on Startup

	Article: Q131473
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to add the Class Browser item to the System Menu
	during Startup and, if desired, also load it into memory at startup.
	
	MORE INFORMATION
	================
	
	If you create your own startup routine, you might want to add the following code
	to it to be sure the default system menu has the Class Browser item.
	
	Calling the Class Browser (BROWSER.APP) with a zero (0) numeric parameter doesn't
	load the Class Browser, but it does ensure that the Class Browser menu item
	appears in the Tools menu.
	
	Calling the Class Browser (BROWSER.APP) with a one (1) numeric parameter, adds
	the menu item and loads the Class Browser into memory. The benefit is that the
	OLE container support files (outline, OCX files, and so on) are loaded into
	Windows memory. This is useful if you prefer to place the first- time OLE load
	delay at start-up rather than when you run/edit a form with an OCX Control.
	
	Step-by-Step Procedure
	----------------------
	
	1. Open the VFPSTART.PRG file:
	  a. To do this from the MENU:
	
	     1. From the File menu, choose Open.
	
	     2. Change the Files of type to Program.
	
	     3. Select VFPSTART.PRG, and choose OK.
	
	  b. To do this from the Command window, issue the following command to bring
	     up the Modify Program window:
	
	        Modify Command VFPSTART.PRG
	
	2. Enter or modify the following source code:
	
	  a. Check to see if you have a line in your VFPSTART.PRG file that looks like
	     the following line. If you don't find it, add it.
	
	        DO (HOME()+'BROWSER.APP') WITH 0 &&Adds Class Browser To Menu
	
	  b. If you want the Class Browser to load into memory when at startup, change
	     the 0 parameter to 1 as done here:
	
	        DO (HOME()+'BROWSER.APP') WITH 1 && Adds Class Browser To Menu and
	                                         && Loads Class Browser into memory
	
	3. Save the Program.
	
	4. Exit and restart Visual FoxPro to make these changes take effect.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
