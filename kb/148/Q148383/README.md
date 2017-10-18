---
layout: page
title: "Q148383: BUG: INTENT(OUT) Allows Subroutine to Use Undefined Argument"
permalink: kb/148/Q148383/
---

## Q148383: BUG: INTENT(OUT) Allows Subroutine to Use Undefined Argument

	Article: Q148383
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
	
	An illegal use of a dummy variable specified by the INTENT(OUT) statement does
	not cause an appropriate compile-time error or warning message to be generated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The INTENT(OUT) dummy argument must be defined by the subroutine before it is
	used. When the subroutine is started, the dummy argument is undefined, so any
	executable statement associated with it prior to its definition should cause a
	compilation error or warning.
	
	Sample Code to Illustrate Problem
	---------------------------------
	
	  C Compile options needed: none
	
	        real z
	        z = 32
	        call sub(z)
	        print *, z
	        end
	
	        subroutine sub(x)
	        real, intent(out) :: x
	        print *, x   ! x undefined; No compiler warning or error generated
	        X = 5
	        end subroutine
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
