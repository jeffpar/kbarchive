---
layout: page
title: "Q102695: FIX: F2559, DX1020 From Illegal Array Bound, -4Yb, and -4Ys"
permalink: /kb/102/Q102695/
---

## Q102695: FIX: F2559, DX1020 From Illegal Array Bound, -4Yb, and -4Ys

	Article: Q102695
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
	
	An attempt to compile an application may fail and Microsoft FORTRAN PowerStation
	may generate the following messages:
	
	  error F2559: array bound used illegal variable
	  DOSXNT : fatal error DX1020: unhandled exception:
	  General protection fault
	
	CAUSE
	=====
	
	The application declares an array using an initialized INTEGER variable as an
	array bound and refers to that array using an INTEGER as a subscript. The
	compile command line includes both the -4Yb and -4Ys option switches.
	
	The General Protection Fault occurs because the array has an illegal array bound.
	
	RESOLUTION
	==========
	
	Modify the source code to define the array bound in a PARAMETER statement before
	using it in the array declaration or declare the array using an integer
	constant.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation version 1.0
	for MS-DOS. This problem has been resolved with FORTRAN PowerStation maintenance
	release version 1.0a for MS-DOS.
	
	MORE INFORMATION
	================
	
	The following code example demonstrates this problem:
	
	Sample Code 1
	-------------
	
	  C Compiler options needed: -4Yb -4Ys
	
	        real x(n)
	        i = 1
	        x(i) = 1.0
	        end
	
	The following code example demonstrates the correct method to declare an array in
	this manner:
	
	Sample Code 2
	-------------
	
	  C Compiler options needed: -4Yb -4Ys
	
	        parameter (n = 10)
	        real x(n)
	        i = 1
	        x(i) = 1.0
	        end
	
	FORTRAN PowerStation version 1.0 can be differentiated from the maintenance
	release version 1.0a by invoking the linker. Typing "link32 | more" (without the
	quotation marks) from \F32\BIN directory will show version 2.8 for FORTRAN
	PowerStation version 1.0, and it will show version 1.0f for the maintenance
	release version 1.0a.
	
	Additional query words: 1.00 buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
