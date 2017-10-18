---
layout: page
title: "Q112058: BUG: Visual Workbench Does Not Allow Stack Size Over 32K"
permalink: kb/112/Q112058/
---

## Q112058: BUG: Visual Workbench Does Not Allow Stack Size Over 32K

	Article: Q112058
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to set a stack size greater than 32K in the Visual Workbench (VWB)
	may produce a Tools Options dialog box with the message:
	
	  Numerical value is invalid, it must be in the range 0 <= number <=
	  32768
	
	In other instances, no warning message will be produced, but the stack size will
	modulus itself with 64K resulting in a stack size between 0 and 32768 bytes.
	
	With FORTRAN PowerStation 32, the following application error is generated:
	
	  Linker options: f32vwb.exe - Application Error
	
	  The instruction at 0x0ff5710b referenced memory at "0x6874206".
	  The memory could not be "read".
	
	CAUSE
	=====
	
	The 32K stack size limitation was carried over from the 16-bit Microsoft Visual
	C++ product. FORTRAN PowerStation allows stack sizes much larger than 32K.
	
	RESOLUTION
	==========
	
	Manually edit the .FMK file produced by VWB to add the -stack: option to the
	appropriate L32FLAGS options string. When opening the project from VWB, be sure
	to select the Use As An External Makefile check box.
	
	Another option is to link from the command line.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To demonstrate the problem, follow these two steps:
	
	1. From VWB choose Project from the Options menu and select Linker.
	
	2. Type "100000" (without the quotation marks) in the Stack Size Maximum field.
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	Issue type        : kbbug
	
	=============================================================================
	
