---
layout: page
title: "Q108368: FIX: Error F1001 in range.c Compiling with -Ox"
permalink: kb/108/Q108368/
---

## Q108368: FIX: Error F1001 in range.c Compiling with -Ox

	Article: Q108368
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbCompiler kbFL32 kbFortranPS
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to compile a program, using the -Ox option, that contains an GOTO
	statement in combination with the INCLUDE may fail with the following error
	message:
	
	  fatal error F1001: INTERNAL COMPILER ERROR
	  (compiler file '@(#)range.c:1.0', line 2279)
	
	CAUSE
	=====
	
	The INCLUDE file contains an array on the left side of an assignment statement,
	and the array is not declared. Because undeclared arrays appear as functions to
	the compiler, the following error message should have been generated:
	
	  error F2515: left side of assignment illegal
	
	RESOLUTION
	==========
	
	Make sure all arrays are properly declared.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft FORTRAN PowerStation
	32 for Windows NT, version 1.0. This problem was corrected in Microsoft
	PowerStation 32, version 4.0.
	
	MORE INFORMATION
	================
	
	The following program illustrates the problem:
	
	Sample Code
	-----------
	
	  C Compile options needed: -Ox
	
	        CHARACTER*130 IN
	        INCLUDE 'ZDATA.CPY'
	
	  1000  CONTINUE
	        LOC=JNDX('TIME SERIESUSER DEFINE?',33,IN,ILEN,11)
	        GO TO 1000
	        END
	
	  C ZDATA.CPY:
	  C The following is the content of the include file:
	
	        JABEL(I) = MBZ23 + I
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbFL32 kbFortranPS 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
