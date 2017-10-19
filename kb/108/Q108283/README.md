---
layout: page
title: "Q108283: FIX: F1001 in codegen.c with IMPLICIT COMPLEX"
permalink: /kb/108/Q108283/
---

## Q108283: FIX: F1001 in codegen.c with IMPLICIT COMPLEX

	Article: Q108283
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a FORTRAN PowerStation routine that uses IMPLICIT COMPLEX may produce
	the following error:
	
	  fatal error F1001: INTERNAL COMPILER ERROR
	  (compiler file '@(#)codegen.c:1.167', line 309)
	  Contact Microsoft Product Support Services
	
	RESOLUTION
	==========
	
	Explicitly declare all COMPLEX variables.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation version 1.0
	for MS-DOS. This problem has been resolved with FORTRAN PowerStation maintenance
	release version 1.0a for MS-DOS.
	
	FORTRAN PowerStation version 1.0 can be differentiated from the maintenance
	release version 1.0a by invoking the linker. Typing "link32 | more" (without the
	quotation marks) from \F32\BIN directory will show version 2.8 for FORTRAN
	PowerStation version 1.0, and it will show version 1.0f for the maintenance
	release version 1.0a.
	
	MORE INFORMATION
	================
	
	To demonstrate the problem, compile the sample code below with the FORTRAN
	PowerStation:
	
	Sample Code
	-----------
	
	  c--- compile options needed: none
	        implicit complex (a-p,r-z)
	        end
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
