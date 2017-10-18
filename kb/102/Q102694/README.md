---
layout: page
title: "Q102694: FIX: F1917 Error, Print Logical Expression of COMPLEX Values"
permalink: kb/102/Q102694/
---

## Q102694: FIX: F1917 Error, Print Logical Expression of COMPLEX Values

	Article: Q102694
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
	
	An attempt to compile an application that contains a logical expression that
	involves COMPLEX variables in the output list may fail and Microsoft FORTRAN
	PowerStation may generate the following message:
	
	  fatal error F1917: unknown primitive type
	
	RESOLUTION
	==========
	
	To avoid this error, assign the result of the logical expression to a logical
	variable and specify the variable instead of the expression in the output list.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation version 1.0
	for MS-DOS. This problem has been resolved with FORTRAN PowerStation maintenance
	release version 1.0a for MS-DOS.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates this problem:
	
	Sample Code 1
	-------------
	
	  C Compiler options needed: None
	
	        complex x, y
	        x = (1.0, 1.0)
	        y = (1.0, 1.0)
	        print *, (x .NE. y)
	        end
	
	The following sample code demonstrates the method to work around this problem:
	
	Sample Code #2
	--------------
	
	  C Compiler options needed: None
	
	        complex x, y
	        logical logVal
	        x = (1.0, 1.0)
	        y = (1.0, 1.0)
	        logVal = (x .NE. y)
	        print *, logVal
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
	
