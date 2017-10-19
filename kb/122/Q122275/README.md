---
layout: page
title: "Q122275: FIX: C Run-time Include Files Missing #pragma Pack Directives"
permalink: /kb/122/Q122275/
---

## Q122275: FIX: C Run-time Include Files Missing #pragma Pack Directives

	Article: Q122275
	Product(s): Microsoft C Compiler
	Version(s): 1.00 2.00
	Operating System(s): 
	Keyword(s): kbCRT kbVCkbbuglist kbfixlist
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The include (.H) files shipped with Visual C++ do not use the #pragma pack
	preprocessor directive around declarations of structures used by C run-time
	functions. You may run into problems using C run-time functions in your program
	if:
	
	- You are compiling files with the /Zp compiler option and using a value other
	  than 8 as the argument.
	
	-or-
	
	- You are using #pragma pack in your source files.
	
	CAUSE
	=====
	
	Problems occur because most C run-time functions expect the structures they work
	on to be built with the default compiler structure packing. The structure
	packing they expect would be specified with one of these compiler options: /Zp8,
	/Zp, or no /Zp.
	
	RESOLUTION
	==========
	
	If you are changing the default structure packing when building your
	application, add #pragma pack directives around the #includes of the C run-time
	include files to specify 8 as the packing alignment. This is illustrated in the
	sample code shown in the More Information section.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	version 4.0.
	
	MORE INFORMATION
	================
	
	There are other potential problems with changing the default structure packing.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q117388 PRB: Structure Packing Causes Some Win32 Programs to Fail
	
	REFERENCES
	==========
	
	Visual C++ Build Tools User's Guide, Chapter 2, Using the 32-Bit CL. A
	description of the /Zp compiler option.
	
	Visual C++ Preprocessor Reference, Chapter 2, Pragma Directives. A description of
	#pragma pack.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #pragma pack( push, 8 )
	  #include <stdio.h>
	  #pragma pack( pop )
	
	  void main( void )
	  {
	      FILE *fp;
	
	      fp = fopen( "c:\\autoexec.bat", "r" );
	  }
	
	Additional query words: 1.00 2.00 runtime run time error errors errno
	
	======================================================================
	Keywords          : kbCRT kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : 1.00 2.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
