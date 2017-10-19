---
layout: page
title: "Q72699: PRB: U1033 from Space After NMAKE Line Continuation Character"
permalink: /kb/072/Q72699/
---

## Q72699: PRB: U1033 from Space After NMAKE Line Continuation Character

	Article: Q72699
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.01,1.1,1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.01,1.11,1.12,1.13,1.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.01, 1.1, 1.11, 1.12, 1.13, 1.2, 1.3, 1.4 
	- Microsoft NMAKE Utility for OS/2, versions 1.01, 1.11, 1.12, 1.13, 1.21 
	- Microsoft NMAKE Utility for Windows NT, versions 1.4, 1.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to use NMAKE to process a makefile fails and NMAKE generates the
	following message:
	
	  fatal error U1033: syntax error : 'string' unexpected
	
	The 'string' is some part of the makefile that NMAKE determines to be
	syntactically incorrect.
	
	CAUSE
	=====
	
	The makefile contains a line-continuation character (a backslash) and a
	character other than a carriage return follows the backslash.
	
	RESOLUTION
	==========
	
	Modify the makefile to remove any characters after the line continuation
	character. NMAKE interprets the character that follows the backslash literally
	and does not append the following line as desired. The U1033 error occurs
	because the following line does not match NMAKE syntax by itself.
	
	MORE INFORMATION
	================
	
	The sample makefile below illustrates this situation. NMAKE generates the
	following message when it processes this makefile:
	
	  fatal error U1033: syntax error : 'mod3.c' unexpected
	
	Sample NMAKE Makefile
	---------------------
	
	  CFILES = mod1.c mod2.c \_
	  mod3.c
	
	Additional query words: 1.10 1.20 1.30 1.40 1.50
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE101DOS kbNMAKE110DOS kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE130DOS kbNMAKE140DOS kbNMAKE101OS2 kbNMAKE111OS2 kbNMAKE112OS2 kbNMAKE113OS2 kbNMAKE121OS2 kbNMAKE140NT kbNMAKE150NT
	Version           : MS-DOS:1.01,1.1,1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.01,1.11,1.12,1.13,1.21
	
	=============================================================================
	
