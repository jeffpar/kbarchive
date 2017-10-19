---
layout: page
title: "Q148187: BUG: Debugger Cannot Display Renamed Module Variables"
permalink: /kb/148/Q148187/
---

## Q148187: BUG: Debugger Cannot Display Renamed Module Variables

	Article: Q148187
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
	
	Renamed USE-associated module variables cannot be referenced or displayed in the
	debugger. The debugger will only reference and display the original module
	variable names, not the renamed module variable aliases created with the USE
	statement's module variable renaming specifier (=>).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In the sample code provided, the module's public variable G is renamed by the
	USE statement and is known in the internal procedure as the alias access
	variable H. However, the debugger incorrectly reports the wrong USE variable G
	in the locals window, so attempting to view the value of H in the watch window
	causes the message, "undefined variable."
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Build the following sample code in Developer Studio:
	
	  C Compile options needed: /Zi
	
	        MODULE RED
	          REAL G
	        END MODULE
	
	        PROGRAM RENAME
	
	        USE RED, H=>G
	        REAL A
	
	        H = 1.0
	        A = GREEN()
	
	        WRITE (*,*) A
	
	        CONTAINS
	          FUNCTION GREEN
	            REAL GREEN, S
	            S = H
	            GREEN = S
	          END FUNCTION
	
	        END PROGRAM
	
	2. To begin a debugging session in the Developer Studio, click Debug on the
	  Build menu, and then click Step Into.
	
	3. Step into the internal function GREEN.
	
	4. View the locals window.
	
	5. Type in the variable name H in the watch window.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
