---
layout: page
title: "Q135564: PRB: ACTIVATE WINDOW Command Not Working for Toolbars"
permalink: kb/135/Q135564/
---

## Q135564: PRB: ACTIVATE WINDOW Command Not Working for Toolbars

	Article: Q135564
	Product(s): Microsoft FoxPro
	Version(s): 3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ACTIVATE WINDOW command does not work with toolbars. This command:
	
	     ACTIVATE WINDOW "Standard"
	
	results in thie following error message:
	
	  Window "STANDARD" has not been defined
	
	None of the toolbars can be activated with the ACTIVATE WINDOW command.
	
	RESOLUTION
	==========
	
	If it is necessary to call toolbars programmatically, use the KEYBOARD command:
	
	     KEYBOARD '{ALT+V}ts{SPACEBAR}{ENTER}'
	
	To determine the exact syntax for a particular toolbar, click Macros on the
	Program menu and select Record.
	
	Please note that Visual FoxPro's macro recorder does not record movements of the
	mouse; therefore, you need to use the keyboard to created the macro.
	
	MORE INFORMATION
	================
	
	Once a toolbar is open, the HIDE WINDOW, SHOW WINDOW, and ACTIVATE WINDOW
	commands will work. This is because the toolbar now exists in memory.
	
	REFERENCES
	==========
	
	If you need to distribute the Report Control toolbar with the EXE, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q138696 HOWTO: Including Report Toolbars in a Distributed Application
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Version           : :3.0,5.0,6.0
	
	=============================================================================
	
