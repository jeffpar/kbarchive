---
layout: page
title: "Q149140: BUG: Access Violation Writing Namelist With Equivalence Member"
permalink: kb/149/Q149140/
---

## Q149140: BUG: Access Violation Writing Namelist With Equivalence Member

	Article: Q149140
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to perform a write of a namelist when one of the namelist variables
	is equivalenced causes the following application error:
	
	Under Windows 95:
	
	  This program has peformed an illegal operation and will be shutdown. If the
	  problem persists, contact the program vendor.
	
	  Details:
	
	  <program> caused an invalid page fault in module <program.exe>.
	
	Under Windows NT version 3.51:
	
	  The instruction at "0x00000000" referenced memory at "0x00000000".
	  The memory could not be "read".
	
	RESOLUTION
	==========
	
	Do not equivalence namelist variables.
	
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
	        integer i, j
	        equivalence(i, j)
	        namelist /list/ i
	        i = 22
	        write(*, list)     ! Application error caused by this line
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
