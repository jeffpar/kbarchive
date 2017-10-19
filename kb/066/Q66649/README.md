---
layout: page
title: "Q66649: PRB: Cause of U4004 Error Message"
permalink: /kb/066/Q66649/
---

## Q66649: PRB: Cause of U4004 Error Message

	Article: Q66649
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.11,1.12,1.13,1.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.11, 1.12, 1.13, 1.2, 1.3, 1.4 
	- Microsoft NMAKE Utility for OS/2, versions 1.11, 1.12, 1.13, 1.21 
	- Microsoft NMAKE Utility for Windows NT, versions 1.4, 1.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to use a makefile fails and NMAKE generates the following message:
	
	  warning U4004: too many rules for target 'test.exe'
	
	CAUSE
	=====
	
	The makefile contains more than one build dependency block for one target and
	the makefile does not use the multiple dependency block separator, a double
	colon (::).
	
	RESOLUTION
	==========
	
	To eliminate the error, modify the makefile to use the multiple dependency block
	separator.
	
	MORE INFORMATION
	================
	
	The following makefile example demonstrates this warning.
	
	Sample Makefile 1
	-----------------
	
	  all: test.exe
	
	  test.exe : test.c
	
	  cl test.c
	
	  test.exe : test.res
	
	  rc test.res
	
	The following makefile example works as expected.
	
	Sample Makefile 2
	-----------------
	
	  all: test.exe
	
	  test.exe :: test.c # Double colons are used here
	
	  cl test.c
	
	  test.exe :: test.res # Double colons are used here
	
	  rc test.res
	
	Additional query words: 1.10 1.20 1.30 1.40 1.50
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE130DOS kbNMAKE140DOS kbNMAKE111OS2 kbNMAKE112OS2 kbNMAKE113OS2 kbNMAKE121OS2 kbNMAKE140NT kbNMAKE150NT
	Version           : MS-DOS:1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.11,1.12,1.13,1.21
	
	=============================================================================
	
