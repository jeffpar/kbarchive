---
layout: page
title: "Q150146: PRB: No Error Generated Initializing Named Common Block Object"
permalink: /kb/150/Q150146/
---

## Q150146: PRB: No Error Generated Initializing Named Common Block Object

{% raw %}

	Article: Q150146
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortran
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler does not generate an error or warning message when you initialize a
	named common block object in a type statement outside of a block data
	subprogram.
	
	RESOLUTION
	==========
	
	Use the /4Ys compiler option to enable strict FORTRAN 90 standard usage, and
	force the compiler to catch the assignment of the named common block in a type
	statement outside a block data subprogram.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Sample Code to Illustrate Behavior
	----------------------------------
	
	  ! Compile options needed: none
	
	        INTEGER I /1/ 
	        COMMON /TheBlock/ I
	        PRINT *, 'Initializing Common Block Object...'
	        END
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
