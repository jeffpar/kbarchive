---
layout: page
title: "Q149480: BUG: END DO Cannot Be on Separate Lines in Fixed-Form Source"
permalink: kb/149/Q149480/
---

## Q149480: BUG: END DO Cannot Be on Separate Lines in Fixed-Form Source

	Article: Q149480
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Separating the DO statement's END DO block terminator by placing END and DO on
	separate lines in a fixed-form source file causes the following compilation
	errors to occur:
	
	  error FOR3596: missing END DO statement
	
	  -and-
	
	  error FOR2173: column 6 non-blank on initial line in fixed-form source
	
	  -and-
	
	  error FOR3470: too many END statements or duplicate program unit
	
	CAUSE
	=====
	
	The compiler fails to recognize the END DO block terminator when END and DO are
	on separate lines in a fixed-from source file.
	
	RESOLUTION
	==========
	
	Place the END DO block terminator on a single line in a fixed-form source file.
	
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
	
	        INTEGER I
	        DO I = 1,5
	            WRITE(*,*) I
	        END
	       + DO           ! END DO must be on one line
	        END
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
