---
layout: page
title: "Q106641: BUG: GPF on Expanding Adjustable Size Array After Execution"
permalink: /kb/106/Q106641/
---

## Q106641: BUG: GPF on Expanding Adjustable Size Array After Execution

	Article: Q106641
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After the program finishes execution under the debugger, expanding an adjustable
	size array in the Watch window may cause a general protection (GP) fault.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation version 1.0
	for MS-DOS.
	
	This is not a problem in FORTRAN PowerStation 32.
	
	MORE INFORMATION
	================
	
	To duplicate the problem:
	
	1. Build the following sample code in debug mode from the Visual Workbench:
	
	        real*4 arr(20)
	        arr = 7.
	        Call Sub (arr, 20)
	        End
	
	        Subroutine Sub (arr,n)
	        real*4      arr(n)
	        arr(1) = n+1.2
	        print*, arr(1)
	        Return
	        End
	
	2. Set a breakpoint at:
	
	        print*, arr(1)
	
	3. "Go" (press F5).
	
	4. Type "ARR" (without the quotation marks) in the Watch window, and expand it.
	
	5. Shrink it back to "+ARR = {...}" (without the quotation marks) and press F5
	  again.
	
	6. After the program finishes execution, again expanding the variable ARR may
	  cause a GP fault.
	
	Additional query words: nofpsnt 1.00 gpf gp-fault
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
