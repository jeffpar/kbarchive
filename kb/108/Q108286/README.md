---
layout: page
title: "Q108286: FIX: Incorrect F2560 with Adjustable Sized Arrays and /4Yb"
permalink: /kb/108/Q108286/
---

## Q108286: FIX: Incorrect F2560 with Adjustable Sized Arrays and /4Yb

{% raw %}

	Article: Q108286
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
	
	Compiling an adjustable sized array with extended error handling (for example,
	/4Yb), which uses an expression for a bound, incorrectly produces the following
	error:
	
	  error F2560: (array_name) : array bound used intrinsic call
	
	RESOLUTION
	==========
	
	Do not use extended error handling when compiling adjustable sized arrays that
	are dimensioned with an expression.
	
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
	
	The sample program below demonstrates the problem when compiled with FORTRAN
	PowerStation:
	
	Sample Code
	-----------
	
	  $debug
	         SUBROUTINE TEST(N,X)
	         INTEGER N
	         REAL X((N+1)/2) ! Expression dimensions adjustable array X
	         X((N+1)/2)=1
	         RETURN
	         END
	
	Additional query words: 1.00 1.00a buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
