---
layout: page
title: "Q150137: BUG: T Edit Descriptor Fails to TAB Backward"
permalink: /kb/150/Q150137/
---

## Q150137: BUG: T Edit Descriptor Fails to TAB Backward

	Article: Q150137
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a,4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The T edit descriptor fails to TAB backward in a formatted READ statement.
	
	RESOLUTION
	==========
	
	To avoid this behavior:
	
	- Use the T edit descriptor to TAB forward.
	
	- Use the TL edit descriptor to TAB backward.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Illustrate Problem and Workarounds
	-------------------------------------------------
	
	  ! Compile options needed: none
	
	        integer i, j, k
	        character*10 str /"123456789"/ 
	
	        print *, 'should print: 1   3   5'
	        read (str, '(T5,I1,T3,I1,T1,I1)') k, j, i
	        print *, i, j, k           ! Prints 7  6  5
	
	        print *, 'Work-around #1: only tab forward'
	        read (str, '(T1,I1,T3,I1,T5,I1)') i, j, k
	        print *, i, j, k
	
	        print *, 'Work-around #2: use TL edit descriptor'
	        read (str, '(T5,I1,TL3,I1,TL3,I1)') k, j, i
	        print *, i, j, k
	
	        end
	
	Additional query words: 1.00 1.00a 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS kbFORTRANPower400NT
	Version           : :1.0,1.0a,4.0
	
	=============================================================================
	
