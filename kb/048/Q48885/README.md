---
layout: page
title: "Q48885: INFO: Newline Character &#92;n Equivalent to ASCII Linefeed (0x0A)"
permalink: kb/048/Q48885/
---

## Q48885: INFO: Newline Character &#92;n Equivalent to ASCII Linefeed (0x0A)

	Article: Q48885
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), used with:
	   - Microsoft C for MS-DOS 
	   - Microsoft C for OS/2 
	   - Microsoft C/C++ for MS-DOS 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	The newline character (\n) is equivalent to the ASCII linefeed character (hex
	0A). Thus, for files opened in text mode, CR/LF pairs are read in as newline
	characters, and newline characters are written as CR/LF.
	
	This information applies to STDIN, STDOUT, and STDERR, which are opened in text
	mode by default.
	
	When using strtok() to extract tokens separated by CR/LF in a file opened in text
	mode, only \n must be used as a token delimiter.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
