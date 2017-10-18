---
layout: page
title: "Q82872: Recommended WIN.INI Switch Settings for Dr. Watson 0.80"
permalink: kb/082/Q82872/
---

## Q82872: Recommended WIN.INI Switch Settings for Dr. Watson 0.80

	Article: Q82872
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Dr. Watson version 0.80 is a diagnostic tool that ships with Microsoft Windows
	operating system version 3.1. Dr. Watson is not installed in the StartUp group
	by default. To use Dr. Watson for help with troubleshooting general protection
	(GP) faults, either add a Dr. Watson icon to the StartUp group, or add
	DRWATSON.EXE to the LOAD= line in the WIN.INI file.
	
	NOTE: Dr. Watson is included in Windows versions 3.1 and 3.11 and Windows for
	Workgroups version 3.1. It is not included with Windows 3.0 or Windows for
	Workgroups 3.11.
	
	MORE INFORMATION
	================
	
	To maximize the information pertinent to Microsoft Product Support Services
	(PSS) engineers the following section should be added to the WIN.INI file:
	
	     [Dr. Watson]
	     SkipInfo=Reg 32b Sta
	     ShowInfo=Mod
	
	The following explains the two above lines:
	
	SkipInfo=Reg 32b Sta
	--------------------
	
	SkipInfo= prevents Dr. Watson from displaying some information. "Reg" is short
	for "registers." "32b" is short for "32-bit registers." "Sta" is short for
	"stacks." This helps to limit the size of the DRWATSON.LOG file.
	
	
	ShowInfo=Mod
	------------
	
	ShowInfo= tells Dr. Watson to display information. "Mod" is short for "modules."
	
	Including the modules section provides some additional information (such as the
	*.DRV, *.DLL, *.FON, *.386, and *.EXE files that were running at the time of the
	GP fault) that may help the PSS engineer discover the source of the GP
	fault(s).
	
	KBCategory: kbtool kbdisplay kbenv kbtshoot
	KBSubcategory: wfw wfwg win31 gpf
	
	Additional query words: tshoot 3.1 3.10 .80 3/26/92
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
