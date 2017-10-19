---
layout: page
title: "Q118339: PRB: DX1020 on a Call to OUTGTEXT under MS-DOS"
permalink: /kb/118/Q118339/
---

## Q118339: PRB: DX1020 on a Call to OUTGTEXT under MS-DOS

	Article: Q118339
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A program running under MS-DOS (not an MS-DOS prompt in Windows) calls OUTGTEXT,
	and the following error message is generated:
	
	  DOSXMSF : fatal error DX1020: unhandled exception: Page fault
	
	CAUSE
	=====
	
	This error occurs if you have not successfully registered a font.
	
	RESOLUTION
	==========
	
	Check the return status of REGISTERFONTS and SETFONT. If they return -1, then do
	not call OUTGTEXT.
	
	MORE INFORMATION
	================
	
	To generate the problem, compile and run the sample code below from MS-DOS (not
	from an MS-DOS prompt in Windows).
	
	OUTGTEXT still fails if the two lines are uncommented and the directory used in
	REGISTERFONTS contains no .FON files or does not exist. The program runs
	correctly if the two lines are uncommented and the directory used in
	REGISTERFONTS does contain .FON files.
	
	Sample Code
	-----------
	
	  c compile options needed: none
	
	        INCLUDE 'FGRAPH.FI'
	        INCLUDE 'FLIB.FI'
	        INCLUDE 'FLIB.FD'
	        INCLUDE 'FGRAPH.FD'
	        write(*,*) setvideomode($MAXRESMODE)
	  c      write(*,*) registerfonts("c:\f32\lib\*.fon")
	  c      write(*,*) setfont("n1")
	        CALL outgtext("abcde")
	        read *
	        END
	
	Additional query words: 1.00 nofpsnt 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
