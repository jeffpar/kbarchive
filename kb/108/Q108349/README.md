---
layout: page
title: "Q108349: BUG: Console I/O Problem; CR/LF Skipped After File Open"
permalink: /kb/108/Q108349/
---

## Q108349: BUG: Console I/O Problem; CR/LF Skipped After File Open

{% raw %}

	Article: Q108349
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, versions 1.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A console application that opens a file with a unit specifier of 5 may cause
	subsequent screen output to appear on the same line (without carriage return and
	linefeed characters).
	
	CAUSE
	=====
	
	This problem seems to occur only when the application writes to the screen
	before opening unit 5.
	
	RESOLUTION
	==========
	
	If unit number 5 must be used for an external file, OPEN that file before
	performing any WRITE statements to the screen. Running the program with MORE
	piping (for example, | MORE) to display output one screen at a time also
	alleviates the error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft FORTRAN PowerStation
	32 for Windows NT, version 1.0. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following sample program demonstrates the problem:
	
	Sample Code
	-----------
	
	  C Compile options required: none
	        character*12 buffer
	        do i=5, 7
	           write(buffer,'(i5,a)') i,'.dat'
	           write(*,*) 'Filename is: ', buffer
	           open(i,file=buffer)
	        end do
	        end
	
	Output
	------
	
	Filename is:     5.dat   Filename is:     6.dat
	Filename is:     7.dat
	
	Additional query words: 1.00 4.00 handle
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT kbFORTRANPower32400NT
	Version           : :1.0,4.0
	
	=============================================================================
	

{% endraw %}
