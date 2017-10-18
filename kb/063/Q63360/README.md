---
layout: page
title: "Q63360: FIX: INTEGER&#42;2 Multiply by Power of 2 Produces Wrong Results"
permalink: kb/063/Q63360/
---

## Q63360: FIX: INTEGER&#42;2 Multiply by Power of 2 Produces Wrong Results

	Article: Q63360
	Product(s): Microsoft Fortran Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN compiler for OS/2, version 5.0 
	- Microsoft FORTRAN Compiler for MS-DOS, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application that multiplies an INTEGER*2 variable by an integer constant that
	is a power of 2 produces incorrect results. Specifying the /4I4 compiler option
	switch does not have any effect on the results. Compiling the code with the /4Yb
	option and running the application does not provide any indication of a problem.
	Compiling the code with the /Od option to disable optimizations and running the
	application does not change the behavior.
	
	CAUSE
	=====
	
	The compiler generates incorrect code when the result of the multiplication is
	larger than the range of an INTEGER*2 variable (-32,768 to 32,767).
	
	RESOLUTION
	==========
	
	To address this problem, perform one of the following steps:
	
	- Modify the source code to use the INT4 intrinsic function to convert the
	  INTEGER*2 variable to an INTEGER*4 variable in the expression.
	
	- Modify the source code to assign the INTEGER*2 variable to a temporary
	  INTEGER*4 variable. Use the temporary variable in the expression.
	
	- Modify the source code to assign the integer constant to a temporary
	  variable. Use the temporary variable in the expression.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN version 5.0 for MS-DOS
	and OS/2. This problem was corrected in FORTRAN version 5.1 for MS-DOS and OS/2.
	
	MORE INFORMATION
	================
	
	This error occurs when the result of the multiplication is larger than the range
	of an INTEGER*2 variable (-32,768 to 32,767). The compiler generates a shift
	instruction (SHL) to perform a fast multiply. The compiler does not use a four
	byte work space when it performs the shift; instead, it allocates only two bytes
	for its work space. Under these circumstances, significant bits can be lost or
	shifted into the sign bit when magnitude of the result of the multiplication is
	too large for an INTEGER*2 variable.
	
	The following code example demonstrates this problem and one technique to work
	around it.
	
	Sample Code
	-----------
	
	  C Compile options needed: None
	
	        INTEGER*2 K/1234/ 
	        INTEGER*2 M/32/, N/33/ 
	        WRITE(*, *) K*32, K*33 ! Displays incorrect results for K*32
	        WRITE(*, *) K*M, K*N   ! Displays correct results for K*M
	        END
	
	Additional query words: 5.00 buglist5.00 fixlist5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN500DOS kbFORTRAN500OS2
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
