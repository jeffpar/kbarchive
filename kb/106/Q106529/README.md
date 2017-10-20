---
layout: page
title: "Q106529: BUG: GetStrQQ Leaves Characters in Standard Output"
permalink: /kb/106/Q106529/
---

## Q106529: BUG: GetStrQQ Leaves Characters in Standard Output

{% raw %}

	Article: Q106529
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, versions 1.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The intrinsic function GetStrQQ leaves spurious characters in the standard
	output buffer that are displayed on the next statement that flushes the buffer.
	
	RESOLUTION
	==========
	
	Use the READ statement instead of GetStrQQ for reading from the standard input
	device. Alternatively, the GetCharQQ function may be used within a DO loop.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Contrary to the documentation, there is no advantage to using GetStrQQ rather
	than READ for standard I/O.
	
	Run the sample code below, and enter any string when prompted. The output has a
	blank line under "Enter string: abc" but not under "Enter another string: abc",
	and in addition there is an extra space in front of the first 1000. GetStrQQ
	produces the extra linefeed and space characters, whereas the standard READ
	statement does not.
	
	Output
	------
	
	  Enter string: abc
	  1000
	  2000
	
	  Enter another string: abc
	  1000
	  2000
	
	Sample Code
	-----------
	
	  C No compiler options required
	
	          include 'flib.fi'
	          include 'flib.fd'
	          character string*10
	
	          write(*,'('' Enter string: ''\)')
	          len = getstrqq(string)
	
	          do i = 1,2
	            write(*,*)  i*1000
	          end do
	
	          write(*,'('' Enter another string: ''\)')
	          read(*,'(a)')  string
	
	          do i = 1,2
	            write(*,*)  i*1000
	          end do
	          end
	
	Additional query words: 1.00 1.00a 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower32400NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a,4.0
	
	=============================================================================
	

{% endraw %}
