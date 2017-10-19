---
layout: page
title: "Q104524: Incorrect Syntax for DOSSHELL.INI in MS-DOS Shell Help"
permalink: /kb/104/Q104524/
---

## Q104524: Incorrect Syntax for DOSSHELL.INI in MS-DOS Shell Help

	Article: Q104524
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS Shell Help contains a syntax documentation error. It states that you can
	specify the location of the DOSSHELL.INI file by setting a dosshell environment
	variable in your AUTOEXEC.BAT file. For example, if the DOSSHELL.INI file is
	located in your DOS directory on drive C, according to the help file, you would
	add the following command line to your AUTOEXEC.BAT file:
	
	  dosshell=c:\dos
	
	The syntax in the above statement is incorrect. This does not set the environment
	variable. Adding this entry to the AUTOEXEC.BAT file causes Shell to be
	executed, which stops AUTOEXEC.BAT file processing until you exit Shell. A
	correct example for this line entry is:
	
	  set dosshell=c:\dos
	
	This entry only sets the environment variable to the DOS directory; it does not
	start Shell (therefore your AUTOEXEC.BAT file is still processed). This syntax
	can be checked by using the SET command at the C prompt to examine the
	environment variables.
	
	Additional query words: 6.00 dosshell dosshell.ini environment
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
