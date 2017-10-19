---
layout: page
title: "Q106564: FIX: Debugger Error EE0044 for Arrays If Lower Bound Not 1"
permalink: /kb/106/Q106564/
---

## Q106564: FIX: Debugger Error EE0044 for Arrays If Lower Bound Not 1

	Article: Q106564
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
	
	The Locals and the Watch windows show error EE0044 instead of the values in an
	array declared with lower bounds other than 1.
	
	RESOLUTION
	==========
	
	If possible, EQUIVALENCE the array with lower bounds other than 1 with a
	same-sized array with lower bounds of 1. Then view the elements in the array
	with the lower bounds of 1.
	
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
	
	Neither the Locals nor the Watch window can display the values in an array
	declared with lower bounds other than 1. For example a(10) and b(1:20) work but
	c(-1:5), d(0:34), and e(4:8) do not work.
	
	Regardless of the actual declared lower bound, if it is not 1, then the debugger
	will attempt to display the array as if the lower bound were 0 (zero). For
	example, with A declared as A(2:4), the debugger will display five elements:
	A(0) to A(4).
	
	To demonstrate the problems:
	
	1. Build the sample code with the project in debug mode.
	
	2. Step to the print statement. At this point all three elements of ARR are
	  100.3.
	
	3. In the Watch window, enter "ARR" (without the quotation marks) and "ARR(2)"
	  (without the quotation marks).
	
	4. Click "+ARR = {...}" to display the full array. At this point the Watch
	  window will show:
	
	        -ARR
	           (ARR)(0) = EE0044 Error: Type error.
	           (ARR)(1) = EE0044 Error: Type error.
	           (ARR)(2) = EE0044 Error: Type error.
	           (ARR)(3) = EE0044 Error: Type error.
	           (ARR)(4) = EE0044 Error: Type error.
	         ARR(2) = EE0044 Error: Type error.
	
	5. Open the Locals window. ARR will be displayed the same way.
	
	Sample Code
	-----------
	
	  C Project options needed: Debug mode
	
	        real arr(2:4)
	        arr = 100.3
	        print*, arr(2)
	        end
	
	Additional query words: 1.00 buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
