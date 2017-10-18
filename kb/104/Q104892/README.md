---
layout: page
title: "Q104892: FIX: F2836 on Type Declaration After Entry Statement"
permalink: kb/104/Q104892/
---

## Q104892: FIX: F2836 on Type Declaration After Entry Statement

	Article: Q104892
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
	
	Declaring a variable after an ENTRY statement may cause the compiler to generate
	the following error message:
	
	  error F2836: statement out of order
	
	RESOLUTION
	==========
	
	Make all the type declarations before all the ENTRY statements to avoid this
	error message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation for MS-DOS,
	version 1.0. This problem has been resolved with FORTRAN Powerstation
	maintenance release version 1.0a for MS-DOS.
	
	FORTRAN PowerStation version 1.0 can be differentiated from the maintenance
	release version 1.0a by invoking the linker. Typing "link32 | more" (without the
	quotation marks) from \F32\BIN directory will show version 2.8 for FORTRAN
	Powerstation version 1.0, and it will show 1.0f for the maintenance release
	version 1.0a.
	
	MORE INFORMATION
	================
	
	Compiling the following code demonstrates the problem:
	
	Sample Code
	-----------
	
	  C No options required
	        subroutine sub(x)
	        entry suben(x)
	        real x
	        end
	  C The compiler generates the following incorrect error:
	  C error F2836: statement out of order
	
	This error message can be avoided by moving the declaration for x above the ENTRY
	statement but below the subroutine statement.
	
	Additional query words: 1.00 buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
