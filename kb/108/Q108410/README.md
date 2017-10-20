---
layout: page
title: "Q108410: FIX: Entire DLLEXPORTed Arrays Cannot Be Written Implicitly"
permalink: /kb/108/Q108410/
---

## Q108410: FIX: Entire DLLEXPORTed Arrays Cannot Be Written Implicitly

{% raw %}

	Article: Q108410
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to print out an array that is exported from a common block in a
	dynamic-link library (DLL) may produce incorrect values when the entire array is
	printed at once (by giving only the array name in the I/O statement or by using
	an implied do loop).
	
	This problem occurs when writing to all types of files and to the display.
	
	RESOLUTION
	==========
	
	Use an implied do loop and add 0 (zero) to the array index, or write the array
	elements individually.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft FORTRAN PowerStation
	32 for Windows NT, version 1.0. This problem was fixed in FORTRAN PowerStation,
	version 4.0.
	
	MORE INFORMATION
	================
	
	The following sample code illustrates this problem:
	
	Sample Code #1
	--------------
	
	  C Compile options needed: none
	
	  C FORTRAN Main Source:
	
	        interface to subroutine bar[dllimport]()
	        end
	        common /bridge[dllimport]/ i
	        integer*4 i(4)
	        i(2) = 2
	
	        write(*,*) 'In Main: i = ', i
	        do loop=1,4
	          write(*,*) 'In main: i = ', i(loop)
	        end do
	
	        write(*,*) 'Calling DLL routine...'
	        call bar
	  c The commented line below illustrates the suggested workaround:
	  c     write(*,*) 'In Main: i = ', (i(loop+0),loop=1,4)
	        write(*,*) 'In Main: i = ', (i(loop), loop=1,4)
	        do loop=1,4
	          write(*,*) 'In main: i = ', i(loop)
	        end do
	        end
	
	Sample Code #2
	--------------
	
	  C FORTRAN DLL Source:
	
	        subroutine bar[dllexport]()
	        common /bridge[dllexport]/ i
	        integer*4 i(4)
	        i(3) = 33
	        write(*,*) 'In DLL:  i = ', i
	        return
	        end
	
	Program Output (corrected for CR/LF anomalies)
	----------------------------------------------
	
	  In Main: i =   550774271   637468674      139472 -1869574000
	  In main: i =           0
	  In main: i =           2
	  In main: i =           0
	  In main: i =           0
	  Calling DLL routine...
	  In DLL:  i =           0           2          33           0
	  In Main: i =   550774271   637468674      139472 -1869574000
	  In main: i =           0
	  In main: i =           2
	  In main: i =          33
	  In main: i =           0
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
