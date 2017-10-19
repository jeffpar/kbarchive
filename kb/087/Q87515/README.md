---
layout: page
title: "Q87515: FIX: Implied INCLUDE Macro Does Not Force Expansion"
permalink: /kb/087/Q87515/
---

## Q87515: FIX: Implied INCLUDE Macro Does Not Force Expansion

	Article: Q87515
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.11,1.12,1.13,1.2; OS/2:1.11,1.12,1.13,1.21
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.11, 1.12, 1.13, 1.2 
	- Microsoft NMAKE Utility for OS/2, versions 1.11, 1.12, 1.13, 1.21 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an NMAKE version 1.11, 1.12, 1.13, 1.2, or 1.21 INCLUDE macro, which can be
	used to modify the include environment variable, is created from other macros,
	the text substitution will not be done when there is an implied use of the
	include environment variable with the !INCLUDE directive.
	
	RESOLUTION
	==========
	
	To work around this problem, do not use macros to redefine the include
	environment variable. For example, change the assignment from
	
	     INCLUDE=$(INCLUDE1);$(INCLUDE2)
	
	to
	
	     INCLUDE=C:\DIR1;C:\DIR2
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in NMAKE versions 1.11, 1.12, 1.13,
	and 1.2 for MS-DOS and versions 1.11, 1.12, 1.13, and 1.21 for OS/2. This
	problem was corrected in NMAKE version 1.3.
	
	MORE INFORMATION
	================
	
	In the following example, the INCLUDE macro is created from the INCLUDE1 and
	INCLUDE2 macros. When the !INCLUDE is executed, NMAKE will search the
	directories pointed to by the include environment variable for the file
	TEST.INC.
	
	However, at this point the INCLUDE macro is still equal to
	$(INCLUDE1);$(INCLUDE2) and has not been expanded out to C:\DIR1;C:\DIR2, so the
	include environment variable has not been modified yet. If the file TEST.INC is
	not in the current directory, NMAKE will generate the error:
	
	  fatal error U1052: file 'test.inc' not found
	
	If the INCLUDE macro is explicitly used in a command line, it will be expanded
	correctly.
	
	Sample Makefile
	---------------
	
	  /* Command line options needed: None
	  */ 
	
	  INCLUDE1=C:\DIR1
	  INCLUDE2=C:\DIR2
	
	  INCLUDE=$(INCLUDE1);$(INCLUDE2)
	
	  !INCLUDE <TEST.INC>
	
	  ALL:
	   @ECHO Made it!
	
	Additional query words: 1.11 1.12 1.13 1.20 1.21
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE111OS2 kbNMAKE112OS2 kbNMAKE113OS2 kbNMAKE121OS2
	Version           : MS-DOS:1.11,1.12,1.13,1.2; OS/2:1.11,1.12,1.13,1.21
	Solution Type     : kbfix
	
	=============================================================================
	
