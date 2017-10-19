---
layout: page
title: "Q125468: PRB: F6700 Heap Space Exceeded"
permalink: /kb/125/Q125468/
---

## Q125468: PRB: F6700 Heap Space Exceeded

	Article: Q125468
	Product(s): Microsoft Fortran Compiler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN Compiler for MS-DOS, version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a QuickWin program and try to allocate a huge array dynamically,
	the return code may be 6700. The associated error message, as documented in the
	FORTRAN Professional Development System on page 489, is:
	
	  F6700 heap space limit exceeded
	
	CAUSE
	=====
	
	One cause of the error may be attempting to allocate a huge array (greater than
	64K) where the data items do not align on 64K segment boundaries.
	
	RESOLUTION
	==========
	
	Change the data type such that the array will align on the 64K boundary.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	If you attempt to dimension the huge array statically, the compiler produces
	this error:
	
	  F2120 : <array name>: huge array cannot be aligned to segment boundary
	
	Compiling and running the following code sample produces an output for 'istat' of
	6700, indicating the heap space was exceeded and no dynamic memory was
	allocated.
	
	If you change the line declaring the array 'str' as allocatable into a comment,
	and change the static declaration from a comment into an excuted line, the
	compiler produces the F2120 error.
	
	Changing the declaration to:
	
	     CHARACTER*16 str(10, 6400)
	
	eliminates the error in both cases.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /MW
	  */ 
	        PROGRAM testmem
	
	  C     QuickWin application so we can use more than 640K
	  C
	  C     Create an allocatable array over 64K
	        CHARACTER*12 str[ALLOCATABLE, HUGE](:,:)
	  C     Creating the array statically produces the F2120 error
	
	  C      CHARACTER*12 str(10, 6400)
	
	        INTEGER istat
	  C     The allocate should fail with error 2120
	  C     since a single string crosses a segment boundary
	  C     but instead produces an error 6700
	  C     indicating heap space limit exceeded
	        ALLOCATE(str(10, 6400), stat=istat)
	        PRINT*, "Error code (0 is success) = ", istat
	        IF(istat .eq. 0) THEN
	             DEALLOCATE(str)
	        END IF
	        END
	
	Additional query words: 5.10 fail memory allocation
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN510DOS
	Version           : :5.1
	
	=============================================================================
	
