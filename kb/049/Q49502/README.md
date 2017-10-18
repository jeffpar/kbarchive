---
layout: page
title: "Q49502: PRB: NMAKE Runs But Does Not Produce OBJ and EXE Files"
permalink: kb/049/Q49502/
---

## Q49502: PRB: NMAKE Runs But Does Not Produce OBJ and EXE Files

	Article: Q49502
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.01,1.11,1.12,1.13,1.2,1.3,1.4; OS/2:1.01,1.11,1.21
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.01, 1.11, 1.12, 1.13, 1.2, 1.3, 1.4 
	- Microsoft NMAKE Utility for OS/2, versions 1.01, 1.11, 1.21 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the NMAKE utility processes a makefile, even though no warnings occur and
	the compiler appears to execute properly, no OBJ or EXE file is created. When
	the MAKE utility processes the same makefile, the following messages appear on
	the screen:
	
	  warning U4000: Target does not exist.
	  warning U4001: Dependent does not exist; Target not built.
	
	NMAKE may generate the following
	
	  warning D4021 : no action performed
	
	CAUSE
	=====
	
	This problem can occur when extra characters appear at the end of a line in the
	makefile.
	
	RESOLUTION
	==========
	
	Modify the makefile to remove the unexpected trailing characters.
	
	MORE INFORMATION
	================
	
	The following makefile demonstrates this problem. To address this problem,
	remove the semicolon from the end of the CL command.
	
	Sample Makefile
	---------------
	
	file.obj: file.c    # Error: do not use semicolon with CL command
	  CL /c /Lp file.c;
	
	file.exe: file.obj  # OK: LINK command accepts semicolon
	  LINK file;
	
	Additional query words: 1.20 1.30 1.40
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE101DOS kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE130DOS kbNMAKE140DOS kbNMAKE101OS2 kbNMAKE111OS2 kbNMAKE121OS2
	Version           : MS-DOS:1.01,1.11,1.12,1.13,1.2,1.3,1.4; OS/2:1.01,1.11,1.21
	
	=============================================================================
	
