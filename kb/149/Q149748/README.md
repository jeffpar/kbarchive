---
layout: page
title: "Q149748: BUG: FOR3093 Error Incorrectly Generated Without /4Ys"
permalink: /kb/149/Q149748/
---

## Q149748: BUG: FOR3093 Error Incorrectly Generated Without /4Ys

	Article: Q149748
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using a real number as an array subscript incorrectly causes the following
	compiler error:
	
	  error FOR3093: array bound is not integer scalar
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The F3093 compiler error should only occur if you compile with the /4Ys option
	or use the !MS$STRICT metacommand; these two options enable strict conformance
	of the Fortran 90 standard.
	
	Sample Code to Illustrate Problem
	---------------------------------
	
	  ! Compile options needed: none
	
	        integer array(1.0)   ! F3093 error generated here
	        array(1) = 1
	        print *, array
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
