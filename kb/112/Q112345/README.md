---
layout: page
title: "Q112345: FIX: F1001 or F1002 Compiling Program with Record Using -Zi"
permalink: /kb/112/Q112345/
---

## Q112345: FIX: F1001 or F1002 Compiling Program with Record Using -Zi

	Article: Q112345
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
	
	Using FORTRAN PowerStation to compile a program containing records may
	generate:
	
	  fatal error F1002: compiler is out of heap space in pass 2
	
	  -or-
	
	  fatal error F1001: INTERNAL COMPILER ERROR
	  (compiler file '@(#)p2symtab.c:1.89', line 1490)
	
	The line number is 1279 when using FORTRAN PowerStation for MS-DOS.
	
	CAUSE
	=====
	
	This error occurs only when using the -Zi compiler option, and is related to the
	number of characters in the names of the structure members and the layout and
	contents of the structure.
	
	RESOLUTION
	==========
	
	There are three different ways to resolve these problems:
	
	- Reorder the structure. Putting small items first often eliminates both
	  errors.
	
	-or-
	
	- Use one-character-long member names.
	
	-or-
	
	- Recompile without -Zi.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation for Windows
	NT, version 1.0 and MS-DOS, versions 1.0 and 1.0a. This problem was corrected in
	FORTRAN PowerStation 32, version 4.0.
	
	MORE INFORMATION
	================
	
	Compiling the sample program with -Zi will generate the "F1002: compiler is out
	of heap in pass 2" error.
	
	Shortening "xY" to "Y" or increasing 60000 to 70000 causes the F1001 error.
	
	Trimming "x" from "xY" and "xZ" or moving the 60000 element X array to the end of
	the structure eliminates both problems.
	
	Sample Code
	-----------
	
	  C Compile options needed: -Zi
	        STRUCTURE /CBF/ 
	          CHARACTER*1   X (60000)
	          INTEGER*4     xY (4)
	          CHARACTER*1   xZ (1)
	        END STRUCTURE
	
	        RECORD /CBF/ CB
	
	        END
	
	Additional query words: ICE 1.00 1.00a
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbFL32 kbFortranPS 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
