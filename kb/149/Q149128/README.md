---
layout: page
title: "Q149128: BUG: FOR2406 Error with Values Greater than 127 in ACHAR()"
permalink: kb/149/Q149128/
---

## Q149128: BUG: FOR2406 Error with Values Greater than 127 in ACHAR()

	Article: Q149128
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using a literal integer value greater 127 as the achar() intrinsic function
	input argument causes the following compilation error to occur:
	
	  error FOR2406: value out of range in ACHAR intrinsic
	
	RESOLUTION
	==========
	
	Do one of the following:
	
	- Use the char() intrinsic function.
	
	-or-
	
	- When you use an integer value greater than 127, assign the value to an
	  intermediate variable, and then use it as the achar() input argument.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Illustrate Problem
	---------------------------------
	
	  ! Compile options needed: none
	
	        charater*1 ch
	        i=235
	        ch=achar(235)   ! Compiler error generated here
	  !     ch=achar(i)     ! Uncomment this line for workaround
	        print*,ch
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
