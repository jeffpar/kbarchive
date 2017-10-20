---
layout: page
title: "Q29852: HOWTO: Use fopen() to Append Data to File Terminated w/ CTRL+Z"
permalink: /kb/029/Q29852/
---

## Q29852: HOWTO: Use fopen() to Append Data to File Terminated w/ CTRL+Z

{% raw %}

	Article: Q29852
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCRT kbVC
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When data need to be appended to a stream file that is terminated with the
	CTRL+Z end-of-file (EOF) marker (ASCII 1Ah), use fopen() with an access mode of
	"a+" to open the stream. This will ensure that all data appended to the stream
	are accessible after the stream is closed.
	
	MORE INFORMATION
	================
	
	If fopen() is called with the "a+" mode, the operations of reading from and
	writing to the opened stream file are valid. Before any data are appended, the C
	Run-time reads the file and deletes the end-of-file marker. However, if fopen()
	is called with the "a" mode, only the operation of writing to the opened file is
	valid. The C Run-time must seek to the end of the file and append characters
	after the end-of-file marker, CTRL+Z.
	
	When displaying the contents of a text file, the MS-DOS and Windows NT TYPE
	commands stop upon encountering a CTRL+Z character. Certain editors such as
	Edlin and WordStar also ignore all characters after the first CTRL+Z in a file.
	Consequently, if text is appended after the CTRL+Z end-of-file marker, it may
	not be viewable.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
