---
layout: page
title: "Q130471: PRB: EXTERN Attribute Prevents F4999 on Unreferenced Function"
permalink: /kb/130/Q130471/
---

## Q130471: PRB: EXTERN Attribute Prevents F4999 on Unreferenced Function

	Article: Q130471
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a,4.0,5.1
	Operating System(s): 
	Keyword(s): kbcode kbLangFortran
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN Compiler for MS-DOS, version 5.1 
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, versions 1.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A function that is defined using the INTERFACE TO statement and that includes
	the return type declaration but that is not called from within a program causes
	the compiler to generate this warning message:
	
	  warning F4999: <symbol> : variable declared but not used
	
	Or for Fortran PowerStation 4.0:
	
	  warning FOR4270: unused symbol
	
	CAUSE
	=====
	
	The compiler is correct to report that <symbol> is not being used. This
	problem usually occurs when using a library of functions or subroutines. The
	library needs to have INTERFACE TO statements and function declarations for all
	routines in the library. An application may not need to call every function
	contained in the library. Any functions that are defined but not called result
	in the warning.
	
	RESOLUTION
	==========
	
	When declaring a function, use the EXTERN attribute as in the following code
	sample.
	
	Sample Code
	-----------
	
	
	  C  INTERFACE TO usually in .FI
	        INTERFACE TO INTEGER*4 FUNCTION Func(I)
	        INTEGER*4 I [VALUE]
	        END
	
	  C  Declaration usually in .FD (remove [EXTERN] to get the F4999)
	        INTEGER*4 Func [EXTERN]
	
	  C  Start of program
	        PRINT *, 'Hello'
	        END
	
	  C  Body of function possibly somewhere else
	        INTEGER*4 FUNCTION Func(I)
	        INTEGER*4 I [VALUE]
	            Func = I + 7
	        END
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 5.00 5.10 1.00 1.00a 4.00
	
	======================================================================
	Keywords          : kbcode kbLangFortran 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRAN510DOS kbFORTRANPower32100NT kbFORTRANPower32400NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a,4.0,5.1
	
	=============================================================================
	
