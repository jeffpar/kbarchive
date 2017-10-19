---
layout: page
title: "Q108285: FIX: Precision Problem with COMPLEX&#42;16 and /Op"
permalink: /kb/108/Q108285/
---

## Q108285: FIX: Precision Problem with COMPLEX&#42;16 and /Op

	Article: Q108285
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
	
	A program, compiled with the /Op option that contains double precision COMPLEX
	arithmetic may produce only a single precision result.
	
	CAUSE
	=====
	
	When optimizing for precision, the compiler always stores intermediate results
	of equations in memory locations rather than leaving the results on the
	coprocessor stack. The problem occurs because the COMPLEX*16 intermediate
	results are incorrectly stored in 8-byte memory locations.
	
	RESOLUTION
	==========
	
	Do not compile routines that perform COMPLEX*16 arithmetic with /Op.
	
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
	
	The following sample demonstrates the problem under FORTRAN PowerStation 1.0
	when compiled with /Op:
	
	Sample Code
	-----------
	
	  c Compile options required: /Op
	        COMPLEX*16 A,B,C
	        REAL*8     D,E,F
	        DATA A / (1.d0,0.d0) / 
	        DATA B / (.3d0,0.d0) / 
	
	        C = A/B
	        D = REAL(A)
	        E = REAL(B)
	        F = D/E
	        PRINT *,'C=',C
	        PRINT *,'F=',F
	        END
	
	Additional query words: 1.00 1.00a buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
