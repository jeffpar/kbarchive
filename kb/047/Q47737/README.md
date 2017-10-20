---
layout: page
title: "Q47737: INFO: filelength() Includes EOF Character in Return Value"
permalink: /kb/047/Q47737/
---

## Q47737: INFO: filelength() Includes EOF Character in Return Value

{% raw %}

	Article: Q47737
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbcode kbCRT kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 22-JUL-2001
	
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
	
	The return value of the filelength() function is the full length of the file in
	bytes, including any EOF characters. This return value will be the same as the
	file size indicated by the MS-DOS, OS/2, or Windows NT command prompt DIR
	command.
	
	MORE INFORMATION
	================
	
	The C Run-time included with Visual C++ version 4.0 provides not only the
	_filelength() (filelength()) function but also the Microsoft specific
	_filelengthi64() function. _filelengthi64() differs from filelength() in its
	return type, a 64-bit int (__int64). For more information on _filelength() or
	_filelengthi64(), consult the Visual C++ Books Online.
	
	The sample code below demonstrates the use of _filelength().
	
	Sample Code
	-----------
	
	  /* Compile options needed: none */ 
	  /* CHSIZE.C: This program uses _filelength to report the size
	   * of a file before and after modifying it with _chsize.
	   */ 
	
	  #include <io.h>
	  #include <fcntl.h>
	  #include <sys\types.h>
	  #include <sys\stat.h>
	  #include <stdio.h>
	
	  void main( void )
	  {
	     int fh, result;
	     unsigned int nbytes = BUFSIZ;
	
	     /* Open a file */ 
	     if( (fh = _open( "data", _O_RDWR | _O_CREAT, _S_IREAD
	                     | _S_IWRITE ))  != -1 )
	     {
	        printf( "File length before: %ld\n", _filelength( fh ) );
	        if( ( result = _chsize( fh, 329678 ) ) == 0 )
	           printf( "Size successfully changed\n" );
	        else
	           printf( "Problem in changing the size\n" );
	        printf( "File length after:  %ld\n", _filelength( fh ) );
	        _close( fh );
	     }
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbCRT kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,2.1,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
