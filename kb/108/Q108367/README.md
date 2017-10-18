---
layout: page
title: "Q108367: FIX: Columns 72 to 80 Not Displayed in Source Listing File"
permalink: kb/108/Q108367/
---

## Q108367: FIX: Columns 72 to 80 Not Displayed in Source Listing File

	Article: Q108367
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbCompiler kbFL32 kbFortranPSkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling with /Fs to produce a source listing file, characters in columns
	72 and beyond are not propagated to the list file. Column 72 can always contain
	a valid character. Columns 73 to 80 are valid columns for characters when using
	$FREEFORM formatting.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft FORTRAN PowerStation
	32 for Windows NT, version 1.0. This problem was fixed in FORTRAN PowerStation
	32, version 4.0.
	
	MORE INFORMATION
	================
	
	The listing file produced by compiling the program below will not display the
	closing quotation mark of PRINT*, line:
	
	Sample Code
	-----------
	
	  C Compile options needed: -Fs, also remove the continuation line so
	  C the string constant is on the same line as the PRINT statement.
	  C Knowledge Base articles cannot use columns past 70.
	
	        print*,
	       + 'the last single quote is trimmed off in the listing.....'
	        end
	
	Additional query words: 1.00 .LST
	
	======================================================================
	Keywords          : kbCompiler kbFL32 kbFortranPS kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
