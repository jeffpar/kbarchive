---
layout: page
title: "Q116439: BUG: NMAKE Gives Incorrect Line Number for Include File Error"
permalink: /kb/116/Q116439/
---

## Q116439: BUG: NMAKE Gives Incorrect Line Number for Include File Error

	Article: Q116439
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.01,1.11,1.12,1.13,1.2,1.3,1.4; OS/2:1.01,1.11,1.12,1.21
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.0, 1.01, 1.11, 1.12, 1.13, 1.2, 1.3, 1.4 
	- Microsoft NMAKE Utility for OS/2, versions 1.01, 1.11, 1.12, 1.21 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can include files in an NMAKE makefile by using the !INCLUDE directive.
	However, if an error is found by NMAKE in an included file, an incorrect line
	number is reported by NMAKE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug with NMAKE for MS-DOS, versions 1.0,
	1.01, 1.11, 1.12, 1.13, 1.2, 1.3, and 1.4, and NMAKE for OS/2, versions 1.01,
	1.11, 1.12, and 1.21. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The sample code below for the two files, TEST.NMK and TEST1.NMK, can be used to
	illustrate this problem. Make sure these two files are in the same directory.
	The error message produced is:
	
	  TEST1.NMK(2) : fatal error U1001: syntax error : illegal character
	  '$' in macro
	
	Sample Code
	-----------
	
	  /* NMAKE options needed: /f test.nmk
	  */ 
	
	     TEST.NMK
	     --------
	     !include test1.nmk
	
	     TEST1.NMK
	     ---------
	     test = $($(XXX))
	
	Additional query words: 1.00 1.20 1.30 1.40
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE100DOS kbNMAKE101DOS kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE130DOS kbNMAKE140DOS kbNMAKE101OS2 kbNMAKE111OS2 kbNMAKE112OS2 kbNMAKE121OS2
	Version           : MS-DOS:1.0,1.01,1.11,1.12,1.13,1.2,1.3,1.4; OS/2:1.01,1.11,1.12,1.21
	
	=============================================================================
	
