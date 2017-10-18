---
layout: page
title: "Q123689: PRB: F2347 or F2201 Error When Function Is Not Typed"
permalink: kb/123/Q123689/
---

## Q123689: PRB: F2347 or F2201 Error When Function Is Not Typed

	Article: Q123689
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a,4.0,5.1
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN Compiler for MS-DOS, version 5.1 
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, versions 1.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling, you receive the following error message:
	
	  F2347: <function name> : missing Type
	
	You may also receive the following error message:
	
	  F2201: <function name> : Type redefined
	
	Error F2347 is not documented in the Microsoft FORTRAN Professional Development
	System version 5.1.
	
	CAUSE
	=====
	
	The return type of a FORTRAN function must be declared in the calling scope. If
	the type is not defined, implicit typing will occur. If you use the IMPLICIT
	NONE statement, you will receive the F2347 error. If you do not use the IMPLICIT
	NONE statement and the implicit typing does not agree with the formal
	declaration of the function, you will receive the F2201 error.
	
	RESOLUTION
	==========
	
	Provide explicit typing for FORTRAN functions, as in the code sample below.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Compiling the sample code that follows will generate the F2201 error. Removing
	the comment on the IMPLICIT NONE line will cause it to generate the F2347 error
	in addition to the F2201 error. Removing the comment on the INTEGER func line
	will resolve both errors.
	
	NOTE: Under Fortran PowerStation 4.0 the following error message is displayed
	when compiling the Sample Code as given:
	
	  error FOR2205: wrong data type for reference to FUNCTION FUNC from procedure
	  TEST
	
	The following error message is displayed if you uncomment the IMPLICIT NONE
	line:
	
	  error FOR2290: implicit type for FUNC
	
	Sample Code to Demonstrate Behavior
	-----------------------------------
	
	  /* Compile options needed: none
	  */ 
	        PROGRAM test
	
	  C      IMPLICIT NONE
	
	        REAL a, b
	  C      INTEGER func
	
	        a = 2.0
	        b = 3.0
	        b = func(a, b)
	        WRITE(*, *) func(a, b)
	
	        END
	
	        INTEGER FUNCTION func(a, b)
	        REAL a, b
	
	        PRINT*, a, b
	
	        func = int(a)
	
	        RETURN
	        END
	
	Additional query words: 5.10 1.00 1.00a 4.00 docerr errmsg err msg
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRAN510DOS kbFORTRANPower32100NT kbFORTRANPower32400NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a,4.0,5.1
	
	=============================================================================
	
