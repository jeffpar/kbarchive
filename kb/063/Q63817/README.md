---
layout: page
title: "Q63817: FIX: Protection Violation Compiling BLOCK DATA with Implied DO"
permalink: /kb/063/Q63817/
---

## Q63817: FIX: Protection Violation Compiling BLOCK DATA with Implied DO

	Article: Q63817
	Product(s): Microsoft Fortran Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN compiler for OS/2, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to compile an application fails and the compiler generates a
	protection violation. This error does not occur when compiling the application
	in MS-DOS or in an MS-DOS compatibility window in OS/2.
	
	CAUSE
	=====
	
	The application contains a BLOCK DATA subprogram that uses an implied DO list
	and the compiler command line includes the /4Ya option switch.
	
	RESOLUTION
	==========
	
	To address this problem, perform one of the following two steps:
	
	- Change the compiler command line to remove the /4Ya compiler option switch
	  when the application includes a BLOCK DATA subprogram.
	
	- Modify the source code to remove the implied DO list from the BLOCK DATA
	  subprogram.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN version 5.0 for OS/2.
	This problem was corrected in FORTRAN version 5.1 for MS-DOS and OS/2.
	
	MORE INFORMATION
	================
	
	The following code example demonstrates this problem.
	
	Sample Code
	-----------
	
	  C Compile options needed: /4Ya to reproduce problem
	
	        BLOCK DATA
	        INTEGER VAR(2)
	        COMMON /TEST/ VAR
	        DATA (VAR(I), I = 1, 2) /0, 1/ 
	        END
	
	Additional query words: 5.00 buglist5.00 fixlist5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN500OS2
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
