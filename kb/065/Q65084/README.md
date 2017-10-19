---
layout: page
title: "Q65084: PRB: Spaces in Inference Rules Corrupt NMAKE Macro Expansion"
permalink: /kb/065/Q65084/
---

## Q65084: PRB: Spaces in Inference Rules Corrupt NMAKE Macro Expansion

	Article: Q65084
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.01,1.1,1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.01,1.11,1.12,1.13,1.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.01, 1.1, 1.11, 1.12, 1.13, 1.2, 1.3, 1.4 
	- Microsoft NMAKE Utility for OS/2, versions 1.01, 1.11, 1.12, 1.13, 1.21 
	- Microsoft NMAKE Utility for Windows NT, versions 1.4, 1.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to use an NMAKE default macro fails and NMAKE generates a message
	such as the following:
	
	  warning u4006: special macro undefined : '$<'
	
	CAUSE
	=====
	
	A space has been inserted between the name of the target and the dependent
	extensions in an inference rule.
	
	RESOLUTION
	==========
	
	In an inference rule, list the dependent file extension followed by the target
	file extension without any intervening embedded spaces.
	
	MORE INFORMATION
	================
	
	The following makefile examples demonstrate a few of the problems that can
	result when spaces are embedded in an inference rule. In both cases below, note
	that the embedded spaces cause NMAKE to run commands incorrectly. If you modify
	the files to remove the spaces, NMAKE generates the desired commands.
	
	Sample Makefile 1
	-----------------
	
	  # The command executed by NMAKE:
	  #
	  #    cl {.}
	
	  {.}.c {c:\objs\}.obj:
	     cl $*
	
	  c:\objs\test.obj: .\test.c
	
	Sample Makefile 2
	-----------------
	
	  # The command executed by NMAKE:
	  #
	  #    cl
	
	  .c .obj:
	    cl $<
	
	  ALL: myfile.obj
	
	  myfile.obj: myfile.c
	
	Additional query words: 1.10 1.20 1.30 1.40 1.50
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE101DOS kbNMAKE110DOS kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE130DOS kbNMAKE140DOS kbNMAKE101OS2 kbNMAKE111OS2 kbNMAKE112OS2 kbNMAKE113OS2 kbNMAKE121OS2 kbNMAKE140NT kbNMAKE150NT
	Version           : MS-DOS:1.01,1.1,1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.01,1.11,1.12,1.13,1.21
	
	=============================================================================
	
