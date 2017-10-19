---
layout: page
title: "Q88113: INFO: Compile and Link Requirements for MFC Applications"
permalink: /kb/088/Q88113/
---

## Q88113: INFO: Compile and Link Requirements for MFC Applications

	Article: Q88113
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,7.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft C/C++, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Foundation Classes (MFC) samples provide an excellent starting
	point for learning basic, intermediate, and advanced MFC application programming
	techniques. Although these samples are easily built in the development
	environment with which they are shipped, the general requirements for building
	MFC applications are not clearly outlined in the documentation of the products
	listed above. This article elaborates on the process.
	
	The requirements for compiling and linking MFC applications are similar to those
	of their non-MFC counterparts. In addition to the usual includes and libraries,
	MFC programs must also include an MFC header, and link with an appropriate MFC
	library. MFC programs may require that certain symbols be defined.
	
	MORE INFORMATION
	================
	
	When building MFC applications, make sure #include "stdafx.h" is the first line
	of the .cpp file. This file includes most of the classes needed for MFC
	Windows-based applications. It also includes AFX.H, which contains declarations
	for CObject and other basic classes, data types, and macros. The AFX.H file does
	not include the additional Windows and Windows NT specific classes needed for
	these types of applications, and is often used instead of AFXWIN.H for MS-DOS
	programs.
	
	NOTE: For Windows NT console applications, you must determine whether you need to
	include AFXWIN.H, because console applications can create windows as well as
	Windows programs.
	
	You may also need to include AFXCOLL.H, AFXDLG.H, or one of the other headers
	from the ...\MFC\INCLUDE directory if you are using the MFC Collection classes,
	Common Dialog classes, or other special MFC classes.
	
	In addition, you must specify an MFC library when linking your application. The
	MFC library, for MS-DOS and Windows, must match the memory model of the program
	(that is, small, medium, compact, or large).
	
	The following describes the naming conventions of the Windows NT MFC libraries
	included with Visual C++ 32-bit Edition, versions 1.0 through 2.x:
	
	  NAFX {C|D} {W|R} [D]
	
	  {C|D}     = C application or DLL
	  {W|R}     = Windows or Console
	  [D]       = Debugging and possibly CodeView information
	
	The following describes the naming conventions of the Win32 MFC libraries
	included with Visual C++ 32-bit Edition, versions 4.0:
	
	  {N|U} AFXCW [D]
	
	  {N|U}     = ANSI (N) or Unicode (U)
	  [D]       = Debugging and possibly CodeView information
	
	Although the libraries necessary for building the sample programs are provided,
	additional variants must be built if required. This process is explained in the
	README.TXT file contained by default in the ...\MFC\SRC directory.
	
	In addition to the library variants above, Visual C++ contains DLL versions of
	the MFC classes. These are explained in MFC Technote #33.
	
	The following command lines build a medium model 16-bit Windows-based
	application:
	
	Debug:
	
	  cl /c /GA /GEs /Zp /Od /Zi /AM /D_DEBUG hello.cpp
	  rc /r hello.rc
	  link /NOD /ALIGN:16 /CO hello,,,mafxcwd mlibcew libw,hello.def
	  rc hello.res
	
	Release:
	
	  cl /c /GA /GEs /Zp /AM hello.cpp
	  rc /r hello.rc
	  link /NOD /ALIGN:16 hello,,,mafxcw mlibcew libw,hello.def
	  rc hello.res
	
	The /NOD link option is recommended to prevent accidentally linking with an
	MS-DOS version of the C run-time library.
	
	The following command lines build a Win32-based application:
	
	Debug:
	
	  cl /c /Od /Zi /D_DEBUG /D_X86_ /D_WINDOWS hello.cpp
	  rc /r hello.rc
	  link hello.obj hello.res nafxcwd.lib gdi32.lib shell32.lib advapi32.lib
	  comdlg32.lib
	
	Release:
	
	  cl /c /D_X86_ /D_WINDOWS hello.cpp
	  rc /r hello.rc
	  link hello.obj hello.res nafxcw.lib gdi32.lib shell32.lib advapi32.lib
	  comdlg32.lib
	
	In Visual C++ 4.0, _X86_ has been replace by _M_IX86. More importantly, with MFC
	version 3.0 and later (Visual C++ 2.0 and later), it is no longer necessary to
	manually specify the version of the MFC library. Instead, the included MFC
	header files automatically determine the correct version of the MFC library. For
	more information, see the "Library Versions" topic of "Programming with MFC:
	Encyclopedia" in the Visual C++ 4.0 Books Online.
	
	The MFC libraries should be specified as the first library on your link line for
	all applications.
	
	Notice that if you link with a debug variant of an MFC library ("D" suffix), you
	must also define _DEBUG during compilation. For more information on this
	subject, query on the following words in the Microsoft Knowledge Base:
	
	  mfc and safxcrd and _debug and libraries
	
	Although the compile and link lines must be modified appropriately for MS-
	DOS-based or Win32-based console applications, the same guidelines apply. The
	Resource Compiler can be used with console applications, but doesn't have to be.
	Also, _CONSOLE must be defined instead of _WINDOWS (This is not necessary with
	Visual C++ 4.0.) With MS-DOS programs, the Resource Compiler is not used, and
	_DOS must be defined instead of _WINDOWS.
	
	In the Windows example above, the compiler option /GA defines the constant
	_WINDOWS; however, if other compiler options are used, _WINDOWS may need to be
	defined in your code. (Including the file AFXWIN.H in your application will
	cause _WINDOWS to be defined.)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,7.0
	Issue type        : kbinfo
	
	=============================================================================
	
