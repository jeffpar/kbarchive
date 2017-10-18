---
layout: page
title: "Q139640: Do Not Mix Operating System and CRT File Handles"
permalink: kb/139/Q139640/
---

## Q139640: Do Not Mix Operating System and CRT File Handles

	Article: Q139640
	Product(s): Microsoft C Compiler
	Version(s): WinNT:2.0,2.1,2.2,4.0,5.0; Windows:2.0,2.1
	Operating System(s): 
	Keyword(s): kbcode kbCRT kbVC kbVC200 kbVC210 kbVC220 kbVC400 kbVC500 kbVC600
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In 32-bit Windows-based applications, Windows API functions (OpenFile,
	CreateFile, and so on) return a file handle that cannot be substituted for a
	handle returned by a C Runtime Function (_open, _wopen, and so on). You can
	convert an operating system handle to a CRT handle by using the CRT function
	_open_osfhandle() as demonstrated in the "Sample Code" section of this article.
	
	NOTE: This distinction is not Win32 specific. However, some programmers using
	16-bit products on 16-bit operating systems have mixed operating system and CRT
	file handles.
	
	MORE INFORMATION
	================
	
	The following sample code shows how to open a file stream from a file handle
	returned by the OpenFile Windows API function.
	
	Sample Code
	-----------
	
	  /* Compile options needed:none
	  */ 
	  #include <stdlib.h>
	  #include <stdio.h>
	  #include <fcntl.h>
	  #include <io.h>
	  #include <windows.h>
	
	  void main( void )
	  {
	     HFILE OsFileHandle;
	     FILE *stream;
	     int CrtFileHandle;
	     OFSTRUCT Buffer;
	     int count = 0;
	     char inbuf[128];
	
	      if ( (OsFileHandle = OpenFile("test.dat", &Buffer, OF_READ))== -1){
	          printf( "OpenFile Failed");
	          exit(1);
	          }
	
	      /* convert OS file handle to CRT file pointer */ 
	
	      if ( (CrtFileHandle=_open_osfhandle(OsFileHandle,_O_RDONLY))==-1){
	          printf(  "_open_osfhandle Failed");
	          exit(1);
	          }
	
	     /* Change handle access to stream access. */ 
	     if( (stream = _fdopen( CrtFileHandle, "r" )) == NULL ) {
	          printf(  "_fdopen Failed");
	          exit( 1 );
	        }
	
	     while( fgets( inbuf, 128, stream ) != NULL )
	        count++;
	
	     /* After _fdopen, close with fclose */ 
	     fclose( stream );
	     printf( "Lines in file: %d\n", count );
	  }
	
	Additional query words: Windows 95
	
	======================================================================
	Keywords          : kbcode kbCRT kbVC kbVC200 kbVC210 kbVC220 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : WinNT:2.0,2.1,2.2,4.0,5.0; Windows:2.0,2.1
	Issue type        : kbinfo
	
	=============================================================================
	
