---
layout: page
title: "Q148623: BUG: Assumed-Size Array Allowed in Integer POINTER Statement"
permalink: kb/148/Q148623/
---

## Q148623: BUG: Assumed-Size Array Allowed in Integer POINTER Statement

	Article: Q148623
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using an assumed-size array for the pointer-based variable of an integer POINTER
	statement does not cause a compile-time error though it should.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Regarding integer POINTER statements and their valid argument types, Page 109 of
	the Microsoft Fortran PowerStation 4.0 Programmer's Guide, describes the use of
	pointer-based variables as follows:
	
	  The pointer-based variable cannot be a dummy argument, function name, or
	  common block element.
	
	Sample Code to Demonstrate Problem
	----------------------------------
	
	  C Compile options needed: none
	
	        print *, 'hello'
	        end
	
	        subroutine MyFunc
	        integer i, a
	        pointer (i, a(*))    ! This should cause a compiler error.
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
