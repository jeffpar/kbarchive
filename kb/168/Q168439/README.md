---
layout: page
title: "Q168439: PRB: _stat Function Fails for Names Ending with &quot;&#92;&quot;"
permalink: /kb/168/Q168439/
---

## Q168439: PRB: _stat Function Fails for Names Ending with &quot;&#92;&quot;

{% raw %}

	Article: Q168439
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC500 kbVC600kbbuglist
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the C-Run-time function stat to check a directory fails when the name
	passed to the function ends with "\".
	
	For example, _stat("\\my_directory\\my_name",&buf) returns OK, but
	_stat("\\my_directory\\my_name\\",&buf) will return -1 as error.
	
	CAUSE
	=====
	
	The _stat function calls the windows API function FindFirstFile passing it the
	path name. The FindFirstFile returns an invalid handle if the name ends with
	"\."
	
	RESOLUTION
	==========
	
	Remove the trailing "\" from the path name.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following sample program demonstrates the problem:
	
	  //Sample.cpp
	  /* Compiler Options : none */ 
	  #include <sys/types.h>
	  #include <sys/stat.h>
	  #include <stdio.h>
	  #include <windows.h>
	    HANDLE            hSearch;
	    WIN32_FIND_DATA   Buf;
	  int main( void )
	  {
	     struct _stat buf;
	     int result;
	
	     result = _stat( "c:\\temp", &buf );
	     if( result != 0 )
	        printf( "_stat function on c:\\temp failed " );
	
	     result = _stat( "c:\\temp\\", &buf );
	     if( result != 0 )
	       printf( "_stat function on c:\\temp\\ failed " );
	
	     hSearch= FindFirstFile((LPSTR)"c:\\temp", &Buf);
	     if (hSearch == INVALID_HANDLE_VALUE )
	        printf("\n\n FindFirstFile on c:\\temp failed too");
	
	     hSearch= FindFirstFile((LPSTR)"c:\\temp\\", &Buf);
	     if (hSearch == INVALID_HANDLE_VALUE )
	        printf("\n\n FindFirstFile on c:\\temp\\ failed too");
	
	  return 0;
	  }
	
	Program Output:
	
	If you have a valid C:\temp directory:
	
	_stat function on c:\temp\ failed.
	
	FindFirstFile on c:\temp\ failed, too.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC500 kbVC600 kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
