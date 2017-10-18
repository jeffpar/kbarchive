---
layout: page
title: "Q109876: BUG: In-line Comment in Continued FORMAT Causes Syntax Error"
permalink: kb/109/Q109876/
---

## Q109876: BUG: In-line Comment in Continued FORMAT Causes Syntax Error

	Article: Q109876
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): kbCompiler kbFL32 kbFortranPSkbbuglist
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, versions 1.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to compile a program containing a FORMAT specifier that is more than
	one line long and that has an in-line comment on a line other than the last,
	causes the following warning:
	
	  warning F4989: ' ' : unexpected character in format
	
	In-line comments start with an exclamation point. If the FORMAT statement is
	referenced during program execution, it will cause the program to terminate with
	exit code 1. The following run-time error might be generated:
	
	  run-time error F6989: WRITE
	  ' %c ' : unexpected character in format
	
	RESOLUTION
	==========
	
	This problem can be corrected by removing the embedded comment.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Sample Code
	-----------
	
	  c Compile options needed: have no effect
	  c The following program reproduces the problem:
	
	  10    format('This shows that an embedded ',    ! Here is the comment
	        &        'comment causes a problem.')
	        write(*,10)
	        end
	
	Additional query words: 1.00 4.00
	
	======================================================================
	Keywords          : kbCompiler kbFL32 kbFortranPS kbbuglist
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT kbFORTRANPower32400NT
	Version           : :1.0,4.0
	
	=============================================================================
	
