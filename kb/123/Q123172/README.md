---
layout: page
title: "Q123172: BUG: INCLUDE File Is Not Scanned Correctly"
permalink: kb/123/Q123172/
---

## Q123172: BUG: INCLUDE File Is Not Scanned Correctly

	Article: Q123172
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a,4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, versions 1.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a relative path reference, in the "INCLUDE" command or the
	metacommand "$INCLUDE", to include files into a FORTRAN source file, the correct
	dependencies may not be recognized.
	
	CAUSE
	=====
	
	The build engine in the Visual Workbench, provided with PowerStation, does not
	correctly parse the include string when relative paths are used.
	
	RESOLUTION
	==========
	
	Use the fully qualified paths instead.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code:
	
	The following code sample demonstrates the problem. Build the project; then make
	a change to one of the include files and select build again. The workbench will
	indicate that the .EXE file is up to date. To resolve the problem, specify the
	full paths for the include files ($INCLUDE 'c:\testing\inc1.inc' and INCLUDE
	'c:\testing\inc2.inc'), save the source file and scan all dependencies. Any
	change in the include files will properly cause the source file to be
	recompiled.
	
	Compile options needed: none
	
	  File inc1.inc:
	
	        print*, "Inside inc1.inc"
	  File inc2.inc:
	
	        print*, "Inside inc2.inc"
	        PROGRAM test
	
	  $INCLUDE '\testing\inc1.inc'
	
	        INCLUDE '\testing\inc2.inc'
	        PRINT*, 'in test'
	        END
	
	Additional query words: 1.00a 1.00 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower32400NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a,4.0
	
	=============================================================================
	
