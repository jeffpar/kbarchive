---
layout: page
title: "Q150145: PRB: FOR3852 Error in Consecutive Arithmetic Operations"
permalink: /kb/150/Q150145/
---

## Q150145: PRB: FOR3852 Error in Consecutive Arithmetic Operations

	Article: Q150145
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortran
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting an arithmetic calculation involving a binary and unary operator
	consecutively fails with the following compiler syntax error:
	
	  error FOR3852: syntax error detected between * and -
	
	RESOLUTION
	==========
	
	If you use consecutive binary and unary operators in your arithmetic
	calculations, enclose the unary operation in parentheses.
	
	-or-
	
	Specify the unary operation before the binary operation.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Sample Code to Illustrate Behavior
	----------------------------------
	
	  ! Compile options needed: none
	
	        j = 3
	        k = 2
	  ! The following line causes the FOR3852 error
	        i = j * -k    ! comment this line for workaround #1
	  !      i = j * (-k) ! uncomment this line for workaround #1
	        print *, i
	        i = -k * j    ! use alternate arithmetic form - workaround #2
	        print *, i
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
