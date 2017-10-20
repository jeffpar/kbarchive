---
layout: page
title: "Q70784: INFO: Data May Be Lost During fflush() If Write Is Unsuccessful"
permalink: /kb/070/Q70784/
---

## Q70784: INFO: Data May Be Lost During fflush() If Write Is Unsuccessful

{% raw %}

	Article: Q70784
	Product(s): Microsoft C Compiler
	Version(s): MS- DOS:5.1,6.0,6.00a,6.00ax,7.0;WIN3X:1.0,1.5;WINNT:1.0,2.0,2.1,4.0,5.0;
	Operating System(s): 
	Keyword(s): kbCRT kbVC100 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because of the way the fflush() function clears the stream buffer, data may be
	lost after a failed write. This may become apparent when setting up a critical
	error handler for a file that uses stream I/O [for example, fopen(), fclose(),
	fwrite(), and so on]. To work around this situation, turn buffering off [with
	the setvbuf() function] or use low-level I/O routines instead [for example,
	open(), close(), write(), and so on].
	
	MORE INFORMATION
	================
	
	When using stream I/O, input and output is buffered. This can provide
	significant performance benefits because data is read and written in larger
	"chunks." The file buffer is 512 bytes by default but can be adjusted with the
	setvbuf() function.
	
	When fflush() is called, either explicitly or implicitly through fclose(), the
	data still in the stream is written to the file by an implicit call to write().
	Once that is done, the current location pointer is reset to the start of the
	stream buffer and the buffer's character count is set to zero. Unfortunately,
	this occurs whether or not the write() was successful.
	
	In an environment where a critical error handler has been installed, the
	application will usually try to rectify the error (that is, request that the
	user close the disk drive door, turn on the printer, insert a formatted disk,
	and so on), and then retry the operation. For example:
	
	  IOStatus = FAIL;
	  while(IOStatus == FAIL)
	  {
	     fflush(FilePtr);
	     IOStatus = CriticalErrorChk();
	  }
	
	However, the second time fflush() is called, the stream has already been cleared
	of data and the data is effectively "lost." Calling setvbuf() with the
	mode-parameter of _IONBF eliminates this problem by unbuffering the stream, but
	file I/O will be slower.
	
	Note that this fflush() behavior is compatible with the ANSI standard. As
	required by ANSI, fflush() does return EOF to indicate there was a problem with
	flushing the file.
	
	The Help for fflush() in Microsoft C/C++ versions 7.0 and Visual C++ gives the
	following information:
	
	  Note: If fflush returns EOF, data may have been lost because of a failed
	  write. When setting up a critical error handler, it is safest to turn
	  buffering off with the setvbuf function or to use low-level I/O routines such
	  as _open, _close, and _write instead of the stream I/O functions.
	
	Additional query words: _harderr _hardrtn _hardresume
	
	======================================================================
	Keywords          : kbCRT kbVC100 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS- DOS:5.1,6.0,6.00a,6.00ax,7.0;WIN3X:1.0,1.5;WINNT:1.0,2.0,2.1,4.0,5.0;
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
