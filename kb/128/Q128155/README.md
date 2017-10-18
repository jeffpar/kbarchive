---
layout: page
title: "Q128155: Description of VFPSTART.PRG"
permalink: kb/128/Q128155/
---

## Q128155: Description of VFPSTART.PRG

	Article: Q128155
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the functionality of the startup program VFPSTART.PRG.
	
	MORE INFORMATION
	================
	
	The VFPSTART program has two main components:
	
	- When FoxPro is started after a new installation, VFPSTART minimizes the
	  Command window and opens a new project.
	
	- VFPSTART adds the Class Browser option to the Tools drop-down in the System
	  menu.
	
	The VFPSTART application is launched from the CONFIG.FPW file. A COMMAND line is
	added to your configuration file. Because the VFPSTART application interacts
	with the Command window, it has to be called after the window has been defined.
	Thus, it cannot be launched with the _STARTUP system memory variable.
	
	If you need to modify the startup program, edit the file VFPSTART.PRG.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
