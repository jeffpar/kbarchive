---
layout: page
title: "Q59141: Accessing Environment Variables In a Makefile"
permalink: /kb/059/Q59141/
---

## Q59141: Accessing Environment Variables In a Makefile

	Article: Q59141
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.01,1.1,1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.11,1.12,1.13,1.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.01, 1.1, 1.11, 1.12, 1.13, 1.2, 1.3, 1.4 
	- Microsoft NMAKE Utility for OS/2, versions 1.11, 1.12, 1.13, 1.21 
	- Microsoft NMAKE Utility for Windows NT, versions 1.4, 1.5 
	-------------------------------------------------------------------------------
	
	You can access environment variables within a MAKE or NMAKE makefile
	in the same way that you access user-defined macros. The only
	difference is that the names of environment variables must be
	capitalized when used in this manner. For example:
	
	  # the INCLUDE "macro" will pick up your INCLUDE environment variable
	
	  file.obj : file.c $(INCLUDE)\file.h
	
	  cl /c /Zi /Od file.c
	
	Additional query words: kbinf 1.10 1.20 1.30 1.40 1.50
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE101DOS kbNMAKE110DOS kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE130DOS kbNMAKE140DOS kbNMAKE111OS2 kbNMAKE112OS2 kbNMAKE113OS2 kbNMAKE121OS2 kbNMAKE140NT kbNMAKE150NT
	Version           : MS-DOS:1.01,1.1,1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.11,1.12,1.13,1.21
	
	=============================================================================
	
