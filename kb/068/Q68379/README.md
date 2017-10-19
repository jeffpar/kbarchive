---
layout: page
title: "Q68379: FIX: NMAKE Filename-Parts Syntax Does Not Expand Macros"
permalink: /kb/068/Q68379/
---

## Q68379: FIX: NMAKE Filename-Parts Syntax Does Not Expand Macros

	Article: Q68379
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.01,1.1,1.11,1.12,1.13; OS/2:1.01,1.11,1.12,1.13
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.01, 1.1, 1.11, 1.12, 1.13 
	- Microsoft NMAKE Utility for OS/2, versions 1.01, 1.11, 1.12, 1.13 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to use macro substitution with the filename-parts syntax or the
	extmake option switch fails.
	
	RESOLUTION
	==========
	
	To work around this problem, replace the extmake switch with the appropriate
	predefined macros (such as $** and $?).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with NMAKE. It was corrected in
	NMAKE version 1.2 for MS-DOS and OS/2.
	
	MORE INFORMATION
	================
	
	To demonstrate this error, specify a directory in the SUBDIR variable. Set the
	current directory to a different directory and run NMAKE. The file produces the
	following command line:
	
	  cl $(SUBDIR)\myfile.c
	
	Sample Makefile
	---------------
	
	  SUBDIR = subdir
	
	  myfile.exe: $(SUBDIR)\myfile.c
	  cl %|pfeF
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE101DOS kbNMAKE110DOS kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE101OS2 kbNMAKE111OS2 kbNMAKE112OS2 kbNMAKE113OS2
	Version           : MS-DOS:1.01,1.1,1.11,1.12,1.13; OS/2:1.01,1.11,1.12,1.13
	Solution Type     : kbfix
	
	=============================================================================
	
