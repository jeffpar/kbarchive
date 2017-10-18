---
layout: page
title: "Q49573: INFO: scanf() with %i and a Leading 0 Gives Octal Conversion"
permalink: kb/049/Q49573/
---

## Q49573: INFO: scanf() with %i and a Leading 0 Gives Octal Conversion

	Article: Q49573
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; OS/2:5.1,6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.
	Operating System(s): 
	Keyword(s): kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 5.1, 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft C, scanf() may return different results when using the %i switch
	than when using the %d switch. With the %i switch, reading in a number that
	begins with a 0 (zero) will cause the number to be treated as an octal number.
	The %d switch treats all numbers as decimal numbers.
	
	MORE INFORMATION
	================
	
	The %i switch has the capability of reading in decimal, octal, and hexadecimal
	numbers. Hexadecimal numbers are specified with the 0x in front of the number,
	while octal numbers are specified with the 0 in front of them. If you want only
	decimal numbers to be read in, use the %d switch.
	
	This is expected behavior and occurs with the entire scanf() family.
	
	Additional query words: sscanf fscanf
	
	======================================================================
	Keywords          : kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; OS/2:5.1,6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
