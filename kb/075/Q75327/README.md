---
layout: page
title: "Q75327: Macros Do Not Become Part of the Environment"
permalink: /kb/075/Q75327/
---

## Q75327: Macros Do Not Become Part of the Environment

	Article: Q75327
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.11,1.12,1.13,1.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.11, 1.12, 1.13, 1.2, 1.3, 1.4 
	- Microsoft NMAKE Utility for OS/2, versions 1.11, 1.12, 1.13, 1.21 
	- Microsoft NMAKE Utility for Windows NT, versions 1.4, 1.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When NMAKE defines a macro in a makefile, it does not define a corresponding
	environment variable for the processes NMAKE invokes. However, if an environment
	variable of the same name already exists, NMAKE reassigns it to have the same
	value as the macro.
	
	For example, the first sample makefile below defines a CL macro. If an
	environment variable named CL exists, the CL macro in the makefile temporarily
	reassigns the CL environment variable such that the compiler only compiles files
	and does not link them. If the CL environment variable does not already exist,
	the CL macro is not added to the environment and does not change the compiler
	settings.
	
	MORE INFORMATION
	================
	
	To create an environment variable in a makefile, use the SET command. The second
	sample makefile below demonstrates creating the CL environment variable if it
	does not already exist in the inherited environment.
	
	The reassignment of existing environment variables can lead to unexpected errors.
	In the third sample program, if the environment variable 'LINK' is defined, one
	of the following errors will be generated:
	
	  LINK : error LNK1104: cannot open file "link.obj" (32 bit)
	
	  -or-
	
	  LINK : fatal error L1093: link.obj : object file not found (16 bit)
	
	NTWIN32.MAK, the Win32 application master NMAKE definitions file for the
	Microsoft Win32 SDK for Windows NT programming samples, contains the macro
	definition "link=link". Any makefile which has "!include <NTWIN32.MAK>"
	will fail with LNK1104, if the environment variable 'LINK' is defined.
	
	The following warnings for the 32 bit compiler are generated for makefiles which
	define the MACRO 'cl' if the environment variable 'CL' was also defined:
	
	  Command line warning D4024 : unrecognized source file type 'cl',
	  object file assumed
	  Command line warning D4027 : source file 'cl' ignored
	
	NOTE: If you use NMK.COM instead of NMAKE, you must use the SET command to
	reassign any environment variables. NMK.COM does not permit you to use macro
	assignments to override the environment. For more information, query in the
	Microsoft Knowledge Base on the following words:
	
	  " NMK.COM and environment and macros " (without the quotation marks)
	
	Sample Makefile #1
	------------------
	
	# If the CL environment variable does not exist, this makefile # compiles and
	links TEST.C. If the CL environment variable exists, # the makefile changes its
	value to "/c" and prevents the linker from # running.
	
	  CL=/c
	   
	  ALL:
	   
	     cl test.c
	
	Sample Makefile #2
	------------------
	
	# This is a modified makefile from sample 1. Because CL is set with # the SET
	command, the linker does not run.
	
	  INCLUDE=d:\include
	  ALL:
	     set cl=/c
	     cl test.c
	
	Sample Makefile #3
	------------------
	
	# If the LINK environment variable does not exist, this makefile # compiles and
	links TEST.C. If the LINK environment variable exists, # the makefile changes
	its value to "link" and the linker error: # LNK1104 or L1093 will be generated.
	
	  link=link
	
	  ALL:
	     cl /c test.c
	     $(link) test.o
	
	Additional query words: kbinf 1.20 1.30 1.40 1.50
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE130DOS kbNMAKE140DOS kbNMAKE111OS2 kbNMAKE112OS2 kbNMAKE113OS2 kbNMAKE121OS2 kbNMAKE140NT kbNMAKE150NT
	Version           : MS-DOS:1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.11,1.12,1.13,1.21
	
	=============================================================================
	
