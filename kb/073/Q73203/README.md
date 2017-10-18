---
layout: page
title: "Q73203: BUG: Problems Passing Arguments to ENTRY Statement"
permalink: kb/073/Q73203/
---

## Q73203: BUG: Problems Passing Arguments to ENTRY Statement

	Article: Q73203
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.1,5.0,5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN compiler for OS/2, versions 4.1, 5.0, 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Programs compiled with Microsoft FORTRAN versions 4.0, 4.01, 4.1, 5.0, and 5.1
	can generate a protection violation when run under OS/2, if a program contains
	the following:
	
	1. An ENTRY statement to enter a SUBROUTINE or external FUNCTION
	
	2. A CALL to the SUBROUTINE or external FUNCTION
	
	3. An argument that is referenced in the ENTRY statement but not in the
	  SUBROUTINE or external FUNCTION statement, and is then used in the ENTRY
	  section of the SUBROUTINE or external FUNCTION.
	
	According to the ANSI FORTRAN 77 standard, the order, number, type, and names of
	the formal arguments in an ENTRY statement may be different from the order,
	number, type, and names of the formal arguments in the FUNCTION statement or
	SUBROUTINE statement and other ENTRY statements in the same subroutine.
	
	RESOLUTION
	==========
	
	To avoid this problem, pass the argument to the SUBROUTINE or external FUNCTION
	as well as to the ENTRY point.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN versions 4.0, 4.01, 4.1,
	5.0, and 5.1 for OS/2. We are researching this problem and will post new
	information here as it becomes available.
	
	MORE INFORMATION
	================
	
	The following example illustrates the problem:
	
	        i=0
	        call sub
	        end
	
	        subroutine sub
	        entry entersub(i)
	        i=0
	        i=i+1
	        write(*,*) i
	        end
	
	The program above should produce the following output:
	
	        1
	
	Instead, a protection violation is generated when the program is run under OS/2.
	
	Passing the argument to the SUBROUTINE or external FUNCTION in addition to the
	ENTRY point will prevent the problem from occurring. The following program
	example illustrates the solution:
	
	        i=0
	        call sub(i)
	        end
	
	  c ** Argument passed to subroutine **
	
	        subroutine sub(i)
	        entry entersub(i)
	        i=0
	        i=i+1
	        write(*,*) i
	        end
	
	Additional query words: 4.00 4.01 4.10 5.00 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN500OS2 kbFORTRAN510OS2 kbFORTRAN410OS2
	Version           : :4.1,5.0,5.1
	
	=============================================================================
	
