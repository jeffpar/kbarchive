---
layout: page
title: "Q234622: PRB: VC++ 6.0 Setup Does Not Copy the CRT Make Files"
permalink: kb/234/Q234622/
---

## Q234622: PRB: VC++ 6.0 Setup Does Not Copy the CRT Make Files

	Article: Q234622
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbsetup kbCRT kbVC600
	Last Modified: 02-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to build the Visual C++ 6.0 CRT Libraries, the build fails
	immediately with an error similar to the following:
	
	  NMAKE : fatal error U1073: don't know how to make 'st'
	
	-or-
	
	  NMAKE : fatal error U1064: MAKEFILE not found and no target specified
	
	CAUSE
	=====
	
	After selecting the option to copy the C-Runtime (CRT) source code selected
	during Visual C++ 6.0 installation, the setup program does not copy the
	following files that are necessary to build the CRT Libraries:
	
	  MAKEFILE
	  MAKEFILE.SUB
	  MAKEFILE.INC
	
	RESOLUTION
	==========
	
	The missing files are available on Disk 1 of the Visual C++ CD in the
	VC98\CRT\SRC directory.
	
	MORE INFORMATION
	================
	
	The Makefile contains all the necessary information about which switches are to
	be used when rebuilding the CRT libraries.
	
	The CRT source is provided primarily for debugging purposes. Microsoft does not
	recommend rebuilding the CRT libraries and may not be able to provide support
	for problems encountered when using rebuilt CRT libraries.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbCRT kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
