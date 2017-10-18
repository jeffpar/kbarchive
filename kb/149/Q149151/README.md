---
layout: page
title: "Q149151: BUG: Internal READ of Character&#42;1 String Fails"
permalink: kb/149/Q149151/
---

## Q149151: BUG: Internal READ of Character&#42;1 String Fails

	Article: Q149151
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
	
	A list-directed READ of a character*1 variable or literal into an integer
	variable fails, causing zero to be assigned to the integer variable.
	
	RESOLUTION
	==========
	
	Perform a formatted READ of the character*1 variable or literal.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Demonstrate Problem
	----------------------------------
	
	  C Compile options needed: none
	
	        integer i
	        character*1 string
	
	        string = "1"
	
	        read(string, *) i
	        print *, i             ! prints 0 (should print 1)
	
	        read("7", *) i
	        print *, i             ! prints 0 (should print 7)
	
	        read(string, '(i1)') i ! work-around, perform a formated READ
	        print *, i             ! prints 1
	
	        read("17", *) i
	        print *, i             ! prints 17
	        end
	
	Output
	------
	
	0
	0
	1
	17
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
