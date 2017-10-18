---
layout: page
title: "Q112333: FIX: CTRL+Z Is Not End-of-File Marker in PowerStation"
permalink: kb/112/Q112333/
---

## Q112333: FIX: CTRL+Z Is Not End-of-File Marker in PowerStation

	Article: Q112333
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Run-time error F6101 or F6103 (invalid INTEGER or invalid REAL) may be generated
	on reading from the last record in a file using Microsoft FORTRAN PowerStation.
	
	CAUSE
	=====
	
	The CTRL+Z character is not treated as the true end-of-file marker in MS-DOS or
	Windows. This character is interpreted as a nonstandard character by FORTRAN
	PowerStation in many circumstances.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove the CTRL+Z character from the end of data files.
	The function NO_CTRLZ provided below may be used to do this for any file with or
	without the CTRL+Z character.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft FORTRAN PowerStation
	32 version 1.0 and 1.0a for MS-DOS and version 1.0 for Windows NT. This problem
	was corrected in FORTRAN PowerStation 32, version 4.0.
	
	MORE INFORMATION
	================
	
	To demonstrate the problem:
	
	1. Build MAKEDATA.FOR and READDATA.FOR (no options are needed).
	
	2. Run MAKEDATA to create a data file ending in a CTRL+Z character.
	
	3. Run READDATA to generate the error:
	
	  run-time error F6101: READ(z-test.dat)
	  - invalid INTEGER
	
	4. To fix the data file, build STRIP:
	
	        FL32 strip.for no_ctrlz.for
	
	5. Run STRIP (which uses NO_CTRLZ to remove the CTRL+Z):
	
	        STRIP z-test.dat
	
	6. Run READDATA again (no error will be generated).
	
	Sample Code MAKEDATA.FOR
	------------------------
	
	  C Compile options needed: None
	        open(10, file='z-test.dat',form='BINARY')
	        write(10) '1234', char(26)
	        end
	
	Sample Code READDATA.FOR
	------------------------
	
	  C Compile options needed: None
	
	        open(10,file='z-test.dat')
	        do i=1,20
	           read(10,*,end=9) k
	           print *, k
	        enddo
	
	     9  end
	
	Sample Code STRIP.FOR
	---------------------
	
	  C Compile options needed: None
	  C To build it use: "FL32 STRIP.FOR NO_CTRLZ.FOR"
	        include 'flib.fi'
	        include 'flib.fd'
	
	        character *40 filename
	        integer*2 i
	
	        if (NARGS() .gt. 1) then
	          call getarg(1, filename, i)
	          i = no_ctrlz(filename)
	          if (i .ne. 0) then
	            print *, 'Could not open the file: ', filename
	          end if
	        end if
	
	        end
	
	Sample Code NO_CTRLZ.FOR
	------------------------
	
	  C Compile options needed: None
	  c     NO_CTRLZ removes the last character in a file if it is CTRL+Z
	  c
	  c     Returns 1 if there are problems, otherwise 0.
	  c
	
	        integer function no_ctrlz(filename)
	        character c, filename*(*)
	        logical exist
	
	        inquire(file=filename(:len_trim(filename)),EXIST=exist)
	        if (.not. exist) then
	          no_ctrlz = 1
	          return
	        end if
	
	        open(10,file=filename(:len_trim(filename)),access='APPEND',
	       +  form='BINARY',recl=1)
	
	  c     Check if the last character is CTRL+Z
	        backspace(10)
	        read(10) c
	        if (ichar(c) .ne. 26) then
	          no_ctrlz = 0 !No error, just don't need to do anything
	          return
	        end if
	
	  c     Backup, and then rewrite the next to last character to reset
	  c     the true end-of-file marker.
	        backspace(10)
	        backspace(10)
	        read(10) c
	        backspace(10)
	        write(10) c
	
	        close(10)
	
	        no_ctrlz = 0  !COMPLETED SUCCESSFULLY
	
	        end
	
	Additional Reference Words: 1.00 ctrl-z
	
	Additional query words:
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
