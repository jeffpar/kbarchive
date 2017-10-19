---
layout: page
title: "Q141493: DOC: &quot;How to Use Debug Heap from C++&quot; Documented Incorrectly"
permalink: /kb/141/Q141493/
---

## Q141493: DOC: &quot;How to Use Debug Heap from C++&quot; Documented Incorrectly

	Article: Q141493
	Product(s): Microsoft C Compiler
	Version(s): WINNT:4.0,4.1,4.2,5.0;
	Operating System(s): 
	Keyword(s): kbcode kbdocerr kbCRT kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 28-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Run-Time Library reference, the section on Using the Debug Heap from
	Visual C++ incorrectly describes how to place an allocation made with the new
	operator into a _CLIENT_BLOCK. To access this section from Books Online, follow
	this hierarchy:
	
	1. Visual C++ Books
	
	2. C/C++
	
	3. Run-Time Library Reference
	
	4. Debug Version of the C Run-Time Library
	
	5. Memory Management and the Debug Heap
	
	6. Using the Debug Heap from C++
	
	MORE INFORMATION
	================
	
	In a debug build of an application, you can use a special operator (new) to
	record the file name, the line number where the allocation occurred, and the
	block type of the allocation. The documentation states that if you want your
	allocations to be of type_CLIENT_BLOCK instead of _NORMAL_BLOCK you should
	include code like the following in an include file:
	
	  #ifdef _DEBUG
	
	  inline void* __cdecl operator new(unsigned int s)
	        { return ::operator new(s, _CLIENT_BLOCK, __FILE__, __LINE__); }
	
	  #endif"
	
	__FILE__ and __LINE__ are macros defined by the compiler that report the current
	file name and line number. Macros are filled out by the preprocessor; then the
	compiler replaces your call to new with this function. Therefore, the macros
	have already been filled out before they are inlined. Hence, they will report
	the header file information not the actual source location.
	
	There are two ways to mark the correct file name and line number:
	
	- Call the debug version of the new operator directly
	
	  -or-
	
	- Create macros that replace the operator new in debug mode as in the following
	  sample code.
	
	Sample Code
	-----------
	
	  /* MyDbgNew.h
	  /* Defines global operator new to allocate from
	  /* client blocks
	  */ 
	  #ifdef _DEBUG
	     #define DEBUG_CLIENTBLOCK   new( _CLIENT_BLOCK, __FILE__, __LINE__)
	  #else
	     #define DEBUG_CLIENTBLOCK
	  #endif // _DEBUG
	
	  /* MyApp.cpp
	  /*  Compile options needed: /Zi /D_DEBUG /MLd
	  /*            or use a
	  /*      Default Workspace for a Console Application to
	  /*      build a Debug version
	  */ 
	
	  #include "crtdbg.h"
	  #include "mydbgnew.h"
	
	  #ifdef _DEBUG
	  #define new DEBUG_CLIENTBLOCK
	  #endif
	
	  void main( )  {
	    char *p1;
	    p1 =  new char[40];
	    _CrtMemDumpAllObjectsSince( NULL );
	   }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbdocerr kbCRT kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : WINNT:4.0,4.1,4.2,5.0;
	
	=============================================================================
	
