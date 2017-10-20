---
layout: page
title: "Q150135: PRB: Error in ICHAR() Using Multi-Character Input Argument"
permalink: /kb/150/Q150135/
---

## Q150135: PRB: Error in ICHAR() Using Multi-Character Input Argument

{% raw %}

	Article: Q150135
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbcode kbFortranPS kbLangFortran
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to use a multi-character string input argument to the ICHAR()
	intrinsic function results in the following compilation error:
	
	  error FOR2326: character length of argument number 1 of intrinsic procedure
	  ICHAR is too long
	
	RESOLUTION
	==========
	
	Use a one-haracter substring of the multi-character string input argument to the
	ICHAR() intrinsic function.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following code illustrates the problem and workaround:
	
	Sample Code to Illustrate Behavior and Workaround
	-------------------------------------------------
	
	  ! Compile options needed: none
	
	        PROGRAM MAIN
	        CHARACTER*16 STR
	        STR='THIS IS A STRING'
	        K=ICHAR(STR)           ! FOR2326 error - comment for workaround
	  !      K=ICHAR(STR(1:1))     ! uncomment for workaround
	        PRINT *, K
	        END
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbcode kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
