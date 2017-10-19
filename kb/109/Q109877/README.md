---
layout: page
title: "Q109877: BUG: Smallest Negative Integers Cause Error on Input"
permalink: /kb/109/Q109877/
---

## Q109877: BUG: Smallest Negative Integers Cause Error on Input

	Article: Q109877
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to execute a program that reads in the smallest negative integer
	within the range of the variable type may cause the following run-time error to
	be generated:
	
	  run-time error F6100
	  INTEGER overflow on input
	
	RESOLUTION
	==========
	
	Because these smallest integers do not cause a problem when calculated
	internally, this problem can be addressed by changing the input data to the
	smallest allowable value for the integer size, and then subtracting one (1)
	after the value is read in.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft FORTRAN PowerStation
	32 for NT, version 1.0. This is not a problem in Microsoft FORTRAN for MS-DOS,
	version 5.1. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The range of integers that can be read in correctly is:
	
	  -127 to 127 for INTEGER*1
	  -32,767 to 32,767 for INTEGER*2
	  -2,147,483,647 to 2,147,483,647 for INTEGER*4
	
	The problem occurs when trying to read in
	
	  -128 for INTEGER*1
	  -32,768 for INTEGER*2
	  -2,147,483,648 for INTEGER*4
	
	Sample Code
	-----------
	
	C Compile options needed: have no effect
	C The following code demonstrates the problem:
	
	         integer*1 i
	        integer*2 j
	        integer*4 k
	        open(1,file='test.dat')
	        do n=3,5
	          write(1,*) -2**((2**n-1)) !write -128, -32768, -2147483648
	        end do
	
	        rewind(1)
	        read(1,*,iostat=ierr) i
	        if(ierr.eq.6100) then
	          print*, 'error reading integer*1 was: ',ierr
	        end if
	
	        read(1,*,iostat=ierr) j
	        if(ierr.eq.6100) then
	          print*, 'error reading integer*2 was: ',ierr
	        end if
	
	        read(1,*,iostat=ierr) k
	        if(ierr.eq.6100) then
	          print*, 'error reading integer*4 was: ',ierr
	        end if
	        pause
	        end
	
	REFERENCES
	==========
	
	Microsoft FORTRAN PowerStation 32 "Programmer's Guide," page 48, "Integer Data
	Types."
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	
	=============================================================================
	
