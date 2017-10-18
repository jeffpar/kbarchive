---
layout: page
title: "Q114979: BUG: Access Violation or R6018 Executing IF Statement"
permalink: kb/114/Q114979/
---

## Q114979: BUG: Access Violation or R6018 Executing IF Statement

	Article: Q114979
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	For FORTRAN PowerStation 32, an access violation occurs and for FORTRAN
	PowerStation, runtime error R6018 and an unexpected heap error occur when you
	execute code where:
	
	- There is an IF statement alone (not "IF... THEN...").
	
	.  - There is a call to a subroutine that takes a character argument in the IF
	  block.
	
	- The actual argument passed to the subroutine is a character expression that
	  includes concatenation of characters.
	
	- The IF expression is evaluated as ".FALSE" so that the call is not carried
	  out.
	
	RESOLUTION
	==========
	
	Use one of the following to work around the problem:
	
	- Use a block IF (that is, "IF... THEN ...") rather than an IF statement alone.
	
	-or-
	
	- Assign the character expression to a temporary variable instead of passing it
	  directly to the subroutine.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft FORTRAN PowerStation,
	version 1.0a for MS-DOS and version 1.0 for Windows NT. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	MORE INFORMATION
	================
	
	To reproduce the problem, compile and run the following sample code:
	
	Sample Code
	-----------
	
	  C compile options needed: none
	
	           CHARACTER*80 A
	           CHARACTER*3 end
	           LOGICAL L
	           end  = 'End'
	           L = .FALSE.
	     C1      L = .TRUE.
	           A = 'This format bombs...'//end
	     C2      IF (L)  print *, A
	           IF (L)  print *, 'This format bombs...'//end
	     C3      IF (L) then
	     C3        print *, 'This format bombs...'//end
	     C3      end if
	           print *, end
	           END
	
	To run the program without error:
	
	- Uncomment C1.
	
	-or-
	
	- Comment out the single line "IF" and uncomment C2.
	
	-or-
	
	- Comment out the single line "IF" and uncomment C3.
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
