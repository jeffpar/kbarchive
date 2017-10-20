---
layout: page
title: "Q66632: Windows SDK Support for Microsoft FORTRAN Compilers"
permalink: /kb/066/Q66632/
---

## Q66632: Windows SDK Support for Microsoft FORTRAN Compilers

{% raw %}

	Article: Q66632
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using the Microsoft FORTRAN Optimizing Compiler versions 5.0 and earlier to
	compile Windows programs is not supported. The Windows SDK support is limited to
	support of the Microsoft C Compiler and Microsoft Macro Assembler (MASM).
	
	To compile Windows programs, use the Microsoft FORTRAN Optimizing Compiler
	version 5.1 or later. This version includes the necessary libraries to compile
	code to run under Windows version 3.0 in standard and enhanced mode.
	
	MORE INFORMATION
	================
	
	The FORTRAN 5.1 compiler includes support for Mixed Language application and
	stand-alone QuickWin FORTRAN applications. The FORTRAN PowerStation 32- bit
	compiler for MS-DOS does not include support to do mixed language programming
	with any Microsoft C/C++ Windows compiler. The FORTRAN PowerStation compiler for
	Windows NT does support mixed language programming for Windows NT. Mixing
	support is available to mixed projects using the Visual C++ for Windows NT
	compiler.
	
	The most important reason why FORTRAN version 5.0 routines will not work under
	Windows is that the FORTRAN version 5.0 run-time libraries are not designed to
	communicate with Windows; they are designed for either MS-DOS or OS/2
	programming. The Windows SDK includes specially modified versions of the
	standard C run-time libraries that are designed for Windows programming. A
	standard FORTRAN version 5.0 library, such as MLIBFORE.LIB, makes no allowances
	for Windows programming.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
