---
layout: page
title: "Q149143: BUG: FOR3852 and FOR1768 Caused by Space Before !MS&#36;FREEFORM"
permalink: kb/149/Q149143/
---

## Q149143: BUG: FOR3852 and FOR1768 Caused by Space Before !MS&#36;FREEFORM

	Article: Q149143
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
	
	Using the !MS$FREEFORM metacommand with a space or tab preceding it will cause
	the following compilation errors to occur:
	
	  error FOR3852: syntax error detected at <end of file>
	
	  -and-
	
	  error FOR1768: missing END statement or missing program unit (possibly
	  free-form source in fixed-form file) detected at <end of file>
	
	RESOLUTION
	==========
	
	Place !MS$FREEFORM metacommands starting in column 1 of the source file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Microsoft Fortran PowerStation 4.0 for Windows 95 and Windows NT
	Programmer's Guide, page 234, says the following regarding !MS$ style
	metacommands:
	
	  The !MS$ form can begin in any column but can preceded only by spaces or
	  tabs.
	
	Therefore, compiling the sample code provided should produce no compilation
	warning or error messages.
	
	Sample Code to Illustrate Problem
	---------------------------------
	
	  C Compile options needed: none
	
	   !ms$freeform
	        print *, 'in main program'
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
