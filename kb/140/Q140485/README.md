---
layout: page
title: "Q140485: INFO: Exporting PASCAL-Like Symbols in 32-Bit DLLs"
permalink: /kb/140/Q140485/
---

## Q140485: INFO: Exporting PASCAL-Like Symbols in 32-Bit DLLs

	Article: Q140485
	Product(s): Microsoft C Compiler
	Version(s): WINNT:2.0,2.1,2.2,4.0,5.0;
	Operating System(s): 
	Keyword(s): kbCompiler kbVC200 kbVC210 kbVC220 kbVC400 kbVC500 kbVC600
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is no _pascal keyword in the 32-bit editions of Visual C++. Instead the
	Windef.h header file has PASCAL defined as __stdcall. This creates the correct
	style calling convention for the function (the called function cleans up the
	stack) but decorates the function name differently. So, when
	__declspec(dllexport) is used (in a .dll file, for example), the decorated name
	is exported instead of the desired PASCAL style name, which is undecorated and
	all uppercase.
	
	MORE INFORMATION
	================
	
	PASCAL name decoration is simply the undecorated symbol name in uppercase
	letters. __stdcall name decoration prefixes the symbol name with an underscore
	(_) and appends the symbol with an at sign (@) character followed by the number
	of bytes in the argument list (the required stack space). So, the function when
	declared as:
	
	     int  __stdcall func (int a, double b)
	
	is decorated as:
	
	     _func@12
	
	The C calling convention (__cdecl) decorates the name as _func. Whereas the
	desired PASCAL style name is FUNC.
	
	To get the decorated name set the Generate Mapfile option in the Linker General
	category setting.
	
	Use of __declspec(dllexport) does the following:
	
	- If the function is exported with C calling convention (_cdecl), it strips the
	  leading underscore (_) when the name is exported.
	
	- If the function being exported does not use the C calling convention (for
	  example, __stdcall ), it exports the decorated name.
	
	So to simulate PASCAL name decoration and calling conventions, you must have the
	"Called Function stack clean-up" provided by using __stdcall and the undecorated
	uppercase name.
	
	Because there is no way to override who does the stack clean up, you must use
	__stdcall. To undecorate names with __stdcall, you must specify them by using
	aliases in the EXPORTS section of the .def file. This is shown below for the
	following function declaration:
	
	     int  __stdcall MyFunc (int a, double b);
	     void __stdcall InitCode (void);
	
	In the .def file:
	
	     EXPORTS
	        MYFUNC=_MyFunc@12
	        INITCODE=_InitCode@0
	
	For .dll files to be called by programs written in the 32-bit versions of Visual
	Basic (versions 4.0 and above), the alias technique shown in this article is
	needed in the .def file. If alias is done in the Visual Basic program, use of
	aliasing in the .def file is not necessary. It can be done on the Visual Basic
	program by adding an Alias clause to the Declare statement as shown here:
	
	  Declare Function MyFunc Lib "dlllibname" Alias "_MyFunc@12"  (...)
	     As Integer
	
	The complete syntax for the Visual Basic Declare statement follows:
	
	     [Public | Private ] Declare Function name Lib
	     "libname" [Alias "aliasname" ] [([arglist])][As type]
	
	References
	----------
	
	For more information, query the MSDN compact disc using these keywords:
	
	  VB alias DLL
	
	NOTE: A very good discussion (with example code) of calling a C .dll file from
	Visual Basic can be found in the file Vb4dll.txt in the Visual Basic directory.
	If you can not locate the Vb4dll.txt file, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q150705 SAMPLE: Using VB4DLL.txt File to Develop .dlls for Visual Basic
	
	Additional query words: 9.00 9.10 PASCAL declspec VB DLL _stdcall
	
	======================================================================
	Keywords          : kbCompiler kbVC200 kbVC210 kbVC220 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : WINNT:2.0,2.1,2.2,4.0,5.0;
	Issue type        : kbinfo
	
	=============================================================================
	
