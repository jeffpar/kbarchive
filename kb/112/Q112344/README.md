---
layout: page
title: "Q112344: FIX: F6422 on Unformatted File Opened with ACCESS='APPEND'"
permalink: /kb/112/Q112344/
---

## Q112344: FIX: F6422 on Unformatted File Opened with ACCESS='APPEND'

{% raw %}

	Article: Q112344
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
	
	Attempting to CLOSE, REWIND, or BACKSPACE an unformatted file that was opened
	with ACCESS='APPEND' produces the run-time error:
	
	  run-time error F6422:
	  - no space left on device
	
	RESOLUTION
	==========
	
	Do not open unformatted files with ACCESS='APPEND'. Read to the end of the
	unformatted file and then start writing the new information. Another solution is
	to use FORM='BINARY' with ACCESS= 'APPEND'.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation version 1.0
	for MS-DOS. This problem has been resolved with FORTRAN PowerStation maintenance
	release version 1.0a for MS-DOS.
	
	FORTRAN PowerStation version 1.0 can be differentiated from the maintenance
	release version 1.0a by invoking the linker. Typing "link32 | more" (without the
	quotation marks) from \F32\BIN directory will show version 2.8 for FORTRAN
	PowerStation version 1.0, and it will show version 1.0f for the maintenance
	release version 1.0a.
	
	MORE INFORMATION
	================
	
	The following sample produces the F6422 error with Fortran PowerStation for
	MS-DOS version 1.0, but does not with version 1.0a.
	
	Sample Code #1
	--------------
	
	  Compile options: None
	        open (1,file='newfile.dat',form='unformatted')
	        do j=1,2
	           write(1) j
	        enddo
	        close(1)
	        open (1,file='newfile.dat',form='unformatted',access='append')
	        do j=1,2
	           write(1) j
	        enddo
	        close(1)  ! F6422 here
	        end
	
	Obtain the functionality of ACCESS='APPEND' by reading to the end of the file
	before writing the appended records. This is shown in the sample below:
	
	Sample Code #2
	--------------
	
	  Compile options: None
	        open (1,file='newfile.dat',form='unformatted')
	        do j=1,2
	           write(1) j
	        enddo
	        close(1)
	        open (1,file='newfile.dat',form='unformatted')
	        do while (.not.EOF(1))
	           read(1) j           ! READ to end of file
	        enddo
	        do j=1,2
	           write(1) j          ! APPEND additional information
	        enddo
	        close(1)
	        end
	
	Additional query words: 1.00 1.00a buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
