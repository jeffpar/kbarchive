---
layout: page
title: "Q150126: BUG: FOR4280 Warning Given for Unused Result Variables"
permalink: /kb/150/Q150126/
---

## Q150126: BUG: FOR4280 Warning Given for Unused Result Variables

	Article: Q150126
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
	
	The compiler erroneously gives the following warning message for unused function
	result variables: warning FOR4280: unused local variable <name>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Function result variables are not local variables. Therefore, the compiler
	should not generate the FOR4280 warning message for unused function result
	variables.
	
	When compiling the sample code provided, the compiler issues two warning
	messages: warning FOR4280: unused local variable R
	
	  -and-
	
	  warning FOR4290: function FUNC has not been pointer assigned nor allocated
	
	The first compiler message is the incorrect FOR4280 warning message. However, the
	second message is correct as FUNC expects to return a pointer to an integer but
	R has no storage space allocated to it.
	
	Sample Code to Illustrate Problem
	---------------------------------
	
	  ! Compile options needed: /c
	
	        module mod
	        contains
	            function func() result(r)
	            integer, pointer :: r
	            end function func
	        end module mod
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
