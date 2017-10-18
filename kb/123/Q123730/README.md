---
layout: page
title: "Q123730: BUG: R6000 After Many Calls to RunQQ If Linked with Defaults"
permalink: kb/123/Q123730/
---

## Q123730: BUG: R6000 After Many Calls to RunQQ If Linked with Defaults

	Article: Q123730
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
	
	RunQQ fails and returns error R6000 (stack overflow) after being called many
	times. The failure occurs after less than 100 calls (the exact number depends on
	things like system memory) given the following conditions:
	
	- Stack checking is turned on when compiling the task called from RunQQ.
	
	- The application was linked using the default stack size of 1MB 'reserve' and
	  4K 'commit'.
	
	- The application is run from MS-DOS.
	
	RESOLUTION
	==========
	
	Set the linker stack option to 32K 'reserve' and 4K 'commit'. This is the
	default when compiling and linking using FL32 on the command line.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem does not occur with FORTRAN PowerStation 32.
	
	MORE INFORMATION
	================
	
	Page 168 of the User's Guide states that the default stack for the linker is 1MB
	'reserve' and 4K 'commit'. It also states that this is 0x1000000 and 0x4000
	respectively - which is inconsitent, it is actually 0x100000 (1MB) and 0x1000
	(4K). These are the values used by default in the Visual Workbench. Applications
	built this way will fail as described above.
	
	The default stack used when building from the command line with FL32 is 32K
	'reserve' and 4K 'commit'. When an application is compiled and linked using the
	default options of FL32, it does not have the problem described above.
	
	To demonstrate the problem, build both sample programs using the linker's default
	options in the Visual Workbench. The only compile option required is /Ge for
	TASK.FOR. Then exit Windows and run TEST.EXE from MS-DOS.
	
	To demonstrate the problem without using the Visual Workbench, use the following
	commands (assuming the maintenance release is installed). The linker version for
	the maintenance release is 1.0F.
	
	  FL32 /c /Ge test.for task.for
	  LINK test.obj libf.lib libc.lib
	  BINDMSF test.exe
	  LINK task.obj libf.lib libc.lib
	
	NOTE: It is not necessary to apply BINDMSF to the TASK.EXE because it is being
	run from TEST.EXE, which will have already loaded the MS-DOS extender. Feel free
	to use BINDMSF on TASK.EXE; it will have no effect on this test.
	
	Sample Code TEST.FOR
	--------------------
	
	  C Compile options required: none or /Ge (it will not affect the test)
	
	        include 'flib.fi'
	        include 'flib.fd'
	
	        character*1 answer
	        integer*4 i
	        integer*4 r
	
	        do i=1,100
	
	            write(*,*)"ready to runqq task.exe"
	            r = runqq("task.exe","/none")
	            if (r .ne. 0) then
	                write(*,*)i," task.exe failed"
	                read(*,FMT='(a1)') answer
	            else
	                write(*,*)i," task.exe was successful"
	            end if
	
	        end do
	
	        end
	
	SAMPLE CODE task.for
	--------------------
	
	  C Compile options required: /Ge (must turn on stack checking for TASK)
	
	        write(*,*)"control passed to task.exe"
	        end
	
	Additional query words: nofpsnt 1.00 1.00a docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
