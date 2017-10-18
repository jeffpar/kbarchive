---
layout: page
title: "Q148605: BUG: Compiler Syntax Error If Edit Descriptors Contain Spaces"
permalink: kb/148/Q148605/
---

## Q148605: BUG: Compiler Syntax Error If Edit Descriptors Contain Spaces

	Article: Q148605
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a free form source file having multiple-character edit descriptors
	with embedded spaces in a FORMAT statement results in this error:
	
	  FOR3852: syntax error detected
	
	CAUSE
	=====
	
	The compiler treats files having the extension .f90 as free form source files.
	In a free form source file, spaces are normally significant except in FORMAT
	statements.
	
	RESOLUTION
	==========
	
	Do one of the following:
	
	- Remove the spaces within the multiple-character edit descriptors.
	
	-or-
	
	- Use a fixed form source file by changing the extension to .for.
	
	-or-
	
	- Disable free form source using the /4Nf compiler switch.
	
	-or-
	
	- Use the !MS$NOFREEFORM metacommand before the FORMAT statements containing
	  the multiple-character edit descriptors with spaces.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Illustrate and Work Around Problem
	-------------------------------------------------
	
	  ! Use Fortran 90 source extension: .F90
	
	  ! Workaround #3, use the /4Nf compiler switch
	
	  ! !MS$NOFREEFORM ! Workaround #4, uncomment this metacommand
	
	        integer :: i = 123
	        write(*, 100) i, i, i
	  100   format(1x, i5, sp, i5, ss, i5)   ! This compiles
	        write(*, 200) i, i, i
	  200   format(1x, i5, s p, i5, s s, i5) ! This doesn't compile
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
