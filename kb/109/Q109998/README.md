---
layout: page
title: "Q109998: FIX: Divide by Zero Run-Time Error Not Produced"
permalink: /kb/109/Q109998/
---

## Q109998: FIX: Divide by Zero Run-Time Error Not Produced

{% raw %}

	Article: Q109998
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain conditions, the Microsoft FORTRAN compiler will execute a program
	without reporting any error, when in fact a divide-by-zero error has occurred.
	
	CAUSE
	=====
	
	The run-time library is not being brought into the executable, so no run- time
	error will occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation 32 for
	Windows NT and MS-DOS, version 1.0. This problem has been resolved with FORTRAN
	PowerStation maintenance release version 1.0a for MS-DOS.
	
	MORE INFORMATION
	================
	
	FORTRAN PowerStation version 1.0 for MS-DOS can be differentiated from the
	maintenance release version 1.0a by invoking the linker. Typing "link32 | more"
	(without the quotation marks) from \F32\BIN directory will show version 2.8 for
	FORTRAN PowerStation version 1.0 for MS-DOS, and it will show version 1.0f for
	the maintenance release version 1.0a. This problem is rare because almost every
	program written uses run-time functions. To make the program give the proper
	run-time error, use any run-time routine such as WRITE to ensure the run-time
	routines are part of the executable. The sample code below will exhibit the
	run-time error. If the WRITE statement is removed, the code will complete
	without an error.
	
	Sample Code
	-----------
	
	  C compile options needed: none
	  C
	
	         a=1.
	         b=0.
	         c=a/b
	         write (*,*) c
	         end
	
	Additional query words: 1.00 buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
