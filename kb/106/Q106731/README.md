---
layout: page
title: "Q106731: PRB: Large BLOCK DATA Subprogram Compiles Slowly"
permalink: /kb/106/Q106731/
---

## Q106731: PRB: Large BLOCK DATA Subprogram Compiles Slowly

	Article: Q106731
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a,4.0
	Operating System(s): 
	Keyword(s): kbLangFortran
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, versions 1.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compilation of a large BLOCK DATA subprogram can take a very long time using the
	FORTRAN PowerStation. In tests, a BLOCK DATA subprogram with 32,000 DATA
	statements took approximately 45 minutes to compile on a 50 megahertz (MHz) 486
	machine.
	
	CAUSE
	=====
	
	This slow compilation is caused by initializing a large array in a BLOCK DATA
	subprogram with several DATA statements. One DATA statement for each array
	element produces the slowest compile. The array elements must also be
	initialized in the order that they appear in the array for the slow compilation
	to occur.
	
	FORTRAN PowerStation uses the COFF object file format. Because COFF requires that
	every element of an array be enumerated exactly once, all the data records
	(which are generated for each DATA statement in the BLOCK DATA) are sorted. The
	sorting algorithm is least efficient when the records are already sorted and
	most efficient when they are in reverse order.
	
	RESOLUTION
	==========
	
	If array elements are initialized in the reverse order that they appear in the
	array, compilation time will be significantly reduced (for example, reduced from
	45 minutes to 3 minutes). Reducing the number of DATA statements by initializing
	thousands of array elements in a single DATA statement also reduces compile
	time.
	
	MORE INFORMATION
	================
	
	The following sample BLOCK DATA subprograms illustrate the problem and one
	possible resolution:
	
	Sample Code #1
	--------------
	
	  C This sample illustrates the problem by initializing a large array,
	  C one element at a time, in the order the elements appear in the array.
	        BLOCK DATA INITME
	        COMMON /BIGCOM/ ARRAY(40000)
	        DATA ARRAY(1)/1.5/ 
	        DATA ARRAY(2)/7.4/ 
	        .
	        .                     ! 39996 DATA statements go here
	        .
	        DATA ARRAY(39999)/0.4/ 
	        DATA ARRAY(40000)/12.0/ 
	        END
	
	Sample Code #2
	--------------
	
	  C This sample initializes the array elements in reverse order to
	  C alleviate the problem.
	        BLOCK DATA INITME
	        COMMON /BIGCOM/ ARRAY(40000)
	        DATA ARRAY(40000)/12.0/ 
	        DATA ARRAY(39999)/0.4/ 
	        .
	        .                      ! 39996 DATA statements go here
	        .
	        DATA ARRAY(2)/7.4/ 
	        DATA ARRAY(1)/1.5/ 
	        END
	
	Additional query words: 1.00 4.00 hang
	
	======================================================================
	Keywords          : kbLangFortran 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower32400NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a,4.0
	
	=============================================================================
	
