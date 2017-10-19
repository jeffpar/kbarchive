---
layout: page
title: "Q108284: FIX: DX2010 w/ GETARG When RUNQQ Takes Five or more Arguments"
permalink: /kb/108/Q108284/
---

## Q108284: FIX: DX2010 w/ GETARG When RUNQQ Takes Five or more Arguments

	Article: Q108284
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using RUNQQ to spawn an application that uses five or more command-line
	arguments causes the spawned application to produce the following error when the
	spawned application uses GETARG:
	
	  DOSXMSF : error DX2010: invalid pointer passed to free or realloc
	
	RESOLUTION
	==========
	
	Use SYSTEMQQ instead of RUNQQ to spawn programs using five or more command- line
	arguments.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation version 1.0
	for MS-DOS. This problem has been resolved with FORTRAN PowerStation maintenance
	release version 1.0a for MS-DOS.
	
	FORTRAN PowerStation version 1.0 can be differentiated from the maintenance
	release version 1.0a by invoking the linker. Typing "link32 | more" from
	\F32\BIN directory will show version 2.8 for FORTRAN PowerStation version 1.0,
	and it will show version 1.0f for the maintenance release version 1.0a.
	
	MORE INFORMATION
	================
	
	The sample programs that reproduce this problem are shown below (no compile
	options for either program):
	
	Sample Code #1 (Main Spawning Program)
	--------------------------------------
	
	   include 'flib.fi'
	        include 'flib.fd'
	        integer*4 result
	        result=RUNQQ('test.exe','-a -b -c -d -e')
	        write(*,*) 'result = ',result
	        end
	
	Sample Code #2 (TEST.EXE)
	-------------------------
	
	        character*40 buffer
	        integer*2 j,status
	        k=nargs()
	        write(*,*) 'k = ',k
	        do j=0,k-1
	           call GETARG(j,buffer,status)
	           write(*,*) buffer,status
	        enddo
	        end
	
	Additional query words: 3.10 buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
