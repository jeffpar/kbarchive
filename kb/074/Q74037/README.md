---
layout: page
title: "Q74037: Use Only Application Name when Adding to SETVER Version Table"
permalink: kb/074/Q74037/
---

## Q74037: Use Only Application Name when Adding to SETVER Version Table

	Article: Q74037
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When adding an application to the version table using the SETVER command, only
	the application filename should be used (without the full path). In addition,
	the application filename should include the extension. The proper syntax to use
	when adding an application to the version table using SETVER is
	
	  setver [drive:path] [filename n.nn]
	
	where
	
	  [drive:path] specifies the location of the SETVER.EXE file
	
	  [filename is the name of application to be added, plus the extension
	
	  n.nn] is the version of MS-DOS reported to the program
	
	MORE INFORMATION
	================
	
	Note that [drive:path] refers to the location of the SETVER.EXE file, not the
	location of the application to be added, and therefore, it is not necessary to
	include.
	
	Two possible error messages can occur if the full pathname of the application is
	used when attempting to add to the version table:
	
	  ERROR: Could not find the file SETVER.EXE
	
	  Use "SETVER /?" for help.
	
	  ERROR: Missing Parameter
	
	  Use "SETVER /?" for help.
	
	In each of the above cases, the application will not be added to the version
	table.
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
