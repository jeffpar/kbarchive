---
layout: page
title: "Q107501: INFO: &#95;&#95;declspec(dllexport) Replaces &#95;&#95;export in 32-Bit VC++"
permalink: /kb/107/Q107501/
---

## Q107501: INFO: &#95;&#95;declspec(dllexport) Replaces &#95;&#95;export in 32-Bit VC++

	Article: Q107501
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS NT:1.0,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC kbVC100 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 10-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The __export keyword provided with the Visual C++ for Windows compiler is
	obsolete with the Microsoft Visual C++ 32-bit compiler. The equivalent
	functionality for WIN32 can be achieved by using the keyword __declspec with the
	dllexport attribute. With Visual C++ 32-bit Edition, version 4.0, compiling code
	containing the __export (or _export) keyword results in either of the following
	warnings:
	
	  C4236: nonstandard extension used : '__export' is an obsolete keyword, see
	  documentation for __declspec(dllexport)
	
	  - or -
	
	  C4226: nonstandard extension used : '__export' is an obsolete keyword
	
	Compiling code containing the __export (or _export) keyword with 32-bit Visual
	C++, versions 1.0 and 2.x, results in the C4226 warning.
	
	
	MORE INFORMATION
	================
	
	The __declspec construct is not supported by the tools supplied with Microsoft
	Win32 Software Development Kit (SDK).
	
	When porting DLL source code from Windows to Win32, replace each instance of
	__export with __declspec( dllexport ). The __declspec(dllexport) keyword can be
	used to export data, functions, classes, or class member functions. For
	example:
	
	     /* exported function */ 
	     __declspec( dllexport ) void func();
	
	     /* exported data */ 
	     __declspec( dllexport ) int i;
	
	     // exported class
	     class __declspec( dllexport ) DLLClass
	     {
	        ...
	     };
	
	     class DLLClass
	     {
	     public:
	         // exported member function
	         __declspec( dllexport ) void MemberFunction( void );
	     };
	
	The sample code below demonstrates exporting classes and class member functions
	from a DLL using the __declspec( dllexport ) and __declspec( dllimport ) storage
	class attributes in the DLL and EXE, respectively.
	
	Sample Code
	-----------
	
	     /* DLL Sample: TESTDLL.CPP
	     /* Compile options needed: /D"_X86" /MT TESTDLL.CPP /link
	     /*                  /DLL /OUT:testdll.dll /implib:testdll.lib
	     */ 
	
	     #include <stdio.h>
	
	     class DLLClass
	         {
	         public:
	          // exported member function
	          __declspec( dllexport ) void functionA( void ) {
	              printf("\nIn Function A of the exported function");
	          }
	         };
	
	     // exported class
	     class __declspec( dllexport) ExportDLLClass
	         {
	         public:
	          void functionB(void) {
	             printf("\nIn Function B of the exported class");
	          }
	         };
	
	     // exported instance of the DLLClass
	     __declspec(dllexport) DLLClass test;
	
	     /* Source that calls the DLL Sample: CALLDLL.CPP
	     /* Compile options needed: /D"_X86" /D"_CONSOLE" /ML CALLDLL.CPP
	     /*                  TESTDLL.LIB
	     */ 
	
	     #include <stdio.h>
	
	     class DLLClass
	         {
	         public:
	          // imported member function
	          __declspec( dllimport ) void functionA( void );
	         };
	
	     class __declspec( dllimport) ExportDLLClass
	         {
	         public:
	          void functionB(void);
	         };
	
	     __declspec( dllimport ) DLLClass test;
	
	     void main(void)
	     {
	        ExportDLLClass TestClass;
	
	        test.functionA();
	        TestClass.functionB();
	     }
	
	REFERENCES
	==========
	
	For more information on exporting, query on the following words in the Microsoft
	Knowledge Base:
	
	  __export and def and prolog and dllexport
	
	
	For more information creating DLLs for WIN32 or on the dllexport and dllimport
	storage class attributes, refer to Chapter 4 of the "Programming Techniques"
	manual that ships with Visual C++ 32-bit Edition, or search for dllexport or
	dllimport or export in the Visual C++ Books Online. >From within the Visual
	Workbench, select Help and choose Keyword Search.
	
	Additional query words: 8.00 9.00
	
	======================================================================
	Keywords          : kbLangC kbVC kbVC100 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc100 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS NT:1.0,2.0,4.0,5.0,6.0
	
	=============================================================================
	
