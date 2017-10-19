---
layout: page
title: "Q28173: C Run-time Library History and Naming Conventions"
permalink: /kb/028/Q28173/
---

## Q28173: C Run-time Library History and Naming Conventions

	Article: Q28173
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This articles describes the naming conventions used by the C Run-time libraries
	included with the products listed above.
	
	The standard 16-bit CRT libraries are named using the following convention:
	xLIBCy?.LIB, where:
	
	  "x" represents the memory model option. The different memory model options
	  are "S" for the small memory model (the default), "M" for the medium memory
	  model, "C" for the compact memory model, and "L" for the large memory model.
	
	  "y" represents the math library option. The different math library options are
	  "E" for the emulator model (the default), "7" for the coprocessor model, and
	  "A" for the alternate model.
	
	  "?" represents an operating mode. The operating modes are "R" for real mode,
	  "P" for protected mode, and "W" for Microsoft Windows mode. When this
	  position is empty, the library is a default mode library.
	
	The 32-bit CRT libraries are LIBC.LIB, LIBCMT.LIB, and MSVCRT.LIB.
	
	MORE INFORMATION
	================
	
	16-bit Library Specifics
	------------------------
	
	The 16-bit Microsoft CRT libraries support 4 memory models:
	
	- Small. There is one data segment and one code segment. This is the default
	  memory model.
	
	- Medium. There is one data segment and multiple code segments.
	
	- Compact. There are multiple data segments and one code segment.
	
	- Large. There are multiple data segments and multiple code segments.
	
	The memory model is specified with the compiler options /AS, /AM, /AC, and /AL,
	respectively.
	
	The 16-bit Microsoft CRT libraries support 3 floating point options:
	
	- Floating point emulation. This library uses an Intel math coprocessor if one
	  is present in the system and emulates a coprocessor otherwise. This is the
	  default.
	
	- Coprocessor math. An Intel math coprocessor must be present in the system.
	  This model has a speed advantage over the emulation model because the code is
	  not required to test for the presence of a coprocessor chip. The disadvantage
	  of the model is that the coprocessor chip is required.
	
	- Alternate math. This library performs an alternate math coprocessor
	  emulation. This library does not use a math coprocessor chip, even if one is
	  available in the system.
	
	The floating point option is specified with the compiler options /FPi, /FPi87,
	and /FPa, respectively.
	
	Library Search Records
	----------------------
	
	In an effort to ease the linking process for the user, the compiler puts a search
	record into the object (.OBJ) file that tells the linker what libraries are
	required to link the application. The search record lists only the standard
	libraries. Other libraries, like GRAPHICS.LIB, are not included.
	
	When the search record is present, the user is not required to explicitly list
	libraries on the linker command line unless additional libraries are required or
	if the /NOD switch is specified on the linker command line. (/NOD instructs the
	linker to ignore the search record in the .OBJ file.) You can prevent the
	compiler from placing a search record into the .OBJ file by specifying the /Zl
	compiler option switch.
	
	By default, SLIBCE.LIB is used. This is because small memory model, emulator
	math, and no specified operating mode are the defaults.
	
	The compiler option switches /Lr, /Lp, /Ld, and /Lw direct the compiler to
	generate other library names in the library search record. For example the
	compiler command line:
	
	  cl /Lr test.c
	
	generates a library search record for SLIBCER.LIB in the object file.
	
	C versions 6.x
	--------------
	
	The CRT libraries provided are:
	
	  xLIBCy?.LIB  - Standard CRT libraries. Described under Summary.
	
	  API.LIB      - FAPI (Family Application Programming Interface)
	                 routines. Applications that use only FAPI functions
	                 can run with either MS-DOS or OS/2.
	
	  CDLLOBJS.LIB - OS/2 dynamic-link library (DLL) run-time library
	                 objects
	
	  CDLLSUPP.LIB - OS/2 DLL support
	
	  CRTCOM.LIB   - Tiny memory model library (Used to generate COM
	                 files)
	
	  EXTSUP.LIB   - Programmer's WorkBench (PWB) library (Used to build
	                 applications that extend PWB)
	
	  GRAPHICS.LIB - MS-DOS text mode graphics support
	
	  GRTEXTP.LIB  - OS/2 text mode graphics support
	
	  LLIBCDLL.LIB - OS/2 DLL support
	
	  LLIBCMT.LIB  - OS/2 multi-threaded DLL support
	
	  OS2.LIB      - OS/2 system calls library
	
	  PGCHART.LIB  - Presentation graphics support
	
	C/C++ versions 7.0 and 7.0a
	---------------------------
	
	The C/C++ version 7.0 CRT adds support for the Microsoft Windows operating system
	and removes support for OS/2. The CRT libraries provided are:
	
	  xLIBCy?.LIB  - Standard CRT libraries. Described under Summary.
	
	  CRTCOM.LIB   - Tiny memory model library (Used to generate COM
	                 files)
	
	  GRAPHICS.LIB - MS-DOS text mode graphics support
	
	  MOVETR.LIB   - Microsoft Overlaid Virtual Environment (MOVE)
	                 library with TRACE.EXE support
	
	  PGCHART.LIB  - Presentation graphics support
	
	  xDLLCyW.LIB  - DLL library for Windows environment
	
	  xLIBCyWQ.LIB - QuickWin application library
	
	  xNOCRTDW.LIB - DLL initialization code library
	
	  xNOCRTW.LIB  - Application initialization code for the Windows
	                 environment
	
	Visual C++ for Windows, versions 1.0 and 1.5x
	---------------------------------------------
	
	The CRT libraries in Visual C++ for Windows are identical to the libraries
	included in C/C++ version 7.0.
	
	Visual C++ 32-bit Edition, version 1.0
	--------------------------------------
	
	The CRT libraries provided are:
	
	  LIBC.LIB     - Single-threaded C run-time library support
	
	  LIBCMT.LIB   - Multi-threaded C run-time library support
	
	  MSVCRT.LIB   - Import library for the multi-threaded CRT in a DLL.
	                 To run code linked with this library, the DLL
	                 MSVCRT10.DLL must be available at run time.
	
	Visual C++ 32-bit Edition, versions 2.x and 4.0
	-----------------------------------------------
	
	The CRT libraries provided are identical to those provided in Visual C++ 32- bit
	Edition 1.0. However, the import library MSVCRT.LIB now refers to the DLL
	MSVCRT20.DLL for Visual C++ 2.x and either MSVRCT40.DLL or MSVCR40D.DLL for
	Visual C++ 4.0. MSVCR40D.DLL is a debug version of the DLL for Windows NT and
	Windows 95 (Win32). In addition, with Visual C++ 2.1 and above, there are two
	versions of MSVCRTx0.DLL: one that targets Win32 and the other that targets
	Win32s.
	
	REFERENCES
	==========
	
	For information on the naming convention of the Microsoft Foundation Classes
	(MFC) libraries, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q88113 Compile and Link Requirements for MFC Applications
	
	and MFC Technical Note 33.
	
	Additional query words: 1.00 1.50 1.51 1.52 2.00 2.10 4.00 6.00 6.00a 6.00ax 7.00 kbinf
	
	======================================================================
	Keywords          : kbCRT kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:1.0,2.0,2.1,4.0
	
	=============================================================================
	
