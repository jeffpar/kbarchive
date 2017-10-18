---
layout: page
title: "Q70123: PWB 1.1 Reads Environment Variables From .STS Files"
permalink: kb/070/Q70123/
---

## Q70123: PWB 1.1 Reads Environment Variables From .STS Files

	Article: Q70123
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS 
	- Microsoft Programmer's Workbench for OS/2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under Programmer's WorkBench (PWB) version 1.10, the settings for the
	environment variables INCLUDE, LIB, and HELPFILES are stored in state (.STS)
	files under the [environ] tag. (These settings were not stored in PWB version
	1.00.)
	
	When PWB starts, it will set its internal environment to the values in the .STS
	file regardless of how the environment is set when you type "PWB".
	
	This can be a special problem when starting PWB for the first time if you've
	forgotten to run the NEW-VARS.BAT (or NEW-VARS.CMD under OS/2) batch file. In
	this case, PWB records the null environment variables in the .STS file. When it
	restarts, it will use the null values that were previously recorded in the .STS
	file, even if you run the NEW-VARS file before starting PWB the second time. The
	workarounds below work well in this situation, too.
	
	MORE INFORMATION
	================
	
	Here is how PWB reads .STS files when it starts:
	
	1. If a program list is set, PWB reads the environment information from the
	  <program list>.STS file in the same directory as the program list.
	
	2. If no program list is set, this information is read from the CURRENT.STS file
	  in the INIT directory.
	
	3. If no program list is set and no CURRENT.STS file exists, the environment is
	  read from the DOS command shell.
	
	Any changes to these three environment variables made with the MS-DOS Set command
	will not be recognized in PWB if the CURRENT.STS or <program list>.STS
	files exist.
	
	The following are three possible ways of changing the INCLUDE, LIB, and HELPFILES
	environment variables:
	
	1. Modify the variables in the Environment dialog box under the Options menu in
	  PWB.
	
	2. Delete the .STS files.
	
	3. Modify the environment variables under the [environ] tag in the .STS files.
	  (Microsoft doesn't recommend doing this, but it can be done this way.)
	
	Additional query words: kbinf 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
