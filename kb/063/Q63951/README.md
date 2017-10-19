---
layout: page
title: "Q63951: DOCERR: PWB Option /DP Is Documented But Not Implemented"
permalink: /kb/063/Q63951/
---

## Q63951: DOCERR: PWB Option /DP Is Documented But Not Implemented

	Article: Q63951
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0; OS/2:1.0
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, version 1.0 
	- Microsoft Programmer's Workbench for OS/2, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The /DP switch for the Programmer's WorkBench (PWB), documented on Page 49 of
	the Microsoft C version 6.0 "Microsoft C Reference," is not implemented in
	version 1.0 of PWB. This switch is designed to ignore the most recent program
	list upon starting PWB.
	
	The /DP switch is mentioned only in the "Microsoft C Reference" and not in the
	online help.
	
	MORE INFORMATION
	================
	
	Upon invocation, the Programmer's WorkBench version 1.0 does not automatically
	set the program list to the last program list used. Therefore, the /DP
	command-line switch was not implemented because it would have no purpose.
	
	With the PWB version 1.0, there is no way to have the last program list set
	automatically at startup. This functionality was added with PWB version 1.1.
	
	Additional query words: 1.00 docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB100OS2
	Version           : MS-DOS:1.0; OS/2:1.0
	
	=============================================================================
	
