---
layout: page
title: "Q101803: PRB: .CPP Extension w/ Library Construction Kit Causes Errors"
permalink: /kb/101/Q101803/
---

## Q101803: PRB: .CPP Extension w/ Library Construction Kit Causes Errors

	Article: Q101803
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.5,2.5a; WINDOWS:2.5,2.5a,3.0; :2.5,2.5a
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro Library Construction Kit for MS-DOS, versions 2.5, 2.5a 
	- Microsoft FoxPro for MS-DOS, versions 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Visual C++, the .CPP extension can cause errors when it is used to
	create a .PLB or .FLL file with the FoxPro 2.5 Library Construction Kit (LCK).
	
	For example, using the .CPP extension to create a .FLL file (FoxPro for Windows
	library) can cause the error "<path>\PROAPIML.LIB
	(c:\dosdev\source\winapi16.c) : error L2029: '_FoxTable' : unresolved external",
	where <path> is the path to PROAPIML.LIB.
	
	RESOLUTION
	==========
	
	To avoid the error, do one of the following:
	
	- Rename the program to have a .C extension.
	
	-or-
	
	- Declare FoxTable as external, as follows:
	
	
	        extern "C" FoxTable _FoxTable =
	        {
	           (FoxTable FAR *) 0, sizeof(myFoxInfo) / 
	              sizeof(FoxInfo), myFoxInfo
	        };
	
	
	Additional query words: VFoxWin FoxDos FoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbFoxProLibCK250DOS kbVFP300
	Version           : MS-DOS:2.5,2.5a; WINDOWS:2.5,2.5a,3.0; :2.5,2.5a
	
	=============================================================================
	
