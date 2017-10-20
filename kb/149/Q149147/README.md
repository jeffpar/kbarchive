---
layout: page
title: "Q149147: BUG: Equivalence and Non-Common Block Variable Cause ASSERT"
permalink: /kb/149/Q149147/
---

## Q149147: BUG: Equivalence and Non-Common Block Variable Cause ASSERT

{% raw %}

	Article: Q149147
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Assigning a value to an equivalenced variable not part of a common block in an
	internal subroutine when the associated equivalenced variable is part of a
	common block causes the following compile-time ASSERT failure message to be
	generated:
	
	  Assertion failed: base->key.be_key != 0, file err_genex.c, line 2828
	  abnormal program termination
	
	RESOLUTION
	==========
	
	Do one of the following to work around the problem:
	
	- Redeclare the common block and equivalence in the internal procedure.
	
	-or-
	
	- Do not assign a value to the non-common block equivalenced variable.
	
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
	
	        program test
	            real r
	            integer i
	            common /theblock/ i
	            equivalence (r,i)
	            call b
	            print *, r
	        contains
	            subroutine b
	  ! uncomment the next 4 lines for work-around
	  !              real r
	  !              integer i
	  !              common /theblock/ i
	  !              equivalence (r,i)
	                r = 1.0          ! This line causes an ASSERT failure
	            end subroutine b
	        end program test
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
