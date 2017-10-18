---
layout: page
title: "Q99515: FIX: F1001: typer.c, Line 911 From Concatenation in CALL"
permalink: kb/099/Q99515/
---

## Q99515: FIX: F1001: typer.c, Line 911 From Concatenation in CALL

	Article: Q99515
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to compile a file that performs concatenation in a CALL statement
	that uses alternate return values fails and Microsoft FORTRAN Powerstation
	produces the following message:
	
	  fatal error F1001: INTERNAL COMPILER ERROR
	  (compiler file '@(#)typer.c:1.114', line 911)
	  Contact Microsoft Product Support Services
	
	RESOLUTION
	==========
	
	Modify the code to remove the concatenation from the CALL statement that uses an
	alternate return. Assign the result of the concatenation to a temporary
	character variable and specify the temporary variable in the CALL statement.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN Powerstation version 1.0
	for MS-DOS. This problem has been resolved with FORTRAN PowerStation maintenance
	release version 1.0a for MS-DOS.
	
	FORTRAN PowerStation version 1.0 can be differentiated from the maintenance
	release version 1.0a by invoking the linker. Typing "link32 | more" (without the
	quotation marks) from \F32\BIN directory will show version 2.8 for FORTRAN
	PowerStation version 1.0, and it will show version 1.0f for the maintenance
	release version 1.0a.
	
	MORE INFORMATION
	================
	
	The following code example illustrates this problem.
	
	Sample Code #1
	--------------
	
	  c Compile options required: none
	  c
	
	        CHARACTER*40 A,B
	        CALL FHFOPN(A//B,*9050)
	
	  9050  CONTINUE
	
	        END
	
	The following code example uses a temporary variable to avoid the error.
	
	Sample Code #2
	--------------
	
	        CHARACTER*80 C
	        CHARACTER*40 A,B
	        C=A//B
	        CALL FHFOPN(C,*9050)
	
	  9050  CONTINUE
	
	        END
	
	Additional query words: 1.00 buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
