---
layout: page
title: "Q148606: BUG: FOR1138 Error INQUIRE(IOLENGTH) of Character Function"
permalink: /kb/148/Q148606/
---

## Q148606: BUG: FOR1138 Error INQUIRE(IOLENGTH) of Character Function

	Article: Q148606
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
	
	When you use the INQUIRE statement's IOLENGTH option, if the output list
	contains a function that returns a variable-length character string, the
	compiler generates the following internal compiler error:
	
	  error FOR1138: internal compiler error
	  Internal Error -- please report this bug
	  Command line error D2013: internal compiler error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Illustrate Problem
	---------------------------------
	
	  C Compile options needed: none
	
	        INTERFACE
	          FUNCTION G(J)
	            CHARACTER(LEN=J) G
	          END FUNCTION
	        END INTERFACE
	
	        INQUIRE(IOLENGTH=I) (G(1))  ! This line causes the error.
	        WRITE(*,*) " I = ", I
	        END
	
	        FUNCTION G(J)
	        INTEGER J
	        CHARACTER(LEN=J) G
	        G="1"
	        END FUNCTION
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
