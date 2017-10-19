---
layout: page
title: "Q118436: BUG: Code Causes F4999, CK4008, and Run-Time Problems"
permalink: /kb/118/Q118436/
---

## Q118436: BUG: Code Causes F4999, CK4008, and Run-Time Problems

	Article: Q118436
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Building a program that contains many statements results in one or more of the
	following symptoms:
	
	- The compiler incorrectly generates warning F4999.
	
	-or-
	
	- The compiler appears to hang if optimization is on (/Ox option).
	
	-or-
	
	- The following error message occurs during linking:
	
	  CVPACK : warning CK4008: section length limit exceeded; source lines in
	  module
	
	
	- The debugger issues the message, "no source line debugging information."
	
	- Running the program in Windows NT causes Dr. Watson to generate the error
	  message, "access violation".
	
	- Running the program in MS-DOS causes the DOSXMSF error to display: "fatal
	  error DX1020: unhandled exception: Page fault;"
	
	- Running the program in Windows generates the following error messages:
	
	  run-time error M6104: MATH - floating-point overflow
	  run-time error R6001 null pointer assignment
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the FORTRAN PowerStation for MS-DOS,
	versions 1.0 and 1.0a, and the FORTRAN PowerStation 32 for Windows NT, version
	1.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To demonstrate this problem, perform the following steps:
	
	1. Compile and run the sample code below; this will create "B.FOR".
	
	2. Build "B.FOR" using the debug option (/Zi). This generates the incorrect
	  warning F4999 on the variable X; it also generates the CK4008 warning.
	
	3. Single-step through the program. Debugging the program fails with the
	  message, "no source line debugging information."
	
	4. Run the B.EXE file in MS-DOS, Windows, or Windows NT.
	
	Sample Code
	-----------
	
	  c compile options needed: none
	
	        open(1,file='b.for')
	        write(1,*)   '     x = 0'
	        do i=1,32*1024 - 2
	          write(1,*) '     x = x + 1'
	        end do
	        write(1,*)   '     x = x + 1'
	        write(1,*)   '     print*, x'
	        write(1,*)   '     end'
	        end
	
	Additional query words: 1.00 1.00a winnt
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
