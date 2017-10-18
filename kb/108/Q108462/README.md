---
layout: page
title: "Q108462: FIX: Concatenation in Parentheses Produces Blank Output"
permalink: kb/108/Q108462/
---

## Q108462: FIX: Concatenation in Parentheses Produces Blank Output

	Article: Q108462
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
	
	Concatenation in assignment statements fail when the character expression is
	surrounded by parentheses. The result is a blank string.
	
	RESOLUTION
	==========
	
	Because parentheses have no affect on the results of expressions involving
	concatenation, do not use parentheses when performing string concatenation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation version 1.0
	for MS-DOS. This problem has been resolved with FORTRAN PowerStation maintenance
	release version 1.0a for MS-DOS.
	
	MORE INFORMATION
	================
	
	FORTRAN PowerStation version 1.0 can be differentiated from the maintenance
	release version 1.0a by invoking the linker. Typing "link32 | more" (without the
	quotation marks) from \F32\BIN directory will show version 2.8 for FORTRAN
	PowerStation version 1.0, and it will show version 1.0f for the maintenance
	release version 1.0a.
	
	To reproduce the problem create a program using the sample code When run, the
	sample code below displays the following:
	
	  <cat dogs> < >
	
	Sample Code
	-----------
	
	  Compile options: None
	        character a*4,b*4,c*8,d*8
	        a = "cat"
	        b = "dogs"
	        c = a//b
	        d = (a//b)
	        print *, "<",c,">  <",d,">"
	        end
	
	Additional query words: buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
