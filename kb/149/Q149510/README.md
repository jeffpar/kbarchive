---
layout: page
title: "Q149510: BUG: Environment Compiler Options Incorrectly Take Precedence"
permalink: /kb/149/Q149510/
---

## Q149510: BUG: Environment Compiler Options Incorrectly Take Precedence

	Article: Q149510
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbCompiler kbFL32 kbFortranPSkbbuglist
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiler options set with the FL32 environment variable incorrectly take
	precedence over like compiler options set either in the Developer Studio
	workbench or at the MS-DOS command-line prompt.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The correct compiler option precedence should be that any like compiler options
	specified in the Developer Studio workbench or those used on the MS- DOS
	command-line prompt take precedence over similar compiler options set in the
	FL32 environment variable.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Set the FL32 environment variable to the /G3 compiler option. At an MS-DOS
	  command prompt type:
	
	  " SET FL32=/G3." (without the quotation marks)
	
	2. Compile the sample code code provided using the /G4 compiler option. At the
	  same MS-DOS command-line prompt, type:
	
	  " FL32 /G4 test.for." (without the quotation marks)
	
	Note that the compiler discards the /G4 option using the /G3 option instead and
	displays the following warning message:
	
	  Command line warning D2005: flag /G4 conflicts with earlier flag.
	  Flag ignored.
	
	Sample Code
	-----------
	
	  C Compile options needed: none
	        print *, 'hello, world'
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbCompiler kbFL32 kbFortranPS kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
