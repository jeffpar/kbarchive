---
layout: page
title: "Q106563: FIX: Unary Minus and Mixed Complex&#42;16 with Complex&#42;8"
permalink: /kb/106/Q106563/
---

## Q106563: FIX: Unary Minus and Mixed Complex&#42;16 with Complex&#42;8

	Article: Q106563
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
	
	Mixing COMPLEX*16 and COMPLEX*8 variables in an expression using the unary minus
	can give the wrong result.
	
	RESOLUTION
	==========
	
	Do not use a unary minus in a mixed COMPLEX expression. Make the minus a binary
	operator by subtracting the mixed COMPLEX expression from zero.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation version 1.0
	for MS-DOS. This problem has been resolved with FORTRAN PowerStation maintenance
	release version 1.0a for MS-DOS.
	
	MORE INFORMATION
	================
	
	FORTRAN PowerStation version 1.0 can be differentiated from the maintenance
	release version 1.0a by invoking the linker. Typing "link32 | more" (without the
	quotation marks) from \F32\BIN directory will show version 2.8 for FORTRAN
	PowerStation version 1.0, and it will show version 1.0f for the maintenance
	release version 1.0a.
	
	When the following sample code is run, the correct result will be displayed
	first:
	
	Sample Code
	-----------
	
	  C No compiler options required
	          COMPLEX CVAR1,RESLT1,RESLT2
	          COMPLEX*16 CVAR2
	          CVAR1 = CMPLX(100,0)
	          CVAR2 = DCMPLX(100,0)
	          RESLT1 = 0 - CVAR1 * CVAR2   ! right result (binary -)
	          RESLT2 =  - CVAR1 * CVAR2    ! wrong result (unary -)
	          WRITE(*,*) RESLT1,RESLT2
	          END
	
	Additional query words: 1.00 buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
