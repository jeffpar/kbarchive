---
layout: page
title: "Q149753: How to Determine the Size of a User-Defined Data Type"
permalink: /kb/149/Q149753/
---

## Q149753: How to Determine the Size of a User-Defined Data Type

{% raw %}

	Article: Q149753
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbcode kbFortranPS kbLangFortran
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Fortran Run-Time Library included with Microsoft Fortran PowerStation
	version 4.0 does not include an intrinsic function or subroutine that can return
	the number of bytes in use by a single user-defined data type variable. You can,
	however, use the LOC() intrinsic function to obtain the starting addresses of
	two user-defined data type variables, contiguous in memory, and subtract their
	addresses resulting in the number of bytes used by one variable of this type.
	
	MORE INFORMATION
	================
	
	Do the following to calculate the number of bytes in use by a single user-
	defined data type variable:
	
	1. Create a two-element array variable of any user-defined data type.
	
	2. Use the LOC() intrinsic function to obtain the starting memory addresses for
	  both user-defined data type array elements.
	
	3. Subtract these addresses from each other. This will yield the number of bytes
	  used in memory by this type of user-defined variable.
	
	Sample Code to Illustrate Technique
	-----------------------------------
	
	  C Compile options needed: none
	        type udt
	            integer a
	            real b
	        end type
	        type (udt) myt(2)
	        print *, 'Number of bytes used: ', loc(myt(2)) - loc(myt(1))
	        end
	
	Program Output
	--------------
	
	Number of bytes used: 8
	
	Additional query words: 4.00 kbinf
	
	======================================================================
	Keywords          : kbcode kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
