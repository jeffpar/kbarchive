---
layout: page
title: "Q148624: BUG: No Error w/Public NAMELIST Variables with PRIVATE Members"
permalink: /kb/148/Q148624/
---

## Q148624: BUG: No Error w/Public NAMELIST Variables with PRIVATE Members

	Article: Q148624
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
	
	The Compiler does not generate an appropriate warning or error message when
	publicly visible NAMELIST variables contain PRIVATE data members.
	
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
	
	        MODULE M
	          TYPE T
	            PRIVATE
	              INTEGER I,J
	          END TYPE
	        END MODULE
	
	        PROGRAM MOD
	          USE M
	          TYPE (T) X
	          NAMELIST /GROUP_NAME/ X  ! No compiler warning or error
	        END PROGRAM MOD
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
