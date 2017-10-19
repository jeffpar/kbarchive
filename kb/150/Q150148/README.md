---
layout: page
title: "Q150148: BUG: FOR2715 Error Generated for Pointer Assignment"
permalink: /kb/150/Q150148/
---

## Q150148: BUG: FOR2715 Error Generated for Pointer Assignment

	Article: Q150148
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
	
	When you declare a pointer array assignment using this format:
	
	  pointer=>target(array:section)(character:substring)
	
	the compiler incorrectly generates the following error message:
	
	  error FOR2715: right-hand side of POINTER assignment is not a POINTER
	  expression
	
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
	
	        character (len=1), pointer, dimension(:) :: p
	        character (len=8), target, dimension(5) :: c
	
	        c='test'
	        p=>c(:)(1:1)
	        print *, p
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
