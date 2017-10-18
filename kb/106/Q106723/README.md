---
layout: page
title: "Q106723: BUG: Redirection of Input to a Spawned PowerStation App Fails"
permalink: kb/106/Q106723/
---

## Q106723: BUG: Redirection of Input to a Spawned PowerStation App Fails

	Article: Q106723
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
	
	PowerStation applications spawned with either SYSTEMQQ or RUNQQ hang when input
	is redirected from a file. Also, the input is split and directed at both the
	application and the console.
	
	CAUSE
	=====
	
	The MS-DOS extender that comes with PowerStation does not handle console input
	the same way as MS-DOS does. The hang occurs because the spawned application is
	waiting for an end-of-file (EOF).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation version 1.0
	and version 1.0a for MS-DOS.
	
	This is not a problem in FORTRAN PowerStation 32.
	
	MORE INFORMATION
	================
	
	Applications that are not MS-DOS extended handle redirection input incorrectly
	when spawned with RUNQQ or SYSTEMQQ.
	
	To demonstrate the problem, follow these steps:
	
	1. Copy both sample programs into the same directory.
	
	2. Compile both TEST.FOR and B.FOR with FORTRAN PowerStation 1.0 for MS-DOS.
	
	3. Run TEST.EXE.
	
	Sample Code #1 (TEST.FOR)
	-------------------------
	
	  C No compiler options required
	        include 'flib.fi'
	        include 'flib.fd'
	        if(.not.SystemQQ('b < test.for')) print*, 'systemqq failed'
	        end
	
	Sample Code #2 (B.FOR)
	----------------------
	
	  C No compiler options required
	        character*20 c
	        ierr = 0
	        do while(ierr.ne.-1)
	          read(*,"(a)",iostat=ierr) c
	          print*, c
	        end do
	        end
	
	Additional query words: nofpsnt 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
