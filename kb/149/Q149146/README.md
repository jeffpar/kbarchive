---
layout: page
title: "Q149146: BUG: Incorrect Output with CARRIAGECONTROL='fortran' Option"
permalink: /kb/149/Q149146/
---

## Q149146: BUG: Incorrect Output with CARRIAGECONTROL='fortran' Option

{% raw %}

	Article: Q149146
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a formattted write operation to a file explicitly opened with
	the CARRIAGECONTROL='fortran' option, the leading space passed with the input
	data is not used as a carriage control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In the following sample code, the File1.out file opened with the option
	CARRIAGECONTROL='fortran' does not use the space created with the "1X"
	positional edit descriptor in the WRITE statement as a carriage control.
	Instead, the very first character in the variable "line" is incorrectly
	interpreted as a carriage control. File2.out does not use the Fortran carriage
	control option, so both the space and the character string are correctly written
	to the file with no problems.
	
	Sample Code to Illustrate Problem
	---------------------------------
	
	  C Compile options needed: none
	
	        character*50 line
	
	        line = 'carriage control'
	
	        open(12,file='file1.out', carriagecontrol='fortran')
	        open(14,file='file2.out')
	
	        WRITE(12,'(1X,A50)') line  ! 1X not used as carriage control
	        WRITE(14,'(1X,A50)') line  ! 1X used as carriage control
	        WRITE(*,'(1X,A50)') line
	
	        close(12)
	        close(14)
	
	        end
	
	  Output - Screen:
	
	  carriagecontrol
	
	  Output - File1.out:
	
	   arriagecontrol
	
	  Output - File2.out:
	
	   carriagecontrol
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
