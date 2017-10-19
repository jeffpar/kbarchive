---
layout: page
title: "Q72760: FIX: F2124 or Incorrect Results From Structure Array Use"
permalink: /kb/072/Q72760/
---

## Q72760: FIX: F2124 or Incorrect Results From Structure Array Use

	Article: Q72760
	Product(s): Microsoft Fortran Compiler
	Version(s): 5.0,5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN compiler for OS/2, versions 5.0, 5.1 
	- Microsoft FORTRAN Compiler for MS-DOS, versions 5.0, 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to compile an application fails and the compiler may generate the
	following message:
	
	  F2124: CODE GENERATION ERROR
	  Contact Microsoft Technical Support
	
	Alternately, the application compiles without error but does not generate any
	output.
	
	CAUSE
	=====
	
	The application declares an array of structures that contain REAL*4 elements,
	REAL*8 elements, or mixed-type elements (for example, one INTEGER*4 element and
	one COMPLEX*8 element). The application attempts to write the entire array
	without specifying a subscript.
	
	The same code generation error can occur if the application declares an
	assumed-size array in a subprogram and the compiler command line specifies the
	/Od compiler option switch. In this case, the types of the structure elements do
	not effect the error. If the command line does not include /Od compiler option
	switch, the error message may not appear, but the application does not produce
	any output.
	
	Neither the ANSI FORTRAN 77 standard nor Microsoft FORTRAN supports printing an
	entire assumed-size array. The compiler is designed to generate the following
	error message in this case:
	
	  F2727: assumed-size array illegal here
	
	RESOLUTION
	==========
	
	To address this error, modify the source code to print each element of the array
	individually instead of all at once.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN versions 5.0 and 5.1 for
	MS-DOS and OS/2. This problem was corrected in FORTRAN PowerStation, version
	1.0.
	
	MORE INFORMATION
	================
	
	The following code example demonstrates this problem.
	
	Sample Code #1
	--------------
	
	  C Compile options needed: None
	
	        STRUCTURE /STRUC/ 
	          REAL R
	        END STRUCTURE
	        RECORD /STRUC/ S(10)
	        S.R = 4
	        WRITE (*, *) S.R
	        END
	
	To work around this problem, use an implied-DO loop to print each elements of the
	array of structures. The following code example demonstrates this approach.
	
	Sample Code #2
	--------------
	
	  C Compile options needed: None
	
	        STRUCTURE /STRUC/ 
	          REAL R
	        END STRUCTURE
	        RECORD /STRUC/ S(10)
	        S.R = 4
	        WRITE (*, *) (S(I).R, I = 1, 10) ! Print elements using
	                                         ! implied DO-loop
	        END
	
	The following code example, that uses an assumed-size array of structures,
	compiles without error but does not produce any output.
	
	Sample Code #3
	--------------
	
	  C Compile options needed: None
	
	        STRUCTURE /STRUC/ 
	         REAL R
	        END STRUCTURE
	        RECORD /STRUC/ ST(10)
	        ST.R = 4
	        CALL SUB(ST)
	        END
	
	        SUBROUTINE SUB(ST)
	        STRUCTURE /STRUC/ 
	         REAL R
	        END STRUCTURE
	        RECORD /STRUC/ ST(*)   ! Assumed-sized array declared
	        WRITE (*, *) ST.R      ! nothing is output here
	        END
	
	Compiling this code example with the /Od compiler option switch specified causes
	a code generation error.
	
	An application cannot print an assumed-size array as an array. The application
	must specify a subscript and print each element individually. One solution to
	this problem is to use an adjustable- sized array. Pass the length of the
	structure array to the subprogram with the array itself. Use the array length to
	terminate the loop that prints the individual array elements. The following code
	example demonstrates this process.
	
	Sample Code #4
	--------------
	
	  C Compile options needed: None
	
	        PARAMETER (LENGTH = 10)
	        STRUCTURE /STRUC/ 
	         REAL J
	        END STRUCTURE
	        RECORD /STRUC/ ST(LENGTH)
	        ST.J = 4
	        CALL SUB(ST, LENGTH)
	        END
	
	        SUBROUTINE SUB(ST, LENGTH)
	        STRUCTURE /STRUC/ 
	         REAL J
	        END STRUCTURE
	        INTEGER LENGTH
	        RECORD /STRUC/ ST(LENGTH)
	        WRITE (*, *) (ST(I).J, I = 1, LENGTH)  ! Print array elements
	                                               ! in implied DO-loop
	        END
	
	Additional query words: 5.00 5.10 buglist5.00 buglist5.10 fixlist1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN510DOS kbFORTRAN500DOS kbFORTRAN500OS2 kbFORTRAN510OS2
	Version           : :5.0,5.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
