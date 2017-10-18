---
layout: page
title: "Q128895: PRB: LNK2001 Link Error on Floating Division Functions"
permalink: kb/128/Q128895/
---

## Q128895: PRB: LNK2001 Link Error on Floating Division Functions

	Article: Q128895
	Product(s): Microsoft C Compiler
	Version(s): 2.10
	Operating System(s): 
	Keyword(s): kbCRT kbVC kbprb
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a program containing floating point divisions and linking with
	run-time libraries other than those supplied with Microsoft Visual C++ version
	2.1 can result in LNK2001 unresolved external errors on the following
	functions:
	
	  __adj_fdiv_m32
	  __adj_fdiv_m64
	  __adj_fdivr_m64
	  __adjust_fdiv
	
	This can occur when linking to libraries such as CRTDLL.LIB or the run-time
	libraries that came with Microsoft Visual C++ version 2.0.
	
	CAUSE
	=====
	
	The compiler and libraries that ship with Microsoft Visual C++ version 2.1
	provide a method of avoiding Pentium division instructions. Pentium division
	instructions can generate inaccurate results in some cases. The compiler inserts
	calls to emulation functions instead of inserting floating point processor
	instructions. These floating point division emulation functions are in the
	run-time libraries shipped with version Visual C++ version 2.1, but not with
	earlier versions of the libraries.
	
	RESOLUTION
	==========
	
	The libraries and compiler that come with Microsoft Visual C++ version 2.1 are
	designed to work together. If other libraries must be used, use the following
	compiler switch to force insertion of floating point processor instructions
	instead of inserting calls to the emulation functions:
	
	  /QIfdiv-          {use coprocessor instead of calls to functions}
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The sample code below will generate the following four errors if the LIB
	environment variable is pointing to the Visual C++ version 2.0 libraries:
	
	  error LNK2001: unresolved external symbol "__adj_fdiv_m32"
	  error LNK2001: unresolved external symbol "__adj_fdiv_m64"
	  error LNK2001: unresolved external symbol "__adj_fdivr_m64"
	  error LNK2001: unresolved external symbol "__adjust_fdiv"
	
	Using the compile option "/QIfdiv-" will prevent the references to these
	functions.
	
	For information about a related issue on Pentium floating point functions, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q128148 Procedure Entry Point fdiv Not Located in MSVCRT20.DLL
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	     Environment needed    : set LIB point to a directory with the VC++
	                             2.0 libraries
	  */ 
	
	  void main(void) {
	     double x=1.2,z;
	     float y=2.1;
	     z=x/y;
	     x=x/z;
	     x=1/z;
	  }
	
	Additional query words: 2.10 2.00 2.55 9.10
	
	======================================================================
	Keywords          : kbCRT kbVC kbprb 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 2.10
	Issue type        : kbprb
	
	=============================================================================
	
