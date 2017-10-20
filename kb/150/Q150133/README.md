---
layout: page
title: "Q150133: BUG: WRITE Fails with Preconnected Unit=5 in Console Program"
permalink: /kb/150/Q150133/
---

## Q150133: BUG: WRITE Fails with Preconnected Unit=5 in Console Program

{% raw %}

	Article: Q150133
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a console application, when you open and close a file with the preconnected
	unit=5 and perform a WRITE of a character string to the display, the written
	string is not terminated with a carriage return or with linefeed characters.
	
	RESOLUTION
	==========
	
	Use any file unit number other than 5 when performing file I/O.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following code samples illustrate the problem and the workaround:
	
	Sample Code #1
	--------------
	
	  ! Compile options needed: none
	
	        do i=1,2
	            write(*,*) 'Testing'
	            open(unit=5,file='test.out')
	            write(5,*) 'test'
	            close(5)
	        end do
	        end
	
	Output
	------
	
	TestingTesting
	
	Sample Code #2
	--------------
	
	  ! Compile options needed: none
	
	        do i=1,2
	            write(*,*) 'Testing'
	            open(unit=2,file='test.out')
	            write(2,*) 'test'
	            close(2)
	        end do
	        end
	
	Output
	------
	
	Testing Testing
	
	Additional query words: 1.00 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT kbFORTRANPower400NT
	Version           : :1.0,4.0
	
	=============================================================================
	

{% endraw %}
