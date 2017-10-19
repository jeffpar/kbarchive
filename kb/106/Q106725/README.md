---
layout: page
title: "Q106725: FIX: Alternate Return Compiled with /Ox Can GPF at Run Time"
permalink: /kb/106/Q106725/
---

## Q106725: FIX: Alternate Return Compiled with /Ox Can GPF at Run Time

	Article: Q106725
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
	
	The FORTRAN PowerStation optimizer may generate incorrect code when compiling
	routines containing alternate returns. If routines containing alternate returns
	are compiled with /Ox, the following errors may occur at run time:
	
	  DOSXMSF : fatal error DX1020: unhandled exception: General
	  protection fault;
	
	  Fault occurred in a System Call
	
	RESOLUTION
	==========
	
	Altering code around the alternate return may alleviate this problem. If this
	doesn't work, then do not compile routines using alternate returns with /Ox.
	Note that other routines in the program can still be optimized.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation version 1.0
	for MS-DOS. This problem has been resolved with FORTRAN PowerStation maintenance
	release version 1.0A for MS-DOS.
	
	MORE INFORMATION
	================
	
	To duplicate the error, compile the sample code with /Ox and then run the
	program to get the DX1020 error. This problem is dependent on the surrounding
	code. Replacing "var=1.0" with "continue", or commenting out "goto 10" in the
	sample below removes the problem:
	
	FORTRAN PowerStation version 1.0 can be differentiated from the maintenance
	release version 1.0A by invoking the linker. Typing "link32 | more" (without the
	quotation marks) from /F32/BIN directory will show version 2.8 for FORTRAN
	Powerstation maintenance release version 1.0A for MS-DOS."
	
	Sample Code
	-----------
	
	        call test(*10,*20)
	     10 var=1.0
	     20 if (var.ne.0) return
	        goto 10
	        end
	
	        subroutine test(*,*)
	        return 1
	        end
	
	Additional query words: 1.00 GP fault gp-fault gpf buglist1.00 fixlist1.00A
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
