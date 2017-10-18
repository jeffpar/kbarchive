---
layout: page
title: "Q61642: DOCERR: Programmer's Workbench Edit Switch Is Not Implemented"
permalink: kb/061/Q61642/
---

## Q61642: DOCERR: Programmer's Workbench Edit Switch Is Not Implemented

	Article: Q61642
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an option is added to the TOOLS.INI file under the PWB tag to read either
	"Edit:yes" or "Edit:no", PWB returns the following error message:
	
	  Edit is not an editor switch.
	
	CAUSE
	=====
	
	The edit switch for the Programmer's WorkBench (PWB), documented on page 79 of
	the Microsoft C version 6.0 "Microsoft C Reference" manual, is not implemented
	in PWB versions 1.0 and 1.1. The documentation is incorrect.
	
	RESOLUTION
	==========
	
	To open a file as read only, invoke PWB with the /r option.
	
	Additional query words: 1.00 1.10 docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	
