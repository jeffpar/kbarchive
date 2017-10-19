---
layout: page
title: "Q108293: DOC: LIBRARY Statement Documented Incorrectly"
permalink: /kb/108/Q108293/
---

## Q108293: DOC: LIBRARY Statement Documented Incorrectly

	Article: Q108293
	Product(s): Microsoft Programming Utilities
	Version(s): 1.0,1.5
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, on platform(s):
	   - the operating system: Microsoft Windows NT, on platform(s):
	      - the operating system: Microsoft Windows 
	- *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation in the "Command-Line Utilities User's Guide" (hard copy and
	online) may be misleading with regard to the function of the LIBRARY statement
	in a module definition file (.DEF file). The documentation indicates that the
	name specified after the LIBRARY statement in a .DEF file will be used as the
	base name of the file that is written to disk as a result of the build process.
	This is not true.
	
	The Visual C++ 2.0 documentation has the correct information for the LIBRARY
	statement.
	
	MORE INFORMATION
	================
	
	The LIBRARY Statement only affects the module name of the dynamic-link library
	(DLL) being built. The Windows concept of a "module" applies to either an
	application (executable program) or a library. Both serve very different
	purposes, yet applications and libraries are both types of modules.
	
	The effect of the LIBRARY statement on a build is most easily shown by examining
	the header information of the module created by running EXEHDR.EXE, giving the
	module name as the input file. Pay particular attention to the "Library:" and
	"Description:" fields, in the case of a DLL, and the "Module:" and
	"Description:" fields, in the case of an executable.
	
	To see where the module name is actually used, run a utility such as
	HEAPWALKER.EXE. The information in the "Owner:" field is the module name of the
	module associated with each entry.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbVCsearch kbAudDeveloper
	Version           : :1.0,1.5
	
	=============================================================================
	
