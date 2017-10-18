---
layout: page
title: "Q155847: HOWTO: Activate a System Menu Item in Visual FoxPro 5.0"
permalink: kb/155/Q155847/
---

## Q155847: HOWTO: Activate a System Menu Item in Visual FoxPro 5.0

	Article: Q155847
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbBuilder kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SYS(1500) function allows you to gain access and activate a specific system
	menu item. However, the SYS(1500) function does not work with user defined menu
	items.
	
	MORE INFORMATION
	================
	
	The SYS(1500) function allows you to call the functionality of system menu
	options from within your programs. Unfortunately, if the specific menus are not
	active or if SYSMENU is OFF, SYS(1500) does not work.
	
	The following example uses SYS(1500) to paste a command into a program file.
	Place the following code into a program file:
	
	  _CLIPTEXT = "MESSAGEBOX([ASCII 145]TEST[ASCII 146])" && Command to paste
	  MODIFY COMMAND myprog NOWAIT  && Open a program file
	  =SYS(1500, '_MED_PASTE', '_MEDIT')  && Paste menu item
	
	Compile the program file and execute the .fxp file. The program creates a file
	called Myprog that contains "MESSAGEBOX('TEST')."
	
	REFERENCES
	==========
	
	Visual FoxPro 5.0 Help file; search on "SYS(2013)" (without the quotation
	marks). The SYS(2013) topic displays each system menu bar, its title, and the
	items it contains.
	
	Visual FoxPro 5.0 Help file; search on "SYS(1500)" (without the quotation marks)
	and click "System Menu Names."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbBuilder kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
