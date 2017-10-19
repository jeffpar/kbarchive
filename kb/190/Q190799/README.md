---
layout: page
title: "Q190799: PRB: Potential Errors Passing CRT Objects Across DLL Boundaries"
permalink: /kb/190/Q190799/
---

## Q190799: PRB: Potential Errors Passing CRT Objects Across DLL Boundaries

	Article: Q190799
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC500 kbVC600
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you pass C Run-time (CRT) objects such as file handles, locales, and
	environment variables into or out of a DLL (function calls across the DLL
	boundary), unexpected behavior can occur if the DLL, as well as the files
	calling into the DLL, use different copies of the CRT libraries.
	
	A related problem can occur when you allocate (explicitly with new, malloc, or
	implicitly with strdup, strstreambuf::str, and so on) and then pass a pointer
	across a DLL boundary to be freed. This can cause a memory access violation or
	heap corruption if the DLL and its users use different copies of the CRT
	libraries.
	
	Another symptom of this problem can be an error in the output window during
	debugging such as:
	
	  HEAP[]: Invalid Address specified to RtlValidateHeap(#,#)
	
	CAUSE
	=====
	
	Each copy of the CRT library has a separate and distinct state. As such, CRT
	objects such as file handles, environment variables, and locales are only valid
	for the copy of the CRT where these objects are allocated or set. When a DLL and
	its users use different copies of the CRT library, you cannot pass these CRT
	objects across the DLL boundary and expect them to be picked up correctly on the
	other side.
	
	Also, because each copy of the CRT library has its own heap manager, allocating
	memory in one CRT library and passing the pointer DLL boundary to be freed by a
	different copy of the CRT library is a potential cause for heap corruption.
	
	If you design your DLL so that it passes CRT objects across the boundary or
	allocates memory and expects it to be freed outside the DLL, you restrict the
	DLL users to use the same copy of the CRT library as the DLL. The DLL and its
	users use the same copy of the CRT library only if both are linked with the same
	version of the CRT DLL. This could be a problem if you mix applications built
	with Visual C++ 5.0 with DLLs that are built by Visual C++ 4.1 or earlier.
	Because the DLL version of the CRT library used by Visual C++ 4.1 is
	msvcrt40.dll and the one used by Visual 5.0 is msvcrt.dll, you cannot build your
	application to use the same copy of the CRT library as these DLLs.
	
	However, there is an exception. In US English version and some other localized
	versions of Windows NT 4.0 and Windows 2000, such as German, French, and Czech,
	a forwarder version of the msvcrt40.dll (version 4.20)is shipped. As a result,
	even though the DLL is linked with msvcrt40.dll and its user is linked with
	msvcrt.dll, you are still using the same copy of the CRT library because all
	calls made to msvcrt40.dll are forwarded to msvcrt.dll.
	
	However this forwarder version of msvcrt40.dll is not available in Windows 95,
	Windows 98, Windows Millennium Edition (Me), and some localized versions of
	Windows NT 4.0 and Windows 2000, such as Japanese, Korean, and Chinese. So, if
	your application targets these operating systems, you need to either obtain an
	upgraded version of the DLL that doesn't rely on msvcrt40.dll or alter your
	application to not rely on using the same copy of the CRT libraries. If you have
	developed the DLL, this means rebuilding it with Visual C++ 4.2 or later. If it
	is a third- party DLL, you need to contact your vendor for an upgrade.
	
	Please note that this forwarder DLL version of msvcrt40.dll (version 4.20) cannot
	be redistributed.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Case 1. Passing a File Handle Across a DLL Boundary:
	
	Sample Code
	-----------
	
	     //testDll.cpp
	
	     #include <stdio.h>
	     __declspec(dllexport) void writeFile(FILE *stream)
	     {
	        char   s[] = "this is a string\n";
	        fprintf( stream, "%s", s );
	        fclose( stream );
	     }
	
	     //testMain.cpp
	     #include <stdio.h>
	     #include <process.h>
	     void writeFile(FILE *stream);
	
	     void main(void)
	     {
	       FILE  * stream;
	       stream = fopen( "fprintf.out", "w" );
	       writeFile(stream);
	       system( "type fprintf.out" );
	     }
	     /***********End of Sample code*************/ 
	
	1. Build the DLL as follows: cl /MT /LD testDll.cpp
	
	2. Build the .exe file as follows: cl /MT testMain.cpp /link testdll.lib
	
	3. Run the resulting testMain.exe. You get an access violation.
	
	4. If both the DLL and .exe file are built with /MD so that only one copy of the
	  CRT is used, you get the correct result:
	
	  this is a string
	
	Case 2. Passing Environment Variables Across a DLL Boundary:
	
	Sample Code:
	------------
	
	     //testDll.cpp
	     #include <stdio.h>
	     #include <stdlib.h>
	
	     __declspec(dllexport) void readEnv()
	     {
	     char *libvar;
	
	          /* Get the value of the MYLIB environment variable. */ 
	          libvar = getenv( "MYLIB" );
	
	          if( libvar != NULL )
	              printf( "New MYLIB variable is: %s\n", libvar);
	          else
	        printf( "MYLIB has not been set.\n");
	     }
	
	      //testMain.cpp
	      #include <stdlib.h>
	      #include <stdio.h>
	
	      void readEnv();
	
	      void main( void )
	      {
	         _putenv( "MYLIB=c:\\mylib;c:\\yourlib" );
	         readEnv();
	      }
	      /****************End of Sample Code*****************/ 
	
	1. Build the DLL as follows:
	
	  cl /MT /LD testDll.cpp
	
	2. Build the .exe file as follows:
	
	  cl /MT testMain.cpp /link testdll.lib
	
	3. Run the resulting testMain.exe. You get an access violation.
	
	4. If both the DLL and .exe file are built with /MD so that only one copy of the
	  CRT is used, you get the correct result:
	
	  New MYLIB variable is: c:\mylib;c:\yourlib
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
