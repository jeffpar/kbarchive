---
layout: page
title: "Q38201: PRB: L1102 Error from Corrupted Library, List Filename Error"
permalink: /kb/038/Q38201/
---

## Q38201: PRB: L1102 Error from Corrupted Library, List Filename Error

	Article: Q38201
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.x,4.x,5.x; OS/2:5.x
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 4.x, 5.x 
	- Microsoft LINK for OS/2, version 5.x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link an application fails and Microsoft LINK generates the
	following message:
	
	  L1102: unexpected end-of-file
	
	CAUSE
	=====
	
	This error occurs when the linker attempts to use a corrupted or null library to
	resolve external symbols. The library was probably corrupted at the library
	creation stage in Setup.
	
	The L1102 error can also occur if you type the name of a library used to build
	the application at the "list file" prompt, as follows:
	
	  Run File  [SPUD.EXE]: main.exe
	  List File [NUL.MAP]: libname.lib (generates faulty library)
	  Libraries [.LIB]: libname.lib
	  Definition File [NUL.DEF]: main.def
	
	This process creates a map listing with the specified library name in the current
	working directory. Because LINK searches the current working directory before
	the directories specified in the LIB environment variable, the L1102 error
	occurs when LINK searches the listing file instead of the library.
	
	RESOLUTION
	==========
	
	Check the LIB directory for small or zero-sized libraries. Use Setup to rebuild
	libraries as necessary.
	
	Additional query words: 3.61 3.64 3.65 3.69 4.06 4.07 4.10 5.01.20 5.01.21 5.02 5.03 5.05 5.10 5.11 5.13 5.15 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK4xDOSSearch kbLINK5xDOSSearch
	Version           : MS-DOS:3.x,4.x,5.x; OS/2:5.x
	
	=============================================================================
	
