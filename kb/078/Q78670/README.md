---
layout: page
title: "Q78670: Startup Directory Option Ignored in MS-DOS Shell"
permalink: /kb/078/Q78670/
---

## Q78670: Startup Directory Option Ignored in MS-DOS Shell

	Article: Q78670
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In MS-DOS 5.0 and Shell, it is possible for the startup directory option to be
	ignored when a program item is started from the Active Task List.
	
	MORE INFORMATION
	================
	
	The startup directory option will be ignored in the following two situations:
	
	- The program item being started from the Active Task List was originally
	  placed there as a result of a LOAD=ENABLED entry in the DOSSHELL.INI file.
	
	- The program item being started from the Active Task List was added to the
	  Active Task List by holding down the SHIFT key, and double-clicking on the
	  program item (or pressing SHIFT+ENTER).
	
	In the above cases, the effective startup directory will be the active directory
	at the time Shell was started.
	
	WORKAROUND
	==========
	
	To work around this limitation, write a batch file for the application that
	first changes to the desired startup directory before starting. Then create a
	program item for the batch file, not the executable. (Note: In this case, the
	startup directory option is now unnecessary.)
	
	Example
	-------
	
	To make a batch file to run Microsoft Word for MS-DOS, do the following:
	
	1. Include the following lines in a batch file called WORD5.BAT:
	
	     cd \word5
	     word
	
	2. Make a program item for WORD5.BAT using the procedure described on pages
	  186-188 of the version 5.0 "Microsoft MS-DOS User's Guide and Reference."
	
	Additional query words: 5.00 5.00a 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	
