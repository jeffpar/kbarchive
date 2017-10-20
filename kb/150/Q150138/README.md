---
layout: page
title: "Q150138: BUG: FOR3199 Error in Host Association of Internal Variable"
permalink: /kb/150/Q150138/
---

## Q150138: BUG: FOR3199 Error in Host Association of Internal Variable

{% raw %}

	Article: Q150138
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
	
	When you use a host program unit variable name in an internal procedure's
	statement function expression, the compiler erroneously issues the following
	error:
	
	  error FOR3199: invalid redeclaration of host symbol <name>
	
	RESOLUTION
	==========
	
	Explicitly declare your internal procedure statement function variables.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In the following sample code, the variable x is declared after the statement
	function that uses it. Reversing the declarations corrects the problem. That is,
	explicitly declaring your internal procedure variables before using them in a
	statement function works around the problem.
	
	Sample Code to Illustrate Problem and Workaround
	------------------------------------------------
	
	  ! Compile options needed: none
	
	        program test
	            integer x
	        contains
	            subroutine a()
	            real b, c
	  ! comment the following line for workaround
	            b(x) = real(x)
	            integer x
	  ! uncomment the following line for workaround
	  !          b(x) = real(x)
	            c = b(x)
	            end subroutine
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
