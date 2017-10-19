---
layout: page
title: "Q111283: FIX: F1001 Error Compiling 2 Gigabyte Array with -Zi"
permalink: /kb/111/Q111283/
---

## Q111283: FIX: F1001 Error Compiling 2 Gigabyte Array with -Zi

	Article: Q111283
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): kberrmsg kbCompiler kbFL32 kbFortranPS
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a FORTRAN source file with -Zi that contains a 2 gigabyte (GB) array
	(or larger) will produce the following error under Windows NT:
	
	  fatal error F1001: INTERNAL COMPILER ERROR
	  (compiler file '@(#)p2symtab.c:1.89', line 1601)
	
	Under MS-DOS, the following error may be generated:
	
	  fatal error F1001: INTERNAL COMPILER ERROR
	  (compiler file '@(#)p2symtab.c:1.89', line 1390)
	
	CAUSE
	=====
	
	Although a Windows NT application has a 4 GB address space, 2 of these 4 GB are
	reserved for system memory. Because a 2 GB array leaves no room for application
	code, this particular condition was not tested.
	
	RESOLUTION
	==========
	
	Reduce the size of the array.
	
	NOTE: Linking a Fortran object module that contains an array 2 gigabytes (or
	greater) will correctly cause the following warning message under Fortran
	PowerStation 4.0:
	
	  :warning LNK4084: total image size -2147422208 exceeds max
	  (268435456); image may not run
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation 32 for
	Windows NT version 1.0 and MS-DOS version 1.0 and 1.0a. This problem was
	corrected in FORTRAN PowerStation 32, version 4.0.
	
	MORE INFORMATION
	================
	
	The following sample illustrates the problem:
	
	Sample Code
	-----------
	
	  c Compile options needed: -Zi
	  c
	         integer*2 n(1073741824)
	         n(1) = 1
	         end
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbFL32 kbFortranPS 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
