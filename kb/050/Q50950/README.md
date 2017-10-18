---
layout: page
title: "Q50950: HOWTO: Specify Stack Size (Clarification)"
permalink: kb/050/Q50950/
---

## Q50950: HOWTO: Specify Stack Size (Clarification)

	Article: Q50950
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVC100 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	With the Microsoft C compiler, the choice to use the /F compiler option or the
	/STACK linker option to specify a stack size for a program depends on the method
	being used to compile and link.
	
	MORE INFORMATION
	================
	
	If you using the CL command to compile and link, the /F compiler option is all
	that is necessary. This option will pass the correct size of the stack to the
	linker.
	
	Conversely, if you are invoking the compiler and the linker separately (as in a
	MAKE file), the /STACK link option can be used to get the desired stack size.
	
	No stack information is stored in the object module. Therefore, using the /F and
	/c (compile only) options together and then invoking link separately will not
	generate the desired stack size.
	
	For OS/2, Windows, Windows NT, and Windows 95 applications, the stack size can be
	specified in the .DEF file using the STACKSIZE directive. STACKSIZE overrides
	the size specified on the link line.
	
	For 16-bit linkers, the default stack size is 2K. If an odd value is specified
	for the stack size, the linker will round it up to the next even value. For
	32-bit linkers, the default stack size is 1MB. The linker rounds up the
	specified value to the nearest 4 bytes.
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbVC100 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
