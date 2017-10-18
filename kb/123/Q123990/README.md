---
layout: page
title: "Q123990: PRB: DX1410 Error Using NMAKE with MASM 6.11"
permalink: kb/123/Q123990/
---

## Q123990: PRB: DX1410 Error Using NMAKE with MASM 6.11

	Article: Q123990
	Product(s): Microsoft Macro Assembler
	Version(s): 6.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using NMAKE to build a project that invokes MASM version 6.11 produces this
	error:
	
	  DOSXNT : fatal error DX1410: cannot load program : entry point not found in
	  DLL
	
	CAUSE
	=====
	
	The DX1410 error occurs because the version of the DOS extender (DOSXNT.EXE)
	loaded by NMAKE is not compatible with MASM version 6.11. If there is more than
	one DOS extender on the system, the one used is the one found first when
	searching the current directory, then the path.
	
	RESOLUTION
	==========
	
	Ensure that the most recent version of the DOS extender gets loaded. Using the
	real mode version of NMAKE, NMAKER, will also alleviate the DX1410 error.
	However, NMAKER will cause an increase in build times as the DOS extender is
	loaded each time the compiler and assembler is invoked.
	
	MORE INFORMATION
	================
	
	The following information is taken from the MASM version 6.11 README.TXT file:
	
	Visual C++ 1.0/Fortran PowerStation 1.0 Compatibility
	-----------------------------------------------------
	
	There are specific steps you must take to use MASM version 6.11 with Microsoft
	Visual C++ version 1.0 or Microsoft Fortran PowerStation version 1.0. If you
	want to do mixed language programming with these products, follow these
	recommendations:
	
	- Install Visual C++/Fortran PowerStation and MASM version 6.11 in separate
	  subdirectories.
	
	- Place \MSVC\BIN or \F32\BIN (your Visual C++ or Fortran PowerStation
	  subdirectory) in front of \MASM611\BIN (your MASM version 6.11 subdirectory)
	  on the PATH.
	
	- Use NMAKE.EXE from MASM version 6.11. You can do this using various methods,
	  such as moving or renaming NMAKE.EXE installed in \MSVC or \F32 thus causing
	  the system to continue searching your path and use the NMAKE.EXE in \MASM611.
	
	Optionally, for MASM version 6.11/Visual C++ mixed programming, you can use
	NMAKER.EXE, which comes with both products.
	
	Additional query words: 6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM611
	Version           : :6.11
	
	=============================================================================
	
