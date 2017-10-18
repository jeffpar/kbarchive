---
layout: page
title: "Q98757: FIX: Binary (or Unformatted) I/O Fails, Array Size &gt; 64K"
permalink: kb/098/Q98757/
---

## Q98757: FIX: Binary (or Unformatted) I/O Fails, Array Size &gt; 64K

	Article: Q98757
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
	
	An application developed in Microsoft FORTRAN PowerStation that reads or writes
	an array larger than 64K in size to a binary or unformatted file may read or
	write an incorrect quantity of data.
	
	CAUSE
	=====
	
	The application specifies the name of an array without a subscript or specifies
	a simple variable for the subscript. The compiler does not generate the correct
	code to access the low-level functions that perform binary or unformatted I/O.
	Consequently, the application reads or writes the amount of data specified by
	the following formula: (size of array) modulus 64K.
	
	RESOLUTION
	==========
	
	To work around this problem, use an explicit implied DO loop in the I/O
	statement. If the array has only one dimension, the array subscript must be an
	expression and not a simple variable for the compiler to generate the correct
	code. If the array is a multi-dimensional array, then the normal,
	multi-dimensional implied DO loop is sufficient to avoid the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft PowerStation version
	1.0. This problem has been resolved with FORTRAN PowerStation maintenance
	release version 1.0a for MS-DOS.
	
	FORTRAN PowerStation version 1.0 can be differentiated from the maintenance
	release version 1.0a by invoking the linker. Typing "link32 | more" from
	\F32\BIN directory will show version 2.8 for FORTRAN PowerStation version 1.0,
	and it will show version 1.0f for the maintenance release version 1.0a.
	
	MORE INFORMATION
	================
	
	Sample Code #1
	--------------
	
	  C Compile options needed: none
	  C This program generates the following output
	  C
	  C     Program failed, number of bytes read:           1
	
	        parameter(n = 64 * 1024 + 1)  ! 64K + 1 size
	        character*1 arr(n), chr
	        integer*4 i
	
	        open(1, file = 'test.dat', form = 'binary')
	        arr = 'x'      ! initialize entire array to 'x'
	        write(1) arr   ! write entire array
	        rewind(1)      ! rewind to read file
	        do i = 1, n
	          read(1, iostat = ierr) chr ! read a byte at a time
	          if (ierr .eq. -1) exit     ! exit at end of file
	        end do
	        if (i - 1 .ne. n) then
	          print *, 'Program failed, number of bytes read: ', i - 1
	        else
	          print *, 'Program OK, number of bytes read: ', i - 1
	        end if
	        end
	
	Sample Code #2
	--------------
	
	  C Compile options needed: none
	  C This program generates the following output
	  C
	  C     Program OK, number of bytes read:       65537
	
	        parameter(n = 64 * 1024 + 1)  ! 64K + 1 size
	        character*1 arr(n), chr
	        integer*4 i
	
	        open(1, file = 'test.dat', form = 'binary')
	        arr = 'x'      ! initialize entire array to 'x'
	        write(1) (arr(i + 0), i = 1, n)   ! note the addition of zero
	        rewind(1)      ! rewind to read file
	        do i = 1, n
	          read(1, iostat = ierr) chr ! read a byte at a time
	          if (ierr .eq. -1) exit     ! exit at end of file
	        end do
	        if (i - 1 .ne. n) then
	          print *, 'Program failed, number of bytes read: ', i - 1
	        else
	          print *, 'Program OK, number of bytes read: ', i - 1
	        end if
	        end
	
	Additional query words: 1.00 buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
