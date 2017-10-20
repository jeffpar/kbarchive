---
layout: page
title: "Q100376: FIX: Intrinsic REAL Function Assigned to COMPLEX Fails"
permalink: /kb/100/Q100376/
---

## Q100376: FIX: Intrinsic REAL Function Assigned to COMPLEX Fails

{% raw %}

	Article: Q100376
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
	
	An application that assigns the result of a REAL intrinsic function to a COMPLEX
	variable may generate incorrect results.
	
	CAUSE
	=====
	
	The compiler generates incorrect code to perform this assignment.
	
	RESOLUTION
	==========
	
	There are two methods to avoid this problem, as follows:
	
	- Modify the source code to assign the result of the REAL function to a
	  temporary REAL variable. Then specify the temporary variable in the
	  assignment statement.
	
	- Add zero to the result of the function.
	
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
	
	Specifying different compiler options does not correct this problem. The various
	options only change the incorrect value that the code places in the COMPLEX
	variable.
	
	The following sample code demonstrates this problem:
	
	Sample Code #1
	--------------
	
	  c Compile options needed: None
	
	        complex*8 c
	        real*4 x
	        x = 1.0
	        c = exp(x)
	        print *, 'complex c1 = exp(x); c = ', c
	        end
	
	
	The following sample code demonstrates one method to work around this problem:
	
	Sample Code #2
	--------------
	
	  c Compile options needed: None
	
	        complex*8 c
	        real*4 x, tmp
	        x = 1.0
	        tmp = exp(x)
	        c = tmp
	        print *, 'complex c1 = exp(x); c = ', c
	        end
	
	The following sample code demonstrates another method to work around this
	problem:
	
	Sample Code #3
	--------------
	
	  c Compile options needed: None
	
	        complex*8 c
	        real*4 x
	        x = 1.0
	        c = exp(x) + 0
	        print *, 'complex c1 = exp(x); c = ', c
	        end
	
	Additional query words: 1.00 buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
