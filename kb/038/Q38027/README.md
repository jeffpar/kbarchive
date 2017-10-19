---
layout: page
title: "Q38027: INFO: Negative Values Use Two's Complement"
permalink: /kb/038/Q38027/
---

## Q38027: INFO: Negative Values Use Two's Complement

	Article: Q38027
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:6.0,6.00a,6.00ax,7.0; OS/2:6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS:1.0,2.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 23-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In most C compilers, including the Microsoft C Compiler, negative values are
	represented internally in two's complement format. Two's complement can be
	obtained by negating each bit of the value, then adding 1. Performing two's
	complement twice generates the original value.
	
	The following is an example:
	
	  Original Value               Two's Complement
	  --------------               ----------------
	
	  (dec)   (hex)  (binary)      (dec)   (hex)   (binary)
	  127     0x7f   01111111      -127    0x81    10000001
	  111     0x6f   01101111      -111    0x91    10010001
	 -111     0x91   10010001       111    0x6f    01101111
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbCompiler kbVC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : MS-DOS:6.0,6.00a,6.00ax,7.0; OS/2:6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS:1.0,2.0,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
